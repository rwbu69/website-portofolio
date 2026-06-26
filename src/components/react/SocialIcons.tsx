import React from 'react';
import { motion } from 'framer-motion';
import { socials } from '../../data/profile';

export const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {socials.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-3 border border-[#1a2333] rounded-sm bg-[#0f172a] text-text-muted hover:border-tosca hover:text-tosca transition-colors group"
          aria-label={social.name}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={social.iconPath}></path>
          </svg>
        </motion.a>
      ))}
    </div>
  );
};

export const MinimalSocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-tosca transition-colors"
          aria-label={social.name}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={social.iconPath}></path>
          </svg>
        </a>
      ))}
    </div>
  );
};
