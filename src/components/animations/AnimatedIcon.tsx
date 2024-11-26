import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  gradient?: string;
  size?: number;
  className?: string;
}

export default function AnimatedIcon({
  icon: Icon,
  gradient = 'from-blue-500 to-emerald-500',
  size = 8,
  className = ''
}: AnimatedIconProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300`} />
      <Icon className={`relative h-${size} w-${size} text-blue-600 transform transition-transform duration-300 group-hover:scale-110`} />
    </div>
  );
}