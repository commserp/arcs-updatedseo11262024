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
  BarChart,
  Target,
  Network,
  Lock,
  AlertTriangle,
  Database,
  Gavel,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Zap,
  Briefcase,
  Clock,
  Users,
  TrendingUp,
  FileSearch,
  Layers,
  Shuffle,
  Compass,
  PieChart,
  Sliders,
  Inbox,
  MessageSquare,
  Key,
  DollarSign,
  Globe,
  Cpu,
  Rocket,
  Eye,
  UserCheck,
  GitMerge,
  RefreshCw,
  Crosshair,
  Leaf,
  ShieldCheck,
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
    title: 'Advanced Carbon Sequestration Rate (CSR) Enhancement',
    description:
      'Optimize biological sequestration through bioengineering and real-time adjustments.',
    bgapplication:
      'ARCS maximizes CO₂ capture efficiency through precision bioengineering and dynamically controlled environmental factors.',
    content: [
      'Precision Bioengineering: Enhance biological sequestration through advanced bioengineering techniques.',
      'Real-Time Environmental Control: Dynamically adjust light, nutrient levels, and other variables to ensure optimal productivity.',
      'High Annual Carbon Sequestration Rates: Achieve and maintain superior CO₂ capture efficiency.',
    ],
    icon: Leaf,
    metrics: [
      { label: 'Sequestration Efficiency', value: '+40%', trend: 'up' },
      { label: 'Annual CO₂ Capture', value: '+35%', trend: 'up' },
      { label: 'Productivity Optimization', value: '95%', trend: 'up' },
    ],
  },
  {
    title: 'Enhanced Carbon Credit Quality (CCQ) and Traceability',
    description:
      'Ensure transparency and quality through blockchain and IoT solutions.',
    bgapplication:
      'ARCS incorporates blockchain and IoT technologies to provide full traceability and enhance investor confidence in credit quality.',
    content: [
      'Blockchain-Enabled Transparency: Implement blockchain solutions for full traceability of carbon credits.',
      'Resilience Testing: Conduct assessments to ensure long-term stability and resistance to carbon re-release.',
      'Quality Verification: Ensure each credit meets the highest quality and transparency standards.',
    ],
    icon: ShieldCheck,
    metrics: [
      { label: 'Traceability', value: '100%', trend: 'up' },
      { label: 'Quality Assurance', value: '99.9%', trend: 'up' },
      { label: 'Investor Confidence', value: '+80%', trend: 'up' },
    ],
  },
  {
    title: 'Exergy Efficiency (ExE) in Carbon Capture Operations',
    description:
      'Optimize energy efficiency and resource allocation in carbon capture.',
    bgapplication:
      'ARCS improves energy efficiency and reduces operational costs through closed-loop systems and dynamic resource management.',
    content: [
      'Energy-Efficient Closed-Loop Systems: Repurpose waste heat and optimize resource allocation.',
      'Dynamic Resource Management: Efficiently distribute resources based on real-time monitoring.',
      'Cost-Effective Operations: Minimize energy input while maximizing carbon capture output.',
    ],
    icon: Zap,
    metrics: [
      { label: 'Energy Efficiency', value: '+50%', trend: 'up' },
      { label: 'Operational Costs', value: '-30%', trend: 'down' },
      { label: 'Resource Optimization', value: '95%', trend: 'up' },
    ],
  },
  {
    title: 'Regulatory Compliance and 45Q Readiness',
    description:
      'Ensure adherence to Section 45Q and other regulations for tax and legal benefits.',
    bgapplication:
      'ARCS automates compliance monitoring and partners with trusted verifiers to enhance credit credibility and appeal.',
    content: [
      'Automated Compliance Monitoring: Continuously track adherence to Section 45Q and other relevant regulations.',
      'Strategic Partnerships: Collaborate with trusted third-party verifiers to enhance credit credibility.',
      'Compliance-Certified Credits: Offer clients reliable, compliance-certified carbon credits for tax and regulatory purposes.',
    ],
    icon: Gavel,
    metrics: [
      { label: 'Compliance Rate', value: '99.9%', trend: 'up' },
      { label: 'Verification Speed', value: '+60%', trend: 'up' },
      { label: 'Regulatory Alignment', value: '100%', trend: 'up' },
    ],
  },
  {
    title: 'Predictive Market Adaptability and Strategic Pricing',
    description:
      'Optimize carbon credit release timing and pricing strategies.',
    bgapplication:
      'ARCS leverages predictive analytics to align credit releases with market demand peaks and secure premium certifications.',
    content: [
      'Market-Responsive Release Timing: Use predictive analytics to optimize carbon credit release timing.',
      'Premium Certification: Secure certifications from recognized bodies like Verra and Gold Standard.',
      'Value-Driven Pricing: Offer premium-priced credits with proven financial and environmental value.',
    ],
    icon: BarChart,
    metrics: [
      { label: 'Market Timing Accuracy', value: '92%', trend: 'up' },
      { label: 'Premium Pricing', value: '+25%', trend: 'up' },
      { label: 'ROI for Clients', value: '+40%', trend: 'up' },
    ],
  },
  {
    title: 'Biochar Production for Soil-Based Carbon Credits',
    description:
      'Optimize biochar production for sustainable agriculture and carbon sequestration.',
    bgapplication:
      'ARCS enhances biochar production processes and collaborates with federal agricultural programs to validate effectiveness.',
    content: [
      'Efficient Biochar Production: Optimize processes for high-yield, soil-enhancing carbon credits.',
      'Federal Program Collaboration: Partner with USDA and other initiatives to validate biochar effectiveness.',
      'Regenerative Agriculture Integration: Offer unique solutions for agricultural stakeholders and sustainability-focused investors.',
    ],
    icon: Leaf,
    metrics: [
      { label: 'Biochar Yield', value: '+45%', trend: 'up' },
      { label: 'Soil Carbon Sequestration', value: '+50%', trend: 'up' },
      { label: 'Agricultural Sustainability', value: '+60%', trend: 'up' },
    ],
  },
  {
    title: 'Scalable, Real-Time Multi-Site Monitoring',
    description:
      'Enable comprehensive management and monitoring across global projects.',
    bgapplication:
      'ARCS supports centralized monitoring across multiple locations, ensuring consistent data capture and performance.',
    content: [
      'Comprehensive Multi-Site Management: Support centralized monitoring across multiple locations.',
      'AI-Driven Predictive Maintenance: Leverage AI models to minimize operational downtime and maximize capture efficiency.',
      'Consistent Global Performance: Deliver reliable, high-volume carbon offset solutions across geographically dispersed sites.',
    ],
    icon: Globe,
    metrics: [
      { label: 'Monitoring Coverage', value: '100%', trend: 'up' },
      { label: 'Operational Uptime', value: '99.9%', trend: 'up' },
      { label: 'Global Consistency', value: '95%', trend: 'up' },
    ],
  },
  {
    title: 'Investor Dashboard with Predictive ROI Models',
    description: 'Provide transparent, data-driven insights for investors.',
    bgapplication:
      'ARCS offers an interactive dashboard with real-time data on ROI projections, regulatory shifts, and market trends.',
    content: [
      'Data-Driven Investor Transparency: Offer real-time data on ROI projections based on credit performance and market trends.',
      "In-Depth Visual Analytics: Provide detailed visualizations illustrating each credit's financial and environmental potential.",
      'Enhanced Decision-Making: Support investors with clear financial forecasts and environmental impact data.',
    ],
    icon: PieChart,
    metrics: [
      { label: 'Investor Satisfaction', value: '+85%', trend: 'up' },
      { label: 'Decision Confidence', value: '+70%', trend: 'up' },
      { label: 'Forecast Accuracy', value: '92%', trend: 'up' },
    ],
  },
  {
    title: 'Automated Data Integrity and Regulatory Verification',
    description: 'Ensure data accuracy and streamline compliance reporting.',
    bgapplication:
      'ARCS uses machine learning for continuous data validation and integrates directly with EPA reporting tools.',
    content: [
      'Continuous Validation: Use machine learning to ensure data integrity and automate compliance checks.',
      'Direct EPA Integration: Facilitate compliant reporting through integration with EPA tools.',
      'Reduced Audit Costs: Minimize expenses associated with audits while enhancing credit reliability.',
    ],
    icon: Shield,
    metrics: [
      { label: 'Data Accuracy', value: '99.99%', trend: 'up' },
      { label: 'Audit Cost Reduction', value: '-40%', trend: 'down' },
      { label: 'Compliance Reporting Speed', value: '+75%', trend: 'up' },
    ],
  },
  {
    title: 'Real-Time Compliance Adaptation for Evolving Regulations',
    description:
      'Maintain up-to-date compliance across all relevant standards.',
    bgapplication:
      'ARCS uses adaptive algorithms and NLP to track and respond to regulatory updates, ensuring consistent alignment with market standards.',
    content: [
      'Adaptive Compliance Algorithms: Continuously align with global regulatory changes using adaptive algorithms.',
      'NLP-Powered Regulatory Monitoring: Leverage natural language processing to track and respond to regulatory updates.',
      'Proactive Compliance Alignment: Maintain consistent alignment with evolving market standards and regulations.',
    ],
    icon: RefreshCw,
    metrics: [
      { label: 'Regulatory Adaptation Speed', value: '-80%', trend: 'down' },
      { label: 'Compliance Accuracy', value: '99.9%', trend: 'up' },
      { label: 'Proactive Alignment', value: '+90%', trend: 'up' },
    ],
  },
];

