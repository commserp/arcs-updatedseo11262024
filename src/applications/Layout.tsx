import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';
import ApplicationHero from '../components/applications/ApplicationHero';

interface LayoutProps {
  title: string;
  subtitle: string;
  industry: string;
  children: React.ReactNode;
}

export default function ApplicationLayout({
  title,
  subtitle,
  industry,
  children,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
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
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300" />
                <Brain className="relative h-8 w-8 text-blue-600" />
              </div>
              <span className="font-bold text-xl tracking-tight gradient-text">
                ARCS for {industry}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <ApplicationHero title={title} subtitle={subtitle} industry={industry} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {children}
      </main>
    </div>
  );
}
