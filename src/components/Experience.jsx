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

  const experiences = [
    {
      role: 'Software Engineer I',
      company: 'MAQ Software',
      duration: '03/2026 – 09/2026',
      location: 'Noida, India',
      project: 'EmbedFAST (Enterprise Analytics Platform)',
      achievements: [
        'Designed and developed scalable RESTful APIs using Node.js, Express.js, and JavaScript for enterprise analytics applications, with a focus on performance, security, and maintainability.',
        'Built reusable backend modules with centralized exception handling, structured logging, and input validation, reducing production errors by ~50%, and optimized API performance through asynchronous programming and caching strategies, cutting average API response time by ~40%.',
        'Collaborated with frontend and cross-functional teams in an Agile environment, using Azure DevOps, Git, and CI/CD pipelines for code reviews, automated deployments, and production support.',
      ],
      tech: ['Node.js', 'Express.js', 'JavaScript', 'REST API', 'CI/CD', 'Azure DevOps'],
    },
    {
      role: 'Software Engineer',
      company: 'Brightcanyon Solutions',
      duration: '07/2023 – 03/2026',
      location: 'Bengaluru, India',
      project: 'Enterprise E-Commerce SaaS Platform',
      achievements: [
        'Built and delivered scalable RESTful APIs using Node.js, Express.js, and JavaScript for multiple business applications, collaborating closely with frontend developers to ship end-to-end features.',
        'Implemented secure authentication and authorization using JWT, RBAC, OAuth2, and OTP-based verification, strengthening access control across the platform.',
        'Designed and optimized PostgreSQL and MongoDB databases, including queries, schemas, and indexes, to improve backend performance and scalability as the platform grew.',
        'Integrated third-party services, including payment gateways, email services, and external REST APIs, with robust validation and error handling, using Git, Docker, AWS, and CI/CD pipelines.',
      ],
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'JWT', 'RBAC', 'OAuth2', 'AWS', 'Docker'],
    },
  ];

  const education = {
    degree: 'Bachelor of Technology',
    institution: 'Gandhi Institute for Technological Advancement (GITA)',
    cgpa: '8.92',
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
          {experiences.map((experience, experienceIndex) => (
            <div
              key={experience.role}
              className={`bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              } ${experienceIndex === 1 ? 'delay-200' : ''}`}
            >
              <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
                <div className="bg-purple-600 p-4 rounded-lg shrink-0 animate-pulse-slow">
                  <Briefcase size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                    {experience.role}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Building size={18} className="text-purple-400" />
                      <p className="text-xl">{experience.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-purple-400" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-purple-400" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-4 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-pink-400 mb-1">
                  {experience.project}
                </h4>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Key Achievements:
                </h4>
                {experience.achievements.map((achievement, index) => (
                  <div
                    key={`${experience.role}-${index}`}
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

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.tech.map((tech, index) => (
                  <span
                    key={`${experience.role}-${tech}`}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

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
                  <p className="text-gray-300">CGPA: {education.cgpa}</p>
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