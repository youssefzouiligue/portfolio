import React from 'react';
import { User, Code, CheckCircle2, Cpu, Database, Layout } from 'lucide-react';
import { personalDetails } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950/50 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Detailed Biography Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                <span>Full-Stack Web Developer</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalDetails.aboutBio}
              </p>
            </div>

            {/* Core Interests Grid */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                What I enjoy doing:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalDetails.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl glass-panel border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-300">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Strengths/Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="glass-card p-5 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Frontend Development</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Crafting interactive, responsive, and intuitive user interfaces with modern React & Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400 shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Backend & Databases</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Building server-side applications, managing MySQL databases, and integrating REST APIs.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Problem Solving</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Continuously learning best development practices and solving technical problems efficiently.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
