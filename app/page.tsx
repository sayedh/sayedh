"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink, ChevronRight, Sparkles, Code2, Palette, Zap, Globe, Terminal } from "lucide-react";
import { SiTerraform, SiAmazonwebservices, SiPython, SiGo, SiDocker, SiKubernetes, SiReact, SiCisco, SiGitlab, SiLinux, SiJavascript, SiNextdotjs } from "react-icons/si";

// --- Data ---
const projects = [
  {
    title: "Terraform UniFi Provider",
    description: "Rebuilt and maintained a custom Terraform provider in Go to interact with the UniFi controller's REST API. Published to the Terraform Registry with 2,000+ downloads.",
    tags: ["Go", "Terraform", "REST API", "Open Source", "IaC"],
    link: "https://registry.terraform.io/providers/sayedh/unifi",
    color: "from-purple-500 to-indigo-600",
    icon: <Terminal className="w-6 h-6" />,
    image: "/projects/terraform-unifi.png"
  },
  {
    title: "CloudBats - Cloud Consultancy",
    description: "Co-founded a 24/7 cloud consultancy organization. Built the company website featuring AWS, Oracle, Splunk, and Cisco services with AI integration capabilities.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "GitLab CI/CD"],
    link: "https://cloudbats.com",
    color: "from-teal-500 to-cyan-600",
    icon: <Globe className="w-6 h-6" />,
    image: "/projects/cloudbats.png"
  },
  {
    title: "CloudBatsX - Tech Blog",
    description: "A statically generated tech blog sharing AWS tutorials and cloud computing insights. Features articles on AWS CLI, IAM, Lightsail, Route53, and more.",
    tags: ["Next.js", "Markdown", "Tailwind CSS", "Vercel", "GitHub"],
    link: "https://cloudbatsx.com",
    color: "from-orange-500 to-rose-500",
    icon: <Code2 className="w-6 h-6" />,
    image: "/projects/cloudbatsx.png"
  },
  {
    title: "Personal Portfolio",
    description: "The very site you&apos;re looking at! A modern, animated portfolio deployed via GitHub Actions to AWS S3 with CloudFront CDN distribution.",
    tags: ["Next.js", "Tailwind CSS", "GitHub Actions", "AWS S3", "CloudFront"],
    link: "https://sayedh.com",
    color: "from-pink-500 to-purple-600",
    icon: <Palette className="w-6 h-6" />,
    image: "/projects/portfolio.png"
  },
];

const skills = [
  { name: "Terraform", category: "DevOps", icon: <SiTerraform className="w-8 h-8 text-purple-500" />, color: "from-purple-500 to-purple-600" },
  { name: "AWS", category: "Cloud", icon: <SiAmazonwebservices className="w-8 h-8 text-orange-400" />, color: "from-orange-400 to-orange-500" },
  { name: "Python", category: "Language", icon: <SiPython className="w-8 h-8 text-yellow-400" />, color: "from-yellow-400 to-yellow-500" },
  { name: "Go", category: "Language", icon: <SiGo className="w-8 h-8 text-cyan-400" />, color: "from-cyan-400 to-cyan-500" },
  { name: "Docker", category: "DevOps", icon: <SiDocker className="w-8 h-8 text-blue-400" />, color: "from-blue-400 to-blue-500" },
  { name: "Kubernetes", category: "DevOps", icon: <SiKubernetes className="w-8 h-8 text-blue-500" />, color: "from-blue-500 to-blue-600" },
  { name: "React", category: "Framework", icon: <SiReact className="w-8 h-8 text-cyan-400" />, color: "from-cyan-400 to-cyan-500" },
  { name: "Cisco", category: "Infrastructure", icon: <SiCisco className="w-8 h-8 text-blue-500" />, color: "from-blue-500 to-blue-600" },
  { name: "GitLab CI/CD", category: "DevOps", icon: <SiGitlab className="w-8 h-8 text-orange-500" />, color: "from-orange-500 to-orange-600" },
  { name: "Linux", category: "OS", icon: <SiLinux className="w-8 h-8 text-yellow-500" />, color: "from-yellow-500 to-yellow-600" },
  { name: "JavaScript", category: "Language", icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, color: "from-yellow-400 to-yellow-500" },
  { name: "Next.js", category: "Framework", icon: <SiNextdotjs className="w-8 h-8 text-white" />, color: "from-slate-600 to-slate-800" },
];

