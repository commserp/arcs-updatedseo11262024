import React, { useState, useEffect } from 'react';
import ApplicationLayout from './Layout';
import { 
  Scale, 
  FileText, 
  AlertTriangle, 
  BarChart, 
  Shield, 
  CheckCircle,
  GitBranch,
  Gavel,
  BookOpen,
  Target,
  Brain,
  Network,
  Database,
  Activity,
  Search,
  Lock
} from 'lucide-react';

interface Section {
  title: string;
  description: string;
  content: string[];
  icon: typeof Scale;
  metrics?: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
}

const sections: Section[] = [
  {
    title: 'Evidence Discovery and Analysis',
    description: 'Advanced pattern recognition and document analysis.',
    content: [
      'Pattern Recognition: Identify connections and patterns in communication records or document trails, essential in fraud, antitrust, and complex litigation cases.',
      'Enhanced Relevance Filtering: Use ARCS to prioritize documents based on relevance to key issues or topics.',
      'Outcome: Significantly accelerates discovery while ensuring relevant information is identified and prioritized.'
    ],
    icon: Search,
    metrics: [
      { label: 'Analysis Speed', value: '99.9%', trend: 'up' },
      { label: 'Accuracy', value: '98.5%', trend: 'up' },
      { label: 'Coverage', value: '100%', trend: 'up' }
    ]
  },
  {
    title: 'Predictive Case Analytics',
    description: 'Data-driven insights for case outcome prediction.',
    content: [
      'Case Outcome Prediction: ARCS analyzes past rulings and case factors, providing probability estimates for outcomes.',
      'Precedent Analysis: ARCS highlights key rulings and case laws that align with the case.',
      'Outcome: Attorneys can make more informed decisions about strategy and risk mitigation.'
    ],
    icon: Brain,
    metrics: [
      { label: 'Prediction Rate', value: '97.8%', trend: 'up' },
      { label: 'Analysis Time', value: '<2hrs', trend: 'down' },
      { label: 'Accuracy', value: '96.5%', trend: 'up' }
    ]
  },
  {
    title: 'Real-Time Case Monitoring',
    description: 'Continuous monitoring of case-relevant data sources.',
    content: [
      'Dynamic Update Integration: ARCS tracks and receives updates on new developments in relevant areas.',
      'Automated Alerts: ARCS flags changes in financial data, media coverage, and regulatory shifts.',
      'Outcome: Ensures attorneys stay updated on pertinent information for rapid response.'
    ],
    icon: Activity,
    metrics: [
      { label: 'Update Speed', value: '<1ms', trend: 'down' },
      { label: 'Coverage', value: '100%', trend: 'up' },
      { label: 'Accuracy', value: '99.9%', trend: 'up' }
    ]
  },
  {
    title: 'Case Strategy Development',
    description: 'Enhanced strategy through data-driven insights.',
    content: [
      'Strategic Pattern Detection: ARCS uncovers commonalities in judicial rulings and court dynamics.',
      'Juror Profiling and Psychographics: ARCS analyzes data to help tailor arguments for specific demographics.',
      'Outcome: Attorneys can refine arguments and improve jury engagement.'
    ],
    icon: Target,
    metrics: [
      { label: 'Success Rate', value: '94.5%', trend: 'up' },
      { label: 'Optimization', value: '96.8%', trend: 'up' },
      { label: 'Accuracy', value: '98.2%', trend: 'up' }
    ]
  },
  {
    title: 'Expert Witness Optimization',
    description: 'Advanced analysis for expert witness selection and preparation.',
    content: [
      'Expert Witness Profiling: Analyze potential experts based on experience and past outcomes.',
      'Testimony Strategy Development: Structure cross-examinations and direct testimony questions.',
      'Outcome: Optimize expert selection and testimony preparation for maximum impact.'
    ],
    icon: Network,
    metrics: [
      { label: 'Match Rate', value: '96.5%', trend: 'up' },
      { label: 'Success Rate', value: '94.3%', trend: 'up' },
      { label: 'Coverage', value: '100%', trend: 'up' }
    ]
  }
];

const strategicImpacts = [
  {
    title: 'Enhanced Discovery',
    description: 'Accelerated evidence analysis and pattern recognition.',
    icon: Search
  },
  {
    title: 'Predictive Insights',
    description: 'Data-driven case outcome predictions.',
    icon: Brain
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Continuous tracking of case-relevant data.',
    icon: Activity
  },
  {
    title: 'Strategy Optimization',
    description: 'Advanced case strategy development.',
    icon: Target
  }
];

const litigationCapabilities = [
  {
    title: 'Settlement Analysis',
    description: 'Predictive insights for optimal settlement terms.',
    icon: BarChart
  },
  {
    title: 'Behavioral Analysis',
    description: 'Advanced profiling of opposing counsel.',
    icon: Network
  },
  {
    title: 'Regulatory Compliance',
    description: 'Comprehensive regulatory research and analysis.',
    icon: Shield
  }
];

export default function Litigation() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setShowMetrics(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApplicationLayout
      title="ARCS for Litigation"
      subtitle="Advanced compliance intelligence for legal operations"
      industry="Litigation"
    >
      {/* Introduction Section */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <p className="text-gray-600 leading-relaxed">
          Litigation attorneys can leverage the ARCS system to improve case strategy, streamline evidence gathering, enhance case analytics, and strengthen decision-making in litigation scenarios. Through advanced AI capabilities, real-time monitoring, and adaptive learning systems, ARCS offers substantial advantages across various stages of legal proceedings, particularly for cases involving large volumes of data, complex regulatory issues, or digital evidence.
        </p>
      </div>

      {/* Main Components */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ${
              showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card rounded-2xl hover-glow">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-900 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
                        <section.icon className="relative h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold gradient-text">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {section.description}
                        </p>
                      </div>
                    </div>
                    {expandedSection === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSection === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    {/* Metrics Grid */}
                    {section.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {section.metrics.map((metric, i) => (
                          <div 
                            key={i}
                            className={`text-center transition-all duration-500 transform ${
                              showMetrics && expandedSection === index
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className="text-2xl font-bold gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {metric.label}
                            </div>
                            <div className={`text-xs ${
                              metric.trend === 'up' ? 'text-emerald-500' : 'text-blue-500'
                            }`}>
                              {metric.trend === 'up' ? '↑' : '↓'}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Content */}
                    <div className="space-y-4">
                      {section.content.map((paragraph, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Impact */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">Strategic Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategicImpacts.map((impact, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <impact.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold gradient-text">
                  {impact.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Litigation Capabilities */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">Litigation Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {litigationCapabilities.map((capability, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <capability.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold gradient-text">
                  {capability.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Game-Changing Legal Intelligence
        </h3>
        <p className="text-gray-600 leading-relaxed">
          ARCS's application in litigation offers a competitive advantage in handling complex cases, managing large data volumes, and developing data-informed litigation strategies. By adopting ARCS, litigation attorneys can streamline their workflows, reduce costs, and enhance case outcomes through sophisticated analytics, predictive modeling, and adaptive learning.
        </p>
      </div>
    </ApplicationLayout>
  );
}