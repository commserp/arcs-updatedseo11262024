import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ApplicationLayout from './Layout';
import {
  Shield,
  BarChart,
  Zap,
  Network,
  Globe,
  FileCheck,
  AlertTriangle,
  Clock,
  Users,
  TrendingUp,
  Lock,
  Database,
  Briefcase,
  Scale,
  FileSearch,
  PieChart,
  Shuffle,
  MessageSquare,
  Sliders,
  Activity,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  Compass,
  FileText,
  PenToolIcon as Tool,
  Truck,
  Thermometer,
  Droplet,
  Wind,
  Box,
  Layers,
} from 'lucide-react';

interface Section {
  title: string;
  description: string;
  bgapplication: string;
  content: string[];
  icon: typeof Shield;
  metrics?: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
}

const sections: Section[] = [
  {
    title:
      'Real-Time Compliance Monitoring for Comprehensive Manufacturing Standards',
    description:
      'Instantaneous regulatory updates and event-responsive compliance adjustments.',
    bgapplication:
      "ARCS's real-time compliance monitoring ensures that all manufacturing activities align with complex, multi-level standards, safeguarding against compliance gaps across diverse production lines.",
    content: [
      'Instantaneous Regulatory Updates: ARCS continuously scans and integrates regulatory changes across jurisdictions, adapting compliance protocols within milliseconds to keep operations current with evolving standards.',
      'Event-Responsive Compliance Adjustments: Leveraging a robust event-driven architecture, ARCS dynamically modifies compliance protocols in response to changes in production conditions, such as new material sourcing, facility expansions, and product modifications.',
      'Strategic Impact: Real-time compliance monitoring reduces the cost and time of manual updates, enhances operational resilience, and empowers manufacturers to respond swiftly to regulatory changes, particularly in quality and safety standards.',
    ],
    icon: Shield,
    metrics: [
      { label: 'Update Speed', value: '<5ms', trend: 'down' },
      { label: 'Compliance Accuracy', value: '99.9%', trend: 'up' },
      { label: 'Cost Reduction', value: '30%', trend: 'down' },
    ],
  },
  {
    title: 'Advanced Quality Assurance and Predictive Risk Management',
    description:
      'Machine learning-driven quality prediction and real-time anomaly detection.',
    bgapplication:
      'ARCS enhances quality management through predictive analytics, identifying potential quality issues early and enabling proactive responses.',
    content: [
      'Machine Learning-Driven Quality Prediction: ARCS uses advanced machine learning models to analyze production data, forecasting potential quality issues before they impact the final product, thereby reducing defect rates and improving resource allocation.',
      'Real-Time Anomaly Detection for Risk Management: ARCS continuously monitors production data, detecting irregularities that may indicate risk factors like equipment degradation, supply chain disruption, or regulatory non-compliance.',
      'Strategic Impact: By integrating predictive quality analysis and real-time risk management, ARCS supports manufacturers in maintaining high-quality standards, minimizing waste, and reducing costs associated with compliance-related issues.',
    ],
    icon: BarChart,
    metrics: [
      { label: 'Defect Reduction', value: '40%', trend: 'down' },
      { label: 'Early Issue Detection', value: '95%', trend: 'up' },
      { label: 'Cost Savings', value: '25%', trend: 'up' },
    ],
  },
  {
    title: 'Adaptive Supply Chain Compliance for Multi-Tier Supplier Networks',
    description:
      'End-to-end supplier compliance synchronization and real-time supplier risk scoring.',
    bgapplication:
      "ARCS's adaptive compliance features streamline supply chain management, ensuring regulatory alignment and quality consistency across all supplier levels.",
    content: [
      'End-to-End Supplier Compliance Synchronization: ARCS standardizes compliance requirements across suppliers, continuously updating them as regulations change to maintain a unified, transparent compliance framework.',
      'Real-Time Supplier Risk Scoring: ARCS evaluates and scores each supplier based on compliance metrics, helping manufacturers prioritize high-quality, low-risk suppliers to enhance overall supply chain reliability.',
      'Strategic Impact: By enhancing visibility into supplier compliance, ARCS enables manufacturers to mitigate regulatory risks, optimize supplier selection, and ensure product quality across complex supply chains.',
    ],
    icon: Network,
    metrics: [
      { label: 'Supplier Compliance', value: '95%', trend: 'up' },
      { label: 'Risk Visibility', value: '100%', trend: 'up' },
      { label: 'Supply Chain Disruptions', value: '60%', trend: 'down' },
    ],
  },
  {
    title:
      'Environmental, Health, and Safety (EHS) Compliance for Responsible Operations',
    description:
      'Continuous EHS monitoring and predictive hazard identification.',
    bgapplication:
      "ARCS's EHS compliance capabilities provide manufacturers with continuous monitoring and real-time adaptation to global EHS standards, supporting safe, sustainable operations.",
    content: [
      'Continuous EHS Monitoring and Compliance: ARCS continuously tracks environmental, safety, and health metrics, ensuring compliance with standards such as ISO 14001, OSHA, and other local and international regulations.',
      'Predictive Hazard Identification: ARCS employs predictive analytics to detect potential safety or environmental hazards, enabling manufacturers to take preventative action and minimize costly incidents.',
      "Strategic Impact: Enhanced EHS compliance reduces environmental impact, safeguards employee welfare, and reinforces the manufacturer's reputation as a socially responsible and compliant organization.",
    ],
    icon: Thermometer,
    metrics: [
      { label: 'EHS Compliance', value: '99.5%', trend: 'up' },
      { label: 'Incident Prevention', value: '80%', trend: 'up' },
      { label: 'Sustainability Score', value: '92%', trend: 'up' },
    ],
  },
  {
    title: 'Cross-Border Compliance for Global Manufacturing Operations',
    description:
      'Multi-jurisdictional compliance harmonization and localized compliance adaptation.',
    bgapplication:
      "ARCS's cross-border compliance capabilities ensure regulatory alignment across multiple jurisdictions, enabling seamless manufacturing and distribution.",
    content: [
      'Multi-Jurisdictional Compliance Harmonization: ARCS dynamically adjusts protocols to align with local regulations, including environmental, labor, and trade laws, facilitating smooth cross-border manufacturing.',
      "Localized Compliance Adaptation: ARCS automatically calibrates each facility's protocols to meet jurisdiction-specific regulations, reducing the administrative burden of managing compliance across regions.",
      'Strategic Impact: Effective cross-border compliance minimizes regulatory risks, supports global market expansion, and optimizes production strategies across diverse regulatory environments.',
    ],
    icon: Globe,
    metrics: [
      { label: 'Global Compliance', value: '98%', trend: 'up' },
      { label: 'Market Expansion', value: '40%', trend: 'up' },
      { label: 'Regulatory Penalties', value: '90%', trend: 'down' },
    ],
  },
  {
    title: 'Predictive Maintenance for Enhanced Operational Efficiency',
    description:
      'Data-driven predictive maintenance scheduling and real-time equipment health monitoring.',
    bgapplication:
      "ARCS's predictive maintenance capabilities allow manufacturers to anticipate maintenance needs and minimize equipment downtime, supporting continuous and efficient operations.",
    content: [
      'Data-Driven Predictive Maintenance Scheduling: ARCS analyzes performance metrics using machine learning, forecasting maintenance needs to prevent breakdowns and reduce interruptions in production.',
      'Real-Time Equipment Health Monitoring: By continuously tracking equipment performance, ARCS detects early warning signs of potential malfunctions, enabling preventative maintenance before issues escalate.',
      'Strategic Impact: Predictive maintenance enhances equipment reliability, minimizes production delays, and reduces overall maintenance costs, empowering manufacturers to maintain high productivity and operational continuity.',
    ],
    icon: Tool,
    metrics: [
      { label: 'Downtime Reduction', value: '70%', trend: 'down' },
      { label: 'Maintenance Cost Savings', value: '35%', trend: 'down' },
      { label: 'Equipment Lifespan Increase', value: '25%', trend: 'up' },
    ],
  },
  {
    title: 'Adaptive Learning for Custom and On-Demand Production Compliance',
    description:
      'Client-specific compliance tailoring and continuous learning from production data.',
    bgapplication:
      "ARCS's adaptive learning capabilities dynamically adjust compliance protocols for customized production, ensuring that unique specifications meet all regulatory and quality standards.",
    content: [
      "Client-Specific Compliance Tailoring: ARCS customizes compliance protocols based on each client's requirements, ensuring regulatory alignment for custom and on-demand production.",
      'Continuous Learning from Production Data: ARCS refines compliance protocols over time, using historical data from past projects to enhance accuracy and efficiency for future custom orders.',
      'Strategic Impact: This tailored approach to compliance reduces rework, strengthens client satisfaction, and ensures seamless regulatory alignment for specialized manufacturing.',
    ],
    icon: Zap,
    metrics: [
      { label: 'Custom Order Compliance', value: '99%', trend: 'up' },
      { label: 'Rework Reduction', value: '50%', trend: 'down' },
      { label: 'Client Satisfaction', value: '95%', trend: 'up' },
    ],
  },
  {
    title: 'Scenario Planning and Strategic Resource Optimization',
    description:
      'Regulatory scenario modeling and simulation, and resource allocation optimization.',
    bgapplication:
      "ARCS's scenario analysis capabilities enable manufacturers to simulate regulatory and production scenarios, optimizing resource allocation and strategic planning.",
    content: [
      'Regulatory Scenario Modeling and Simulation: ARCS models the potential impact of regulatory changes on production processes, enabling manufacturers to prepare for new standards in environmental, safety, or labor regulations.',
      'Resource Allocation Optimization: By assessing production needs, compliance priorities, and resource availability, ARCS provides recommendations for efficient resource allocation and strategic planning.',
      "Strategic Impact: Scenario planning and resource optimization enhance manufacturers' resilience, streamline compliance efforts, and maximize resource utilization, supporting agile responses to regulatory and market changes.",
    ],
    icon: Shuffle,
    metrics: [
      { label: 'Resource Efficiency', value: '30%', trend: 'up' },
      { label: 'Regulatory Preparedness', value: '85%', trend: 'up' },
      { label: 'Strategic Agility', value: '40%', trend: 'up' },
    ],
  },
  {
    title:
      'Compliance Quality Index (CQI) for Streamlined, Audit-Ready Documentation',
    description:
      'Automated compliance documentation scoring and real-time documentation updates.',
    bgapplication:
      "ARCS's Compliance Quality Index (CQI) automates audit readiness, ensuring that documentation meets regulatory standards and maintains accuracy.",
    content: [
      'Automated Compliance Documentation Scoring: ARCS evaluates compliance documentation for alignment, completeness, and accuracy, achieving high audit-readiness with minimal manual intervention.',
      'Real-Time Documentation Updates: As standards change, ARCS updates documentation to reflect current regulatory requirements, reducing audit discrepancies and ensuring seamless compliance.',
      'Strategic Impact: Streamlined, accurate documentation simplifies audit preparation, reduces the risk of regulatory penalties, and minimizes the cost associated with compliance errors, enhancing operational transparency and accountability.',
    ],
    icon: FileCheck,
    metrics: [
      { label: 'Audit Readiness', value: '98%', trend: 'up' },
      { label: 'Documentation Accuracy', value: '99.5%', trend: 'up' },
      { label: 'Compliance Cost Reduction', value: '40%', trend: 'down' },
    ],
  },
  {
    title:
      'Influence Mapping for Optimized Supplier and Stakeholder Collaboration',
    description:
      'Stakeholder network and influence mapping, and engagement prioritization.',
    bgapplication:
      "ARCS's influence mapping capabilities identify and prioritize key connections, enhancing collaboration and fortifying compliance across the supply chain.",
    content: [
      'Stakeholder Network and Influence Mapping: ARCS identifies key regulatory stakeholders, suppliers, and industry influencers, enabling manufacturers to cultivate strategic partnerships that enhance compliance and resilience.',
      'Engagement Prioritization: Using influence data, ARCS guides targeted engagement with high-impact stakeholders, supporting collaborative compliance initiatives and reinforcing supply chain stability.',
      "Strategic Impact: Enhanced collaboration strengthens supplier relationships, mitigates compliance risks, and optimizes manufacturers' market positioning by promoting proactive regulatory partnerships.",
    ],
    icon: Users,
    metrics: [
      { label: 'Stakeholder Engagement', value: '60%', trend: 'up' },
      { label: 'Collaboration Efficiency', value: '45%', trend: 'up' },
      { label: 'Risk Mitigation', value: '55%', trend: 'up' },
    ],
  },
];

