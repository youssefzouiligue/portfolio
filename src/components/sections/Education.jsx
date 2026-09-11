import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950/50 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Education Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-blue-500/30 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-blue-400 mt-1">
                    {edu.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
