import React, { useState, useMemo } from 'react';
import TechIcon from './TechIcon';
import type { Project, ProjectType } from '../../data/projects';

interface ProjectFilterProps {
  projects: Project[];
  tools: Project[];
}

export default function ProjectFilter({ projects, tools }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectType>('website');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const currentItems = activeCategory === 'website' ? projects : tools;

  // Extract all unique tech stack tags for current category
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    currentItems.forEach(p => p.tech.forEach(t => tags.add(t)));
    return ['All', ...Array.from(tags)];
  }, [currentItems]);

  // Filter projects based on active tag
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return currentItems;
    return currentItems.filter(p => p.tech.includes(activeFilter));
  }, [currentItems, activeFilter]);

  // Reset filter when changing category
  const handleCategoryChange = (cat: ProjectType) => {
    setActiveCategory(cat);
    setActiveFilter('All');
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center gap-6 border-b retro-border">
        <button
          onClick={() => handleCategoryChange('website')}
          className={`text-lg font-bold font-mono transition-colors pb-3 border-b-2 ${
            activeCategory === 'website' ? 'text-pink border-pink' : 'text-text-muted border-transparent hover:text-pink'
          }`}
        >
          Websites
        </button>
        <button
          onClick={() => handleCategoryChange('tool')}
          className={`text-lg font-bold font-mono transition-colors pb-3 border-b-2 ${
            activeCategory === 'tool' ? 'text-pink border-pink' : 'text-text-muted border-transparent hover:text-pink'
          }`}
        >
          CLI & Tools
        </button>
      </div>

      {/* Filter Tags */}
      {allTags.length > 1 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-2 py-1 text-xs font-mono border transition-colors flex items-center gap-1.5 ${
                activeFilter === tag
                  ? 'bg-pink text-white border-pink'
                  : 'bg-white border-gray-300 text-text-muted hover:border-pink hover:text-pink'
              }`}
            >
              {tag !== 'All' && <TechIcon tech={tag} className="w-3.5 h-3.5" />}
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="p-5 bg-white retro-border hover:border-pink transition-colors group relative flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold group-hover:text-pink transition-colors">
                {project.title}
              </h3>
              <span className={`text-xs font-mono px-2 py-0.5 border shrink-0 ml-2 ${
                project.status === 'completed' || project.status === 'live'
                  ? 'text-green border-green bg-green/10' 
                  : 'text-yellow border-yellow bg-yellow/10'
              }`}>
                {project.status}
              </span>
            </div>
            
            {(project.role || project.year) && (
              <div className="text-xs font-mono text-text-muted mb-4 pb-2 border-b border-gray-200">
                {project.role && <span>Role: {project.role}</span>}
                {project.role && project.year && <span className="mx-2">|</span>}
                {project.year && <span>Year: {project.year}</span>}
              </div>
            )}
            
            <p className="text-sm text-text-main mb-6 flex-grow">{project.description}</p>
            
            <div className="space-y-4 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.length > 0 ? project.tech.map(t => (
                  <div key={t} className="flex items-center gap-1 text-xs text-text-muted bg-gray-50 px-2 py-1 border border-gray-200" title={t}>
                    <TechIcon tech={t} className="w-3 h-3" />
                    <span>{t}</span>
                  </div>
                )) : (
                  <span className="text-xs text-text-muted opacity-50 bg-gray-50 px-2 py-1 border border-gray-200">TBD</span>
                )}
              </div>
              
              <div className="flex gap-4 text-sm font-mono pt-4 border-t border-gray-200">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-tosca hover:text-pink hover:underline transition-colors">
                    [ Demo ]
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-pink hover:underline transition-colors">
                    [ Source ]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-text-muted font-mono">
          &gt; No items found for tag: {activeFilter}
        </div>
      )}
    </div>
  );
}
