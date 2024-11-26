import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface ApplicationLayoutProps {
  title: string;
  subtitle: string;
  industry: string;
  children: React.ReactNode;
}

export default function ApplicationLayout({ 
  title, 
  subtitle, 
  industry, 
  children 
}: ApplicationLayoutProps) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <Link 
                to="/"
                className="group flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to ARCS Scientific</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300" />
                <Brain className="relative h-8 w-8 text-blue-600" />
              </motion.div>
              <span className="font-bold text-xl tracking-tight gradient-text">
                ARCS for {industry}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <div className="relative pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 animate-pulse-glow" />
          
          {/* Enhanced Floating Icons */}
          <div className="absolute top-1/4 left-1/4 h-16 w-16 text-blue-500/20 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 h-12 w-12 text-emerald-500/20 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 h-14 w-14 text-blue-500/20 animate-float" style={{ animationDelay: '4s' }} />
          
          {/* Enhanced Glow Effects */}
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
            <ChevronDown className="relative h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}