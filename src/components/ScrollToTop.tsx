import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg transition-all duration-300 z-50 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/50 to-emerald-500/50 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
    </button>
  );
}