const strategicImpacts = [
  {
    title: 'Enhanced Sequestration',
    description: 'Maximize CO₂ capture through advanced techniques.',
    icon: Leaf,
  },
  {
    title: 'Quality Assurance',
    description: 'Ensure premium, traceable carbon credits.',
    icon: ShieldCheck,
  },
  {
    title: 'Regulatory Compliance',
    description: 'Stay ahead of evolving carbon market regulations.',
    icon: Gavel,
  },
  {
    title: 'Market Optimization',
    description: 'Leverage predictive analytics for optimal pricing.',
    icon: BarChart,
  },
];

const carbonMarketCapabilities = [
  {
    title: 'Multi-Site Monitoring',
    description: 'Manage global projects with centralized oversight.',
    icon: Globe,
  },
  {
    title: 'Investor Insights',
    description: 'Provide transparent, data-driven ROI projections.',
    icon: PieChart,
  },
  {
    title: 'Adaptive Compliance',
    description: 'Evolve with changing regulatory landscapes.',
    icon: RefreshCw,
  },
];

// Rest of the imports and component code remains the same...

export default function CarbonMarketsARCS() {
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
      title="ARCS-Integrated Carbon Markets Framework"
      subtitle="Premium Quality, Compliance, and Market Adaptability for Carbon Credits"
      industry="Carbon Markets"
    >
      <Helmet>
        <title>Carbon Capture & Markets Compliance | ARCS Scientific</title>
        <meta
          name="description"
          content="Optimize carbon capture and trading operations with ARCS Scientific's comprehensive compliance solutions. Enhance market participation, ensure regulatory adherence, and improve sustainability metrics."
        />
        <meta
          name="keywords"
          content="carbon capture compliance, carbon markets, emissions trading, regulatory compliance, sustainability metrics, environmental compliance"
        />
        <meta
          property="og:title"
          content="Carbon Capture & Markets Compliance | ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Transform carbon market operations with advanced compliance and trading solutions from ARCS Scientific."
        />
        <link
          rel="canonical"
          href="https://www.arcsscientific.com/carbon-capture"
        />
        <meta name="author" content="James Scott DC Institute" />
      </Helmet>

      {/* Rest of the component remains the same... */}
      {/* Introduction Section */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <p className="text-gray-600 leading-relaxed">
          The integration of the Adaptive Regulatory Compliance System (ARCS)
          with the Integrated Carbon Management Initiative (ICMI) model provides
          Reactive Surfaces with a superior approach to carbon credit
          optimization. By uniting ARCS's adaptive compliance, predictive
          analytics, and data-driven quality assurance, this framework delivers
          high-impact carbon credits designed for transparency, regulatory
          alignment, and financial strength. With advanced capabilities that
          appeal to both corporate clients and ESG-focused investors, Reactive
          Surfaces stands at the forefront of sustainable carbon market
          innovation.
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

      {/* Carbon Market Capabilities */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">
          Carbon Market Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {carbonMarketCapabilities.map((capability, index) => (
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
          Revolutionizing Carbon Markets with ARCS
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The ARCS-Enhanced Carbon Markets Framework delivers an unmatched
          approach to carbon credit quality, compliance, and adaptability. With
          an emphasis on transparency, resilience, and data-backed performance,
          Reactive Surfaces is uniquely positioned to meet the needs of
          corporations, government agencies, and ESG-focused investors. Through
          this innovative framework, Reactive Surfaces offers a scalable,
          verifiable, and forward-thinking carbon credit solution that aligns
          with the complex, fast-evolving demands of global carbon markets.
        </p>
      </div>

      {/* Commercial Potential Table */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Commercial Potential and Competitive Superiority
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The ARCS-ICMI framework not only enhances Reactive Surfaces'
          operational efficiency and compliance but also drives substantial
          commercial value by offering high-quality, adaptable, and
          market-responsive carbon credits. The following table outlines the
          projected annual value and innovation level of each framework
          component.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Framework Component
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Innovation Level
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Annual Commercial Potential
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  component: 'Carbon Sequestration Rate Enhancement',
                  innovation: 'High',
                  potential: '$1,500,000',
                },
                {
                  component: 'Carbon Credit Quality and Traceability',
                  innovation: 'Very High',
                  potential: '$2,000,000',
                },
                {
                  component: 'Exergy Efficiency in Operations',
                  innovation: 'Moderate',
                  potential: '$1,200,000',
                },
                {
                  component: '45Q Compliance and Regulatory Readiness',
                  innovation: 'Very High',
                  potential: '$2,500,000',
                },
                {
                  component: 'Market Adaptability and Pricing Optimization',
                  innovation: 'High',
                  potential: '$2,000,000',
                },
                {
                  component: 'Biochar Production for Soil Carbon Credits',
                  innovation: 'High',
                  potential: '$1,800,000',
                },
                {
                  component: 'Multi-Site Monitoring and Scalability',
                  innovation: 'Very High',
                  potential: '$2,200,000',
                },
                {
                  component: 'Investor Dashboard with Predictive Insights',
                  innovation: 'High',
                  potential: '$1,800,000',
                },
                {
                  component: 'Automated Data Integrity and Verification',
                  innovation: 'Very High',
                  potential: '$2,300,000',
                },
                {
                  component: 'Real-Time Regulatory Compliance Adaptation',
                  innovation: 'Exceptional',
                  potential: '$3,000,000',
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {row.component}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {row.innovation}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {row.potential}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Q&A with James Scott */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Q&A with James Scott on ARCS-Integrated Carbon Markets Framework
        </h3>
        <div className="space-y-6">
          {[
            {
              q: 'James, could you start by explaining the main purpose of the ARCS-ICMI framework for carbon credits?',
              a: 'The ARCS-ICMI framework is designed to elevate carbon credit markets by integrating advanced compliance, predictive analytics, and real-time data verification. Our aim is to offer clients high-quality, compliance-driven carbon credits that not only meet but anticipate regulatory requirements, ultimately making these credits attractive for both corporate entities and ESG investors.',
              icon: Lightbulb,
            },
            {
              q: 'How does ARCS enhance carbon sequestration rates?',
              a: 'We achieve this through a combination of precision bioengineering and real-time environmental controls. By adjusting variables like light and nutrient levels on the fly, we maximize the efficiency of CO₂ capture, ensuring high sequestration rates that appeal to clients looking for scientifically robust offsets.',
              icon: Leaf,
            },
            {
              q: "What role does blockchain play in ARCS's approach to carbon credit transparency?",
              a: "Blockchain provides an immutable ledger for every carbon credit, detailing its quality, source, and compliance. This traceability is critical as it builds investor confidence by proving that each credit adheres to stringent standards, which is essential in today's climate-conscious markets.",
              icon: Lock,
            },
            {
              q: "Can you talk about the exergy efficiency (ExE) aspect and why it's important?",
              a: 'Exergy efficiency in ARCS reduces energy waste in carbon capture processes by repurposing waste heat and optimizing energy inputs. This lowers operational costs while improving carbon capture yields, making our credits both financially and environmentally efficient.',
              icon: Zap,
            },
            {
              q: 'How does ARCS ensure compliance with Section 45Q?',
              a: 'ARCS monitors regulatory adherence continuously, especially regarding Section 45Q tax credit qualifications. We partner with third-party verifiers and leverage automated compliance checks to ensure that our carbon credits meet all necessary legal requirements, attracting clients who seek both environmental impact and fiscal incentives.',
              icon: Gavel,
            },
            {
              q: "What's unique about ARCS's predictive analytics in the carbon market?",
              a: 'We leverage predictive analytics to release credits at market peaks, maximizing revenue potential. This strategic adaptability means clients can benefit from premium pricing and high-quality certifications, like those from Verra and Gold Standard.',
              icon: BarChart,
            },
            {
              q: 'Could you elaborate on the biochar component?',
              a: "ARCS optimizes biochar production to create soil-enhancing carbon credits, supporting both agricultural sustainability and carbon sequestration. By collaborating with programs like the USDA's Climate-Smart Agriculture initiative, we add government-backed validation to these credits, increasing their appeal.",
              icon: Leaf,
            },
            {
              q: 'How does ARCS support multi-site monitoring?',
              a: 'Through AI-driven, real-time data capture across multiple locations. This centralized monitoring ensures consistent carbon capture performance and compliance, ideal for clients with widespread offset needs.',
              icon: Globe,
            },
            {
              q: 'Why was an investor dashboard included in the ARCS framework?',
              a: 'Transparency is key for investors, especially in ESG. Our dashboard offers real-time ROI projections, regulatory updates, and performance analytics, allowing investors to see the direct impact of their carbon credits and make data-driven decisions.',
              icon: PieChart,
            },
            {
              q: 'How does ARCS handle regulatory changes?',
              a: 'Using adaptive compliance algorithms and NLP, ARCS continuously monitors and responds to regulatory shifts, ensuring that our carbon credits stay aligned with both current and emerging standards, a major advantage for companies with long-term obligations.',
              icon: RefreshCw,
            },
            {
              q: "What is ARCS's value proposition for ESG-focused companies?",
              a: 'ARCS combines high-quality, verifiable carbon credits with market-responsive pricing, making it a valuable asset for ESG investors who prioritize both financial return and environmental impact.',
              icon: Target,
            },
            {
              q: 'How do you see ARCS positioning Reactive Surfaces in the carbon market?',
              a: 'ARCS places Reactive Surfaces at the forefront by delivering scalable, compliance-backed carbon credits that meet rigorous standards, making us a preferred provider for corporations and agencies committed to sustainability.',
              icon: Rocket,
            },
            {
              q: "Can you discuss ARCS's approach to automated data integrity?",
              a: 'ARCS uses machine learning to maintain data accuracy, which simplifies audits and boosts confidence in credit reliability. Direct integration with EPA reporting tools further solidifies our position as a high-trust, compliance-oriented partner.',
              icon: Shield,
            },
            {
              q: 'What competitive edge does real-time regulatory compliance give to Reactive Surfaces?',
              a: 'Real-time compliance ensures our credits are always aligned with the latest standards, making us attractive to companies who need to document regulatory adherence continuously.',
              icon: Zap,
            },
            {
              q: 'How does ARCS support scalability in carbon credit markets?',
              a: 'By facilitating multi-site, real-time monitoring and predictive maintenance, ARCS enables high-volume carbon offset solutions that deliver consistent results, vital for scaling to global demands.',
              icon: TrendingUp,
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
