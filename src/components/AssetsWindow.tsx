import { Window } from './Window';
import { Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

export function AssetsWindow() {
  const projects = [
    {
      id: 1,
      title: 'Sublety',
      category: 'Brand Identity',
      tags: ['Procreate', 'Canva', 'Icons', 'Minimal', 'Branding'],
      images: [
        'assets/Sublety-banner.png',
        'assets/Sublety-Logo.png',
        'assets/Sublety-Logo2.png',
        'assets/Sublety-name.png',
        'assets/Link-image.png',
      ],
    },
    {
      id: 2,
      title: 'Caeli Weather',
      category: 'Brand Identity',
      tags: ['Procreate', 'Figma', 'Icons', 'Minimal', 'Branding'],
      images: [
        'assets/Caeli-banner.png',
        'assets/Caeli-logo.png',
      ],
    },
  ];

  return (
    <Window 
      title="C:\taylorwymes\designs" 
      headerColor="bg-[#CB748E]"
      headerBorderColor="border-[#CB748E]"
      windowBorderColor="border-[#ECA0B8]/30"
      leftDot={{ bg: 'bg-[#ECA0B8]', border: 'border-[#ECA0B8]' }}
      middleDot={{ bg: 'bg-[#73986F]', border: 'border-[#73986F]' }}
      rightDot={{ bg: 'bg-white', border: 'border-white' }}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Palette className="w-6 h-6 text-[#CB748E]" />
          <h2 className="text-2xl font-bold text-[#D698AB] font-bohemian">UI DESIGNS & ASSETS</h2>
        </div>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectGalleryRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Window>
  );
}

function ProjectGalleryRow({ project }: { project: { id: number; title: string; category: string; tags: string[]; images: string[] } }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-3">
      {/* Project Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-[#2D4839]">{project.title}</h3>
            <span className="text-xs text-[#CB748E] uppercase tracking-wider px-2 py-0.5 bg-[#ECA0B8]/10 rounded border border-[#ECA0B8]/30">
              {project.category}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-white text-[#CB748E] rounded text-xs font-medium border border-[#ECA0B8]/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="relative group">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white border-2 border-[#CB748E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-[#CB748E]" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white border-2 border-[#CB748E] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-[#CB748E]" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {project.images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-48 sm:h-56 bg-white border-2 border-[#ECA0B8] rounded-lg overflow-hidden hover:shadow-xl hover:shadow-[#CB748E]/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <ImageWithFallback
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}