import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ApplicationLayout from './Layout';
import {
  Scale,
  FileText,
  Shield,
  Search,
  Brain,
  Activity,
  RefreshCcwDot,
  Target,
  Trophy,
  Lock,
  AlertTriangle,
  LifeBuoy,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Zap,
  Briefcase,
  Users,
  TrendingUp,
  FileSearch,
  Layers,
  PieChart,
  Sliders,
  DollarSign,
  Globe,
  Cpu,
  Rocket,
  Clipboard,
} from 'lucide-react';

interface Section {
  title: string;
  description: string;
  bgapplication: string;
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
    title: 'Automated Compliance Pathways for Faster FDA and PMA Approvals',
    description:
      'Streamline regulatory processes with AI-driven compliance pathways.',
    bgapplication:
      'ARCS optimizes FDA Fast Track and PMA approval processes, reducing timelines and enhancing market readiness.',
    content: [
      'Predictive Predicate Technology Analysis: ARCS continuously analyzes relevant predicate technology, enhancing equivalency validation and minimizing rework risks.',
      'Data-Driven Scenario Compliance Mapping: With scenario-based planning, ARCS provides tailored roadmaps to optimize regulatory pathways based on product specifications and market demands.',
      'Continuous Post-Clearance Monitoring: Once a device is approved, ARCS maintains ongoing monitoring, adapting protocols to comply with FDA updates and ensuring continuous good standing.',
    ],
    icon: Rocket,
    metrics: [
      { label: 'Approval Speed', value: '+20%', trend: 'up' },
      { label: 'Rework Reduction', value: '30%', trend: 'down' },
      { label: 'Compliance Accuracy', value: '95%', trend: 'up' },
    ],
  },
  {
    title: 'Resource and Documentation Automation for Cost Control',
    description:
      'Automate compliance processes to reduce costs and improve efficiency.',
    bgapplication:
      'ARCS automates document preparation and resource allocation, significantly reducing manual work and associated compliance costs.',
    content: [
      'Automated Report Generation and Documentation: ARCS automates document and report preparation, reducing manual work and associated compliance costs, particularly beneficial for firms with high-frequency submissions.',
      'Resource Allocation Intelligence: ARCS identifies regulatory pain points early on, allowing companies to allocate resources effectively and avoid costly compliance oversights.',
    ],
    icon: FileText,
    metrics: [
      { label: 'Cost Reduction', value: '40%', trend: 'down' },
      { label: 'Efficiency Gain', value: '50%', trend: 'up' },
      { label: 'Resource Optimization', value: '35%', trend: 'up' },
    ],
  },
  {
    title: 'Adaptive Learning and Real-Time Compliance Adjustment',
    description:
      'Leverage AI for continuous compliance improvement and risk mitigation.',
    bgapplication:
      'ARCS uses adaptive learning algorithms to integrate real-time regulatory updates, enabling immediate compliance adjustments.',
    content: [
      'Instant Regulatory Adaptation: Using adaptive learning algorithms, ARCS integrates real-time updates on regulatory changes, enabling companies to make immediate adjustments as new requirements emerge.',
      "Risk Scoring and Predictive Analytics: ARCS's risk assessment tools prioritize high-impact areas, enhancing resource allocation and compliance efficiency with precision risk mitigation strategies.",
    ],
    icon: Brain,
    metrics: [
      { label: 'Adaptation Speed', value: '<1hr', trend: 'down' },
      { label: 'Risk Mitigation', value: '60%', trend: 'up' },
      { label: 'Compliance Accuracy', value: '98%', trend: 'up' },
    ],
  },
  {
    title: 'Global Regulatory Intelligence and Expansion Support',
    description: 'Navigate international regulatory landscapes with ease.',
    bgapplication:
      'ARCS provides insights and tools for seamless cross-border compliance, supporting expansion into key markets like the EU and Asia-Pacific.',
    content: [
      'Multi-Jurisdictional Compliance Mapping: ARCS aligns regulatory strategies across different global markets, ensuring consistent compliance across borders.',
      'Regulatory Body Behavior Analysis: Incorporates psychographic profiling to analyze regulatory trends, enhancing submission strategies.',
      'Automated International Documentation: Generates and manages region-specific documentation, streamlining the global submission process.',
    ],
    icon: Globe,
    metrics: [
      { label: 'Global Coverage', value: '50+ countries', trend: 'up' },
      { label: 'Expansion Speed', value: '+40%', trend: 'up' },
      { label: 'Compliance Success', value: '95%', trend: 'up' },
    ],
  },
  {
    title: 'Performance-Based Pricing and ROI Optimization',
    description: 'Align costs with outcomes through innovative pricing models.',
    bgapplication:
      'ARCS offers performance-based incentives and tiered pricing, ensuring cost-effectiveness and measurable ROI for med-tech companies.',
    content: [
      'Tiered Subscription Model: Tailored pricing tiers from Essential to Enterprise, catering to diverse company sizes and regulatory needs.',
      'Performance Incentives: Offers rebates and discounts based on achieved efficiencies and compliance success.',
      'Outcome-Based Enterprise Pricing: Option for large clients to pay based on cost savings, creating a true performance partnership.',
    ],
    icon: DollarSign,
    metrics: [
      { label: 'Cost Savings', value: 'Up to 30%', trend: 'down' },
      { label: 'ROI', value: '300%', trend: 'up' },
      { label: 'Client Satisfaction', value: '98%', trend: 'up' },
    ],
  },
];

