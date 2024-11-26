import React, { useState } from 'react';
import ApplicationLayout from './Layout';
import { 
  Stethoscope, 
  Activity, 
  FileCheck, 
  Shield, 
  ChevronDown, 
  ChevronUp,
  ClipboardCheck,
  Beaker,
  Microscope,
  Zap,
  CheckCircle,
  AlertTriangle,
  BarChart
} from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'FDA Compliance Navigator',
    description: 'Real-time monitoring and automated compliance checks for FDA regulations'
  },
  {
    icon: Activity,
    title: 'Quality Management',
    description: 'Integrated quality control and compliance management system'
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Advanced risk analysis and mitigation strategies'
  },
  {
    icon: FileCheck,
    title: 'Documentation Control',
    description: 'Automated documentation and compliance tracking'
  }
];

export default function MedTech() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <ApplicationLayout
      title="MedTech Compliance Solutions"
      subtitle="Advanced regulatory compliance for medical technology"
      industry="MedTech"
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

      {/* FDA Track Pathways Section */}
      <div className="mb-16">
        <div 
          className="glass-card p-6 rounded-2xl cursor-pointer"
          onClick={() => toggleSection('fda')}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold gradient-text">FDA Track Pathways</h3>
            {expandedSection === 'fda' ? (
              <ChevronUp className="h-6 w-6 text-blue-600" />
            ) : (
              <ChevronDown className="h-6 w-6 text-blue-600" />
            )}
          </div>
          
          {expandedSection === 'fda' && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Pre-Market Submissions</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Beaker className="h-5 w-5 text-blue-500" />
                    <span>Premarket Approval (PMA) Applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ClipboardCheck className="h-5 w-5 text-blue-500" />
                    <span>510(k) Submissions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Microscope className="h-5 w-5 text-blue-500" />
                    <span>De Novo Classifications</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Post-Market Surveillance</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <span>Medical Device Reporting (MDR)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-blue-500" />
                    <span>Recall Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BarChart className="h-5 w-5 text-blue-500" />
                    <span>Quality System Metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </ApplicationLayout>
  );
}