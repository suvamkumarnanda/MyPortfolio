import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer';
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-600/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
         <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full border-4 border-purple-500 shadow-2xl shadow-purple-500/50 overflow-hidden mb-8 bg-white transform hover:scale-110 transition-transform duration-300">
            <img 
              src={`${import.meta.env.BASE_URL}profile2.jpg`}
              alt="Suvam Nanda" 
              className="w-full h-60 object-cover object-center scale-110" 
            />
          </div>
        </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Suvam Nanda
          </span>
        </h1>

        {/* Typing Effect Title */}
        <p
          className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          {displayText}
          <span className="animate-blink">|</span>
        </p>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 animate-slide-up leading-relaxed"
          style={{ animationDelay: '0.4s' }}
        >
          Full Stack Developer with 3+ years of experience building scalable backend systems using Node.js,
          TypeScript, Express.js, PostgreSQL, and MongoDB, along with front-end development using React.js.
          Hands-on experience with REST APIs, cloud infrastructure, security, and CI/CD, alongside strong
          knowledge of Generative AI, LLMs, RAG, LangChain, LangGraph, and AI agents. Skilled in delivering
          secure, scalable, production-ready software.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Mail size={20} /> Get In Touch
          </button>
          <a
            href="https://github.com/suvamkumarnanda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-slate-500/50"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suvam-nanda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;