import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  FileSearch,
  GitCompare,
  Settings,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Real-Time Compliance Monitoring',
    description:
      'Advanced AI systems continuously analyze and adapt to regulatory changes, ensuring proactive compliance across all operations.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: FileSearch,
    title: 'Quantum Document Structuring',
    description:
      'Revolutionary quantum-inspired algorithms that transform unstructured data into actionable regulatory insights.',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: GitCompare,
    title: 'Market Relevance Cross-Referencing',
    description:
      'Intelligent systems that correlate market dynamics with regulatory requirements for contextual compliance.',
    gradient: 'from-blue-600 to-emerald-500',
  },
  {
    icon: Settings,
    title: 'Dynamic Regulatory Adaptation',
    description:
      'Self-evolving frameworks that automatically adjust to new compliance requirements and industry standards.',
    gradient: 'from-emerald-600 to-blue-500',
  },
];

export default function Features() {
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
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      <div className="absolute inset-0 opacity-5 grid-pattern animate-grid-scroll" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal opacity-0">
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl">
            Key Highlights
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pioneering the future of regulatory intelligence with
            quantum-inspired solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative reveal opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur`}
              />
              <div className="relative glass-card p-8 rounded-2xl hover-glow h-full flex items-start space-x-6 transform transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300`}
                    />
                    <feature.icon
                      className={`relative h-12 w-12 bg-gradient-to-r ${feature.gradient} rounded-xl p-2.5 text-white transform group-hover:scale-110 transition-all duration-300`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:gradient-text transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Learn More Button */}
        <div
          className="flex justify-center reveal opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <button className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <span className="relative z-10">
              <Link to="/legal">Learn More</Link>
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/50 to-emerald-500/50 blur-xl opacity-0 group-hover:opacity-75 scale-50 group-hover:scale-100 transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 animate-pulse-glow opacity-0 group-hover:opacity-50" />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />
      </div>
    </section>
  );
}
