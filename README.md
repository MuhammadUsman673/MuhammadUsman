This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

















the whole should remain same just import upwork vercel from this code 1st code is the code that requiew changes?


'use client';
import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Code2, Palette, Database, Layout, Server, Smartphone, Download, MapPin, Phone, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import ProjectsSection from './components/ProjectsSection';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const initScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  const education = useMemo(() => [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of Sargodha',
      description: 'Completed degree in Software Engineering with focus on web development, database systems, and software architecture.',
      status: 'Completed'
    },
    {
      year: '2019 - 2021',
      degree: 'Intermediate in Computer Science',
      institution: 'Superior Group of Colleges',
      description: 'Completed intermediate studies with computer science major, gaining fundamental knowledge in programming.',
      status: 'Completed'
    },
    {
      year: '2017 - 2019',
      degree: 'Matriculation in Science',
      institution: 'A.I Model High School Bhera',
      description: 'Completed matriculation with science subjects, establishing basic understanding of mathematics and sciences.',
      status: 'Completed'
    }
  ], []);

  const skills = useMemo(() => [
    { name: "React.js", level: "Advanced", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", level: "Advanced", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", level: "Advanced", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Express.js", level: "Advanced", category: "Backend", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RXhwcmVzczwvdGV4dD4KPC9zdmc+" },
    { name: "Figma", level: "Advanced", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "JavaScript", level: "Advanced", category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", level: "Advanced", category: "Styling", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzhiYmY4Ii8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5UYWlsd2luZDwvdGV4dD4KPC9zdmc+" },
    { name: "UI/UX Design", level: "Advanced", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg" },
    { name: "Next.js", level: "Advanced", category: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "GitHub", level: "Advanced", category: "Version Control", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    // Updated reliable logos that work well on dark background
    { name: "Vercel", level: "Advanced", category: "Deployment", logo: "/images/vercel.png" },
{ name: "Upwork", level: "Advanced", category: "Freelance", logo: "/images/upwork.png" },
  ], []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Custom Cursor */}
      <div 
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{ left: mousePosition.x - 8, top: mousePosition.y - 8 }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrollY > 50 ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className={`text-xl font-bold transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <span className="text-blue-500">&lt;</span>Usman<span className="text-blue-500">/&gt;</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm hover:text-blue-500 transition-all duration-500 relative ${activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-gray-400'} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500" />
                  )}
                </button>
              ))}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-400 hover:text-blue-500 transition-all duration-300 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`mt-14 mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-400">Available for freelance work</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hi, I'm <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">M Usman</span>
          </h1>
          
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-light text-gray-400 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Full Stack Developer & Figma Designer
          </h2>
          
          <p className={`text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I craft exceptional digital experiences using MERN stack and create stunning designs in Figma. With 3+ years of experience, I turn ideas into reality.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button onClick={() => scrollToSection('contact')} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button onClick={() => scrollToSection('projects')} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-blue-500/50 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              View Work
            </button>
          </div>

          <div className={`flex gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Github, href: 'https://github.com/MuhammadUsman673' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-usman-b947b5371' },
              { icon: Mail, href: 'mailto:Zainusman718@gmail.com' }
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 p-3 hover:bg-white/5 rounded-lg">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">My Skills</h2>
            <h3 className="text-4xl font-bold">Technologies I Work With</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group p-6 bg-black border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 animate-on-scroll">
                <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500">
                  <Image 
                    src={skill.logo} 
                    alt={skill.name} 
                    width={48} 
                    height={48} 
                    className="object-contain invert" // Added invert for better visibility on dark bg if needed
                    loading="lazy" 
                  />
                </div>
                <h4 className="font-semibold mb-1 group-hover:text-blue-500 transition-colors duration-300">{skill.name}</h4>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections remain unchanged */}
      <ProjectsSection scrollToSection={scrollToSection} />

      {/* ... (About, Education, Experience, Contact, Footer same as before) */}

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}