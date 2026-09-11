import React from 'react';
import { Briefcase, Calendar, Building2, Code2 } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4 group-hover:border-blue-500/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {idx === 0 ? <Building2 className="w-5 h-5 text-blue-400" /> : <Code2 className="w-5 h-5 text-purple-400" />}
                    <span>{exp.role}</span>
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  "{exp.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
