import React, { useEffect, useState, useRef } from 'react';
import {
  Bot,
  BrainCircuit,
  Cloud,
  Code,
  Code2,
  Coffee,
  Cpu,
  Database,
  FlaskConical,
  GitBranch,
  KeyRound,
  Layout,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  TestTube,
  Workflow,
} from 'lucide-react';
import {
  SiChai,
  SiCss,
  SiDocker,
  SiEslint,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJunit5,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiMocha,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOllama,
  SiOkta,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
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

  const skillsData = [
    {
      category: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'HTML', 'CSS'],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose'],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'Node.js',
        'Express.js',
        'Spring Boot',
        'REST API',
        'GraphQL',
        'WebSockets',
        'JWT Authentication',
        'OAuth2',
        'Okta',
      ],
    },
    {
      category: 'Generative AI',
      icon: Code,
      color: 'from-violet-500 to-fuchsia-500',
      skills: [
        'LLMs',
        'Prompt Engineering',
        'RAG',
        'LangChain',
        'LangGraph',
        'AI Agents',
        'AWS Bedrock',
        'Ollama',
        'Embeddings',
        'Vector Databases',
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        'Docker',
        'NGINX',
        'Git',
        'GitHub Actions',
        'CI/CD',
        'Postman',
        'AWS (EC2, S3, ELB)',
        'Vercel',
        'Netlify',
        'Kubernetes',
      ],
    },
    {
      category: 'Frontend',
      icon: Layout,
      color: 'from-yellow-500 to-amber-500',
      skills: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS'],
    },
    {
      category: 'Testing & Quality',
      icon: TestTube,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        'Jest.js',
        'Mocha',
        'Chai',
        'ESLint',
        'Playwright',
        'JUnit',
        'Prettier',
      ],
    },
  ];

  const skillIcons = {
    'JavaScript (ES6+)': SiJavascript,
    TypeScript: SiTypescript,
    Java: Coffee,
    HTML: SiHtml5,
    CSS: SiCss,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    Mongoose: SiMongoose,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'Spring Boot': SiSpringboot,
    'REST API': Code2,
    GraphQL: SiGraphql,
    WebSockets: Radio,
    'JWT Authentication': KeyRound,
    OAuth2: ShieldCheck,
    Okta: SiOkta,
    LLMs: Cpu,
    'Prompt Engineering': Sparkles,
    RAG: Workflow,
    LangChain: SiLangchain,
    LangGraph: SiLanggraph,
    'AI Agents': Bot,
    'AWS Bedrock': Cloud,
    Ollama: SiOllama,
    Embeddings: BrainCircuit,
    'Vector Databases': Database,
    Docker: SiDocker,
    NGINX: SiNginx,
    Git: SiGit,
    'GitHub Actions': SiGithubactions,
    'CI/CD': GitBranch,
    Postman: SiPostman,
    'AWS (EC2, S3, ELB)': Cloud,
    Vercel: SiVercel,
    Netlify: SiNetlify,
    Kubernetes: SiKubernetes,
    'React.js': SiReact,
    'Next.js': SiNextdotjs,
    'Redux Toolkit': SiRedux,
    'Tailwind CSS': SiTailwindcss,
    'Jest.js': SiJest,
    Mocha: SiMocha,
    Chai: SiChai,
    ESLint: SiEslint,
    Playwright: FlaskConical,
    JUnit: SiJunit5,
    Prettier: SiPrettier,
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryData, index) => {
            const Icon = categoryData.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${
                  hoveredCategory === index ? 'scale-105 shadow-2xl' : ''
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`bg-gradient-to-br ${categoryData.color} p-3 rounded-lg`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {categoryData.category}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-2 bg-slate-700/50 text-gray-300 px-3 py-1.5 rounded-lg text-sm border border-slate-600/50 hover:border-purple-500/50 hover:bg-slate-700 transition-all duration-300 cursor-default"
                    >
                      {React.createElement(skillIcons[skill], {
                        size: 16,
                        'aria-hidden': true,
                        className: 'shrink-0',
                      })}
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <span className="text-gray-400 text-sm">
                    {categoryData.skills.length} skill
                    {categoryData.skills.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Skills Summary */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg p-6 rounded-2xl border border-purple-500/30">
            <p className="text-gray-300 text-lg">
              Total Technologies:{' '}
              <span className="text-purple-400 font-bold text-2xl">
                {skillsData.reduce((total, cat) => total + cat.skills.length, 0)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;