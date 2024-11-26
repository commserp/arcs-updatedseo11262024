import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroArrowIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
        <ChevronDown className="relative h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
      </div>
    </div>
  );
}
