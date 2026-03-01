import { User, FolderOpen, Lightbulb, Wrench, Mail, Palette } from 'lucide-react';

interface SidebarProps {
  openWindow: string | null;
  setOpenWindow: (window: string) => void;
}

export function Sidebar({ openWindow, setOpenWindow }: SidebarProps) {
  const icons = [
    { id: 'profile', icon: User, label: 'profile', color: 'bg-[#ECA0B8]', borderColor: 'border-[#CB748E]' },
    { id: 'works', icon: FolderOpen, label: 'works', color: 'bg-[#73986F]', borderColor: 'border-[#426E55]' },
    { id: 'assets', icon: Palette, label: 'designs', color: 'bg-[#ECA0B8]', borderColor: 'border-[#CB748E]' },
    { id: 'upcoming', icon: Lightbulb, label: 'upcoming', color: 'bg-[#73986F]', borderColor: 'border-[#426E55]' },
    { id: 'tools', icon: Wrench, label: 'tools', color: 'bg-[#ECA0B8]', borderColor: 'border-[#CB748E]' },
    { id: 'contact', icon: Mail, label: 'contact', color: 'bg-[#73986F]', borderColor: 'border-[#426E55]' },
  ];

  return (
    <>
      {/* Mobile Header Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-20 flex items-center justify-around px-2 py-2 bg-[#ECA0B8]/10 border-b-2 border-[#ECA0B8]/30 z-40">
        {icons.map(({ id, icon: Icon, label, color, borderColor }) => (
          <button
            key={id}
            onClick={() => setOpenWindow(id)}
            className={`flex flex-col items-center gap-0.5 p-1.5 rounded-lg transition-all ${
              openWindow === id ? 'bg-[#ECA0B8]/30 ring-2 ring-[#CB748E]' : 'hover:bg-[#ECA0B8]/15'
            }`}
          >
            <div className={`w-8 h-8 ${color} border-2 ${borderColor} rounded-lg flex items-center justify-center shadow-md`}>
              <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-medium text-[#2D4839]">{label}</span>
          </button>
        ))}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-24 flex-col gap-6 p-4 pt-8 bg-[#ECA0B8]/10 border-r-2 border-[#ECA0B8]/30 overflow-y-auto z-40">
        {icons.map(({ id, icon: Icon, label, color, borderColor }) => (
          <button
            key={id}
            onClick={() => setOpenWindow(id)}
            className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:scale-105 ${
              openWindow === id ? 'bg-[#ECA0B8]/30 ring-2 ring-[#CB748E]' : 'hover:bg-[#ECA0B8]/15'
            }`}
          >
            <div className={`w-12 h-12 ${color} border-2 ${borderColor} rounded-lg flex items-center justify-center shadow-md`}>
              <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xs font-medium text-[#2D4839]">{label}</span>
          </button>
        ))}
      </aside>
    </>
  );
}