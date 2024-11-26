import React from 'react';
import { FadeInSection } from '../animations';
import { Shield, Activity, Brain, ChevronDown, ChevronUp } from 'lucide-react';

interface Challenge {
  title: string;
  description: string;
}

interface Capability {
  title: string;
  description: string;
  benefits: string[];
  metrics?: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
}

interface Example {
  title: string;
  description: string;
  impact: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface ApplicationContentProps {
  challenges: Challenge[];
  capabilities: Capability[];
  examples: Example[];
  dataInsights: {
    description: string;
    methodologies: string[];
    outcomes: string[];
  };
  futureCapabilities: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export default function ApplicationContent({
  challenges,
  capabilities,
  examples,
  dataInsights,
  futureCapabilities,
  metrics
}: ApplicationContentProps) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="space-y-16">
      {/* Sector Challenges */}
      <FadeInSection>
        <div className="enhanced-section p-8">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Sector-Specific Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="enhanced-card p-6">
                <h3 className="text-lg font-semibold gradient-text mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ARCS Capabilities */}
      <FadeInSection delay={200}>
        <div className="enhanced-section p-8">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            ARCS Capabilities
          </h2>
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="enhanced-card">
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleSection(`capability-${index}`)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="enhanced-icon">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold gradient-text">
                        {capability.title}
                      </h3>
                      <p className="text-gray-600">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                  {expandedSection === `capability-${index}` ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                
                {expandedSection === `capability-${index}` && (
                  <div className="p-6 border-t border-gray-100">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Key Benefits</h4>
                      <ul className="space-y-2">
                        {capability.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-3 text-gray-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {capability.metrics && (
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          {capability.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
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
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Practical Examples */}
      <FadeInSection delay={400}>
        <div className="enhanced-section p-8">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="enhanced-card p-6">
                <h3 className="text-lg font-semibold gradient-text mb-3">
                  {example.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {example.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                  <p className="text-gray-600">
                    {example.impact}
                  </p>
                  {example.metrics && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {example.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold gradient-text">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Data-Driven Insights */}
      <FadeInSection delay={600}>
        <div className="enhanced-section p-8">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Data-Driven Insights
          </h2>
          <div className="enhanced-card p-6">
            <p className="text-gray-600 mb-6">
              {dataInsights.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold gradient-text mb-4">
                  Methodologies
                </h3>
                <ul className="space-y-2">
                  {dataInsights.methodologies.map((methodology, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-600">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <span>{methodology}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold gradient-text mb-4">
                  Outcomes
                </h3>
                <ul className="space-y-2">
                  {dataInsights.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-600">
                      <Activity className="h-5 w-5 text-emerald-600" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Future Capabilities */}
      <FadeInSection delay={800}>
        <div className="enhanced-section p-8">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Forward-Looking Capabilities
          </h2>
          <div className="enhanced-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="enhanced-icon mt-1">
                    <Brain className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-600">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Success Metrics */}
      <FadeInSection delay={1000}>
        <div className="enhanced-section p-8">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Success Metrics and Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="enhanced-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}