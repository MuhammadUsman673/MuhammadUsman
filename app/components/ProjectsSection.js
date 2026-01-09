'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Mail, Globe, Paintbrush, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce - Sports Fashion Store',
    description: 'Modern sports fashion e-commerce platform featuring teamwear, athlete collections, and lifestyle apparel with secure payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Processing', 'CSS'],
    features: ['Product catalog', 'Shopping cart', 'Secure payments', 'Responsive design'],
    link: 'https://graypak.netlify.app',
    github: 'https://github.com/MuhammadUsman673/GrayPak',
    image: '/images/p13.png',
    images: ['/images/p13.png'],
    emoji: '🛒',
    type: 'web'
  },
  {
    title: 'VOXIA Social Media Platform',
    description: 'Full-featured social network with real-time chat and media sharing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    features: ['Real-time messaging', 'Posts & media', 'Friends system'],
    link: '#',
    github: 'https://github.com/abduldevCode/Voxia02',
    image: '/images/p15.png',
    images: ['/images/p15.png', '/images/p16.png', '/images/p17.png', '/images/p18.png', '/images/p19.png', '/images/p20.png', '/images/p21.png'],
    emoji: '💬',
    type: 'web'
  },
  {
    title: 'Collegesathi Platform',
    description: 'University comparison platform for students to find and compare educational programs.',
    tech: ['React', 'Tailwind', 'JavaScript'],
    features: ['University comparisons', 'Program listings', 'Student reviews'],
    link: 'https://uniproject-lyart.vercel.app',
    github: 'https://github.com/HiSkyTech/uniproject',
    image: '/images/p2.png',
    images: ['/images/p1.png', '/images/p2.png', '/images/p3.png', '/images/p4.png', '/images/p5.png', '/images/p6.png', '/images/p7.png'],
    emoji: '🎓',
    type: 'web'
  },
  {
    title: 'Admin Dashboard System',
    description: 'Comprehensive admin dashboard with user management, analytics, and role-based access control.',
    tech: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
    features: ['User management', 'Analytics', 'RBAC', 'Secure auth'],
    link: '#',
    github: 'https://github.com/HiSkyTech/adminpanel',
    image: '/images/u1.png',
    images: ['/images/u1.png', '/images/u2.png', '/images/u3.png', '/images/u4.png', '/images/u5.png', '/images/u6.png', '/images/u7.png'],
    emoji: '📊',
    type: 'web'
  },
  {
    title: 'AutoDrive - Electric Vehicle Platform',
    description: 'Tesla-inspired electric vehicle showcase with booking system.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    features: ['Interactive gallery', 'Test drive booking', 'Smooth animations'],
    link: '#',
    github: '#',
    image: '/images/p22.png',
    images: ['/images/p22.png', '/images/p23.png', '/images/p24.png', '/images/p25.png', '/images/p26.png', '/images/p28.png', '/images/p29.png'],
    emoji: '🚗',
    type: 'web'
  },
  {
    title: 'Clifton Coffee - E-commerce',
    description: 'Coffee shop e-commerce built with vanilla HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Shopping cart', 'Responsive design', 'Smooth UI'],
    link: 'https://slashcart-peach.vercel.app',
    github: '#',
    image: '/images/p1223.png',
    images: ['/images/p1223.png'],
    emoji: '🛍️',
    type: 'web'
  },
  {
    title: 'AI Knee MRI ACL Detection',
    description: 'AI-powered system detecting ACL tears in knee MRI scans with high accuracy.',
    tech: ['React', 'Firebase', 'AI/ML', 'Medical Imaging'],
    features: ['AI detection', 'Image upload', 'Detailed reports'],
    link: 'https://acl-detection.vercel.app',
    github: 'https://github.com/MuhammadUsman673/ACL-Detection.git',
    image: '/images/p8.png',
    images: ['/images/p8.png'],
    emoji: '🩺',
    type: 'web'
  },
  {
    title: 'Boutique E-commerce Admin Panel',
    description: 'Live admin panel with analytics, inventory, and order management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Real-time analytics', 'Inventory', 'Order processing'],
    link: '#',
    github: '#',
    image: '/images/z1.png',
    images: ['/images/z1.png', '/images/z2.png', '/images/z3.png', '/images/z4.png', '/images/z5.png', '/images/z6.png', '/images/z7.png', '/images/z8.png', '/images/z9.png'],
    emoji: '🛍️',
    type: 'web'
  },
  {
    title: 'Sparlex - Spa & Beauty Center',
    description: 'Modern spa and beauty platform with appointment booking and wellness packages.',
    tech: ['React', 'Frontend', 'Responsive Design'],
    features: ['Booking system', 'Service catalog', 'Testimonials'],
    link: 'https://beauty-mauve.vercel.app',
    github: '#',
    image: '/images/p1222.png',
    images: ['/images/p1222.png'],
    emoji: '💆‍♀️',
    type: 'web'
  },
  {
    title: 'Digital Payment Card UI',
    description: 'Modern mobile banking interface with digital cards and transaction security.',
    tech: ['Figma', 'UI/UX', 'Fintech'],
    features: ['Digital cards', 'Secure UI', 'Transaction overview'],
    link: 'https://www.figma.com/design/GPXLoit4GMXjli9Hhe30Bi/Untitled?node-id=1-2&t=g8PTgB5EAtE8c04u-1',
    github: '#',
    image: '/images/p9.png',
    images: ['/images/p9.png'],
    emoji: '💳',
    type: 'figma'
  },
  {
    title: 'Scrollable E-commerce Product Page',
    description: 'Scrollable AirPods Pro product page with dynamic size selection.',
    tech: ['Figma', 'Mobile Design', 'E-commerce'],
    features: ['Scrollable UI', 'Size selection', 'Smooth interactions'],
    link: 'https://www.figma.com/design/rAOXJbI0AKNcujr9Z4Sfbw/Untitled?node-id=3-17&t=nG3rQOSN1PTRHtAW-1',
    github: '#',
    image: '/images/p10.png',
    images: ['/images/p10.png'],
    emoji: '📱',
    type: 'figma'
  },
  {
    title: 'Dashboard Design',
    description: 'Clean analytics dashboard with revenue and sales metrics.',
    tech: ['Figma', 'Data Visualization'],
    features: ['Revenue tracking', 'Sales metrics', 'Clean layout'],
    link: '#',
    github: '#',
    image: '/images/p11.png',
    images: ['/images/p11.png'],
    emoji: '📊',
    type: 'figma'
  },
  {
    title: 'NFT Marketplace Website',
    description: 'Dark-themed NFT marketplace with analytics and minting flow.',
    tech: ['Figma', 'Web3', 'Dark Theme'],
    features: ['NFT discovery', 'Analytics', 'Minting flow'],
    link: 'https://www.figma.com/design/YMnhR4sIxTfoYZPqrrBTem/Flux---Figma-Build-Tutorial--Starter---Community-?node-id=204-2&t=IrWT6V6XmYetUsF6-1',
    github: '#',
    image: '/images/p12.png',
    images: ['/images/p12.png'],
    emoji: '💎',
    type: 'figma'
  },
  {
    title: 'Fitness Coaching Mobile App',
    description: 'Complete fitness app for coaches and clients with payments and progress tracking.',
    tech: ['Figma', 'Mobile', 'Fitness Tech'],
    features: ['Client management', 'Payments', 'Workout library'],
    link: '#',
    github: '#',
    image: '/images/p14.png',
    images: ['/images/s1.png', '/images/s2.png', '/images/s3.png', '/images/s4.png', '/images/s5.png', '/images/s6.png', '/images/s7.png', '/images/s8.png'],
    emoji: '💪',
    type: 'figma'
  },
  {
    title: 'Fitness Platform Admin Dashboard',
    description: 'Admin panel for fitness platform with coach management and revenue analytics.',
    tech: ['Figma', 'Dashboard', 'SaaS'],
    features: ['Coach management', 'Revenue analytics', 'Support tickets'],
    link: '#',
    github: '#',
    image: '/images/ss1.png',
    images: ['/images/ss1.png', '/images/ss2.png', '/images/ss3.png', '/images/ss4.png', '/images/ss5.png', '/images/ss6.png'],
    emoji: '🏋️‍♂️',
    type: 'figma'
  },
];

