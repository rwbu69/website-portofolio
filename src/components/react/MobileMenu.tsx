import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  const menuContent = isOpen ? (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header row */}
      <div style={{
        height: 48,
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d1d5db',
      }}>
        <a href="/" style={{
          fontSize: 18,
          fontWeight: 700,
          fontFamily: 'monospace',
          color: '#111827',
          textDecoration: 'none',
        }}>
          <span style={{ color: '#E39494' }}>~</span>/rwbu_
        </a>
        <button 
          onClick={() => setIsOpen(false)}
          style={{ color: '#111827', padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
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
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingLeft: 40,
        paddingRight: 40,
        gap: 16,
      }}>
        {navLinks.map((link, i) => {
          const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
          return (
            <a
              key={link.name}
              href={link.href}
              style={{
                padding: '8px 0',
                fontSize: 20,
                fontWeight: 500,
                fontFamily: 'monospace',
                color: isActive ? '#E39494' : '#111827',
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid #E39494' : 'none',
                display: 'inline-block',
                width: 'fit-content'
              }}
              onClick={() => setIsOpen(false)}
            >
              <span style={{ color: '#E39494', marginRight: 12, fontSize: 16 }}>{'>'}</span>
              {link.name}
            </a>
          );
        })}
      </nav>
    </div>
  ) : null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ color: '#111827', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
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
