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
  { name: "React.js", level: "Advanced", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", level: "Advanced", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", level: "Advanced", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express.js", level: "Advanced", category: "Backend", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RXhwcmVzczwvdGV4dD4KPC9zdmc+" },
  { name: "Figma", level: "Advanced", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "JavaScript", level: "Advanced", category: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", level: "Advanced", category: "Styling", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzhiYmY4Ii8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5UYWlsd2luZDwvdGV4dD4KPC9zdmc+" },
  { name: "UI/UX Design", level: "Advanced", category: "Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
 { name: "Next.js", level: "Advanced", category: "Frontend", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI1IiBmaWxsPSIjMDAwMDAwIi8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTQiIGZpbGw9IndoaXRlIi8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTIiIGZpbGw9IiMwMDAwMDAiLz4KICA8cGF0aCBkPSJNMTYgMTNIMThWMjdIMTZWMTNaTTIyIDEzSDI0VjI3SDIyVjEzWiIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBkPSJNMjYgMTZMMjAgMjVMMTQgMTZIMTdMMjAgMjFMMjMgMTZIMjZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=" },
  { name: "GitHub", level: "Advanced", category: "Tools", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMyNDI5MkUiLz4KPHBhdGggZD0iTTIwIDEwQzE0LjQ3NSAxMCAxMCAxNC40NzUgMTAgMjBDMTAgMjQuNDI1IDEyLjg2MjUgMjguMTg3NSAxNi44Mzc1IDI5LjQ4NzVDMTcuMzM3NSAyOS41NzUgMTcuNTI1IDI5LjI3NSAxNy41MjUgMjkuMDEyNUMxNy41MjUgMjguNzc1IDE3LjUxMjUgMjcuOTg3NSAxNy41MTI1IDI3LjE1QzE1IDI3LjYgMTQuMzUgMjYuMzc1IDE0LjE1IDI1LjcyNUMxNC4wMzc1IDI1LjM4NzUgMTMuNTUgMjQuNTUgMTMuMTI1IDI0LjMxMjVDMTIuNzc1IDI0LjEyNSAxMi4yNzUgMjMuNjc1IDEzLjExMjUgMjMuNjYyNUMxMy45IDIzLjY1IDE0LjQ2MjUgMjQuMzYyNSAxNC42NSAyNC42NjI1QzE1LjU1IDI2LjEzNzUgMTYuOTg3NSAyNS43MTI1IDE3LjU2MjUgMjUuNDVDMTcuNjUgMjQuOCAxNy45MTI1IDI0LjM2MjUgMTguMiAyNC4xMTI1QzE2LjA3NSAyMy44NjI1IDE0LjcgMjMuMDUgMTQuNyAyMC42QzE0LjcgMTkuOCAxNS4wMzc1IDE5LjEzNzUgMTUuNjc1IDE4LjYxMjVDMTUuNTc1IDE4LjM2MjUgMTUuMjI1IDE3LjQxMjUgMTUuNzc1IDE2LjExMjVDMTUuNzc1IDE2LjExMjUgMTYuNjEyNSAxNS44NSAxNy41MjUgMTYuNTYyNUMxOC4zNzUgMTYuMzM3NSAxOS4xODc1IDE2LjIyNSAyMCAxNi4yMjVDMjAuODEyNSAxNi4yMjUgMjEuNjI1IDE2LjMzNzUgMjIuNDc1IDE2LjU2MjVDMjMuMzg3NSAxNS44Mzc1IDI0LjIyNSAxNi4xMTI1IDI0LjIyNSAxNi4xMTI1QzI0Ljc3NSAxNy40MTI1IDI0LjQyNSAxOC4zNjI1IDI0LjMyNSAxOC42MTI1QzI0Ljk2MjUgMTkuMTM3NSAyNS4zIDE5Ljc4NzUgMjUuMyAyMC42QzI1LjMgMjMuMDYyNSAyMy45MTI1IDIzLjg2MjUgMjEuNzg3NSAyNC4xMTI1QzIyLjE1IDI0LjQyNSAyMi40NjI1IDI1LjAyNSAyMi40NjI1IDI1Ljk1QzIyLjQ2MjUgMjcuMjUgMjIuNDUgMjguMjg3NSAyMi40NSAyOS4wMTI1QzIyLjQ1IDI5LjI3NSAyMi42Mzc1IDI5LjU4NzUgMjMuMTM3NSAyOS40ODc1QzI3LjEzNzUgMjguMTg3NSAzMCAyNC40MTI1IDMwIDIwQzMwIDE0LjQ3NSAyNS41MjUgMTAgMjAgMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=" },
  { name: "Upwork", level: "Advanced", category: "Platform", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNkZEQTQ0Ii8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+VXB3b3JrPC90ZXh0Pgo8L3N2Zz4=" },
  { name: "Vercel", level: "Advanced", category: "Platform", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwIi8+Cjxwb2x5Z29uIHBvaW50cz0iMjAsMTIgMzAsMjggMTAsMjgiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==" }
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
  Software Engineer | AI-Powered Web & App Developer
</h2>
          
         <p className={`text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  I build AI-powered web and mobile applications for startups and businesses using MERN Stack, Next.js, and Node.js. With 5+ years of experience and 30+ projects delivered, I turn ideas into scalable, high-performance digital products.
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">About Me</h2>
              <h3 className="text-4xl font-bold mb-6">Turning Ideas Into Reality</h3>
             <p className="text-gray-400 leading-relaxed mb-6">
  I'm a Software Engineer with 5+ years of experience building AI-powered web and app products for startups and businesses. I specialize in MERN Stack, Next.js, and Node.js, delivering scalable, high-performance digital solutions.
</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Specializing in MERN stack, I build scalable web applications that not only look stunning but perform flawlessly.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: '30+', label: 'Projects' },
                  { number: '5+', label: 'Years Exp' },
                  { number: '50+', label: 'Clients' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold text-blue-500 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="px-6 py-3 border border-white/20 hover:border-blue-500/50 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>

            <div className="relative animate-on-scroll">
              <div className="aspect-square rounded-2xl border border-white/10 overflow-hidden hover:scale-105 transition-all duration-500 group relative">
                <Image src="/images/usman.jpg" alt="Usman" fill className="object-cover group-hover:scale-110 transition-transform duration-700" priority sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            </div>
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
                  <Image src={skill.logo} alt={skill.name} width={32} height={32} className="object-contain" loading="lazy" sizes="32px" />
                </div>
                <h4 className="font-semibold mb-1 group-hover:text-blue-500 transition-colors duration-300">{skill.name}</h4>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection scrollToSection={scrollToSection} />

       {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Education</h2>
            <h3 className="text-4xl font-bold">Academic Journey</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              My educational path that built foundation for my career in technology and design.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-white/10 last:pb-0 animate-on-scroll group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300 mt-1">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <div className="text-sm text-blue-500 font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">{edu.year}</div>
                        <h4 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors duration-300">{edu.degree}</h4>
                        <div className="text-gray-400 mb-3 group-hover:translate-x-2 transition-transform duration-300">{edu.institution}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium mb-3 sm:mb-0 ${
                        edu.status === 'In Progress' 
                          ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                          : 'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        {edu.status}
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16 animate-on-scroll">
            <h4 className="text-2xl font-bold text-center mb-8">Certifications & Courses</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105">
                <h5 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  AI Development
                </h5>
                <p className="text-gray-400 text-sm mb-3">OpenAI API, LLM Chatbots, RAG & AI Agents</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Completed</span>
                </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105">
                <h5 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  Web Development
                </h5>
                <p className="text-gray-400 text-sm mb-3">MERN Stack & Next.js Full-Stack Development</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Completed</span>
                </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105">
                <h5 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  Mobile App Development
                </h5>
                <p className="text-gray-400 text-sm mb-3">Cross-Platform iOS & Android with React Native & Flutter</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Experience Section */}
<section id="experience" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16 animate-on-scroll">
      <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Career</h2>
      <h3 className="text-4xl font-bold">Work Experience</h3>
    </div>

    <div className="space-y-8">
      <div
        className="relative pl-8 pb-8 border-l-2 border-white/10 animate-on-scroll group"
        style={{ transitionDelay: '0ms' }}
      >
        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
        <div className="text-sm text-blue-500 font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">Apr 2023 – Present</div>
        <h4 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors duration-300">Full-Stack Engineer | Web Applications & AI</h4>
        <div className="text-gray-400 mb-3 group-hover:translate-x-2 transition-transform duration-300">Axiom World · Full-time · Lahore, Punjab, Pakistan (On-site)</div>
        <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">Built and maintained scalable web and mobile applications as a full-stack engineer (React.js, Next.js, Node.js, MongoDB), including REST APIs, AI integrations (OpenAI), and AWS deployments with CI/CD. Delivered features end to end in Agile teams, with a focus on performance, clean code and reliability.</p>
      </div>

      <div
        className="relative pl-8 pb-8 border-l-2 border-white/10 animate-on-scroll group"
        style={{ transitionDelay: '200ms' }}
      >
        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
        <div className="text-sm text-blue-500 font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">Mar 2022 – Present</div>
        <h4 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors duration-300">Full-Stack Developer | Web Apps & AI Solutions</h4>
        <div className="text-gray-400 mb-3 group-hover:translate-x-2 transition-transform duration-300">Upwork · Freelance · Remote</div>
        <p className="text-gray-500 leading-relaxed mb-3 group-hover:text-gray-400 transition-colors duration-300">Developing scalable web applications and AI-powered solutions using React.js, Next.js, Node.js, Express.js, and MongoDB.</p>
        <ul className="list-disc list-inside space-y-1 text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
          <li>Build responsive web applications and full-stack solutions.</li>
          <li>Develop REST APIs, backend services, and third-party integrations.</li>
          <li>Integrate OpenAI, LLMs, and AI-powered automation.</li>
          <li>Optimize application performance, scalability, and user experience.</li>
          <li>Manage deployment and maintenance of web applications.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

    {/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16 animate-on-scroll">
      <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Get In Touch</h2>
      <h3 className="text-4xl font-bold mb-4">Let's Work Together</h3>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Have a project in mind? Let's create something amazing together.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Email Card */}
      <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-sm text-gray-500">Primary contact method</p>
          </div>
        </div>
        <a 
          href="mailto:Zainusman718@gmail.com" 
          className="text-lg text-gray-300 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group/link font-medium"
        >
          Zainusman718@gmail.com
          <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1" />
        </a>
        
        <div className="text-sm text-gray-500 mt-3 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
          Quick response within 24 hours
        </div>
      </div>

      {/* Location Card */}
      <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10" style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Location</h4>
            <p className="text-sm text-gray-500">Remote work available</p>
          </div>
        </div>
        <p className="text-lg text-gray-300 font-medium">Remote / Worldwide</p>
        <div className="text-sm text-gray-500 mt-3 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
          Available for global projects
        </div>
      </div>
    </div>

    {/* Direct Email CTA */}
    <div className="text-center mb-12 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
      <h4 className="text-xl font-bold mb-3">Prefer Direct Email?</h4>
      <p className="text-gray-400 mb-4">Click below to start a conversation right away</p>
      <a 
        href="mailto:Zainusman718@gmail.com?subject=Project%20Inquiry&body=Hello%20Zain,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." 
        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
      >
        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        Send Email Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>

    {/* Contact Form */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
      <h4 className="text-xl font-bold mb-6 text-center">Or Send Me a Message Directly</h4>
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-white/20 backdrop-blur-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-white/20 backdrop-blur-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            rows={6}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-white/20 resize-none backdrop-blur-sm"
            placeholder="Tell me about your project, timeline, and budget..."
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            alert('Contact form submitted! In production, this would send your message.');
          }}
          className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 backdrop-blur-sm"
        >
          Send Message
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>

    {/* Additional Contact Options */}
    <div className="text-center mt-12 animate-on-scroll">
      <p className="text-gray-400 mb-6">You can also reach me through</p>
      <div className="flex justify-center gap-6">
        {[
          { icon: Github, href: 'https://github.com/MuhammadUsman673' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-usman-b947b5371' },
          { icon: Mail, href: 'mailto:Zainusman718@gmail.com' }
        ].map((social, index) => (
          <a 
            key={index}
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <social.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          </a>
        ))}
      </div>
    </div>
  </div>
</section>


      <footer className="py-8 px-6 border-t border-white/10 animate-on-scroll">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Zain Usman. All rights reserved.
          </div>
          <div className="flex gap-6">
            {[
              { icon: Github, href: 'https://github.com/MuhammadUsman673' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-usman-b947b5371' },
              { icon: Mail, href: 'mailto:Zainusman718@gmail.com' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>

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
