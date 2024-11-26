import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FounderSectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function FounderSection({ icon: Icon, title, children, className = '' }: FounderSectionProps) {
  return (
    <div className={`glass-card p-8 rounded-2xl hover-glow ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <Icon className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold gradient-text">{title}</h2>
      </div>
      {children}
    </div>
  );
}