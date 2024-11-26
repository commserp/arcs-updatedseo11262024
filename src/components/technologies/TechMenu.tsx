import React from 'react';
import { Technology } from './types';

interface TechMenuProps {
  technologies: Technology[];
  activeIndex: number | null;
  onSelect: (index: number) => void;
}

export default function TechMenu({ technologies, activeIndex, onSelect }: TechMenuProps) {
  return (
    <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
      <div className="flex space-x-4">
        {technologies.map((tech, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                : 'bg-white/50 hover:bg-white/80 text-gray-600 hover:text-gray-900'
            }`}
          >
            <tech.icon className="w-4 h-4" />
            <span className="whitespace-nowrap">{tech.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}