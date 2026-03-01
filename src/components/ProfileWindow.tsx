import { Window } from './Window';
import { Sparkles, FileDown } from 'lucide-react';

export function ProfileWindow() {
  return (
    <Window title="C:\taylorwymes\profile" headerColor="bg-[#CB748E]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0 lg:sticky lg:top-8 lg:self-start mx-auto lg:mx-0">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#CB748E] via-[#D698AB] to-[#ECA0B8] p-1 shadow-lg shadow-[#CB748E]/30">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src='../assets/Headshot.jpeg' alt="Taylor Wymes" className="w-full h-full object-cover" />
              </div>
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-[#ECA0B8] fill-[#ECA0B8]" />
          </div>
          
          {/* Welcome section - shown on desktop only */}
          <div className="hidden lg:block mt-6">
            <div className="inline-block mb-3 bg-[#ECA0B8]/10 border border-[#ECA0B8] rounded-full px-4 py-1.5">
              <p className="text-sm font-medium text-[#2D4839]">Hello World! 👋</p>
            </div>
            <h2 className="text-3xl font-bold text-[#2D4839] mb-3">
              <span className="font-bohemian">I'm <span className="text-[#D698AB]">Taylor Wymes</span></span>
            </h2>
            <p className="text-sm text-[#426E55] uppercase tracking-wider mb-4">
              DEVELOPER & DESIGNER
            </p>
            <p className="text-[#2D4839] leading-relaxed">
              "Meaningful designs stems from intention"
            </p>
          </div>
          
          {/* Info Box and Resume Button - shown on desktop only */}
          <div className="hidden lg:block mt-6 bg-[#73986F]/10 border border-[#73986F] rounded-lg p-3 space-y-1">
            <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Name:</span> Taylor Wymes</p>
            <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Pronouns:</span> She/Her</p>
            <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Role:</span> Student Developer</p>
            <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Location:</span> Guelph</p>
          </div>
          
          {/* Resume Download Button - shown on desktop only */}
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf'; // Path to your resume file
              link.download = 'Taylor_Wymes_Resume.pdf'; // Name of downloaded file
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="mt-4 w-full bg-[#ECA0B8] hover:bg-[#CB748E] text-white font-medium py-3 px-4 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl hidden lg:flex items-center justify-center gap-2"
          >
            <FileDown className="w-5 h-5" />
            <span>Download Resume</span>
          </button>
        </div>
        
        {/* Profile Content */}
        <div className="flex-1 space-y-6">
          {/* Welcome section - shown on mobile only */}
          <div className="lg:hidden">
            <div className="inline-block mb-3 bg-[#ECA0B8]/10 border border-[#ECA0B8] rounded-full px-3 py-1.5">
              <p className="text-xs font-medium text-[#2D4839]">Hello World! 👋</p>
            </div>
            <h2 className="text-2xl font-bold text-[#2D4839] mb-3">
              <span className="font-bohemian">I'm <span className="text-[#D698AB]">Taylor Wymes</span></span>
            </h2>
            <p className="text-xs text-[#426E55] uppercase tracking-wide mb-4">
              DEVELOPER & DESIGNER
            </p>
            <p className="text-sm text-[#2D4839] leading-relaxed">
              "Meaningful designs stems from intention"
            </p>
          </div>
          
          {/* Info Box and Resume Button - shown on mobile only, below the quote */}
          <div className="lg:hidden space-y-4">
            <div className="bg-[#73986F]/10 border border-[#73986F] rounded-lg p-3 space-y-1">
              <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Name:</span> Taylor Wymes</p>
              <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Pronouns:</span> She/Her</p>
              <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Role:</span> Student Developer</p>
              <p className="text-xs text-[#2D4839] font-mono"><span className="font-bold">Location:</span> Guelph</p>
            </div>
            
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Taylor_Wymes_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full bg-[#ECA0B8] hover:bg-[#CB748E] text-white font-medium py-3 px-4 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Banner Image */}
            <div className="w-full">
              <img 
                src="../assets/eyes.jpg" 
                alt="Banner" 
                className="w-full h-auto rounded-lg border-2 border-[#ECA0B8]/30 shadow-lg"
              />
            </div>
            
            <div className="bg-[#CB748E]/10 border border-[#CB748E] rounded-lg p-4">
              <h3 className="text-lg font-bold text-[#2D4839] mb-3 flex items-center gap-2 font-bohemian">
                <span className="w-2 h-2 rounded-full bg-[#CB748E]"></span>
                ABOUT ME
              </h3>
              <p className="text-sm text-[#2D4839] leading-relaxed">
                I am a developer with a strong interest in web and mobile application development, focused on building user-friendly and visually engaging digital experiences. 
                I enjoy transforming conceptual ideas into functional applications, valuing clean design, structured problem-solving, and creating software that is both reliable and intuitive.<br />
                My interests in anime, gaming, and reading inspire creativity and attention to detail. I enjoy continuously learning new concepts and technologies and bringing fresh, thoughtful perspectives to every project I contribute to.
              </p>
            </div>
            
            {/* Education Section with Image beside it */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-[#CB748E]/10 border border-[#CB748E] rounded-lg p-4 pb-3">
                <h3 className="text-lg font-bold text-[#2D4839] mb-3 flex items-center gap-2 font-bohemian">
                  <span className="w-2 h-2 rounded-full bg-[#CB748E]"></span>
                  EDUCATION
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-[#2D4839] text-sm">Bachelor of Computing, Honours Software Engineering</p>
                    <p className="text-xs text-[#426E55]">University of Guelph, Guelph ON • 2024 - 2029</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li className="text-xs text-[#2D4839]">Completing a minor in Linguistics</li>
                      <li className="text-xs text-[#2D4839]">Cumulative average: 87%</li>
                      <li className="text-xs text-[#2D4839]">Dean's Honours List recipient: Fall 2024, Winter 2025, Fall 2025</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Decorative Image beside education - hidden on mobile */}
              <div className="hidden md:flex items-center justify-center md:w-48 flex-shrink-0">
                <div className="bg-[#ECA0B8]/10 border border-[#ECA0B8] rounded-lg p-2.5 flex items-center justify-center">
                  <img src="../assets/Smiski.png" alt="Decorative character" className="w-48 h-40 object-contain" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-3">
              <div className="bg-[#73986F]/10 border-2 border-[#73986F] rounded-lg p-4 sm:p-3 text-center">
                <p className="text-xl sm:text-2xl font-bold text-[#2D4839]">10+</p>
                <p className="text-xs sm:text-xs text-[#426E55] mt-1">Years Coding</p>
              </div>
              <div className="bg-[#73986F]/10 border-2 border-[#73986F] rounded-lg p-4 sm:p-3 text-center">
                <p className="text-xl sm:text-2xl font-bold text-[#2D4839]">Caeli Weather</p>
                <p className="text-xs sm:text-xs text-[#426E55] mt-1">Current Project</p>
              </div>
              <div className="bg-[#73986F]/10 border-2 border-[#73986F] rounded-lg p-4 sm:p-3 text-center">
                <p className="text-xl sm:text-2xl font-bold text-[#2D4839]">∞</p>
                <p className="text-xs sm:text-xs text-[#426E55] mt-1">Ideas Brewing</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Image - shown at bottom on mobile only */}
        <div className="flex justify-center md:hidden">
          <div className="bg-[#ECA0B8]/10 border border-[#ECA0B8] rounded-lg p-2.5 flex items-center justify-center">
            <img src="../assets/Smiski.png" alt="Decorative character" className="w-45 h-45 object-contain" />
          </div>
        </div>
      </div>
    </Window>
  );
}