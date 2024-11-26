import React from 'react';
import { GlowEffect } from '../animations';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10">
        <div className="absolute inset-0 opacity-5 bg-tech-pattern animate-grid-scroll" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <GlowEffect>
          {icon && <div className="inline-block mb-6">{icon}</div>}
        </GlowEffect>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">{title}</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
