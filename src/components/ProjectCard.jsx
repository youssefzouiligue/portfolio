import { ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { Github } from './Icons';

const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;

  if (isFeatured) {
    return (
      <div className="glass-card rounded-2xl border border-blue-500/40 p-6 lg:p-8 relative overflow-hidden group shadow-xl shadow-blue-950/20 mb-12">
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all duration-300" />
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Project Preview Graphic / Placeholder Banner */}
          <div className="lg:w-1/2 flex flex-col justify-between glass-panel p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {project.badge || "Featured Project"}
                </span>
                <span className="text-xs font-mono text-slate-500">v1.0</span>
              </div>
              
              <div className="pt-6 pb-4">
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-400 mt-2">
                  Full-stack management solution tailored for healthcare providers and patients.
                </p>
              </div>
            </div>

            {/* Quick Tech Chips on Card Visual */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/80 text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Info & Detailed Features */}
          <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features List */}
              {project.features && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl glass-panel hover:bg-slate-800/80 text-slate-200 hover:text-white text-sm font-medium transition-all flex items-center gap-2 border border-slate-700/80"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>View Code</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Project Card layout
  return (
    <div className="glass-card rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between glass-card-hover group h-full">
      <div className="space-y-4">
        {/* Card Header & Badges */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/40 transition-colors">
            <Github className="w-5 h-5" />
          </div>
          {project.liveUrl && (
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Live Available
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Features bullet points if available */}
        {project.features && (
          <ul className="space-y-1 pt-1">
            {project.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800/80">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-lg glass-panel hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white text-center transition-colors flex items-center justify-center gap-1.5 border border-slate-700/60"
        >
          <Github className="w-3.5 h-3.5" />
          <span>View Code</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-xs font-medium text-white text-center transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/20"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
