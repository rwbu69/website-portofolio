import React from 'react';
import { socials } from '../../data/profile';

export const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-gray-300 bg-white text-text-muted hover:border-pink hover:text-pink transition-colors group"
          aria-label={social.name}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={social.iconPath}></path>
          </svg>
        </a>
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
          className="text-text-muted hover:text-pink transition-colors"
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
