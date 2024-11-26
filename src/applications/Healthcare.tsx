import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ApplicationLayout from './Layout';
import {
  Zap,
  Clock,
  DollarSign,
  FileText,
  Database,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  BarChart2,
  Search,
  Layers,
  GitBranch,
  Activity,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from 'lucide-react';

interface Section {
  title: string;
  description: string;
  bgapplication: string;
  content: string[];
  icon: typeof Zap;
  metrics?: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
}

const sections: Section[] = [
  {
    title: 'Accelerating FDA Fast Track Pathways',
    description:
      'Streamlining the process for Fast Track designation and approval.',
    bgapplication:
      'ARCS automates predicate analysis and optimizes Fast Track applications to expedite the approval process.',
    content: [
      'Automated Predicate Analysis: AI-powered matching of new technologies with existing FDA-cleared devices.',
      'Fast Track Criteria Mapping: Aligns device specifications with Fast Track guidelines.',
      'Evidence Preparation: Provides guidance on clinical and non-clinical evidence needed for Fast Track applications.',
    ],
    icon: Zap,
    metrics: [
      { label: 'Approval Time Reduction', value: '40%', trend: 'down' },
      { label: 'Application Accuracy', value: '98%', trend: 'up' },
      { label: 'Fast Track Success Rate', value: '85%', trend: 'up' },
    ],
  },
  {
    title: 'Cost Reduction in Pre-Approval Phases',
    description:
      'Minimizing expenses associated with FDA application processes.',
    bgapplication:
      'ARCS streamlines regulatory documentation and optimizes clinical data management to reduce costs.',
    content: [
      'Automated Document Preparation: NLP and structured data algorithms organize key information into FDA-compliant formats.',
      'Real-Time Error Detection: AI-driven reviews ensure documentation consistency and regulatory adherence.',
      'Predictive Modeling for Clinical Success: AI simulations identify weak points in clinical data, optimizing trial design.',
    ],
    icon: DollarSign,
    metrics: [
      { label: 'Documentation Cost Reduction', value: '60%', trend: 'down' },
      { label: 'Clinical Trial Efficiency', value: '75%', trend: 'up' },
      { label: 'Overall Cost Savings', value: '45%', trend: 'down' },
    ],
  },
  {
    title: 'Enhancing Traditional FDA Application Processes',
    description: 'Improving efficiency and accuracy in FDA filings.',
    bgapplication:
      'ARCS provides dynamic, adaptive application filing and strategic scenario analysis for optimal pathway selection.',
    content: [
      'Adaptive Compliance Intelligence: Continuous learning from FDA feedback to refine document content.',
      'Centralized Documentation Management: Comprehensive system for organizing all FDA application materials.',
      'FDA Pathway Simulations: Evaluates multiple filing scenarios to identify the most favorable route.',
    ],
    icon: FileText,
    metrics: [
      { label: 'Filing Precision', value: '99%', trend: 'up' },
      { label: 'Time Saved on Updates', value: '70%', trend: 'up' },
      { label: 'Optimal Pathway Selection', value: '92%', trend: 'up' },
    ],
  },
  {
    title: 'Post-Clearance Compliance and Monitoring',
    description: 'Ensuring ongoing FDA compliance after market clearance.',
    bgapplication:
      'ARCS provides real-time compliance tracking and predictive analytics for risk prevention post-clearance.',
    content: [
      'Automated Reporting for Audits: Generates reports for FDA audits to meet post-market surveillance obligations.',
      'Dynamic Compliance Alerts: Flags potential compliance issues in real-time for proactive responses.',
      'Risk Detection and Management: AI algorithms detect patterns associated with potential compliance risks.',
    ],
    icon: Shield,
    metrics: [
      { label: 'Compliance Rate', value: '99.9%', trend: 'up' },
      { label: 'Risk Prevention', value: '85%', trend: 'up' },
      { label: 'Audit Readiness', value: '100%', trend: 'up' },
    ],
  },
  {
    title: 'Reducing Complexity in FDA Filing and Compliance',
    description: 'Simplifying navigation through FDA regulatory processes.',
    bgapplication:
      'ARCS offers AI-driven decision support and continuous learning to reduce uncertainty in FDA compliance.',
    content: [
      'Guided Compliance Pathways: Tailored recommendations for each stage of the FDA process.',
      'What-If Scenario Modeling: Explore potential regulatory outcomes for different strategic choices.',
      'Feedback-Driven System Updates: Adjusts compliance strategies based on prior FDA interactions.',
    ],
    icon: Layers,
    metrics: [
      { label: 'Decision Confidence', value: '95%', trend: 'up' },
      { label: 'Regulatory Clarity', value: '90%', trend: 'up' },
      { label: 'Process Simplification', value: '80%', trend: 'up' },
    ],
  },
];

const strategicAdvantages = [
  {
    title: 'Cost Savings',
    description:
      'Reduced resources for documentation, clinical data management, and filings.',
    icon: DollarSign,
  },
  {
    title: 'Enhanced Efficiency',
    description: 'Accelerated FDA timelines with real-time compliance updates.',
    icon: Clock,
  },
  {
    title: 'Improved Decision-Making',
    description: 'Advanced scenario modeling for informed regulatory choices.',
    icon: GitBranch,
  },
  {
    title: 'Regulatory Assurance',
    description: 'Consistent, high-quality compliance across all FDA phases.',
    icon: CheckCircle,
  },
];

export default function ARCSForFDAFastTrack() {
  // Existing state and hooks remain the same...
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
      title="ARCS for FDA Fast Track Pathways"
      subtitle="Optimizing FDA Clearance for Advanced Medical Technology"
      industry="Medical Technology"
    >
      <Helmet>
        <title>Healthcare Compliance Solutions | ARCS Scientific</title>
        <meta
          name="description"
          content="Transform healthcare regulatory compliance with ARCS Scientific's advanced AI-driven solutions. Streamline FDA approvals, enhance patient safety, and accelerate medical innovation."
        />
        <meta
          name="keywords"
          content="healthcare compliance, FDA fast track, medical technology, regulatory compliance, patient safety, healthcare innovation, medical device compliance"
        />
        <meta
          property="og:title"
          content="Healthcare Compliance Solutions | ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Accelerate FDA approvals and enhance healthcare compliance with ARCS Scientific's advanced regulatory solutions."
        />
        <link
          rel="canonical"
          href="https://www.arcsscientific.com/healthcare"
        />
        <meta name="author" content="James Scott DC Think Tank" />
      </Helmet>

      {/* Rest of the component remains the same... */}
      {/* Executive Summary */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <h2 className="text-2xl font-bold gradient-text mb-4">
          Executive Summary
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The Adaptive Regulatory Compliance System (ARCS) is an advanced
          framework designed to optimize FDA Fast Track pathways for medical
          technology companies. By leveraging real-time compliance automation,
          predictive analytics, and adaptive learning, ARCS significantly
          reduces application costs, accelerates FDA clearance timelines, and
          increases regulatory alignment. This framework addresses the intricate
          FDA requirements with unparalleled efficiency, offering medical
          technology firms a streamlined, cost-effective route to achieving and
          maintaining FDA clearance.
        </p>
      </div>

      {/* Main Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ${
              showContent
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card rounded-2xl hover-glow">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setExpandedSection(expandedSection === index ? null : index)
                  }
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
                    expandedSection === index
                      ? 'max-h-[800px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 mb-4">
                      <span className="font-bold gradient-text">
                        Application:{' '}
                      </span>
                      {section.bgapplication}
                    </p>

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
                            <div
                              className={`text-xs ${
                                metric.trend === 'up'
                                  ? 'text-emerald-500'
                                  : 'text-blue-500'
                              }`}
                            >
                              {metric.trend === 'up' ? '↑' : '↓'}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Content */}
                    <div className="space-y-4">
                      {section.content.map((item, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          • {item}
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

      {/* Strategic Advantages */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">
          Strategic Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategicAdvantages.map((advantage, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <advantage.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold gradient-text">
                  {advantage.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          ARCS: Essential FDA Compliance Tool for Medical Technology
        </h3>
        <p className="text-gray-600 leading-relaxed">
          For medical technology firms aiming to streamline FDA processes, ARCS
          offers a transformative, cost-effective solution. Through advanced
          automation, predictive analytics, and adaptive compliance, ARCS
          accelerates clearance, supports cost management, and reduces the
          complexities associated with FDA compliance. By investing in ARCS,
          companies can navigate the FDA Fast Track and other clearance pathways
          with confidence, building a robust foundation for long-term compliance
          and competitive advantage in the marketplace.
        </p>
      </div>

      {/* Q&A with James Scott */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Q&A with James Scott on ARCS for FDA Fast Track Pathways
        </h3>
        <div className="space-y-6">
          {[
            {
              q: 'What is the core purpose of ARCS for FDA pathways?',
              a: "ARCS streamlines the FDA application process for medical technology companies by automating compliance, adapting to regulatory changes in real-time, and using predictive analytics to optimize each step. It's designed to reduce costs, accelerate timelines, and ultimately ease the path to FDA clearance for advanced medical devices.",
              icon: Lightbulb,
            },
            {
              q: 'How does ARCS specifically help companies aiming for FDA Fast Track designation?',
              a: 'ARCS identifies and documents all qualifying features for Fast Track, using AI to match device characteristics with FDA criteria. This alignment with Fast Track requirements increases the likelihood of qualification and speeds up the approval process by ensuring all critical criteria are met from the outset.',
              icon: Zap,
            },
            {
              q: 'How does ARCS reduce the cost and complexity of the FDA process?',
              a: 'Through automation and predictive modeling, ARCS eliminates much of the manual work in documentation and data preparation. This reduces costs by minimizing errors, decreasing the likelihood of resubmissions, and ensuring companies only invest in essential steps to meet FDA requirements.',
              icon: DollarSign,
            },
            {
              q: 'How does ARCS improve clinical data management for FDA applications?',
              a: 'ARCS manages clinical data through real-time monitoring and predictive analytics, which simulate potential FDA outcomes. This helps identify data gaps early on and optimizes the structure and presentation of trial data, reducing the likelihood of costly re-trials or additional studies.',
              icon: Database,
            },
            {
              q: 'How does ARCS help with post-market compliance?',
              a: 'ARCS automates post-market monitoring, generating audit-ready reports and ensuring ongoing compliance with FDA requirements. By tracking device performance and regulatory changes, ARCS allows companies to maintain long-term compliance and proactively manage risks.',
              icon: Shield,
            },
            {
              q: 'How does ARCS leverage predictive analytics to enhance FDA submissions?',
              a: 'Predictive analytics in ARCS identifies potential weaknesses in data or documentation that could hinder FDA acceptance. By flagging these areas early, ARCS helps companies address issues before submission, making applications stronger and less prone to rejection.',
              icon: TrendingUp,
            },
            {
              q: 'How does ARCS assist with FDA requirements for clinical evidence?',
              a: 'ARCS structures and prepares clinical evidence to meet FDA standards, ensuring that both clinical and non-clinical data are presented in a way that aligns with regulatory expectations. This reduces the chances of delays caused by missing or improperly formatted data.',
              icon: FileText,
            },
            {
              q: 'How does ARCS handle adaptive learning in regulatory compliance?',
              a: "ARCS's adaptive learning capabilities monitor real-time FDA updates and industry trends, continuously refining the compliance framework. This ensures the system remains aligned with the latest regulatory requirements and improves over time.",
              icon: GitBranch,
            },
            {
              q: 'How does ARCS improve overall application quality?',
              a: 'ARCS enhances application quality by structuring data, performing thorough error-checking, and using AI-driven tools to ensure each document meets FDA standards. This improves submission quality and boosts the chances of a successful outcome.',
              icon: CheckCircle,
            },
            {
              q: 'How can ARCS impact product launch timelines?',
              a: 'By expediting the FDA clearance process through automation, precision, and real-time adaptation, ARCS shortens the timeline from development to market. This faster clearance means companies can bring products to market sooner.',
              icon: Clock,
            },
            {
              q: 'How do you see ARCS reshaping the FDA approval landscape for medical technology?',
              a: 'ARCS represents a transformative shift by combining automation, predictive analytics, and adaptive learning into one system. For medical technology companies, ARCS simplifies FDA processes, improves compliance outcomes, and enhances strategic decision-making. As a result, it accelerates time-to-market while safeguarding regulatory integrity, setting a new standard for efficiency and reliability in the FDA approval process.',
              icon: Lightbulb,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <item.icon className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Q: {item.q}</p>
                <p className="text-gray-600 mt-2">James Scott: {item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ApplicationLayout>
  );
}
