import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Cpu } from 'lucide-react';
import { technologies } from './technologies/data';
import TechMenu from './technologies/TechMenu';
import TechCard from './technologies/TechCard';

export default function Technologies() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
    setActiveDemo(expandedCard === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10">
        <div className="absolute inset-0 opacity-5 bg-tech-pattern animate-grid-scroll" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/80" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur animate-pulse-glow" />
              <Cpu className="relative w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold gradient-text sm:text-4xl">
              Core Technologies
            </h2>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Pioneering the future of artificial intelligence and cognitive computing
            through quantum-inspired solutions
          </p>
        </div>

        {/* Technology Menu */}
        <TechMenu
          technologies={technologies}
          activeIndex={expandedCard}
          onSelect={toggleCard}
        />

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              tech={tech}
              index={index}
              isExpanded={expandedCard === index}
              isActive={activeDemo === index}
              onToggle={() => toggleCard(index)}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}