import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`creative-card rounded-2xl p-8 ${className}`}>
      {children}
    </div>
  );
}