const experiences = [
  {
    duration: "Nov 2022 - PRESENT",
    role: "Senior Network & DevOps Engineer",
    company: "IQT",
    description: "Architecting and automating network infrastructure deployments using Terraform and GitLab CI/CD. Building full-stack applications with React, Next.js, and Go for internal tooling. Leading network design for events with 500+ users.",
    tags: ["Terraform", "GitLab CI/CD", "React", "Python", "AWS", "Kubernetes"],
    achievements: ["Reduced manual configuration by 80%", "Built self-service React dashboard", "2,000+ downloads on Terraform provider"]
  },
  {
    duration: "Jun 2021 - Nov 2022",
    role: "Network Engineer",
    company: "Meta",
    description: "Maintained and supported large-scale global enterprise network infrastructure. Configured and deployed routers, switches, firewalls, and APs from Cisco, Juniper, and Aruba in dual-stack IPv4/IPv6 environments.",
    tags: ["Cisco", "Juniper", "Aruba", "BGP", "OSPF", "IPv4/IPv6"],
    achievements: ["Supported global network across multiple sites", "Managed multi-vendor BGP/OSPF", "Implemented automation for root-cause analysis"]
  },
  {
    duration: "Nov 2020 - Jun 2021",
    role: "Network IT Support",
    company: "Amazon",
    description: "Supported and troubleshot network connectivity for a large-scale logistics fulfillment center, maintaining 24/7 operational readiness. Performed hardware/software deployment and user provisioning.",
    tags: ["Network Support", "Windows", "Linux", "Hardware Deployment"],
    achievements: ["Maintained 24/7 uptime", "Coordinated with global IT teams", "Supported large-scale fulfillment operations"]
  },
  {
    duration: "Feb 2018 - Feb 2020",
    role: "Network Technician",
    company: "MultiTelecom",
    description: "Installed and maintained telecommunications network infrastructure including LAN/WAN topologies, VLAN segmentation, and VoIP systems for enterprise clients.",
    tags: ["LAN/WAN", "VLAN", "VoIP", "Cabling", "Network Installation"],
    achievements: ["Enterprise client installations", "Network device configuration", "VoIP system deployments"]
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
  const roles = ["DevOps Engineer", "Cloud Architect", "Network Engineer", "Full-Stack Developer"];

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
            Senior engineer with 8+ years of experience architecting enterprise infrastructure.
            Passionate about <span className="text-teal-400 font-medium">cloud automation</span>,
            <span className="text-orange-400 font-medium"> DevOps practices</span>, and
            <span className="text-indigo-400 font-medium"> full-stack development</span>.
          </p>

          <div className="flex flex-wrap items-center gap-6 animate-fadeInUp animation-delay-400">
            <a href="#projects"
               className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-teal-500/30">
              View My Work
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/sayedh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-110 hover:-rotate-12">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sayedhaque/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-110 hover:rotate-12">
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

// --- Projects Section (with Screenshots) ---
const ProjectsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-px bg-gradient-to-r from-teal-400/50 to-transparent flex-1" />
        </div>

        {/* Projects Grid - 2 columns on larger screens */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block rounded-2xl overflow-hidden backdrop-blur-md bg-slate-800/30 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-500 ${
                isIntersecting ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Screenshot Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/50">
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Browser mockup frame */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/80 backdrop-blur-sm z-20 flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="h-4 bg-slate-700/50 rounded-md flex items-center px-2">
                      <span className="text-[10px] text-gray-500 truncate">{project.link}</span>
                    </div>
                  </div>
                </div>

                {/* Project Screenshot */}
                <div className="absolute inset-0 pt-8">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-orange-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-gradient-to-br group-hover:from-teal-500/20 group-hover:to-orange-500/20 transition-all">
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-400 transition-colors" />
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-700/50 border border-slate-600/30 text-gray-300 group-hover:border-teal-500/30 group-hover:text-teal-300 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-700/50 text-gray-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom gradient accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </a>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/sayedh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors group"
          >
            <span>View more on GitHub</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative ${isIntersecting ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`} />
              
              {/* Card content */}
              <div className="relative flex flex-col items-center p-6 rounded-2xl backdrop-blur-md bg-slate-800/50 border border-slate-700/50 hover:border-transparent transition-all duration-300">
                {/* Icon container with gradient background on hover */}
                <div className={`p-4 rounded-xl bg-slate-700/50 group-hover:bg-gradient-to-br ${skill.color} transition-all duration-300 mb-4`}>
                  <div className="transition-all duration-300 group-hover:scale-110 [&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-white">
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className="font-semibold text-center text-sm">{skill.name}</h3>
                
                {/* Category badge */}
                <span className="mt-2 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gray-400 bg-slate-700/50 rounded-full">
                  {skill.category}
                </span>
              </div>
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const { ref, isIntersecting } = useIntersectionObserver();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate name
    if (!name.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name');
      return;
    }

    // Validate email
    if (!email.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address');
      return;
    }
    
    // Validate message
    if (!message.trim()) {
      setStatus('error');
      setErrorMsg('Please enter a message');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('access_key', '17e18e47-d3a7-497c-af23-11a58e8ca792');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('subject', 'New Portfolio Contact');
      formData.append('from_name', 'Portfolio Contact Form');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again.');
    }
  };

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
                  <span className="text-2xl">🌍</span> Location
                </h3>
                <p className="text-gray-400">San Jose, CA</p>
              </div>

              <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚀</span> Status
                </h3>
                <p className="text-green-400">Open to opportunities</p>
              </div>

              <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="text-2xl">💼</span> Connect
                </h3>
                <a href="https://www.linkedin.com/in/sayedhaque/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="backdrop-blur-md bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all disabled:opacity-50 ${
                    status === 'error' && !name.trim()
                      ? 'border-red-500/50'
                      : 'border-slate-700/50'
                  }`}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all disabled:opacity-50 ${
                    status === 'error' && (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                      ? 'border-red-500/50'
                      : 'border-slate-700/50'
                  }`}
                />
                <textarea
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  disabled={status === 'loading'}
                  rows={5}
                  className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all disabled:opacity-50 ${
                    status === 'error' && !message.trim()
                      ? 'border-red-500/50'
                      : 'border-slate-700/50'
                  }`}
                />
                
                {/* Error message */}
                {status === 'error' && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}
                
                {/* Success message */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-400 hover:to-orange-400 rounded-lg font-medium transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
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

      /* Line clamp utility */
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
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