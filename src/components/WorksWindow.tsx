import { Window } from './Window';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WorksWindow() {
  const projects = [
    {
      id: 1,
      title: 'Caeli Weather',
      category: 'Web & App Development with API Integration',
      description: 'A personalized weather application that provides real-time atmospheric data via OpenWeatherMap API, and daily outfit recommendations.',
      tags: ['C++', 'Dart', 'Flutter', 'Swift', 'CMake', 'REST API'],
      image: 'assets/Caeli-banner.png',
      codeLink: 'https://github.com/wymestm/Caeli_Weather',
      demoLink: '',
    },
    {
      id: 2,
      title: 'Sublety',
      category: 'App Development & AI integration',
      description: 'Tinder-inspired sublet matching application that utilizes AI voice onboarding via ElevenLabs and Google Gemini integration.',
      tags: ['TypeScript', 'React (Vite)', 'Tailwind CSS', 'Azure', 'Google Gemini', 'ElevenLabs'],
      image: 'assets/Sublety-banner.png',
      codeLink: 'https://github.com/pedro-boudoux/sublet-app',
      demoLink: 'https://devpost.com/software/sublety',
    },
  ];

  return (
    <Window 
      title="C:\taylorwymes\works" 
      headerColor="bg-[#2D4839]"
      windowBorderColor="border-[#73986F]/30"
      leftDot={{ bg: 'bg-[#ECA0B8]', border: 'border-[#ECA0B8]' }}
      middleDot={{ bg: 'bg-[#73986F]', border: 'border-[#73986F]' }}
      rightDot={{ bg: 'bg-white', border: 'border-white' }}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FolderOpen className="w-6 h-6 text-[#73986F]" />
          <h2 className="text-2xl font-bold text-[#2D4839] font-bohemian">MY PROJECTS</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-[#73986F] rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#426E55]/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full bg-gray-50 overflow-hidden">
                <ImageWithFallback
                  src={project.image ? project.image : `https://source.unsplash.com/600x400/?${project.image}`}
                  alt={project.title}
                  className="w-full h-auto object-contain max-h-48 sm:max-h-56"
                />
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-[#426E55] uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="font-bold text-[#2D4839]">{project.title}</h3>
                </div>
                <p className="text-sm text-[#2D4839]/70 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 text-[#2D4839] rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 bg-[#2D4839] hover:bg-[#1f3229] text-white rounded text-xs sm:text-sm transition-colors"
                    >
                      <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="max-[375px]:text-[10px]">Code</span>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 bg-[#2D4839]/50 text-white/50 rounded text-xs sm:text-sm cursor-not-allowed"
                    >
                      <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="max-[375px]:text-[10px]">Code</span>
                    </button>
                  )}
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 bg-[#73986F] hover:bg-[#608259] text-white rounded text-xs sm:text-sm transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="max-[375px]:text-[10px]">Demo</span>
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 bg-[#73986F]/50 text-white/50 rounded text-xs sm:text-sm cursor-not-allowed"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="max-[375px]:text-[10px]">Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}