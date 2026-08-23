import React, { useState } from 'react';
import Terminal from './Terminal';
import JSPlayground from './JSPlayground';

export default function PlaygroundTabs() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'js'>('terminal');

  return (
    <div className="w-full">
      <div className="flex gap-6 mb-6 border-b retro-border">
        <button
          onClick={() => setActiveTab('terminal')}
          className={`px-4 py-2 font-mono text-sm border-b-2 transition-colors ${
            activeTab === 'terminal' 
              ? 'border-pink text-pink' 
              : 'border-transparent text-text-muted hover:text-pink'
          }`}
        >
          CLI Terminal
        </button>
        <button
          onClick={() => setActiveTab('js')}
          className={`px-4 py-2 font-mono text-sm border-b-2 transition-colors ${
            activeTab === 'js' 
              ? 'border-pink text-pink' 
              : 'border-transparent text-text-muted hover:text-pink'
          }`}
        >
          JS Sandbox
        </button>
      </div>

      <div className="relative">
        {activeTab === 'terminal' ? (
          <div>
            <Terminal />
          </div>
        ) : (
          <div>
            <JSPlayground />
          </div>
        )}
      </div>
    </div>
  );
}
