import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DetailedSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  content: string[];
  className?: string;
}

export default function DetailedSection({
  title,
  description,
  icon: Icon,
  content,
  className = ''
}: DetailedSectionProps) {
  return (
    <div className={`glass-card p-8 rounded-2xl hover-glow ${className}`}>
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
          <Icon className="relative h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold gradient-text">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <div className="space-y-4">
        {content.map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}