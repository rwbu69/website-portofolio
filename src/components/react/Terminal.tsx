import React, { useState, useRef, useEffect } from 'react';
import { identity, experience, socials, skillsGrouped } from '../../data/profile';
import { projects, tools } from '../../data/projects';

interface CommandOutput {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'warning';
  text: string | React.ReactNode;
}

export default function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([
    { id: '1', type: 'output', text: `Welcome to ${identity.alias} Terminal [Version 1.0.0]` },
    { id: '2', type: 'output', text: 'Type "help" for a list of available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const newHistory: CommandOutput[] = [
      ...history,
      { id: Date.now().toString() + 'i', type: 'input', text: `> ${trimmedCmd}` }
    ];

    const args = trimmedCmd.split(' ');
    const command = args[0].toLowerCase();

    let outputText: string | React.ReactNode = '';
    let outputType: CommandOutput['type'] = 'output';

    switch (command) {
      case 'help':
        outputText = 'Available commands: help, whoami, about, experience, skills, projects, social, contact, clear, sudo';
        break;
      case 'whoami':
        outputText = `${identity.fullName}\nAlias: ${identity.alias}\nRole: ${identity.role}`;
        break;
      case 'about':
        outputText = identity.bioLong;
        break;
      case 'experience':
        outputText = experience.map(exp => 
          `- ${exp.role} @ ${exp.company} (${exp.location})\n  Duration: ${exp.duration}`
        ).join('\n\n');
        break;
      case 'skills':
        outputText = skillsGrouped.map(group => 
          `[${group.category}]\n  ${group.skills.join(', ')}`
        ).join('\n\n');
        break;
      case 'projects':
        const allProjects = [...projects, ...tools];
        outputText = (
          <div>
            {allProjects.map((p, i) => (
              <div key={i} className="mb-2">
                <span className="text-pink font-bold">{p.title}</span> <span className="text-xs">({p.status})</span>
                <br />
                <span className="text-text-muted">{p.type}</span>
              </div>
            ))}
            <div className="mt-2 text-pink">Navigate to /projects page to see more details.</div>
          </div>
        );
        outputType = 'success';
        break;
      case 'contact':
        outputText = 'Navigate to the /contact page to send a message.';
        break;
      case 'social':
        outputText = socials.map(s => `${s.name}: ${s.url}`).join('\n');
        break;
      case 'sudo':
        if (args[1] === 'hire-me') {
          outputText = 'Access granted. Initiating hire sequence... Please navigate to /contact';
          outputType = 'success';
        } else {
          outputText = 'sudo: permission denied';
          outputType = 'error';
        }
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        outputText = `Command not found: ${command}. Type "help" to see available commands.`;
        outputType = 'error';
    }

    setHistory([
      ...newHistory,
      { id: Date.now().toString() + 'o', type: outputType, text: outputText }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div 
      className="bg-white border retro-border font-mono text-sm h-[500px] flex flex-col overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-gray-100 px-4 py-2 border-b retro-border flex items-center justify-between">
        <div className="text-text-main font-bold text-xs uppercase tracking-widest">
          PORTFOLIO.EXE
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-300 border border-gray-400 flex items-center justify-center text-[8px]">_</div>
          <div className="w-3 h-3 bg-gray-300 border border-gray-400 flex items-center justify-center text-[8px]">□</div>
          <div className="w-3 h-3 bg-pink text-white border border-pink flex items-center justify-center text-[8px]">x</div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-grow p-4 overflow-y-auto custom-scrollbar">
        {history.map((item) => (
          <div 
            key={item.id} 
            className={`mb-2 whitespace-pre-wrap ${
              item.type === 'error' ? 'text-pink' :
              item.type === 'success' ? 'text-green' :
              item.type === 'warning' ? 'text-yellow' :
              item.type === 'input' ? 'text-text-main font-bold' :
              'text-text-muted'
            }`}
          >
            {item.text}
          </div>
        ))}
        
        {/* Input Line */}
        <div className="flex items-center text-text-main mt-4">
          <span className="text-pink font-bold mr-2">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent outline-none border-none caret-pink"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
