import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StrategyCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  className?: string;
}

export default function StrategyCard({
  title,
  description,
  icon: Icon,
  points,
  className = ''
}: StrategyCardProps) {
  return (
    <div className={`glass-card p-6 rounded-xl hover-glow ${className}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
          <Icon className="relative h-6 w-6 text-blue-600" />
        </div>
        <h4 className="text-lg font-semibold gradient-text">{title}</h4>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-center space-x-3 text-gray-600">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}