const strategicImpacts = [
  {
    title: 'Real-Time Compliance',
    description: 'Instant regulatory adaptation and monitoring.',
    icon: Clock,
  },
  {
    title: 'Quality Assurance',
    description: 'Predictive analytics for quality management.',
    icon: Shield,
  },
  {
    title: 'Supply Chain Resilience',
    description: 'Multi-tier supplier compliance management.',
    icon: Truck,
  },
  {
    title: 'Operational Efficiency',
    description: 'Predictive maintenance and resource optimization.',
    icon: Zap,
  },
];

const manufacturingCapabilities = [
  {
    title: 'EHS Compliance',
    description: 'Comprehensive environmental, health, and safety monitoring.',
    icon: Thermometer,
  },
  {
    title: 'Cross-Border Operations',
    description: 'Seamless multi-jurisdictional compliance.',
    icon: Globe,
  },
  {
    title: 'Custom Production',
    description: 'Adaptive compliance for on-demand manufacturing.',
    icon: Box,
  },
];

export default function Manufacturing() {
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
    <>
      <ApplicationLayout
        title="ARCS for Manufacturing"
        subtitle="Transforming Compliance, Risk Management, and Operational Excellence"
        industry="Manufacturing"
      >
        <Helmet>
          <title>Manufacturing Compliance Solutions | ARCS Scientific</title>
          <meta
            name="description"
            content="Optimize manufacturing operations with ARCS Scientific's advanced compliance solutions. Enhance quality control, ensure regulatory adherence, and improve operational efficiency."
          />
          <meta
            name="keywords"
            content="manufacturing compliance, quality control, regulatory compliance, industrial automation, production efficiency, manufacturing technology"
          />
          <meta
            property="og:title"
            content="Manufacturing Compliance Solutions | ARCS Scientific"
          />
          <meta
            property="og:description"
            content="Transform manufacturing operations with advanced compliance and quality control solutions from ARCS Scientific."
          />
          <link
            rel="canonical"
            href="https://www.arcsscientific.com/manufacturing"
          />
          <meta name="author" content="James Scott Philanthropist" />
        </Helmet>

        {/* Rest of your component JSX */}
        {/* Introduction Section */}
        <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
          <p className="text-gray-600 leading-relaxed">
            The Adaptive Regulatory Compliance System (ARCS) delivers a
            groundbreaking compliance framework for the manufacturing industry,
            addressing the sector's intricate needs in regulatory adherence,
            quality assurance, and operational risk mitigation. With core
            capabilities in real-time monitoring, predictive analytics, and
            adaptive learning, ARCS enables manufacturers to optimize
            production, align with stringent regulatory standards, and
            proactively address operational risks. This enhanced report details
            ARCS's strategic applications within the manufacturing industry,
            showcasing its potential to streamline compliance, strengthen supply
            chain resilience, and drive sustainable, efficient operations.
          </p>
        </div>

        {/* Main Components */}
        <div className="space-y-8 grid grid-cols-2 gap-4 h-full">
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
                      setExpandedSection(
                        expandedSection === index ? null : index
                      )
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
                          <p className="text-gray-600 mt-1 mt-2">
                            <span className="font-bold gradient-text">
                              Application:{' '}
                            </span>
                            {section.bgapplication}
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
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Strategic Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicImpacts.map((impact, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-glow">
                <div className="flex items-center space-x-3 mb-4">
                  <impact.icon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold gradient-text">
                    {impact.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Manufacturing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {manufacturingCapabilities.map((capability, index) => (
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
            ARCS as a Strategic Catalyst for Compliance and Operational
            Excellence in Manufacturing
          </h3>
          <p className="text-gray-600 leading-relaxed">
            ARCS provides manufacturers with a comprehensive, adaptive
            compliance and risk management framework that addresses the
            industry's unique regulatory, quality, and operational challenges.
            With advanced capabilities in real-time compliance monitoring,
            predictive maintenance, cross-border adaptability, and EHS
            alignment, ARCS transforms compliance from a reactive necessity into
            a proactive, strategic asset. Manufacturers utilizing ARCS gain
            operational efficiency, reduce compliance risks, and fortify their
            supply chains, positioning themselves as leaders in a highly
            competitive, regulated global marketplace.
          </p>
        </div>

        {/* Q&A with James Scott */}
        <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
          <h3 className="text-xl font-semibold gradient-text mb-4">
            Q&A with James Scott: ARCS's Role in Transforming Compliance and
            Operational Resilience in Manufacturing
          </h3>
          <div className="space-y-6">
            {[
              {
                q: 'What inspired the development of ARCS specifically for the manufacturing industry?',
                a: 'Manufacturing is a sector with complex, layered regulatory requirements and high-stakes quality standards. ARCS was created to address these complexities by providing real-time compliance, proactive risk management, and quality assurance. Our goal was to design a solution that would make compliance an asset, not just a requirement.',
                icon: Lightbulb,
              },
              {
                q: 'How does ARCS differentiate itself from traditional compliance systems?',
                a: 'Traditional systems are often manual and reactive, but ARCS is dynamic and automated. ARCS adapts instantly to regulatory changes, uses predictive analytics for risk mitigation, and applies machine learning to continuously improve its compliance and quality protocols.',
                icon: Zap,
              },
              {
                q: "Can you explain how ARCS's real-time compliance monitoring works for manufacturing?",
                a: 'ARCS operates through continuous data integration, scanning regulatory updates and automatically adjusting compliance protocols in milliseconds. This is especially useful in manufacturing, where regulatory changes can impact everything from product specifications to safety standards.',
                icon: Shield,
              },
              {
                q: 'How does ARCS handle quality control in manufacturing?',
                a: 'ARCS leverages predictive analytics and real-time monitoring to identify quality issues before they arise. By analyzing production data, it detects anomalies and potential quality risks, allowing manufacturers to take corrective action proactively.',
                icon: BarChart,
              },
              {
                q: "What role does adaptive learning play in ARCS's capabilities?",
                a: 'Adaptive learning allows ARCS to refine compliance protocols based on new data and production outcomes. This enables it to adapt to unique manufacturing needs, learning from previous operations to improve its future responses and protocols.',
                icon: Zap,
              },
              {
                q: 'How does ARCS enhance supply chain compliance for manufacturers?',
                a: "ARCS's multi-tier compliance monitoring ensures that every supplier meets regulatory and quality standards. It synchronizes compliance across the supply chain, evaluating suppliers for compliance risks and improving supply chain resilience overall.",
                icon: Network,
              },
              {
                q: "What are the benefits of ARCS's predictive maintenance for manufacturing?",
                a: 'Predictive maintenance uses data to anticipate equipment issues before they lead to breakdowns. With ARCS, manufacturers can schedule maintenance proactively, reducing downtime and extending equipment lifespan, which is crucial for maintaining productivity.',
                icon: Tool,
              },
              {
                q: 'How does ARCS improve Environmental, Health, and Safety (EHS) compliance?',
                a: 'ARCS continuously monitors EHS metrics, ensuring compliance with standards like ISO 14001 and OSHA. It can also predict potential safety risks, enabling manufacturers to prevent incidents and promote a safe, compliant workplace.',
                icon: Thermometer,
              },
              {
                q: 'How does ARCS manage cross-border compliance for manufacturers with global operations?',
                a: 'ARCS adapts compliance protocols to meet the unique requirements of each jurisdiction, covering everything from environmental regulations to labor laws. This capability supports seamless operations across borders and reduces compliance risks in international markets.',
                icon: Globe,
              },
              {
                q: 'Can ARCS support manufacturers with custom and on-demand production?',
                a: "Absolutely. ARCS's adaptive learning adjusts compliance protocols based on each client's specifications, ensuring custom products meet regulatory standards without rework. This tailored compliance strengthens customer relationships and reduces production costs.",
                icon: Box,
              },
              {
                q: 'How does ARCS streamline audit readiness for manufacturers?',
                a: "ARCS's Compliance Quality Index (CQI) provides automated, audit-ready documentation that meets regulatory standards. Continuous updates ensure that all documentation aligns with the latest regulations, making audits efficient and reducing the risk of penalties.",
                icon: FileCheck,
              },
              {
                q: 'How does ARCS handle data integrity in compliance and quality management?',
                a: 'Data integrity is critical in manufacturing, and ARCS continuously validates data accuracy, completeness, and timeliness. This ensures all compliance calculations and quality controls are based on reliable, up-to-date information.',
                icon: Database,
              },
              {
                q: 'How customizable is ARCS to different manufacturing requirements?',
                a: 'ARCS is highly adaptable. Manufacturers can configure compliance protocols, predictive models, and quality controls to align with specific operational needs, regulatory requirements, and market conditions. This flexibility supports scalability across production lines.',
                icon: Sliders,
              },
              {
                q: 'How does ARCS improve supplier risk management?',
                a: 'ARCS evaluates suppliers based on real-time compliance and quality metrics, assigning risk scores that help manufacturers make informed sourcing decisions. This reduces supply chain disruptions and enhances product quality.',
                icon: AlertTriangle,
              },
              {
                q: "How does ARCS's scenario analysis help in resource optimization?",
                a: "ARCS's scenario modeling simulates potential regulatory and production changes, providing insights for optimal resource allocation. This helps manufacturers prepare for new standards or shifts in demand, ensuring efficient and resilient operations.",
                icon: Shuffle,
              },
              {
                q: 'How does ARCS assist in managing quality control across diverse production lines?',
                a: 'By analyzing production data across lines, ARCS can detect quality variances and standardize quality protocols. This real-time insight enables manufacturers to maintain high-quality standards across multiple production lines and product types.',
                icon: Layers,
              },
              {
                q: 'How does ARCS support environmental sustainability in manufacturing?',
                a: 'ARCS tracks environmental metrics, aligns with global sustainability standards, and detects potential environmental risks. By enabling proactive compliance, ARCS helps manufacturers reduce environmental impact and build a sustainable operation.',
                icon: Droplet,
              },
              {
                q: 'Can ARCS help manufacturers with high regulatory scrutiny?',
                a: "Definitely. ARCS's real-time monitoring and instant protocol adjustment ensure compliance in highly regulated industries like pharmaceuticals or aerospace. Its predictive and adaptive capabilities help manufacturers stay ahead of strict regulations.",
                icon: Target,
              },
              {
                q: 'What impact does ARCS have on reducing compliance costs?',
                a: 'By automating compliance monitoring and documentation, ARCS reduces manual processes and minimizes the risk of penalties, lowering overall compliance costs. Its predictive capabilities also help avoid costly incidents or recalls.',
                icon: TrendingUp,
              },
              {
                q: 'How does ARCS improve resilience against supply chain disruptions?',
                a: "ARCS's continuous supplier monitoring and adaptive compliance protocols provide transparency and resilience in the supply chain. It helps manufacturers quickly identify and address supplier risks, ensuring stable and compliant operations.",
                icon: Truck,
              },
              {
                q: 'Can ARCS support manufacturers in responding to labor regulation changes?',
                a: 'Yes, ARCS adapts to changes in labor regulations instantly, adjusting protocols and documentation to align with new standards. This ensures compliance with labor laws across all facilities, regardless of location.',
                icon: Users,
              },
              {
                q: 'How does ARCS enhance equipment uptime?',
                a: "ARCS's predictive maintenance uses machine learning to monitor equipment health and anticipate issues, reducing unplanned downtime. This proactive approach extends equipment life and optimizes productivity.",
                icon: Activity,
              },
              {
                q: 'How does ARCS handle complex regulatory requirements across different products?',
                a: 'ARCS dynamically customizes compliance protocols based on product specifications, ensuring each product meets its unique regulatory requirements. This capability is vital for manufacturers producing a wide range of products.',
                icon: Box,
              },
              {
                q: 'How does ARCS contribute to workplace safety?',
                a: 'ARCS monitors workplace conditions in real-time and flags potential hazards, enabling manufacturers to act before incidents occur. This ensures a safer work environment and aligns with health and safety regulations.',
                icon: Shield,
              },
              {
                q: 'How does ARCS integrate with other systems manufacturers use?',
                a: 'ARCS is designed to be integrative, compatible with most ERP, MES, and quality management systems through APIs. This allows manufacturers to consolidate compliance and quality functions seamlessly into their existing workflows.',
                icon: Layers,
              },
              {
                q: 'How does ARCS handle the regulatory complexity of multi-national manufacturing?',
                a: "ARCS's cross-border compliance capabilities enable manufacturers to align with regulatory standards in multiple countries. It automatically adjusts to local requirements, supporting efficient and compliant global operations.",
                icon: Globe,
              },
              {
                q: 'How does ARCS support lean manufacturing practices?',
                a: "ARCS's predictive analytics help manufacturers optimize resource usage and minimize waste. Its real-time monitoring and adaptive compliance streamline processes, making it easier to implement lean principles while maintaining compliance.",
                icon: Zap,
              },
              {
                q: 'What are the key metrics ARCS uses to ensure compliance performance?',
                a: 'ARCS tracks metrics like compliance accuracy, response time, risk scores, and documentation quality. By continuously monitoring these metrics, ARCS ensures sustained high performance in regulatory and operational compliance.',
                icon: BarChart,
              },
              {
                q: 'How does ARCS help manufacturers stay competitive in a regulated market?',
                a: 'ARCS gives manufacturers a competitive edge by reducing compliance costs, enhancing quality, and supporting efficient, sustainable production. Its proactive approach to compliance helps manufacturers operate more efficiently while maintaining a strong regulatory reputation.',
                icon: TrendingUp,
              },
              {
                q: 'What future developments are planned for ARCS in manufacturing?',
                a: "We're expanding ARCS's AI capabilities to enhance predictive accuracy and optimize supply chain and production resilience. Our goal is to make ARCS the industry standard for adaptive compliance, risk management, and sustainable manufacturing in a globally regulated environment.",
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
    </>
  );
}
