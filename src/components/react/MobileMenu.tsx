import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="fullscreen-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999, // Super high z-index
            backgroundColor: '#050505',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header row */}
          <div style={{
            height: 64,
            paddingLeft: 24,
            paddingRight: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #1a2333',
          }}>
            <a href="/" style={{
              fontSize: 20,
              fontWeight: 700,
              fontFamily: 'monospace',
              color: '#2dd4bf',
              textDecoration: 'none',
            }}>
              <span style={{ color: '#f472b6' }}>~</span>/rwbu_
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ color: '#e2e8f0', padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Close Menu"
            >
              <XMarkIcon style={{ width: 24, height: 24 }} />
            </button>
          </div>

          {/* Navigation links */}
          <nav style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 40,
            paddingRight: 40,
            gap: 8,
          }}>
            {navLinks.map((link, i) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  style={{
                    padding: '12px 0',
                    fontSize: 24,
                    fontWeight: 500,
                    color: isActive ? '#2dd4bf' : '#e2e8f0',
                    textDecoration: 'none',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span style={{ fontFamily: 'monospace', color: '#f472b6', marginRight: 12, fontSize: 18 }}>{'>'}</span>
                  {link.name}
                </motion.a>
              );
            })}
          </nav>

          {/* Footer */}
          <div style={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 24,
            paddingBottom: 24,
            borderTop: '1px solid #1a2333',
          }}>
            <p style={{ fontSize: 12, fontFamily: 'monospace', color: '#475569', margin: 0 }}>© 2025 RWBU. All rights reserved.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ color: '#e2e8f0', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
        aria-label="Open Menu"
      >
        <Bars3Icon style={{ width: 24, height: 24 }} />
      </button>

      {/* Render the menu in a React Portal if we are on the client */}
      {mounted && typeof document !== 'undefined' 
        ? createPortal(menuContent, document.body)
        : null}
    </>
  );
}
