import { Code2, Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalDetails } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Name */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalDetails.name}
              </span>
              <p className="text-xs text-slate-400">
                {personalDetails.title}
              </p>
            </div>
          </div>

          {/* Quick Links / Socials */}
          <div className="flex items-center gap-4">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass-panel hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg glass-panel hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.socials.email}
              className="p-2.5 rounded-lg glass-panel hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright Notice */}
          <div className="text-xs text-slate-400 flex items-center gap-1">
            <span>© {currentYear} {personalDetails.name}. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
