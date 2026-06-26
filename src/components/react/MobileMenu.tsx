import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  currentPath: string;
  navLinks: NavLink[];
}

export default function MobileMenu({ currentPath, navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="text-[#e2e8f0] hover:text-tosca transition-colors p-2"
        aria-label="Open Menu"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505]/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
        
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-[#0f172a] border-l border-[#1a2333] z-50 p-6 flex flex-col"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#e2e8f0] hover:text-pink transition-colors p-2"
                aria-label="Close Menu"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-medium transition-colors ${isActive ? 'text-tosca' : 'text-[#e2e8f0] hover:text-tosca'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-mono text-pink mr-2">{'>'}</span>
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
