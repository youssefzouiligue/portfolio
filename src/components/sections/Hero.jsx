import { ArrowRight, Mail, Terminal, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import { personalDetails } from '../../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-blue-500/30 text-blue-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Full-Stack Web Developer</span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <img
                    src="/profile.png"
                    alt="Youssef Zouiligue Profile"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-slate-900 shadow-xl"
                  />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                    Hi, I'm <span className="text-gradient">{personalDetails.name}</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-slate-300 font-medium mt-2">
                    {personalDetails.title}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              "{personalDetails.shortBio}"
            </p>

            {/* Action Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800/80 text-slate-200 hover:text-white font-medium transition-all duration-200 border border-slate-700/80 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-6 border-t border-slate-800/60 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-panel hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-panel hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                title="LinkedIn Profile (Placeholder)"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.socials.email}
                className="p-2.5 rounded-lg glass-panel hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                title="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual Element: Modern Code Window Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-card rounded-2xl p-5 shadow-2xl border border-slate-800 relative group hover:border-slate-700 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>developer.js</span>
                </div>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                <p className="text-slate-500">// Welcome to my developer portfolio</p>
                <p>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-400">'{personalDetails.name}'</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-emerald-400">'Full-Stack Web Developer'</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-amber-400">'React'</span>, <span className="text-amber-400">'Laravel'</span>, <span className="text-amber-400">'MySQL'</span>],
                </p>
                <p className="pl-4">
                  focusedOn: <span className="text-emerald-400">'Clean code & performance'</span>,
                </p>
                <p className="pl-4">
                  openToOpportunities: <span className="text-blue-400">true</span>
                </p>
                <p>&#125;;</p>
                <div className="pt-2 flex items-center gap-2 text-slate-400">
                  <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse" />
                  <span className="text-xs text-slate-500">// Ready to build great applications</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
