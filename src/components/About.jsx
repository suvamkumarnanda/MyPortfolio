import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Award, Code, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const highlights = [
    {
      icon: Code,
      title: '3+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Award,
      title: '2 Companies',
      description: 'Brightcanyon & MAQ Software',
    },
    {
      icon: Zap,
      title: '2 Enterprise',
      description: 'E-commerce + Analytics Platforms',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About Me
        </h2>

        {/* Highlights */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="mx-auto text-purple-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile & Expertise */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                <Code size={24} /> Profile
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Backend-focused Software Engineer with 3+ years of experience delivering
                scalable backend systems across two enterprise platforms: an e-commerce SaaS
                platform at Brightcanyon Solutions and an analytics platform at MAQ Software.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Skilled in designing secure REST APIs, microservices, authentication flows,
                and database optimization using Node.js, Express, PostgreSQL, MongoDB, and
                modern deployment practices.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                <Zap size={24} /> Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Skilled in Docker-based deployments, CI/CD pipelines, Azure DevOps, and cloud
                infrastructure across AWS and enterprise SaaS environments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Collaborative in Agile teams, with a strong emphasis on clean code,
                modular architecture, performance optimization, and secure production-ready delivery.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:nandasuvam2001@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    nandasuvam2001@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:+918117949199"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    +91-8117949199
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-xl font-bold text-white mb-3">Languages</h4>
              <div className="flex gap-4">
                <span className="bg-slate-800/70 px-4 py-2 rounded-lg text-white">
                  English
                </span>
                <span className="bg-slate-800/70 px-4 py-2 rounded-lg text-white">
                  Hindi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;