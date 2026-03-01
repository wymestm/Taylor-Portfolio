import { ReactNode } from 'react';

interface WindowProps {
  title: string;
  children: ReactNode;
  headerColor?: string;
  headerBorderColor?: string;
  windowBorderColor?: string;
  leftDot?: { bg: string; border: string };
  middleDot?: { bg: string; border: string };
  rightDot?: { bg: string; border: string };
}

export function Window({ 
  title, 
  children, 
  headerColor = 'bg-[#426E55]',
  headerBorderColor,
  windowBorderColor = 'border-[#ECA0B8]/30',
  leftDot = { bg: 'bg-[#ECA0B8]', border: 'border-[#ECA0B8]' },
  middleDot = { bg: 'bg-[#73986F]', border: 'border-[#73986F]' },
  rightDot = { bg: 'bg-white', border: 'border-white' }
}: WindowProps) {
  // Derive border color from header color if not explicitly provided
  const borderColor = headerBorderColor || (
    headerColor === 'bg-[#CB748E]' ? 'border-[#CB748E]' : 'border-[#2D4839]'
  );

  return (
    <div className={`bg-white border-2 ${windowBorderColor} rounded-xl shadow-2xl mb-6 overflow-hidden`}>
      {/* Window header */}
      <div className={`${headerColor} border-b-2 ${borderColor} px-4 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className={`w-3 h-3 rounded-full ${leftDot.bg} border ${leftDot.border}`}></div>
            <div className={`w-3 h-3 rounded-full ${middleDot.bg} border ${middleDot.border}`}></div>
            <div className={`w-3 h-3 rounded-full ${rightDot.bg} border ${rightDot.border}`}></div>
          </div>
          <span className="ml-3 text-white font-medium text-xs sm:text-sm truncate font-bohemian">{title}</span>
        </div>
      </div>
      
      {/* Window content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}