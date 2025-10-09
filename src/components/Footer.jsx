import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/suvamkumarnanda',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/suvam-nanda/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:nandasuvam2001@gmail.com',
      label: 'Email',
      color: 'hover:text-purple-400',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-purple-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 inline-block mb-2"
            >
              SN
            </button>
            <p className="text-gray-400 text-sm">
              © {currentYear} Suvam Nanda. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
            <span>by Suvam</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-gray-500 text-xs">
            Built with React, Tailwind CSS, and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;