import React, { useState, useMemo } from 'react';
import TechIcon from './TechIcon';
import ProjectCard from './ProjectCard';
import type { Project } from '../../data/projects';

interface ProjectFilterProps {
  projects: Project[];
  tools: Project[];
}

export default function ProjectFilter({ projects, tools }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const currentItems = [...projects, ...tools];

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



  return (
    <div className="space-y-8">


      {/* Filter Tags */}
      {allTags.length > 1 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1.5 text-xs font-sans rounded-sm border transition-colors flex items-center gap-1.5 ${
                activeFilter === tag
                  ? 'bg-pink text-white border-pink'
                  : 'bg-white border-gray-200 text-text-muted hover:border-pink hover:text-pink'
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
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-text-muted font-sans">
          No items found for tag: {activeFilter}
        </div>
      )}
    </div>
  );
}
