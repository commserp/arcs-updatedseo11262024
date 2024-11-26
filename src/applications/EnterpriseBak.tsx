import React from 'react';
import ApplicationLayout from './Layout';
import { Building, Shield, Users, BarChart, GitBranch } from 'lucide-react';

const features = [
  {
    icon: Building,
    title: 'Enterprise Compliance',
    description: 'Comprehensive compliance solutions for large organizations.'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Advanced risk assessment and compliance monitoring.'
  },
  {
    icon: Users,
    title: 'Organizational Integration',
    description: 'Seamless compliance integration across departments.'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Real-time compliance analytics and reporting.'
  },
  {
    icon: GitBranch,
    title: 'Process Automation',
    description: 'Automated compliance workflows and verification.'
  }
];

export default function Enterprise() {
  return (
    <ApplicationLayout
      title="Enterprise Compliance Solutions"
      subtitle="Advanced regulatory compliance for enterprise operations"
      industry="Enterprise"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
            <div className="relative glass-card p-8 rounded-2xl hover-glow">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                  <feature.icon className="relative h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ApplicationLayout>
  );
}