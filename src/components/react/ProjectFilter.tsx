import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <div className="flex items-center gap-6 border-b border-[#1a2333]">
        <button
          onClick={() => handleCategoryChange('website')}
          className={`text-lg font-bold font-mono transition-colors pb-3 border-b-2 ${
            activeCategory === 'website' ? 'text-tosca border-tosca' : 'text-text-muted border-transparent hover:text-pink'
          }`}
        >
          Websites
        </button>
        <button
          onClick={() => handleCategoryChange('tool')}
          className={`text-lg font-bold font-mono transition-colors pb-3 border-b-2 ${
            activeCategory === 'tool' ? 'text-tosca border-tosca' : 'text-text-muted border-transparent hover:text-pink'
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
              className={`px-3 py-1.5 text-sm font-mono border transition-colors rounded-sm flex items-center gap-2 ${
                activeFilter === tag
                  ? 'bg-tosca/10 border-tosca text-tosca'
                  : 'bg-[#0f172a] border-[#1a2333] text-text-muted hover:border-pink hover:text-pink'
              }`}
            >
              {tag !== 'All' && <TechIcon tech={tag} className="w-4 h-4" />}
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="p-5 bg-[#0f172a]/50 border border-[#1a2333] hover:border-tosca transition-colors rounded-sm group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-tosca/5 rounded-bl-full -z-10 group-hover:bg-tosca/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium group-hover:text-tosca transition-colors">
                  {project.title}
                </h3>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-sm border shrink-0 ml-2 ${
                  project.status === 'completed' || project.status === 'live'
                    ? 'text-green border-green/30 bg-green/10' 
                    : 'text-yellow border-yellow/30 bg-yellow/10'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-sm text-text-muted mb-6 flex-grow">{project.description}</p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.length > 0 ? project.tech.map(t => (
                    <div key={t} className="flex items-center gap-1.5 text-xs text-text-muted bg-[#050505] px-2 py-1 rounded-sm border border-[#1a2333]" title={t}>
                      <TechIcon tech={t} className="w-3.5 h-3.5" />
                      <span>{t}</span>
                    </div>
                  )) : (
                    <span className="text-xs text-text-muted opacity-50 bg-[#050505] px-2 py-1 rounded-sm border border-[#1a2333]">TBD</span>
                  )}
                </div>
                
                <div className="flex gap-4 text-sm font-mono pt-4 border-t border-[#1a2333]">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-tosca hover:text-pink transition-colors">
                      [ Demo ]
                    </a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-pink transition-colors">
                      [ Source ]
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-text-muted font-mono">
          &gt; No items found for tag: {activeFilter}
        </div>
      )}
    </div>
  );
}
