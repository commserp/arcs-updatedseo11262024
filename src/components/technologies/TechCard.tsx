import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Technology } from './types';
import TechDemo from './TechDemo';

interface TechCardProps {
  tech: Technology;
  index: number;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
  inView: boolean;
}

export default function TechCard({ tech, index, isExpanded, isActive, onToggle, inView }: TechCardProps) {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => setAnimateStats(true), 300);
      return () => clearTimeout(timer);
    }
    setAnimateStats(false);
  }, [isExpanded]);

  return (
    <div
      className={`group relative transition-all duration-700 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Enhanced Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur`} />
      
      <div className={`relative glass-card rounded-2xl hover-glow transition-all duration-500 ${
        isExpanded ? 'transform scale-105 z-10' : ''
      }`}>
        {/* Card Header */}
        <div
          className="p-6 cursor-pointer"
          onClick={onToggle}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="relative group-hover:scale-110 transition-transform duration-300">
              <div className={`absolute -inset-1 bg-gradient-to-r ${tech.gradient} rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300`} />
              <tech.icon className={`relative h-8 w-8 bg-gradient-to-r ${tech.gradient} text-white p-1.5 rounded-lg transform transition-all duration-300`} />
            </div>
            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <h3 className="text-lg font-semibold gradient-text mb-2">
            {tech.title}
          </h3>
          
          <p className="text-gray-600">
            {tech.shortDescription}
          </p>
        </div>

        {/* Expanded Content */}
        <div className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-6 pt-0">
            <div className="h-px bg-gradient-to-r from-blue-500/20 to-emerald-500/20 mb-6" />
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {tech.stats.map((stat, statIndex) => (
                <div 
                  key={statIndex} 
                  className="text-center group/stat relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 rounded-lg transition-opacity duration-500 ${
                    animateStats ? 'opacity-5' : ''
                  }`} />
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover/stat:opacity-100 blur transition-all duration-300" />
                    <stat.icon className="relative w-6 h-6 mx-auto text-blue-600 mb-2" />
                  </div>
                  <div className={`text-lg font-semibold gradient-text transition-all duration-500 transform ${
                    animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: `${statIndex * 100}ms` }}>
                    {stat.value}
                  </div>
                  <div className={`text-sm text-gray-500 transition-all duration-500 transform ${
                    animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: `${(statIndex * 100) + 100}ms` }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Description */}
            <div className="text-gray-600 space-y-2 whitespace-pre-line">
              {tech.fullDescription}
            </div>

            {/* Interactive Demo with Enhanced Visuals */}
            <div className="mt-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg" />
              <div className="relative h-32 rounded-lg overflow-hidden backdrop-blur-sm">
                <TechDemo
                  type={tech.demo.type}
                  color={tech.demo.color}
                  active={isActive}
                />
              </div>
              
              {/* Demo Controls */}
              <div className="absolute bottom-2 right-2">
                <button 
                  className="p-1 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add demo controls functionality
                  }}
                >
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}