// utils.tsx - Reusable components and utility functions

import React, { ReactNode } from 'react';

// --- Animation Wrapper Components ---
export const FadeInWrapper = ({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) => {
  return (
    <div 
      className={`fade-in-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export const GlowCard = ({ 
  children, 
  className = "",
  gradient = "from-cyan-500 to-purple-500"
}: { 
  children: ReactNode;
  className?: string;
  gradient?: string;
}) => {
  return (
    <div className={`group relative ${className}`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
      <div className="relative glass rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

// --- Interactive Badge Component ---
export const InteractiveBadge = ({ 
  text, 
  icon,
  onClick 
}: { 
  text: string; 
  icon?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-all hover:scale-105"
    >
      {icon && <span className="text-cyan-400">{icon}</span>}
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
};

// --- Animated Counter Component ---
export const AnimatedCounter = ({ 
  value, 
  duration = 2000,
  suffix = "" 
}: { 
  value: number; 
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

// --- Magnetic Hover Effect Hook ---
export const useMagneticHover = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = (e.clientX - centerX) * 0.1;
      const distanceY = (e.clientY - centerY) * 0.1;
      
      element.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

// --- Text Scramble Effect ---
export const useTextScramble = (text: string) => {
  const [displayText, setDisplayText] = React.useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      
      if(iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1/3;
    }, 30);
  };

  return { displayText, scramble };
};

// --- Parallax Scroll Hook ---
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

// --- Utility Functions ---
export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

// --- Easter Egg: Konami Code Hook ---
export const useKonamiCode = (callback: () => void) => {
  const [sequence, setSequence] = React.useState<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setSequence(prev => [...prev, e.key].slice(-10));
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  React.useEffect(() => {
    if (sequence.join(',') === konamiCode.join(',')) {
      callback();
      setSequence([]);
    }
  }, [sequence, callback]);
};

// --- Theme Toggle Hook ---
export const useTheme = () => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light');
  };

  return { theme, toggleTheme };
};