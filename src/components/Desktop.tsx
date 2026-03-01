import { ReactNode } from 'react';

interface DesktopProps {
  children: ReactNode;
}

export function Desktop({ children }: DesktopProps) {
  return (
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  );
}