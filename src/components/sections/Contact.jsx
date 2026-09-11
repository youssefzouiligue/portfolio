import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, User, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import { personalDetails } from '../../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate form submission process without pretending real backend is connected
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, an opportunity, or want to collaborate? Send me a message below!
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Let's Connect
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am open to job applications, internship opportunities, freelance projects, and professional networking. Feel free to reach out via form or social platforms.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl glass-panel hover:bg-slate-800/80 border border-slate-800/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 text-slate-300 group-hover:text-blue-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-semibold text-white">@youssefzouiligue</div>
                  </div>
                </a>

                <a
                  href={personalDetails.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl glass-panel hover:bg-slate-800/80 border border-slate-800/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 text-slate-300 group-hover:text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn</div>
                    <div className="text-sm font-semibold text-white">Youssef Zouiligue </div>
                  </div>
                </a>

                <a
                  href={personalDetails.socials.email}
                  className="flex items-center gap-4 p-3.5 rounded-xl glass-panel hover:bg-slate-800/80 border border-slate-800/80 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-900 text-slate-300 group-hover:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-white">youssef.zouiligue2006@gmail.com </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Contact;
