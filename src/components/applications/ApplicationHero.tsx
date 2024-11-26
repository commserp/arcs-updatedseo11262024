import React from 'react';
import { Brain } from 'lucide-react';
import HeroArrowIndicator from '../HeroArrowIndicator.tsx';
interface ApplicationHeroProps {
  title: string;
  subtitle: string;
  industry: string;
}

export default function ApplicationHero({
  title,
  subtitle,
  industry,
}: ApplicationHeroProps) {
  return (
    <div className="relative pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 animate-pulse-glow" />

        {/* Enhanced Floating Icons */}
        <div
          className="absolute top-1/4 left-1/4 h-16 w-16 text-blue-500/20 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 h-12 w-12 text-emerald-500/20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-14 w-14 text-blue-500/20 animate-float"
          style={{ animationDelay: '4s' }}
        />

        {/* Enhanced Glow Effects */}
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover-glow cursor-pointer group mb-8">
            <Brain className="h-5 w-5 text-blue-600 group-hover:text-emerald-500 transition-colors duration-300" />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              ARCS for {industry}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
      </div>
      <HeroArrowIndicator />
    </div>
  );
}
