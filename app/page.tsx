"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

// --- Data ---
const projects = [
  {
    title: "Cloudbats - Tech Blog",
    description:
      "A personal blog where I share tutorials and insights on AWS, cloud computing, and various web technologies. Built on WordPress and hosted on Amazon Lightsail.",
    tags: ["WordPress", "Amazon Lightsail", "AWS", "Content Creation"],
    link: "https://cloudbats.com",
  },
  {
    title: "Portfolio v2",
    description:
      "The very site you're looking at! A modern, animated, and responsive portfolio built with the latest web technologies to showcase my work.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with features like product catalog, shopping cart, user authentication, and a Stripe integration for payments.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    link: "#",
  },
];

const skills = [
  { name: "JavaScript", icon: "🚀" },
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "NEXT" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "AWS", icon: "☁️" },
  { name: "Serverless", icon: "⚡" },
  { name: "Figma", icon: "🎨" },
  { name: "Git", icon: "🌿" },
];

const experiences = [
    {
        duration: "2021 - PRESENT",
        role: "Cloud Support Engineer",
        company: "Amazon Web Services",
        description: "Provided technical support and solutions to customers using a wide range of AWS services. Specialized in container services (ECS, EKS) and serverless technologies (Lambda, API Gateway). Collaborated with service teams to resolve complex customer issues.",
        tags: ["AWS", "Kubernetes", "Docker", "Lambda", "Customer Support"]
    },
    {
        duration: "2019 - 2021",
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        description: "Developed and maintained responsive user interfaces for client websites using React and Next.js. Worked closely with designers and backend developers to deliver high-quality web applications. Implemented state management solutions with Redux.",
        tags: ["React", "Next.js", "Redux", "JavaScript", "SCSS"]
    },
    {
        duration: "2018 - 2019",
        role: "Junior Web Developer",
        company: "Creative Agency",
        description: "Assisted in the development of websites for small businesses using HTML, CSS, and JavaScript. Gained experience with version control (Git) and collaborated in an agile development environment.",
        tags: ["HTML", "CSS", "JavaScript", "jQuery", "Git"]
    }
];


// --- Custom Hook for Mouse Position ---
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

// --- Header Component ---
const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
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
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">Sayed Haque</div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
          Contact Me
        </a>
      </div>
       <div
          className="glow-effect"
          style={{
            left: x,
            top: y,
            width: "300px",
            height: "300px",
            transform: "translate(-50%, -50%)",
          }}
        />
    </header>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
        Sayed Haque
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
        Frontend Developer & AWS Enthusiast
      </h2>
      <p className="max-w-2xl text-gray-300 mb-8">
        I build accessible, inclusive products and digital experiences for the
        web. Currently experimenting with generative AI and serverless technologies.
      </p>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white"><Github size={24}/></a>
        <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24}/></a>
        <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24}/></a>
      </div>
    </section>
  );
};

// --- About Section ---
const AboutSection = () => (
    <section className="py-24">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled down the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for a <a href="#" className="text-primary hover:underline">start-up</a>, a <a href="#" className="text-primary hover:underline">huge corporation</a>, and a <a href="#" className="text-primary hover:underline">student-led design studio</a>.
            <br/><br/>
            My main focus these days is building products and leading projects for our clients at Upstatement. I most enjoy building things from scratch and helping people learn and grow. When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
        </p>
    </section>
);

// --- Reusable Section Component ---
const Section = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
    <section id={id} className="py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-12 sticky top-20 bg-gray-900/50 backdrop-blur-md py-2">{title}</h2>
        {children}
    </section>
);

// --- Projects Section ---
const ProjectsSection = () => (
  <Section id="projects" title="Projects">
    <div className="space-y-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </Section>
);

const ProjectCard = ({ title, description, tags, link }: { title: string, description: string, tags: string[], link: string }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:shadow-lg group">
        <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-2/3">
                <h3 className="text-xl font-bold flex items-center">
                    {title}
                    <ArrowUpRight className="inline-block ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                </h3>
                <p className="mt-2 text-gray-400">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </a>
);

// --- Skills Section ---
const SkillsSection = () => (
    <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-secondary/50 transition-all">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="font-medium">{skill.name}</p>
                </div>
            ))}
        </div>
    </Section>
);

// --- Experience Section ---
const ExperienceSection = () => (
    <Section id="experience" title="Work Experience">
        <div className="space-y-12">
            {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 text-gray-400 text-sm">{exp.duration}</div>
                    <div className="md:w-3/4">
                        <h3 className="text-xl font-bold">{exp.role} at {exp.company}</h3>
                        <p className="mt-2 text-gray-300">{exp.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="bg-secondary text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

// --- Contact Section ---
const ContactSection = () => (
    <Section id="contact" title="Get In Touch">
        <div className="max-w-xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
                I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <a href="mailto:sayed@example.com" className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md text-lg font-medium transition-transform hover:scale-105">
                Say Hello
            </a>
        </div>
    </Section>
);

// --- Footer ---
const Footer = () => (
    <footer className="text-center py-8 text-gray-500 text-sm">
        <p>Designed in Figma and coded in Visual Studio Code. Built with Next.js and Tailwind CSS, deployed with Vercel.</p>
        <p>&copy; {new Date().getFullYear()} Sayed Haque. All rights reserved.</p>
    </footer>
);


// --- Main Page Component ---
export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

