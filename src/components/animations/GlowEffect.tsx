import React from 'react';

interface GlowEffectProps {
  children: React.ReactNode;
  color?: string;
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
}

export default function GlowEffect({ 
  children, 
  color = 'blue', 
  intensity = 'medium',
  className = ''
}: GlowEffectProps) {
  const getGlowIntensity = () => {
    switch (intensity) {
      case 'light': return 'opacity-20';
      case 'medium': return 'opacity-40';
      case 'strong': return 'opacity-60';
      default: return 'opacity-40';
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-lg ${getGlowIntensity()} blur group-hover:opacity-75 transition-all duration-300`} />
      <div className="relative">{children}</div>
    </div>
  );
}