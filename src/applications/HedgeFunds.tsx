import React from 'react';
import ApplicationLayout from './Layout';
import { TrendingUp, LineChart, AlertTriangle, Clock, Database } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Real-Time Compliance Monitoring',
    description: 'Continuous monitoring of trading activities and regulatory compliance.'
  },
  {
    icon: LineChart,
    title: 'Risk Analytics',
    description: 'Advanced risk analysis and regulatory reporting automation.'
  },
  {
    icon: AlertTriangle,
    title: 'Early Warning System',
    description: 'Predictive analytics for potential compliance issues.'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure and compliant data storage and processing solutions.'
  }
];

export default function HedgeFunds() {
  return (
    <ApplicationLayout
      title="Hedge Fund Compliance Solutions"
      subtitle="Advanced compliance systems for hedge fund operations"
      industry="Hedge Funds"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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