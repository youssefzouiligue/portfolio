import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  const featuredProject = projectsData.find((p) => p.featured);
  const standardProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore my latest web applications, featuring full-stack platforms, interactive utilities, and clean UI components.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Featured Main Project */}
        {featuredProject && <ProjectCard project={featuredProject} />}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