export default function ProjectsSection({ scrollToSection }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterPages, setFilterPages] = useState({ all: 0, web: 0, figma: 0 });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsPerPage = 6;

  const filteredProjects = useMemo(() => 
    activeCategory === 'all' ? projects : projects.filter(p => p.type === activeCategory),
    [activeCategory]
  );

  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const safePage = totalPages === 0 ? 0 : Math.min(filterPages[activeCategory] || 0, totalPages - 1);

  useEffect(() => {
    if (safePage !== (filterPages[activeCategory] || 0)) {
      setFilterPages(prev => ({ ...prev, [activeCategory]: safePage }));
    }
  }, [activeCategory, totalPages, safePage]);

  const startIndex = safePage * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, totalProjects);
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilterPages(prev => ({ ...prev, [category]: 0 }));
  };

  const goToPage = (page) => {
    setFilterPages(prev => ({ ...prev, [activeCategory]: page }));
  };

  const openGallery = (project, index = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex(prev => prev === currentProject.images.length - 1 ? 0 : prev + 1);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex(prev => prev === 0 ? currentProject.images.length - 1 : prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (galleryOpen) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, currentProject]);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Portfolio</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-4">
            Here are some of my recent works. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <div className="inline-flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur-sm w-full max-w-md">
            {[
              { key: 'all', label: 'All', icon: Sparkles, count: projects.length },
              { key: 'web', label: 'Web Dev', icon: Globe, count: projects.filter(p => p.type === 'web').length },
              { key: 'figma', label: 'UI/UX', icon: Paintbrush, count: projects.filter(p => p.type === 'figma').length }
            ].map(cat => {
              const IconComponent = cat.icon;
              return (
                <button key={cat.key} onClick={() => handleCategoryChange(cat.key)} className={`relative px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-1 sm:gap-2 flex-1 text-xs sm:text-sm ${activeCategory === cat.key ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">{cat.label}</span>
                  <span className={`px-1.5 py-0.5 text-xs rounded-full min-w-[20px] ${activeCategory === cat.key ? 'bg-white/20' : 'bg-white/10'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {displayedProjects.map((project, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                <span className={`px-2 py-1 text-xs rounded-full font-medium backdrop-blur-sm ${project.type === 'web' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'}`}>
                  {project.type === 'web' ? '🌐 Web' : '🎨 Figma'}
                </span>
              </div>

              <div className="aspect-video relative overflow-hidden bg-black/20">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                
                <div className="sm:hidden absolute bottom-2 left-2 right-2 flex gap-2">
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1">
                      {project.type === 'web' ? 'Live Demo' : 'View Design'} 
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 border border-white/20 hover:border-blue-500/50 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1">
                      Code 
                      <Github className="w-3 h-3" />
                    </a>
                  )}
                  {(project.link === '#' && project.github === '#') && (
                    <button onClick={() => openGallery(project)} className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1">
                      View Project 
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <div className="hidden sm:flex absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center gap-2">
                  {project.link !== '#' ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1">
                      {project.type === 'web' ? 'Live Demo' : 'View Design'} 
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button onClick={() => openGallery(project)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1">
                      View Project 
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/20 hover:border-blue-500/50 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1">
                      Code 
                      <Github className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-bold mb-2 group-hover:text-blue-500 transition-colors flex items-center gap-2">
                  <span className="text-base sm:text-lg">{project.emoji}</span> 
                  <span className="leading-tight line-clamp-1">{project.title}</span>
                </h4>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className={`px-2 py-1 text-xs rounded-full backdrop-blur-sm ${project.type === 'web' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 my-8 sm:my-12">
            {safePage > 0 && (
              <button onClick={() => goToPage(safePage - 1)} className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:border-blue-500/50 rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center">
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Previous
              </button>
            )}
            
            <div className="flex gap-1 sm:gap-2 bg-white/5 rounded-lg p-1 backdrop-blur-sm">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} onClick={() => goToPage(i)} className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all text-xs sm:text-sm ${i === safePage ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-white/20'}`}>
                  {i + 1}
                </button>
              ))}
            </div>
            
            {safePage < totalPages - 1 && (
              <button onClick={() => goToPage(safePage + 1)} className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center">
                Next <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        )}

        {galleryOpen && currentProject && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4" onClick={closeGallery}>
            <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <button onClick={closeGallery} className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-blue-500 text-2xl z-10 transition-colors bg-black/50 rounded-full w-8 h-8 flex items-center justify-center">
                ×
              </button>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
                <div className="relative">
                  <Image src={currentProject.images[currentImageIndex]} alt={`${currentProject.title} - Image ${currentImageIndex + 1}`} width={1200} height={800} className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain" loading="lazy" sizes="(max-width: 768px) 100vw, 1200px" />
                  {currentProject.images.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all text-white">
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button onClick={nextImage} className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all text-white">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </>
                  )}
                </div>
                
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{currentProject.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-xs sm:text-sm">
                    {currentProject.description}
                  </p>
                  
                  <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {currentProject.images.map((_, i) => (
                      <button key={i} onClick={() => setCurrentImageIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-white' : 'bg-white/50'}`} />
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                    {currentProject.link !== '#' && (
                      <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-all flex-1 sm:flex-none">
                        {currentProject.type === 'web' ? 'Live Demo' : 'View Design'} 
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {currentProject.github !== '#' && (
                      <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:border-blue-500/50 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-all flex-1 sm:flex-none">
                        View Code 
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-400 mb-4 text-sm">Interested in working together?</p>
          <button onClick={() => scrollToSection('contact')} className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium flex items-center gap-2 sm:gap-3 mx-auto shadow-lg shadow-blue-500/25 transition-all hover:scale-105 text-sm">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}