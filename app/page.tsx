"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink, ChevronRight, Sparkles, Code2, Palette, Zap, Globe, Terminal, Download } from "lucide-react";

// --- Data ---
const projects = [
  {
    title: "Cloudbats - Tech Blog",
    description: "A personal blog where I share tutorials and insights on AWS, cloud computing, and various web technologies. Built on WordPress and hosted on Amazon Lightsail.",
    tags: ["WordPress", "Amazon Lightsail", "AWS", "Content Creation"],
    link: "https://cloudbats.com",
    color: "from-teal-500 to-cyan-600",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Portfolio v2",
    description: "The very site you&apos;re looking at! A modern, animated, and responsive portfolio built with the latest web technologies to showcase my work.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "#",
    color: "from-orange-500 to-rose-500",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with features like product catalog, shopping cart, user authentication, and a Stripe integration for payments.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    link: "#",
    color: "from-indigo-500 to-purple-600",
    icon: <Zap className="w-6 h-6" />
  },
];

const skills = [
  { name: "JavaScript", level: 90, category: "Language", icon: "⚡" },
  { name: "TypeScript", level: 85, category: "Language", icon: "🔷" },
  { name: "React", level: 92, category: "Framework", icon: "⚛️" },
  { name: "Next.js", level: 88, category: "Framework", icon: "▲" },
  { name: "Node.js", level: 80, category: "Runtime", icon: "🟢" },
  { name: "Tailwind CSS", level: 95, category: "Styling", icon: "💨" },
  { name: "AWS", level: 75, category: "Cloud", icon: "☁️" },
  { name: "Docker", level: 70, category: "DevOps", icon: "🐳" },
  { name: "Figma", level: 82, category: "Design", icon: "🎨" },
  { name: "Git", level: 90, category: "Tool", icon: "🌿" },
];

const experiences = [
  {
    duration: "2021 - PRESENT",
    role: "Cloud Support Engineer",
    company: "Amazon Web Services",
    description: "Provided technical support and solutions to customers using a wide range of AWS services. Specialized in container services (ECS, EKS) and serverless technologies (Lambda, API Gateway).",
    tags: ["AWS", "Kubernetes", "Docker", "Lambda", "Customer Support"],
    achievements: ["Resolved 500+ customer tickets", "95% satisfaction rating", "AWS Certified Solutions Architect"]
  },
  {
    duration: "2019 - 2021",
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    description: "Developed and maintained responsive user interfaces for client websites using React and Next.js. Worked closely with designers to deliver high-quality web applications.",
    tags: ["React", "Next.js", "Redux", "JavaScript", "SCSS"],
    achievements: ["Led 3 major projects", "Improved load time by 40%", "Mentored 2 junior developers"]
  },
  {
    duration: "2018 - 2019",
    role: "Junior Web Developer",
    company: "Creative Agency",
    description: "Assisted in the development of websites for small businesses using HTML, CSS, and JavaScript. Gained experience with version control and agile development.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Git"],
    achievements: ["Delivered 15+ client websites", "Learned React", "First open-source contribution"]
  }
];

// --- Custom Hooks ---
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
};

const useIntersectionObserver = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isIntersecting };
};

