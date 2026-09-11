import { ExternalLink, Code2 } from 'lucide-react';
import { Github } from '../Icons';
import { personalDetails } from '../../data/portfolioData';

const GithubSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl border border-slate-800 p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              <span>Source Code & Repositories</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Explore My GitHub
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Check out my complete code repositories, open-source contributions, and ongoing full-stack web development projects on GitHub.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 group"
            >
              <Github className="w-5 h-5 text-slate-950" />
              <span>View GitHub</span>
              <ExternalLink className="w-4 h-4 text-slate-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GithubSection;
