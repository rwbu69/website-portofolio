import React from 'react';
import TechIcon from './TechIcon';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-5 bg-white border border-gray-200 hover:border-pink transition-colors group relative flex flex-col h-full rounded-sm shadow-sm hover:shadow-md">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold group-hover:text-pink transition-colors">
          {project.demoLink || project.repoLink ? (
            <a href={project.demoLink || project.repoLink || '#'} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-sm shrink-0 ml-2 ${
          project.status === 'completed' || project.status === 'live'
            ? 'text-green border border-green/20 bg-green/10' 
            : 'text-yellow border border-yellow/20 bg-yellow/10'
        }`}>
          {project.status.toUpperCase()}
        </span>
      </div>
      
      {(project.role || project.year) && (
        <div className="text-xs font-sans text-text-muted mb-4 pb-2 border-b border-gray-100">
          {project.role && <span>Role: {project.role}</span>}
          {project.role && project.year && <span className="mx-2">|</span>}
          {project.year && <span>Year: {project.year}</span>}
        </div>
      )}
      
      <p className="text-sm text-text-main mb-6 flex-grow leading-relaxed line-clamp-4">
        {project.description}
      </p>
      
      <div className="space-y-4 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.length > 0 ? project.tech.map(t => (
            <div key={t} className="flex items-center gap-1 text-xs text-text-muted bg-gray-50 px-2 py-1 border border-gray-200 rounded-sm" title={t}>
              <TechIcon tech={t} className="w-3 h-3" />
              <span>{t}</span>
            </div>
          )) : (
            <span className="text-xs text-text-muted opacity-50 bg-gray-50 px-2 py-1 border border-gray-200 rounded-sm">TBD</span>
          )}
        </div>
        
        {/* Only show source/demo links if they exist, and they shouldn't conflict with the main card click area if possible. 
            Since we have an absolute after:inset-0 on the title, the whole card is clickable to the main link. 
            We'll make these links relative with z-10 so they can be clicked individually. */}
        {(project.demoLink || project.repoLink) && (
          <div className="flex gap-4 text-sm font-sans pt-4 border-t border-gray-100 relative z-10">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-tosca hover:text-pink hover:underline underline-offset-2 transition-colors">
                View Demo ➝
              </a>
            )}
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-pink hover:underline underline-offset-2 transition-colors">
                Source Code ➝
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