const strategicImpacts = [
  {
    title: 'Accelerated Market Access',
    description:
      'Optimize FDA Fast Track and PMA processes for faster approvals.',
    icon: Rocket,
  },
  {
    title: 'Cost Reduction',
    description: 'Automate compliance processes to minimize expenses.',
    icon: DollarSign,
  },
  {
    title: 'Regulatory Resilience',
    description: 'Adapt to changes with real-time compliance updates.',
    icon: Shield,
  },
  {
    title: 'Global Expansion',
    description: 'Navigate international regulatory landscapes seamlessly.',
    icon: Globe,
  },
];

const medtechCapabilities = [
  {
    title: 'AI-Driven Compliance',
    description: 'Leverage machine learning for predictive compliance.',
    icon: Brain,
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Stay updated with instant regulatory change alerts.',
    icon: Activity,
  },
  {
    title: 'Resource Optimization',
    description:
      'Allocate compliance resources efficiently with data insights.',
    icon: Sliders,
  },
];

export default function MedTech() {
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
      title="ARCS for Medical Technology"
      subtitle="Transforming Regulatory Compliance with Adaptive Intelligence"
      industry="MedTech"
    >
      <Helmet>
        <title>FDA Program Compliance Solutions | ARCS Scientific</title>
        <meta
          name="description"
          content="Streamline FDA program compliance with ARCS Scientific's advanced solutions. Accelerate approvals, ensure regulatory adherence, and improve medical device development."
        />
        <meta
          name="keywords"
          content="FDA compliance, medical device regulations, regulatory compliance, healthcare technology, FDA programs, medical compliance"
        />
        <meta
          property="og:title"
          content="FDA Program Compliance Solutions | ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Transform FDA program management with advanced compliance solutions from ARCS Scientific."
        />
        <link
          rel="canonical"
          href="https://www.arcsscientific.com/fda-programs"
        />
        <meta name="author" content="James Scott Philanthropist" />
      </Helmet>

      {/* Rest of the component remains the same... */}
      {/* Introduction Section */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <p className="text-gray-600 leading-relaxed">
          In a rapidly advancing medical technology landscape, regulatory
          complexity can impede innovation and delay life-changing advancements.
          ARCS (Adaptive Regulatory Compliance System) revolutionizes how
          med-tech companies approach compliance, offering a streamlined,
          predictive, and adaptive framework for navigating rigorous regulatory
          pathways such as the FDA Fast Track and global approvals. Developed by
          industry leader James Scott, ARCS delivers a dynamic blend of
          AI-powered intelligence, scenario-based compliance mapping, and
          real-time monitoring, positioning itself as an indispensable partner
          in transforming compliance from an obstacle into a strategic
          advantage.
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

      {/* MedTech Capabilities */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">
          MedTech Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {medtechCapabilities.map((capability, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <capability.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold gradient-text">
                  {capability.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Revolutionizing MedTech Compliance
        </h3>
        <p className="text-gray-600 leading-relaxed">
          ARCS stands as a transformative compliance solution, allowing medical
          technology companies to meet regulatory challenges with confidence and
          clarity. By combining adaptive AI, predictive intelligence, and a
          dynamic pricing model that reflects real-world savings, ARCS not only
          optimizes the compliance journey but also empowers companies to
          accelerate healthcare innovations while reducing operational risk.
        </p>
      </div>

      {/* Value-Based, Tiered Subscription Model */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Value-Based, Tiered Subscription Model
        </h3>
        <p className="text-gray-600 leading-relaxed">
          ARCS's subscription model is crafted to meet varying regulatory needs,
          from startups to large enterprises. Each tier delivers targeted
          services at predictable costs, with performance-based incentives that
          underscore ARCS's commitment to achieving real, measurable outcomes
          for clients.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600">
              1. Essential Tier – $10,000/month
            </h4>
            <p className="text-gray-600">
              Ideal for startup and early-stage med-tech firms requiring support
              with standard, foundational FDA filings.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600">
              2. Professional Tier – $15,000/month
            </h4>
            <p className="text-gray-600">
              Designed for mid-sized firms navigating FDA Fast Track or standard
              PMA submissions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600">
              3. Enterprise Tier – $25,000/month
            </h4>
            <p className="text-gray-600">
              Built for established companies managing complex filings,
              high-risk devices, and multi-country submissions.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion: ARCS as the Ultimate Compliance Partner */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Conclusion: ARCS as the Ultimate Compliance Partner for Med-Tech
          Innovation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Through ARCS, compliance becomes a streamlined, value-driven asset
          rather than a cost-intensive burden. James Scott's vision for ARCS
          extends beyond regulatory success to industry transformation,
          positioning ARCS as the premier choice for med-tech firms that
          prioritize both speed and strategic resilience in an increasingly
          complex regulatory landscape.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          ARCS is more than just a regulatory tool—it's a catalyst for growth,
          enabling medical technology innovators to reach markets faster, expand
          globally, and achieve regulatory excellence with unprecedented ease
          and intelligence.
        </p>
      </div>

      {/* Q&A with James Scott */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Q&A with James Scott on ARCS for MedTech Excellence
        </h3>
        <div className="space-y-6">
          {[
            {
              q: 'What drove you to develop ARCS specifically for the med-tech sector?',
              a: "Med-tech operates in one of the most regulated and fast-evolving spaces. I saw that traditional compliance processes were too rigid and costly for today's pace of innovation, so I created ARCS to make compliance intelligent, adaptive, and capable of evolving with both technology and regulatory standards.",
              icon: Lightbulb,
            },
            {
              q: 'How does ARCS streamline the FDA Fast Track and PMA approval processes?',
              a: 'ARCS uses predictive analytics and scenario-based modeling to map the optimal pathway through FDA Fast Track and PMA processes. It automates compliance steps, identifies predicate technologies, and adapts to regulatory requirements in real-time, significantly reducing approval timelines.',
              icon: Rocket,
            },
            {
              q: 'What makes ARCS more effective than traditional regulatory consulting?',
              a: 'Traditional consulting often involves a reactive, high-cost approach with limited scalability. ARCS, on the other hand, is a proactive, AI-driven system that provides continuous compliance monitoring and predictive insights at a fixed, lower cost, which is more scalable and effective for long-term growth.',
              icon: Brain,
            },
            {
              q: 'How does ARCS support companies with ongoing compliance after product clearance?',
              a: 'ARCS offers post-clearance monitoring that adapts to regulatory changes automatically. This ensures that once a product is cleared, it remains compliant through real-time updates and alerts, which is invaluable for long-term regulatory resilience.',
              icon: Shield,
            },
            {
              q: "Can you explain ARCS's tiered subscription model and how it benefits different types of companies?",
              a: 'Our tiered model is designed to offer scalability, so companies of all sizes can access the right level of support. From startups needing foundational compliance tools to large enterprises requiring advanced risk management, each tier delivers targeted solutions and maximum value.',
              icon: Layers,
            },
            {
              q: 'What unique advantages does the Enterprise Tier provide for large companies?',
              a: "The Enterprise Tier offers the full ARCS suite, including advanced scenario modeling, post-clearance monitoring, and real-time compliance adaptation. It's built to handle the complexities of high-stakes regulatory environments, supporting large companies with robust decision-making tools and comprehensive compliance coverage.",
              icon: Briefcase,
            },
            {
              q: 'How does ARCS achieve cost savings compared to hourly consulting?',
              a: 'ARCS operates on a fixed-fee, value-based model, providing continuous, automated support at a fraction of the cost of traditional consulting. Companies avoid unpredictable hourly fees and instead get predictable, performance-driven compliance support.',
              icon: DollarSign,
            },
            {
              q: 'Can ARCS help med-tech companies expand into international markets?',
              a: 'Yes, ARCS is designed to adapt to regulatory frameworks beyond the FDA, including EMA, MHRA, and other global agencies. Our International Expansion Package provides the necessary insights and tools for seamless cross-border compliance.',
              icon: Globe,
            },
            {
              q: "How does ARCS's AI-driven risk assessment work in a regulatory context?",
              a: "ARCS's AI continuously analyzes potential risks by evaluating past compliance issues, regulatory trends, and evolving standards. It assigns risk scores and prioritizes actions, allowing companies to address issues proactively rather than reactively.",
              icon: AlertTriangle,
            },
            {
              q: 'How does ARCS improve decision-making during the FDA Fast Track process?',
              a: 'By providing scenario-based compliance roadmaps and predictive outcome modeling, ARCS equips companies with data-driven insights into how regulatory decisions will impact timelines and costs. This supports more informed, strategic decision-making throughout the process.',
              icon: Target,
            },
            {
              q: "What role does machine learning play in ARCS's adaptability?",
              a: 'Machine learning allows ARCS to learn from each compliance interaction, constantly refining its predictions and recommendations. This continuous learning ensures ARCS adapts to new regulatory requirements and industry trends.',
              icon: Cpu,
            },
            {
              q: 'How does ARCS ensure data security during compliance operations?',
              a: 'We prioritize security by implementing industry-leading encryption and secure data-handling protocols. All data processed by ARCS is safeguarded to ensure compliance with both regulatory standards and data protection laws.',
              icon: Lock,
            },
            {
              q: 'Can ARCS predict and flag potential compliance issues before they arise?',
              a: "Absolutely. ARCS's predictive analytics identify patterns and flag potential compliance risks early on, giving companies the opportunity to address them before they become critical issues, saving both time and resources.",
              icon: Search,
            },
            {
              q: 'How does ARCS handle complex compliance challenges for predicate technology analysis?',
              a: 'ARCS automates predicate analysis by continuously evaluating relevant predicate devices and compliance criteria. This streamlines the equivalency validation process, reducing the risk of rework and improving filing success rates.',
              icon: FileSearch,
            },
            {
              q: 'How does ARCS use psychographic and behavioral insights in compliance?',
              a: 'ARCS incorporates psychographic profiling to analyze regulatory body behaviors and trends, which helps in tailoring submissions to align with current regulatory priorities, enhancing the likelihood of successful outcomes.',
              icon: Users,
            },
            {
              q: "How can smaller companies benefit from ARCS's Essential Tier?",
              a: 'The Essential Tier is tailored for startups and early-stage companies. It provides core compliance tools at an affordable rate, enabling them to navigate foundational regulatory requirements without the financial burden of traditional consulting.',
              icon: Rocket,
            },
            {
              q: 'How does ARCS support companies during regulatory audits?',
              a: 'ARCS prepares companies for audits with preemptive monitoring and real-time compliance adjustments. It provides a structured audit-ready compliance record, which reduces preparation time and ensures alignment with regulatory standards.',
              icon: Clipboard,
            },
            {
              q: "How does ARCS's Performance Optimization Package benefit med-tech firms?",
              a: 'The Performance Optimization Package offers data-driven enhancements like scenario testing and regulatory strategy refinement, enabling companies to optimize their submission pathways for both speed and cost efficiency.',
              icon: Zap,
            },
            {
              q: 'What compliance challenges does ARCS address post-clearance?',
              a: 'ARCS maintains post-clearance compliance through ongoing monitoring of regulatory changes, anticipating potential issues and adapting recommendations to prevent any misalignment with updated guidelines.',
              icon: Activity,
            },
            {
              q: 'How does ARCS provide a strategic advantage over standard regulatory compliance systems?',
              a: "ARCS's unique combination of real-time monitoring, adaptive learning, and predictive modeling makes it a proactive tool that continuously evolves. This gives companies a strategic edge by turning compliance into an opportunity for innovation rather than a hurdle.",
              icon: TrendingUp,
            },
            {
              q: 'Can ARCS help companies better allocate their compliance budgets?',
              a: "Yes, ARCS's data insights identify areas where resources can be optimized, allowing companies to allocate their budgets more efficiently. By minimizing rework and reducing the need for reactive measures, ARCS helps control costs.",
              icon: PieChart,
            },
            {
              q: "What is ARCS's Fast-Track Rebate Program, and how does it work?",
              a: 'Our Fast-Track Rebate Program rewards efficiency. If ARCS shortens regulatory timelines by over 20% compared to industry standards, clients receive a 10% rebate, underscoring our commitment to performance.',
              icon: Zap,
            },
            {
              q: 'How does ARCS manage high-stakes applications and regulatory submissions?',
              a: 'ARCS offers the Enterprise Tier with robust features like predictive scenario modeling, advanced risk management, and post-clearance monitoring, specifically designed for high-stakes applications where precision is essential.',
              icon: Target,
            },
            {
              q: 'How does ARCS adapt to regulatory changes in real-time?',
              a: 'Through continuous monitoring and adaptive algorithms, ARCS immediately adjusts to new regulatory changes. This ensures companies remain compliant and minimizes the risk of lapses due to regulatory updates.',
              icon: RefreshCcwDot,
            },
            {
              q: 'Can ARCS provide insights on international regulatory variations?',
              a: "Yes, ARCS's global framework includes support for international regulatory bodies, ensuring companies are aware of regional compliance nuances and prepared for cross-border expansion.",
              icon: Globe,
            },
            {
              q: 'How does ARCS handle data reporting and documentation for complex filings?',
              a: 'ARCS automates data reporting, documentation preparation, and submission management, reducing manual tasks and ensuring documentation aligns with regulatory standards, critical for complex filings.',
              icon: FileText,
            },
            {
              q: "How does ARCS's Zero-Citation Compliance Discount work?",
              a: 'This discount incentivizes compliance excellence. Companies maintaining zero FDA citations or re-submissions receive a 5% discount on the next renewal, encouraging proactive compliance management.',
              icon: Trophy,
            },
            {
              q: 'How can ARCS enhance product lifecycle management from a regulatory perspective?',
              a: "By tracking regulatory changes and compliance metrics throughout a product's lifecycle, ARCS helps companies proactively manage regulatory risks, ensuring compliance longevity from development to market and beyond.",
              icon: LifeBuoy,
            },
            {
              q: "What sets ARCS's adaptive learning apart from other compliance tools?",
              a: "ARCS's adaptive learning not only reacts to regulatory updates but also incorporates data from each compliance interaction to refine predictions and recommendations, constantly evolving its capabilities to stay ahead of regulatory shifts.",
              icon: Brain,
            },
            {
              q: 'What is your ultimate vision for ARCS in the med-tech industry?',
              a: 'My vision is for ARCS to redefine compliance, turning it from a barrier into a driver of innovation. I want ARCS to empower med-tech companies to achieve regulatory excellence with confidence, accelerating advancements in healthcare by making compliance an asset, not a hindrance.',
              icon: Lightbulb,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <item.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              </div>
              <div className="flex-1">
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
