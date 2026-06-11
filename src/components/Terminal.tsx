import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import TerminalHeader from './TerminalHeader';
import TerminalInput from './TerminalInput';
import GuiPortfolio from './GuiPortfolio';
import { getSystemData, getTerminalData, type Language } from '../data/terminalData';

// Komponen helper untuk merender blok output secara line-by-line
function TypewriterBlock({ 
  content, 
  onComplete, 
  speed = 30 
}: { 
  content: string; 
  onComplete: () => void;
  speed?: number;
}) {
  const [displayedContent, setDisplayedContent] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const lines = content.split('\n');
  
  useEffect(() => {
    let currentLine = 0;
    
    const typeLine = () => {
      if (currentLine < lines.length) {
        setDisplayedContent(prev => prev + (prev ? '\n' : '') + lines[currentLine]);
        currentLine++;
        setTimeout(typeLine, speed);
      } else {
        setIsTyping(false);
        onComplete();
      }
    };
    
    typeLine();
  }, [content, onComplete, speed, lines.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`mb-4 whitespace-pre-wrap ${isTyping ? 'typing-cursor' : ''}`} dangerouslySetInnerHTML={{ __html: displayedContent }} />
  );
}

export default function Terminal() {
  const [isGuiMode, setIsGuiMode] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [isBooting, setIsBooting] = useState(true);
  const [bootIndex, setBootIndex] = useState(-1);
  const [bootLines, setBootLines] = useState<string[]>([]);
  
  const [outputs, setOutputs] = useState<Array<{ id: number; type: 'prompt' | 'response' | 'welcome'; content: string }>>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      if (navigator.language.startsWith('id')) {
        setLang('id');
      } else {
        setLang('en');
      }
    }
  }, []);

  const { bootSequence, welcomeMessage } = getSystemData(lang);

  // Auto scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [bootLines, outputs, isAnimating]);

  // Window Open Animation using AnimeJS
  useEffect(() => {
    if (terminalRef.current) {
      anime({
        targets: terminalRef.current,
        opacity: [0, 1],
        scale: [0.95, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuart',
        complete: () => {
          // Start boot sequence after window opens
          setBootIndex(0);
        }
      });
    }
  }, []);

  // Boot Sequence Logic
  useEffect(() => {
    if (bootIndex >= 0 && bootIndex < bootSequence.length) {
      const delay = Math.random() * 300 + 100;
      const timer = setTimeout(() => {
        setBootLines(prev => [...prev, bootSequence[bootIndex]]);
        setBootIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else if (bootIndex === bootSequence.length) {
      const timer = setTimeout(() => {
        setIsBooting(false);
        setOutputs([{ id: Date.now(), type: 'welcome', content: welcomeMessage }]);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [bootIndex]);

  const handleCommand = (cmd: string) => {
    if (cmd === '') {
      setOutputs(prev => [...prev, { 
        id: Date.now(), 
        type: 'prompt', 
        content: `<div class="flex items-center font-bold whitespace-nowrap text-[0.85rem] select-none">
        <span class="bg-tosca text-slate-950 px-2 py-[2px] rounded-sm">rwbu</span>
        <span class="text-slate-500 mx-1">/</span>
        <span class="bg-slate-800 text-slate-300 px-2 py-[2px] rounded-sm">portfolio</span>
        <span class="text-pink ml-2 text-base">❯</span>
      </div>` 
      }]);
      return;
    }

    const newHistory = [...history, cmd];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length);
    
    setIsAnimating(true);
    
    const promptHtml = `<div class="flex items-center font-bold whitespace-nowrap text-[0.85rem] select-none mb-1">
      <span class="bg-tosca text-slate-950 px-2 py-[2px] rounded-sm">rwbu</span>
      <span class="text-slate-500 mx-1">/</span>
      <span class="bg-slate-800 text-slate-300 px-2 py-[2px] rounded-sm">portfolio</span>
      <span class="text-pink ml-2 text-base mr-2">❯</span>
      <span class="text-slate-200 font-normal text-[0.9rem]">${cmd}</span>
    </div>`;
    
    if (cmd === 'clear') {
      setOutputs([]);
      setIsAnimating(false);
      return;
    }

    if (cmd === 'gui') {
      setIsAnimating(true);
      if (terminalRef.current) {
        document.body.style.transition = 'background-color 0.2s ease';
        document.body.style.backgroundColor = '#450a0a'; // flash red
        
        anime.timeline()
        .add({
          targets: terminalRef.current,
          translateX: [
            { value: -30, duration: 50 }, { value: 30, duration: 50 },
            { value: -40, duration: 50 }, { value: 40, duration: 50 },
            { value: -50, duration: 50 }, { value: 50, duration: 50 },
            { value: 0, duration: 50 }
          ],
          easing: 'easeInOutQuad'
        })
        .add({
          targets: terminalRef.current,
          scale: [1, 1.3],
          rotate: [0, 15],
          filter: ['blur(0px)', 'blur(10px)'],
          opacity: [1, 0.7],
          duration: 300,
          easing: 'easeInSine'
        }, '-=150')
        .add({
          targets: terminalRef.current,
          translateY: [0, 2000],
          rotate: [15, 60],
          opacity: [0.7, 0],
          duration: 600,
          easing: 'easeInElastic(1, .6)',
          complete: () => {
            document.body.style.backgroundColor = '';
            document.body.style.transition = '';
            setIsGuiMode(true);
            setIsAnimating(false);
          }
        });
      }
      return;
    }

    if (cmd === 'lang en') setLang('en');
    if (cmd === 'lang id') setLang('id');

    const newLang = cmd === 'lang en' ? 'en' : cmd === 'lang id' ? 'id' : lang;
    const currentTerminalData = getTerminalData(newLang);

    let response = currentTerminalData[cmd];
    if (!response) {
      response = newLang === 'id' 
        ? `rwbu: perintah tidak ditemukan: <span class="text-pink">${cmd}</span>. Ketik 'help' untuk daftar perintah.`
        : `rwbu: command not found: <span class="text-pink">${cmd}</span>. Type 'help' for a list of commands.`;
    }

    setOutputs(prev => [
      ...prev, 
      { id: Date.now(), type: 'prompt', content: promptHtml },
    ]);

    // Handle asynchronous blog commands
    if (cmd.startsWith('blog ls') || cmd.startsWith('blog read')) {
      const isRead = cmd.startsWith('blog read');
      const slug = isRead ? cmd.split(' ').slice(2).join(' ').trim() : null;
      
      if (isRead && !slug) {
        setOutputs(prev => [
          ...prev,
          { id: Date.now() + 1, type: 'response', content: newLang === 'id' ? 'Argumen &lt;slug&gt; diperlukan. Contoh: blog read hello-world' : 'Missing &lt;slug&gt; argument. Example: blog read hello-world' }
        ]);
        setIsAnimating(false);
        return;
      }

      setOutputs(prev => [
        ...prev,
        { id: Date.now() + 1, type: 'response', content: `<span class="text-yellow">[ INFO ]</span> Fetching data from server...` }
      ]);

      setTimeout(async () => {
        try {
          if (isRead) {
            const res = await fetch(`/api/blog/${slug}.json`);
            if (!res.ok) throw new Error('Not found');
            const data = await res.json();
            
            // Generate content
            const contentHtml = `
<div class="mb-4 mt-2">
  <div class="text-2xl font-bold text-tosca">${data.title}</div>
  <div class="text-slate-400 text-sm mb-4">Posted on: ${data.date}</div>
  <div class="prose prose-invert prose-p:text-slate-300 prose-headings:text-tosca prose-a:text-pink max-w-none">
    ${data.content}
  </div>
</div>`;
            setOutputs(prev => [...prev.slice(0, -1), { id: Date.now() + 2, type: 'response', content: contentHtml }]);
          } else {
            const res = await fetch('/api/blog/index.json');
            if (!res.ok) throw new Error('Not found');
            const data = await res.json();
            
            let listHtml = `[ <span class="text-tosca font-bold">${newLang === 'id' ? 'DAFTAR ARTIKEL SERVER' : 'SERVER ARTICLE LIST'}</span> ]\n\n`;
            if (data.length === 0) {
              listHtml += newLang === 'id' ? 'Tidak ada artikel log.' : 'No log articles found.';
            } else {
              data.forEach((post: any, index: number) => {
                listHtml += `${index + 1}. <span class="text-tosca font-bold">${post.title}</span> <span class="text-yellow">[ ${post.date} ]</span>\n`;
                listHtml += `   Slug: <span class="text-pink">blog read ${post.slug}</span>\n`;
                listHtml += `   ${post.description}\n\n`;
              });
            }
            setOutputs(prev => [...prev.slice(0, -1), { id: Date.now() + 2, type: 'response', content: listHtml }]);
          }
        } catch (e) {
          setOutputs(prev => [...prev.slice(0, -1), { id: Date.now() + 2, type: 'response', content: `<span class="text-pink">[ ERROR ]</span> ${newLang === 'id' ? 'Gagal memuat log. File mungkin tidak ada.' : 'Failed to fetch logs. File may not exist.'}` }]);
        }
      }, 300);
      return;
    }

    // Simulate network delay for regular commands
    setTimeout(() => {
      setOutputs(prev => [
        ...prev,
        { id: Date.now() + 1, type: 'response', content: response }
      ]);
    }, 150);
  };

  const handleTypingComplete = () => {
    setIsAnimating(false);
  };

  if (isGuiMode) {
    return <GuiPortfolio lang={lang} onClose={() => setIsGuiMode(false)} />;
  }

  return (
    <div 
      ref={terminalRef}
      className="w-[100vw] h-[100vh] md:w-[90vw] md:h-[90vh] bg-slate-950/70 backdrop-blur-xl flex flex-col shadow-2xl relative overflow-hidden md:rounded-xl md:border md:border-white/10 opacity-0"
      onClick={() => {
        if (!isAnimating) {
          document.getElementById('command-input')?.focus();
        }
      }}
    >
      <TerminalHeader />
      
      <div 
        ref={bodyRef}
        className="flex-grow p-6 overflow-y-auto text-[0.9rem] leading-relaxed scroll-smooth relative z-10"
      >
        {isBooting ? (
          <div>
            {bootLines.map((line, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </div>
        ) : (
          <div>
            {outputs.map((output, idx) => {
              if (output.type === 'prompt') {
                return <div key={output.id} className="mb-2" dangerouslySetInnerHTML={{ __html: output.content }} />;
              } else {
                // response or welcome
                const isLast = idx === outputs.length - 1;
                if (isLast && isAnimating) {
                  return (
                    <TypewriterBlock 
                      key={output.id} 
                      content={output.content} 
                      onComplete={handleTypingComplete}
                      speed={output.type === 'welcome' ? 100 : 30}
                    />
                  );
                } else {
                  return <div key={output.id} className="mb-4 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: output.content }} />;
                }
              }
            })}
            
            <TerminalInput 
              onCommand={handleCommand}
              isAnimating={isAnimating}
              history={history}
              historyIndex={historyIndex}
              setHistoryIndex={setHistoryIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
}
