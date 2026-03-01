import { Window } from './Window';
import { Lightbulb, Clock, ArrowRight } from 'lucide-react';

interface UpcomingWindowProps {
  onNavigateToContact?: () => void;
}

export function UpcomingWindow({ onNavigateToContact }: UpcomingWindowProps) {
  const upcomingProjects = [
    {
      id: 1,
      title: 'FODMAP Diet Assistance App',
      status: 'Research Phase',
      timeline: '2026',
      description: 'A personalized dietary tracker and scanner that simplifies a low-FODMAP lifestyle by helping you find safe ingredients, filter by allergies, and log personal triggers.',
      progress: 10,
      color: 'bg-[#73986F]',
    },
    {
      id: 2,
      title: 'Anime Watchlist tracker',
      status: 'Concept',
      timeline: '2026',
      description: 'A versatile anime management tool that streamlines complex tracking with adaptive watch-status updates, personalized rating systems, and comprehensive series navigation.',
      progress: 5,
      color: 'bg-[#73986F]',
    },
    {
      id: 3,
      title: 'Book Tracking App',
      status: 'Concept',
      timeline: '2027',
      description: 'A comprehensive, ad-free library management tool that allows you to track your physical and digital collections, manage reading stats, and import data from other platforms without the pressure of gamified features.',
      progress: 5,
      color: 'bg-[#73986F]',
    },
    {
      id: 4,
      title: 'D&D Combat & Resource Engine',
      status: 'Concept',
      timeline: '2027',
      description: 'An automated character management tool that syncs your stats and level to track health, scale spell slots, and calculate complex combat rolls in real-time.',
      progress: 5,
      color: 'bg-[#73986F]',
    },
  ];

  return (
    <Window 
      title="C:\taylorwymes\upcoming" 
      headerColor="bg-[#2D4839]"
      windowBorderColor="border-[#73986F]/30"
      leftDot={{ bg: 'bg-[#ECA0B8]', border: 'border-[#ECA0B8]' }}
      middleDot={{ bg: 'bg-[#73986F]', border: 'border-[#73986F]' }}
      rightDot={{ bg: 'bg-white', border: 'border-white' }}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-[#73986F]" />
          <h2 className="text-2xl font-bold text-[#2D4839] font-bohemian">UPCOMING PROJECTS</h2>
        </div>
        
        <div className="space-y-4">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-[#ECA0B8]/30 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3 h-3 text-[#426E55]" />
                <span className="text-xs text-[#426E55]">{project.timeline}</span>
                <span className="px-2 py-0.5 bg-[#ECA0B8]/20 text-[#2D4839] rounded text-xs font-medium whitespace-nowrap">
                  {project.status}
                </span>
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-[#2D4839] mb-1">{project.title}</h3>
                  <p className="text-sm text-[#2D4839]/70">{project.description}</p>
                </div>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#426E55]">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${project.color} transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={onNavigateToContact}
          className="bg-[#ECA0B8]/10 border border-[#ECA0B8] rounded-lg p-4 text-center hover:bg-[#ECA0B8]/20 transition-colors cursor-pointer w-full group"
        >
          <p className="text-sm text-[#2D4839] flex items-center justify-center gap-2">
            💡 Got an exciting idea to collaborate on? Let's make it happen!
            <ArrowRight className="w-4 h-4 text-[#CB748E] group-hover:translate-x-1 transition-transform" />
          </p>
        </button>
      </div>
    </Window>
  );
}