import React from 'react';
import { Award, ExternalLink, BadgeCheck } from 'lucide-react';

const certificationsData = [
  {
    id: "html-essentials",
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    description: "Earned foundational knowledge in HTML, including semantic elements, document structure, forms, and best practices for creating modern, accessible web pages.",
    credentialUrl: "https://www.netacad.com/recognitions/verify/c61f0768-d4b9-44b2-a639-d22480867c9f",
    badge: "Web Development"
  },
  {
    id: "css-essentials",
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    description: "Demonstrated proficiency in CSS fundamentals including selectors, the box model, flexbox, responsive design, and styling modern web interfaces with clean and maintainable code.",
    credentialUrl: "https://www.netacad.com/recognitions/verify/fd0eafd5-a761-4829-8669-819961b55a24",
    badge: "Web Development"
  }
];

const CiscoLogo = () => (
  <svg viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-6">
    <rect x="0" y="14" width="8" height="8" rx="2" fill="#1BA0D7" />
    <rect x="10" y="8" width="8" height="20" rx="2" fill="#1BA0D7" />
    <rect x="20" y="2" width="8" height="32" rx="2" fill="#1BA0D7" />
    <rect x="30" y="8" width="8" height="20" rx="2" fill="#1BA0D7" />
    <rect x="40" y="2" width="8" height="32" rx="2" fill="#1BA0D7" />
    <rect x="50" y="8" width="8" height="20" rx="2" fill="#1BA0D7" />
  </svg>
);

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-slate-950/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified certificates earned through accredited online learning programs.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-blue-500/40 hover:bg-slate-800/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Card Top: Issuer + Badge */}
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-3">
                  {/* Cisco Logo & Issuer */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                      <CiscoLogo />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Issued by
                      </p>
                      <p className="text-sm font-bold text-white leading-tight">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Certificate Title & Description */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400 shrink-0" />
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Category Tag */}
                <div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    {cert.badge}
                  </span>
                </div>
              </div>

              {/* View Certificate Button */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-200 group/btn"
              >
                <Award className="w-4 h-4" />
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
