import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
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

  const workExperience = {
    role: 'Software Engineer (Backend Developer - Node.js)',
    company: 'Brightcanyon Solutions',
    duration: 'July 2023 - Present',
    location: 'Remote, India',
    project: 'Enterprise E-Commerce SaaS Platform',
    client: 'Client: SLK Software',
    achievements: [
      'Developed core backend microservices for a high-scalability e-commerce platform for a major enterprise client, designed to handle high-volume traffic and transactions',
      'Architected and implemented a secure authentication service using Node.js, featuring JWT-based sessions, role-based authorization (RBAC), and OTP verification via email for enhanced security',
      'Designed and built robust RESTful APIs for user management, profile services, and order processing, ensuring clean separation of concerns and maintainability',
      'Managed complex data models and optimized queries in PostgreSQL to ensure data integrity and high performance for user and transactional data',
      'Collaborated with the backend team to diagnose and resolve cross-service integration issues, providing debugging support for Java/Spring Boot APIs to ensure system-wide reliability and performance',
    ],
  };

  const education = {
    degree: 'Bachelor of Technology',
    institution: 'Gandhi Institute for Technological Advancement (GITA)',
    duration: 'July 2019 - July 2023',
    location: 'Bhubaneswar, Odisha',
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Professional Experience
        </h2>

        <div className="space-y-8">
          {/* Work Experience Card */}
          <div
            className={`bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
              <div className="bg-purple-600 p-4 rounded-lg shrink-0 animate-pulse-slow">
                <Briefcase size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                  {workExperience.role}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Building size={18} className="text-purple-400" />
                    <p className="text-xl">{workExperience.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-400" />
                      <span>{workExperience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-400" />
                      <span>{workExperience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Section */}
            <div className="mb-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-4 rounded-lg border border-purple-500/20">
              <h4 className="text-xl font-semibold text-pink-400 mb-1">
                {workExperience.project}
              </h4>
              <p className="text-gray-400 text-sm">{workExperience.client}</p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">
                Key Achievements:
              </h4>
              {workExperience.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                  style={{
                    animation: isVisible
                      ? `slideInRight 0.5s ease-out ${index * 0.1}s forwards`
                      : 'none',
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <span className="text-purple-400 mt-1 group-hover:scale-125 transition-transform">
                    ▹
                  </span>
                  <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Node.js',
                'Express.js',
                'PostgreSQL',
                'JWT',
                'RBAC',
                'REST API',
                'Microservices',
                'Spring Boot',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div
            className={`bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 delay-200 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-purple-600 p-4 rounded-lg shrink-0 animate-pulse-slow">
                <GraduationCap size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                  {education.degree}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Building size={18} className="text-purple-400" />
                    <p className="text-xl">{education.institution}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-purple-400" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-purple-400" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;