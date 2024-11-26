import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Brain,
  Cpu,
  Network,
  ChevronDown,
  Zap,
  Globe,
} from 'lucide-react';

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('arcsFoundational');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 -z-20" />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 animate-pulse-glow" />

        {/* Enhanced Floating Icons */}
        <Brain
          className="absolute top-1/4 left-1/4 h-16 w-16 text-blue-500/20 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <Cpu
          className="absolute top-1/3 right-1/4 h-12 w-12 text-emerald-500/20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <Network
          className="absolute bottom-1/4 left-1/3 h-14 w-14 text-blue-500/20 animate-float"
          style={{ animationDelay: '4s' }}
        />
        <Zap
          className="absolute top-1/2 right-1/3 h-10 w-10 text-emerald-500/20 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <Globe
          className="absolute bottom-1/3 right-1/2 h-12 w-12 text-blue-500/20 animate-float"
          style={{ animationDelay: '3s' }}
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
        <div
          className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Enhanced Welcome Badge */}
          <div className="reveal opacity-0 inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover-glow cursor-pointer group">
            <Sparkles className="h-4 w-4 text-blue-600 group-hover:text-emerald-500 transition-colors duration-300" />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
              Welcome to ARCS Scientific
            </span>
          </div>

          {/* Enhanced Hero Title */}
          <h1
            className="reveal opacity-0 text-5xl md:text-7xl font-bold tracking-tight space-y-4"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block gradient-text">Pioneering Adaptive</span>
            <span className="block gradient-text">Compliance through</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-500">
              Quantum Precision
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p
            className="reveal opacity-0 text-3xl font-semibold gradient-text tracking-wide"
            style={{ animationDelay: '0.4s' }}
          >
            Real-Time Intelligence
          </p>

          {/* Enhanced Description */}
          <p
            className="reveal opacity-0 max-w-2xl text-xl text-gray-600 leading-relaxed"
            style={{ animationDelay: '0.6s' }}
          >
            ARCS Scientific pioneers breakthrough research in cognitive systems
            and AI, developing innovative solutions that push the boundaries of
            what's possible.
          </p>

          {/* Enhanced CTA Buttons */}
          <div
            className="reveal opacity-0 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            style={{ animationDelay: '0.8s' }}
          >
            <button className="group relative flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
              <span className="text-lg">
                <a href="#arcsFoundational" onClick={handleContactClick}>
                  Explore Our Work
                </a>
              </span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/50 to-emerald-500/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
            </button>
            <button className="group text-gray-700 hover:text-blue-600 px-8 py-4 transition-all duration-300 relative">
              <span className="text-lg">
                <Link to="/founder">Learn More</Link>
              </span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 group-hover:w-1/2 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
          <ChevronDown className="relative h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
}
