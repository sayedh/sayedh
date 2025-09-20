"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, ExternalLink, ChevronRight, Sparkles, Code2, Palette, Zap, Globe, Terminal } from "lucide-react";

// --- Data ---
const projects = [
  {
    title: "Cloudbats - Tech Blog",
    description: "A personal blog where I share tutorials and insights on AWS, cloud computing, and various web technologies. Built on WordPress and hosted on Amazon Lightsail.",
    tags: ["WordPress", "Amazon Lightsail", "AWS", "Content Creation"],
    link: "https://cloudbats.com",
    color: "from-cyan-500 to-blue-500",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Portfolio v2",
    description: "The very site you're looking at! A modern, animated, and responsive portfolio built with the latest web technologies to showcase my work.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "#",
    color: "from-purple-500 to-pink-500",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with features like product catalog, shopping cart, user authentication, and a Stripe integration for payments.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    link: "#",
    color: "from-orange-500 to-red-500",
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

// --- Header Component ---
const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
  const scrollProgress = useScrollProgress();
  const { x, y } = useMousePosition();

  useEffect(() => {
    const handleScroll = () => {
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
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500" 
             style={{ width: `${scrollProgress}%` }} />
        
        <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter gradient-text">SH</div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`group flex items-center gap-2 text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "text-cyan-400"
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
             className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 pulse-animation">
            Let&apos;s Talk <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </header>
      
      <div
        className="glow-effect"
        style={{
          left: x,
          top: y,
          width: "400px",
          height: "400px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "AWS Enthusiast", "UI/UX Designer", "Problem Solver"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20 relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 fade-in-up">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1 max-w-[100px]" />
          <span className="text-cyan-400 text-sm font-medium">HELLO WORLD</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 fade-in-up stagger-1">
          I&apos;m <span className="gradient-text">Sayed Haque</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-medium text-gray-300 mb-8 h-12 fade-in-up stagger-2">
          <span className="text-gray-500">A </span>
          <span className="gradient-text font-bold">{roles[currentRole]}</span>
        </h2>
        
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-10 fade-in-up stagger-3">
          I craft elegant digital experiences with modern web technologies. 
          Currently exploring the intersection of <span className="text-cyan-400 font-medium">AI</span>, 
          <span className="text-purple-400 font-medium"> cloud computing</span>, and 
          <span className="text-orange-400 font-medium"> creative design</span>.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 fade-in-up stagger-4">
          <a href="#projects" 
             className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-6 py-3 rounded-full font-medium transition-all hover:scale-105">
            View My Work 
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </a>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-3 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 hover:-rotate-12">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 hover:rotate-12">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 hover:-rotate-12">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-5">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// --- Projects Section ---
const ProjectsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="projects" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
        <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent flex-1" />
      </div>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl glass hover-card transition-all duration-500 ${
              isIntersecting ? 'fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            
            <div className="relative p-8">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white`}>
                  {project.icon}
                </div>
                <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full glass">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
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
    <section ref={ref as React.RefObject<HTMLElement>} id="skills" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Skills & Expertise</h2>
        <div className="h-px bg-gradient-to-r from-purple-400/50 to-transparent flex-1" />
      </div>
      
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                : 'glass hover:bg-white/10'
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
            className={`group relative p-6 rounded-xl glass hover:bg-white/5 transition-all hover:scale-105 ${
              isIntersecting ? 'fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="text-4xl mb-3 floating" style={{ animationDelay: `${index * 0.2}s` }}>
              {skill.icon}
            </div>
            <h3 className="font-bold mb-2">{skill.name}</h3>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
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
    </section>
  );
};

// --- Experience Section ---
const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="experience" className="py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
        <div className="h-px bg-gradient-to-r from-orange-400/50 to-transparent flex-1" />
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500" />
        
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } ${isIntersecting ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
            
            <div className="md:w-1/2" />
            
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="glass rounded-xl p-6 hover:bg-white/5 transition-all">
                <span className="text-sm text-cyan-400 font-medium">{exp.duration}</span>
                <h3 className="text-xl font-bold mt-2 mb-1">{exp.role}</h3>
                <p className="text-purple-400 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-3"
                >
                  {expandedIndex === index ? 'Show less' : 'Show achievements'} →
                </button>
                
                {expandedIndex === index && (
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full glass">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
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
    <section ref={ref as React.RefObject<HTMLElement>} id="contact" className={`py-24 ${isIntersecting ? 'fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build <span className="gradient-text">Amazing</span> Together
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you have a project in mind, need technical expertise, or just want to connect, 
            I&apos;m always open to discussing new opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span> Email
              </h3>
              <a href="mailto:sayed@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                sayed@example.com
              </a>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🌍</span> Location
              </h3>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Status
              </h3>
              <p className="text-green-400">Open to opportunities</p>
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
            <button 
              onClick={() => window.location.href = `mailto:sayed@example.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-lg font-medium transition-all hover:scale-[1.02]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---
export default function Home() {
  useEffect(() => {
    // Add smooth reveal animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 text-white animated-gradient">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <footer className="text-center py-12 border-t border-gray-800">
        <p className="text-gray-500 mb-2">
          Designed & Built by <span className="text-cyan-400">Sayed Haque</span>
        </p>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}