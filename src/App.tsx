import { useState, useEffect } from 'react';
import { Desktop } from './components/Desktop';
import { Sidebar } from './components/Sidebar';
import { ProfileWindow } from './components/ProfileWindow';
import { WorksWindow } from './components/WorksWindow';
import { AssetsWindow } from './components/AssetsWindow';
import { UpcomingWindow } from './components/UpcomingWindow';
import { ToolsWindow } from './components/ToolsWindow';
import { ContactWindow } from './components/ContactWindow';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [openWindow, setOpenWindow] = useState<string | null>('profile');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // handles scroll bar repositioning on tab switch
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'instant' });
    }
  
    // scroll the window just in case
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [openWindow]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentDateTime = () => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return currentTime.toLocaleString('en-US', options);
  };

  const windowVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2D4839 1px, transparent 1px),
            linear-gradient(to bottom, #2D4839 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      ></div>
      
      {/* Desktop layout */}
      <div className="relative min-h-screen flex">
        <Sidebar openWindow={openWindow} setOpenWindow={setOpenWindow} />
        
        <main className="flex-1 p-8 overflow-auto pb-24 lg:ml-24 pt-24 lg:pt-8">
          <Desktop>
            <AnimatePresence mode="wait">
              {openWindow === 'profile' && (
                <motion.div 
                  key="profile"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={windowVariants}
                >
                  <ProfileWindow />
                </motion.div>
              )}
              {openWindow === 'works' && (
                <motion.div 
                  key="works"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={windowVariants}
                >
                  <WorksWindow />
                </motion.div>
              )}
              {openWindow === 'assets' && (
                <motion.div 
                  key="assets"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={windowVariants}
                >
                  <AssetsWindow />
                </motion.div>
              )}
              {openWindow === 'upcoming' && (
                <motion.div 
                  key="upcoming"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={windowVariants}
                >
                  <UpcomingWindow onNavigateToContact={() => setOpenWindow('contact')} />
                </motion.div>
              )}
              {openWindow === 'tools' && (
                <motion.div 
                  key="tools"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={windowVariants}
                >
                  <ToolsWindow />
                </motion.div>
              )}
              {openWindow === 'contact' && (
                <motion.div 
                  key="contact"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={windowVariants}
                >
                  <ContactWindow />
                </motion.div>
              )}
            </AnimatePresence>
          </Desktop>
        </main>
      </div>
      
      {/* Footer taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#2D4839] border-t-2 border-[#426E55] flex items-center justify-center gap-3 md:gap-8 px-3 md:px-6 z-50">
        {/* Date Display */}
        <div className="text-white text-xs md:text-sm font-mono bg-[#426E55]/50 px-2 md:px-3 py-1 md:py-1.5 rounded border border-[#426E55] w-[180px] md:w-[230px] text-center tabular-nums flex-shrink-0">
          {getCurrentDateTime()}
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <a
            href="https://www.linkedin.com/in/taylor-wymes/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-[#ECA0B8] hover:bg-[#CB748E] border-2 border-[#2D4839] rounded-lg flex items-center justify-center transition-colors hover:scale-105 shadow-lg"
            title="LinkedIn"
          >
            <span className="text-white text-lg md:text-xl font-bold">in</span>
          </a>
          <a
            href="https://github.com/wymestm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-[#ECA0B8] hover:bg-[#CB748E] border-2 border-[#2D4839] rounded-lg flex items-center justify-center transition-colors hover:scale-105 shadow-lg"
            title="GitHub"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 md:w-12 md:h-12 bg-[#73986F] hover:bg-[#608259] border-2 border-[#2D4839] rounded-lg flex items-center justify-center transition-colors hover:scale-105 shadow-lg flex-shrink-0"
          title="Scroll to Top"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}