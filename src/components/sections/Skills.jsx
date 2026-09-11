import React from 'react';
import { Wrench, Layout, Server, Terminal, Code2 } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      skills: skillsData.frontend,
      accent: "border-blue-500/30"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      skills: skillsData.backend,
      accent: "border-purple-500/30"
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      skills: skillsData.tools,
      accent: "border-emerald-500/30"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Technologies and tools I use to build modern, responsive full-stack web applications.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 sm:p-8 rounded-2xl border ${cat.accent} space-y-6 relative overflow-hidden group`}
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-200 flex items-center justify-between group/item"
                  >
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-slate-400 group-hover/item:text-blue-400 transition-colors" />
                      <span className="text-sm font-medium text-slate-200 group-hover/item:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-semibold text-slate-500 px-2 py-0.5 rounded bg-slate-950/80">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
