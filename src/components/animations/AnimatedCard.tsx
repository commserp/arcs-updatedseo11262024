import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({
  title,
  description,
  icon: Icon,
  gradient = 'from-blue-500 to-emerald-500',
  children,
  className = ''
}: AnimatedCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group relative ${className}`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur`} />
      <div className="relative glass-card rounded-2xl hover-glow">
        <div
          className="p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300`} />
                <Icon className="relative h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold gradient-text">
                {title}
              </h3>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </div>
          <p className="mt-2 text-gray-600">
            {description}
          </p>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 pt-0 border-t border-gray-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}