// --- Improved Particle Background Component ---
const ParticleBackground = () => {
  return (
    <>
      {/* Fixed particles that move across the viewport */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={`fixed-${i}`}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-40 animate-particle-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
        {[...Array(40)].map((_, i) => (
          <div
            key={`fixed-2-${i}`}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30 animate-particle-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${25 + Math.random() * 15}s`
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`fixed-3-${i}`}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20 animate-particle-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${30 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Static scattered particles for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={`static-${i}`}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: ['#14b8a6', '#06b6d4', '#fb923c', '#f97316', '#8b5cf6'][Math.floor(Math.random() * 5)],
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

// --- Header Component ---
const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();
  const { x, y } = useMousePosition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["about", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About", icon: <Sparkles className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code2 className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Zap className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Terminal className="w-4 h-4" /> },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-slate-900/90 shadow-2xl border-b border-slate-800/50' : 'bg-transparent'
      }`}>
        <div className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 via-orange-500 to-indigo-600"
             style={{ width: `${scrollProgress}%` }} />

        <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-500">SH</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`group flex items-center gap-2 text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "text-teal-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className={`transition-transform ${activeSection === link.id ? 'rotate-12' : 'group-hover:rotate-12'}`}>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact"
             className="hidden md:flex items-center gap-2 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg shadow-teal-500/25">
            Let&apos;s Talk <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <div
        className="pointer-events-none fixed z-40"
        style={{
          left: x,
          top: y,
          width: "600px",
          height: "600px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, rgba(251, 146, 60, 0.08) 40%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
    </>
  );
};

// --- Hero Section with Image and Enhanced Gradient Background ---
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [imageError, setImageError] = useState(false);
  const roles = ["Frontend Developer", "AWS Enthusiast", "UI/UX Designer", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {!imageError ? (
            <Image
              src="/images/hero-cityscape.jpg"
              alt="Sayed Haque with city skyline"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
              onError={() => {
                console.error("Hero image failed to load");
                setImageError(true);
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/20 to-orange-900/10" />
          )}

          {/* Gradient Overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/50" />

          {/* Fallback color in case image doesn't load immediately */}
          <div className="absolute inset-0 bg-slate-800 animate-pulse -z-10" />
        </div>
      </div>

      {/* Subtle Additional Gradient Overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/3 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fadeInUp">
            <div className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent flex-1 max-w-[100px]" />
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 animate-fadeInUp animation-delay-100">
            I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-orange-500 to-indigo-600">Sayed Haque</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-8 h-12 animate-fadeInUp animation-delay-200">
            <span className="text-gray-400">A </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 font-bold">{roles[currentRole]}</span>
          </h2>

          <p className="max-w-2xl text-lg text-gray-300 leading-relaxed mb-10 animate-fadeInUp animation-delay-300">
            I craft elegant digital experiences with modern web technologies.
            Currently exploring the intersection of <span className="text-teal-400 font-medium">AI</span>,
            <span className="text-orange-400 font-medium"> cloud computing</span>, and
            <span className="text-indigo-400 font-medium"> creative design</span>.
          </p>

          <div className="flex flex-wrap items-center gap-6 animate-fadeInUp animation-delay-400">
            <a href="#projects"
               className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-teal-500/30">
              View My Work
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </a>

            <a href="/resume.pdf"
               download
               className="group flex items-center gap-2 border border-teal-500/30 hover:border-teal-400/60 px-6 py-3 rounded-full font-medium transition-all hover:bg-teal-500/10 backdrop-blur-sm">
              Download CV
              <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </a>

            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-110 hover:-rotate-12">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-110 hover:rotate-12">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-fadeInUp animation-delay-500">
        <div className="w-6 h-10 border-2 border-teal-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// --- Projects Section ---
const ProjectsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-px bg-gradient-to-r from-teal-400/50 to-transparent flex-1" />
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-md bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-500 ${
                isIntersecting ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-orange-500 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/50 border border-slate-600/50 hover:border-teal-500/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Skills Section ---
const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(skills.map(s => s.category)))];
  const { ref, isIntersecting } = useIntersectionObserver();

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Skills & Expertise</h2>
          <div className="h-px bg-gradient-to-r from-orange-400/50 to-transparent flex-1" />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white shadow-lg'
                  : 'backdrop-blur-md bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/70 hover:border-slate-600/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-6 rounded-xl backdrop-blur-md bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all hover:scale-105 ${
                isIntersecting ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {skill.icon}
              </div>
              <h3 className="font-bold mb-2">{skill.name}</h3>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-orange-500 rounded-full transition-all duration-1000"
                  style={{
                    width: isIntersecting ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 0.05}s`
                  }}
                />
              </div>
              <span className="text-xs text-gray-500 mt-1">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Experience Section ---
const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
          <div className="h-px bg-gradient-to-r from-indigo-400/50 to-transparent flex-1" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 via-orange-500 to-indigo-600" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } ${isIntersecting ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full shadow-lg shadow-teal-500/50" />

              <div className="md:w-1/2" />

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all">
                  <span className="text-sm text-teal-400 font-medium">{exp.duration}</span>
                  <h3 className="text-xl font-bold mt-2 mb-1">{exp.role}</h3>
                  <p className="text-orange-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="text-sm text-teal-400 hover:text-teal-300 transition-colors mb-3"
                  >
                    {expandedIndex === index ? 'Show less' : 'Show achievements'} →
                  </button>

                  {expandedIndex === index && (
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-slate-700/50 border border-slate-600/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="contact" className={`py-24 relative ${isIntersecting ? 'animate-fadeInUp' : 'opacity-0'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-slate-800/50 border border-slate-700/50 mb-6">
              <Mail className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-500">Amazing</span> Together
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you have a project in mind, need technical expertise, or just want to connect,
              I&apos;m always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📧</span> Email
                </h3>
                <a href="mailto:sayed@example.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  sayed@example.com
                </a>
              </div>

              <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌍</span> Location
                </h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>

              <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚀</span> Status
                </h3>
                <p className="text-green-400">Open to opportunities</p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 space-y-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
              />
              <button
                onClick={() => window.location.href = `mailto:sayed@example.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`}
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 rounded-lg font-medium transition-all hover:scale-[1.02] shadow-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---
export default function Home() {
  useEffect(() => {
    // Add CSS for animations to document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes particle-up {
        from {
          transform: translateY(100vh) translateX(0);
        }
        to {
          transform: translateY(-100vh) translateX(100px);
        }
      }

      @keyframes twinkle {
        0%, 100% { 
          opacity: 0.1;
          transform: scale(1);
        }
        50% { 
          opacity: 0.4;
          transform: scale(1.2);
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-particle-up {
        animation: particle-up linear infinite;
      }

      .animate-twinkle {
        animation: twinkle ease-in-out infinite;
      }

      .animation-delay-100 { animation-delay: 0.1s; }
      .animation-delay-200 { animation-delay: 0.2s; }
      .animation-delay-300 { animation-delay: 0.3s; }
      .animation-delay-400 { animation-delay: 0.4s; }
      .animation-delay-500 { animation-delay: 0.5s; }
      .animation-delay-2000 { animation-delay: 2s; }

      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #1e293b;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #14b8a6, #fb923c);
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #0d9488, #ea580c);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen relative">
      {/* Consistent dark background with subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50 pointer-events-none z-0" />
      
      {/* Particle Background - spans entire page */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <footer className="text-center py-12 border-t border-slate-800/50 relative z-10 bg-slate-900/50 backdrop-blur-sm">
          <p className="text-gray-400 mb-2">
            Designed & Built by <span className="text-teal-400">Sayed Haque</span>
          </p>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}