import React, { useEffect, useRef } from 'react';
import { Shield } from 'lucide-react';

interface TechDemoProps {
  type: string;
  color: string;
  active: boolean;
}

export default function TechDemo({ type, color, active }: TechDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (type === 'circuit' && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      const drawCircuit = () => {
        ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
        // Add circuit pattern animation
      };

      if (active) {
        const animation = setInterval(drawCircuit, 50);
        return () => clearInterval(animation);
      }
    }
  }, [type, active]);

  const baseClasses = "w-full h-full absolute inset-0 transition-all duration-500";
  
  switch (type) {
    case 'pulse':
      return (
        <div className={`${baseClasses} flex items-center justify-center`}>
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${color}-500/30 to-${color}-600/30 ${
            active ? 'animate-pulse' : ''
          }`} />
        </div>
      );
    case 'wave':
      return (
        <div className={`${baseClasses} flex items-center justify-center overflow-hidden`}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-1 bg-gradient-to-r from-${color}-500/30 to-${color}-600/30 rounded-full ${
                active ? 'animate-wave' : ''
              }`}
              style={{
                top: `${45 + (i * 5)}%`,
                animationDelay: `${i * 200}ms`,
                transform: active ? 'translateX(0)' : 'translateX(-100%)'
              }}
            />
          ))}
        </div>
      );
    case 'grid':
      return (
        <div className={`${baseClasses} grid grid-cols-4 gap-1 p-2`}>
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r from-${color}-500/30 to-${color}-600/30 rounded ${
                active ? 'animate-pulse' : ''
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      );
    case 'shield':
      return (
        <div className={`${baseClasses} flex items-center justify-center`}>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/30 to-${color}-600/30 rounded-full blur-xl ${
              active ? 'animate-pulse' : ''
            }`} />
            <Shield className={`relative w-16 h-16 text-${color}-500 ${
              active ? 'animate-bounce' : ''
            }`} />
          </div>
        </div>
      );
    case 'flow':
      return (
        <div className={`${baseClasses} flex items-center justify-center`}>
          <div className={`w-full h-16 relative ${active ? 'animate-flow' : ''}`}>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`absolute h-1 bg-gradient-to-r from-${color}-500/30 to-${color}-600/30 rounded-full transform ${
                  active ? 'translate-x-full' : 'translate-x-0'
                }`}
                style={{
                  width: '20%',
                  left: `${i * 25}%`,
                  top: `${(i % 3) * 6}px`,
                  transition: 'transform 1s ease-in-out',
                  transitionDelay: `${i * 200}ms`
                }}
              />
            ))}
          </div>
        </div>
      );
    case 'circuit':
      return (
        <div className={`${baseClasses} relative`}>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/10 to-transparent ${
            active ? 'animate-pulse' : ''
          }`} />
        </div>
      );
    default:
      return null;
  }
}