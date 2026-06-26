import React, { useState } from 'react';
import Terminal from './Terminal';
import JSPlayground from './JSPlayground';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlaygroundTabs() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'js'>('terminal');

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('terminal')}
          className={`px-4 py-2 font-mono text-sm border-b-2 transition-colors ${
            activeTab === 'terminal' 
              ? 'border-tosca text-tosca' 
              : 'border-transparent text-text-muted hover:text-text-main'
          }`}
        >
          CLI_Terminal
        </button>
        <button
          onClick={() => setActiveTab('js')}
          className={`px-4 py-2 font-mono text-sm border-b-2 transition-colors ${
            activeTab === 'js' 
              ? 'border-tosca text-tosca' 
              : 'border-transparent text-text-muted hover:text-text-main'
          }`}
        >
          JS_Sandbox
        </button>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' ? (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Terminal />
            </motion.div>
          ) : (
            <motion.div
              key="js"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <JSPlayground />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
