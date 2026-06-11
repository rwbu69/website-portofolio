import { type KeyboardEvent, type ChangeEvent, useEffect, useRef, useState } from 'react';
import { getTerminalData } from '../data/terminalData';

const validCommands = [...Object.keys(getTerminalData('en'))];

interface TerminalInputProps {
  onCommand: (cmd: string) => void;
  isAnimating: boolean;
  history: string[];
  historyIndex: number;
  setHistoryIndex: (index: number) => void;
}

export default function TerminalInput({
  onCommand,
  isAnimating,
  history,
  historyIndex,
  setHistoryIndex,
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!isAnimating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAnimating]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Prediksi command
  let prediction = '';
  let predictedSuffix = '';
  if (inputValue.length > 0) {
    const match = validCommands.find(cmd => cmd.startsWith(inputValue.toLowerCase()));
    if (match) {
      prediction = match;
      predictedSuffix = match.slice(inputValue.length);
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isAnimating) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      if (prediction) {
        setInputValue(prediction);
      }
    } else if (e.key === 'Enter') {
      const command = inputValue.trim().toLowerCase();
      onCommand(command);
      setInputValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(history[newIndex]);
      } else {
        setHistoryIndex(history.length);
        setInputValue('');
      }
    }
  };

  const currentCmd = inputValue.trim().toLowerCase();
  let colorClass = 'text-slate-200';
  if (currentCmd.length > 0) {
    if (validCommands.includes(currentCmd)) {
      colorClass = 'text-[#82C8C5] text-glow-tosca';
    } else {
      colorClass = 'text-[#E39494] text-glow-pink';
    }
  }

  return (
    <div className={`flex items-center mt-2 ${isAnimating ? 'hidden' : ''}`}>
      <div className="flex items-center mr-2 font-bold whitespace-nowrap text-[0.85rem] select-none">
        <span className="bg-tosca text-slate-950 px-2 py-[2px] rounded-sm">rwbu</span>
        <span className="text-slate-500 mx-1">/</span>
        <span className="bg-slate-800 text-slate-300 px-2 py-[2px] rounded-sm">portfolio</span>
        <span className="text-pink ml-2 text-base">❯</span>
      </div>
      <div className="relative flex-grow flex items-center h-full">
        <input
          ref={inputRef}
          type="text"
          id="command-input"
          className={`bg-transparent p-0 m-0 border-none font-inherit w-full outline-none z-10 relative ${colorClass}`}
          autoComplete="off"
          spellCheck="false"
          autoFocus
          readOnly={isAnimating}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {predictedSuffix && (
          <div className="absolute inset-0 pointer-events-none flex items-center font-inherit z-0 whitespace-pre">
            <span className="opacity-0">{inputValue}</span>
            <span className="text-slate-600">{predictedSuffix}</span>
          </div>
        )}
      </div>
    </div>
  );
}
