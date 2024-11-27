import React from 'react';
import { Brain, Stethoscope, Beaker, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Core Industries',
      links: [
        { name: 'Healthcare & MedTech', href: '/healthcare' },
        { name: 'Legal & Litigation', href: '/legal' },
        { name: 'Hedge Funds & VCs', href: '/hedge-funds-vc' },
        { name: 'Government', href: '/government' }
      ]
    },
    {
      title: 'Specialized Industries',
      links: [
        { name: 'Geopolitical Analysis', href: '/geopolitical-analysts' },
        { name: 'Critical Infrastructure', href: '/critical-infrastructure' },
        { name: 'Advanced Labs', href: '/advanced-labs' },
        { name: 'Opioid Crisis', href: '/opioid-crisis' }
      ]
    },
    {
      title: 'Emerging Technologies',
      links: [
        { name: 'FDA Programs', href: '/fda-programs' },
        { name: 'Carbon Capture', href: '/carbon-capture' },
        { name: 'Myocarditis', href: '/myocarditis' },
        { name: 'Synthetic Biology', href: '/synthetic-biology' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Leaf, href: '/carbon-capture', label: 'Carbon Capture' },
    { icon: Beaker, href: '/advanced-labs', label: 'Advanced Labs' },
    { icon: Stethoscope, href: '/healthcare', label: 'Healthcare & MedTech' }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300" />
                <Brain className="relative h-8 w-8 text-blue-600" />
              </div>
              <span className="font-bold text-xl tracking-tight gradient-text">
                ARCS Scientific
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Pioneering the future of regulatory compliance through quantum precision 
              and real-time intelligence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative p-2"
                  aria-label={social.label}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-200" />
                  <social.icon className="relative h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} ARCS Scientific. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}