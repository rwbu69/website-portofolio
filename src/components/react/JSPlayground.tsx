import React, { useState, useRef, useEffect } from 'react';

interface ConsoleLog {
  id: string;
  type: 'log' | 'error' | 'warn' | 'info';
  content: string;
}

export default function JSPlayground() {
  const [code, setCode] = useState<string>('// Type your JavaScript code here\nconsole.log("Hello, Playground!");\n\nconst add = (a, b) => a + b;\nconsole.log("Result:", add(5, 7));\n');
  const [logs, setLogs] = useState<ConsoleLog[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCode = () => {
    setLogs([]); // Clear previous logs
    
    // We capture the logs inside a safe environment
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn,
      info: console.info
    };

    const addLog = (type: ConsoleLog['type'], ...args: any[]) => {
      const parsedArgs = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');
      
      setLogs(prev => [...prev, { id: Date.now().toString() + Math.random(), type, content: parsedArgs }]);
    };

    // Override console for the execution scope
    const fakeConsole = {
      log: (...args: any[]) => addLog('log', ...args),
      error: (...args: any[]) => addLog('error', ...args),
      warn: (...args: any[]) => addLog('warn', ...args),
      info: (...args: any[]) => addLog('info', ...args)
    };

    try {
      // Create a restricted function scope.
      // We pass the fakeConsole so the code can use it.
      // Note: This is a simple sandbox, not 100% secure for completely untrusted arbitrary code in a production environment,
      // but fine for a personal portfolio playground.
      const executeFunction = new Function('console', `
        try {
          ${code}
        } catch (e) {
          console.error(e.toString());
        }
      `);

      executeFunction(fakeConsole);
    } catch (e: any) {
      addLog('error', e.toString());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Basic tab support
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newValue = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newValue);
      
      // We need a timeout to set cursor position after render
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[500px]">
      {/* Editor Panel */}
      <div className="flex-1 flex flex-col bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
          <span className="text-xs text-text-main font-bold uppercase tracking-widest font-sans">script.js</span>
          <button 
            onClick={executeCode}
            className="text-xs px-3 py-1 border border-gray-200 text-text-muted hover:border-pink hover:text-pink transition-colors rounded-sm font-medium"
          >
            Run Code
          </button>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow p-4 bg-transparent text-text-main font-mono text-sm resize-none outline-none custom-scrollbar"
          spellCheck="false"
        />
      </div>

      {/* Output Panel */}
      <div className="flex-1 flex flex-col bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
          <span className="text-xs text-text-main font-bold uppercase tracking-widest font-sans">Console Output</span>
          <button 
            onClick={() => setLogs([])}
            className="text-xs px-3 py-1 bg-transparent text-text-muted border border-gray-200 hover:border-pink hover:text-pink transition-colors rounded-sm font-medium"
          >
            Clear
          </button>
        </div>
        <div className="flex-grow p-4 overflow-y-auto font-mono text-sm custom-scrollbar bg-gray-50">
          {logs.length === 0 ? (
            <div className="text-text-muted italic opacity-50">No output to display</div>
          ) : (
            logs.map(log => (
              <div 
                key={log.id} 
                className={`mb-1 pb-1 border-b border-gray-200 whitespace-pre-wrap break-all ${
                  log.type === 'error' ? 'text-pink font-bold' :
                  log.type === 'warn' ? 'text-yellow font-bold' :
                  log.type === 'info' ? 'text-tosca' :
                  'text-text-main'
                }`}
              >
                <span className="text-xs text-text-muted mr-2">
                  {log.type === 'error' ? '✖' : '>'}
                </span>
                {log.content}
              </div>
            ))
          )}
          <div ref={logsEndRef} />
        </div>
      </div>
    </div>
  );
}
