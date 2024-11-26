import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ApplicationLayout from './Layout';
import {
  Search,
  Brain,
  Activity,
  Target,
  Network,
  Shield,
  FileSearch,
  Users,
  Clock,
  AlertTriangle,
  Database,
  Zap,
  TrendingUp,
  PieChart,
  Shuffle,
  MessageSquare,
  Eye,
  BarChart2,
  GitBranch,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Heart,
  Stethoscope,
  Clipboard,
  Globe,
} from 'lucide-react';

interface Section {
  title: string;
  description: string;
  bgapplication: string;
  content: string[];
  icon: typeof Search;
  metrics?: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
}

const sections: Section[] = [
  {
    title:
      'Real-Time Compliance Monitoring for Myocarditis Treatment Protocols',
    description: 'Ensuring adherence to evolving treatment guidelines.',
    bgapplication:
      'ARCS provides healthcare providers with a real-time, adaptable compliance system that aligns treatment protocols with the latest medical guidelines, ensuring optimal care and reducing risk.',
    content: [
      'Automated Updates of Clinical Guidelines: ARCS automatically incorporates changes in treatment guidelines, adjusting for medication dosages, procedures, and follow-up requirements.',
      'Protocol Adherence Tracking: Through automated tracking, ARCS monitors treatment adherence across institutions, highlighting potential compliance gaps.',
      'Standardization Across Healthcare Networks: ARCS synchronizes treatment protocols across hospitals, clinics, and regions, supporting consistent patient care.',
    ],
    icon: Clipboard,
    metrics: [
      { label: 'Guideline Adherence', value: '99.8%', trend: 'up' },
      { label: 'Update Speed', value: '<1hr', trend: 'down' },
      { label: 'Protocol Standardization', value: '100%', trend: 'up' },
    ],
  },
  {
    title: 'Predictive Analytics for Early Detection and Risk Stratification',
    description: 'Identifying at-risk patients before complications arise.',
    bgapplication:
      "ARCS's predictive analytics capabilities empower healthcare providers to identify patients at risk earlier, enabling proactive intervention and minimizing disease progression.",
    content: [
      'Risk Profiling with Advanced Data Aggregation: ARCS compiles data on genetic predispositions, prior viral infections, and environmental factors to identify individuals with heightened susceptibility.',
      'Machine Learning-Driven Pattern Recognition: ARCS detects subtle early indicators of myocarditis, such as specific changes in biomarkers or initial cardiac irregularities.',
      'Dynamic Risk Scoring and Alerts: ARCS generates personalized risk scores, updating them in real-time and alerting providers to patients who may need immediate diagnostic testing.',
    ],
    icon: Brain,
    metrics: [
      { label: 'Early Detection Rate', value: '95.7%', trend: 'up' },
      { label: 'Risk Assessment Accuracy', value: '98.2%', trend: 'up' },
      { label: 'Intervention Speed', value: '<24hrs', trend: 'down' },
    ],
  },
  {
    title: 'Data-Driven Prevention Programs and Patient Engagement',
    description: 'Empowering patients with personalized prevention strategies.',
    bgapplication:
      'ARCS enables healthcare providers to implement targeted, data-driven prevention programs, educating patients on risk factors and early signs of myocarditis.',
    content: [
      'Tailored Prevention Plans: ARCS designs customized prevention programs based on individual risk profiles, including lifestyle recommendations and vaccination guidance.',
      'Ongoing Digital Engagement: Using digital health platforms, ARCS keeps patients informed with personalized alerts and reinforces prevention measures.',
      'Community Awareness Campaigns: ARCS supports the development of community-focused educational campaigns, increasing public knowledge on myocarditis.',
    ],
    icon: Shield,
    metrics: [
      { label: 'Patient Engagement', value: '89.5%', trend: 'up' },
      { label: 'Prevention Effectiveness', value: '76.3%', trend: 'up' },
      { label: 'Public Awareness Increase', value: '68%', trend: 'up' },
    ],
  },
  {
    title:
      'Influence Mapping for Collaborative Research and Treatment Advancements',
    description: 'Fostering strategic partnerships in myocarditis research.',
    bgapplication:
      "ARCS's influence mapping capability fosters strategic partnerships and accelerates advancements in myocarditis research and treatment.",
    content: [
      'Key Stakeholder Identification: ARCS maps networks of researchers, healthcare leaders, and regulatory bodies focused on myocarditis.',
      'Unified Research and Treatment Networks: ARCS connects specialists across institutions, supporting integrated treatment standards and shared research resources.',
      'Resource Allocation for High-Impact Projects: ARCS identifies high-priority research areas, ensuring resources are directed where they can drive the most significant impact.',
    ],
    icon: Network,
    metrics: [
      { label: 'Collaboration Increase', value: '78.9%', trend: 'up' },
      { label: 'Research Efficiency', value: '67.4%', trend: 'up' },
      { label: 'Resource Optimization', value: '82.1%', trend: 'up' },
    ],
  },
  {
    title: 'Adaptive Patient Monitoring and Personalized Treatment Adjustments',
    description: 'Real-time monitoring for individualized care.',
    bgapplication:
      'ARCS supports adaptive, real-time monitoring, enabling care teams to modify treatment plans based on live health data.',
    content: [
      'Wearable Device Integration: ARCS integrates with wearable devices to monitor key health metrics, alerting healthcare providers to concerning changes.',
      "Dynamic Adjustment of Care Plans: Using real-time patient data, ARCS tailors treatment adjustments according to each patient's evolving condition.",
      'Proactive Relapse Prevention: ARCS detects early warning signs of inflammation or cardiac stress, allowing providers to intervene before serious complications develop.',
    ],
    icon: Activity,
    metrics: [
      { label: 'Treatment Adaptability', value: '94.6%', trend: 'up' },
      { label: 'Complication Prevention', value: '87.2%', trend: 'up' },
      { label: 'Patient Satisfaction', value: '92.8%', trend: 'up' },
    ],
  },
  {
    title: 'Cross-Border Compliance for Global Myocarditis Research and Trials',
    description:
      'Streamlining international collaboration in myocarditis research.',
    bgapplication:
      "ARCS's cross-border compliance capabilities streamline regulatory alignment, making it easier to conduct multinational studies and share data securely.",
    content: [
      'Unified Multi-Jurisdictional Compliance: ARCS ensures regulatory alignment across countries, enabling seamless international research efforts.',
      'Automated Compliance Monitoring in Clinical Trials: ARCS monitors compliance across trial sites in real-time, reducing the likelihood of regulatory discrepancies.',
      "Data Sharing Protocol Adaptation: ARCS adjusts data-sharing protocols based on each country's data privacy regulations, facilitating compliant and secure cross-border information exchange.",
    ],
    icon: Globe,
    metrics: [
      { label: 'Global Compliance Rate', value: '99.1%', trend: 'up' },
      { label: 'Cross-Border Collaboration', value: '76.5%', trend: 'up' },
      { label: 'Data Sharing Efficiency', value: '88.3%', trend: 'up' },
    ],
  },
];

const strategicImpacts = [
  {
    title: 'Early Detection',
    description: 'Identifying myocarditis risk factors proactively.',
    icon: Search,
  },
  {
    title: 'Personalized Care',
    description: 'Tailoring treatment to individual patient needs.',
    icon: Target,
  },
  {
    title: 'Global Research',
    description: 'Facilitating international myocarditis studies.',
    icon: Globe,
  },
  {
    title: 'Patient Engagement',
    description: 'Empowering patients with knowledge and tools.',
    icon: Users,
  },
];

const clinicalCapabilities = [
  {
    title: 'Real-Time Monitoring',
    description: 'Continuous tracking of patient health metrics.',
    icon: Activity,
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecasting potential complications and outcomes.',
    icon: TrendingUp,
  },
  {
    title: 'Protocol Compliance',
    description: 'Ensuring adherence to latest treatment guidelines.',
    icon: Clipboard,
  },
];
export default function Myocarditis() {
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
      title="ARCS for Addressing the Myocarditis Crisis"
      subtitle="A Comprehensive, Precision-Focused Solution for Myocarditis Management"
      industry="Healthcare"
    >
      <Helmet>
        <title>
          Myocarditis Management & Compliance Solutions | ARCS Scientific
        </title>
        <meta
          name="description"
          content="Optimize myocarditis management with ARCS Scientific's comprehensive compliance solutions. Enhance patient care, ensure regulatory adherence, and improve treatment outcomes."
        />
        <meta
          name="keywords"
          content="myocarditis management, healthcare compliance, cardiac care, regulatory compliance, patient monitoring, treatment compliance"
        />
        <meta
          property="og:title"
          content="Myocarditis Management & Compliance Solutions | ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Transform myocarditis management with advanced compliance and monitoring solutions from ARCS Scientific."
        />
        <link
          rel="canonical"
          href="https://www.arcsscientific.com/myocarditis"
        />
        <meta name="author" content="James Scott DC Institute" />
      </Helmet>

      {/* Rest of the component remains the same... */}
      {/* Introduction Section */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <p className="text-gray-600 leading-relaxed">
          The Adaptive Regulatory Compliance System (ARCS) offers a pioneering,
          multi-dimensional approach to addressing the myocarditis crisis by
          integrating real-time compliance monitoring, predictive analytics,
          influence mapping, and adaptive patient care. This innovative system
          not only facilitates early detection and personalized treatment but
          also strengthens collaboration across medical institutions and
          enhances global research efforts.
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

      {/* Clinical Capabilities */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">
          Clinical Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicalCapabilities.map((capability, index) => (
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
          Transformative Framework for Myocarditis Management
        </h3>
        <p className="text-gray-600 leading-relaxed">
          ARCS delivers a powerful, adaptable framework for combating
          myocarditis through predictive insights, real-time compliance, and
          personalized patient care. By integrating advanced data science,
          continuous monitoring, and global compliance, ARCS empowers healthcare
          providers, researchers, and public health leaders to address
          myocarditis with superior precision, agility, and effectiveness.
        </p>
      </div>

      {/* Q&A with James Scott */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Q&A with James Scott on ARCS's Role in Addressing the Myocarditis
          Crisis
        </h3>
        <div className="space-y-6">
          {[
            {
              q: 'What inspired you to apply the Adaptive Regulatory Compliance System (ARCS) to the myocarditis crisis?',
              a: 'Myocarditis is a complex condition that requires real-time adaptability, precise diagnostics, and proactive intervention. ARCS offers a comprehensive framework that integrates these elements, equipping healthcare providers and researchers with tools to tackle myocarditis with precision and improve patient outcomes.',
              icon: Lightbulb,
            },
            {
              q: 'How does ARCS enhance early detection and diagnosis of myocarditis?',
              a: "ARCS's predictive analytics and machine learning capabilities analyze early indicators like biomarkers and cardiac patterns. This helps detect myocarditis risk factors early on, empowering healthcare teams to intervene before severe symptoms develop.",
              icon: Search,
            },
            {
              q: 'What role does real-time compliance play in ARCS for myocarditis treatment?',
              a: 'Real-time compliance ensures that treatment protocols for myocarditis align instantly with the latest clinical guidelines. This enables providers to deliver safe, compliant care, adapting quickly to any updates in treatment standards.',
              icon: Clipboard,
            },
            {
              q: 'Can you explain how ARCS aids in the personalized care of myocarditis patients?',
              a: 'ARCS integrates data from wearable devices and health records, enabling continuous monitoring and real-time adjustments to care plans. This personalized approach ensures that each patient receives treatment tailored to their current condition.',
              icon: Target,
            },
            {
              q: 'How does ARCS support global research collaborations in myocarditis?',
              a: 'ARCS streamlines cross-border compliance, harmonizing regulatory standards for international studies. This makes it easier to conduct and share research globally, accelerating advancements in myocarditis treatment.',
              icon: Globe,
            },
            {
              q: 'What makes ARCS a unique tool for myocarditis prevention?',
              a: "ARCS's data-driven prevention programs focus on individual risk profiles, lifestyle recommendations, and patient engagement. By promoting early intervention and education, ARCS helps reduce myocarditis incidence before it becomes severe.",
              icon: Shield,
            },
            {
              q: 'How does ARCS enhance risk assessment for myocarditis?',
              a: 'ARCS aggregates patient data, from medical history to genetic factors, creating comprehensive risk profiles. By identifying high-risk individuals, ARCS enables healthcare teams to prioritize preventive measures effectively.',
              icon: BarChart2,
            },
            {
              q: 'How does influence mapping within ARCS support myocarditis research?',
              a: 'Influence mapping identifies key researchers, healthcare leaders, and institutions involved in myocarditis research. This fosters strategic partnerships, helping accelerate advancements and disseminate critical findings.',
              icon: Network,
            },
            {
              q: 'How does ARCS use predictive scenario modeling to assist policymakers?',
              a: "ARCS's scenario modeling tests different public health initiatives, like vaccination campaigns or community screenings, providing insights on their potential impact. Policymakers can use this data to create responsive, evidence-based strategies.",
              icon: TrendingUp,
            },
            {
              q: 'How does ARCS leverage advanced technology like AI in myocarditis care?',
              a: 'ARCS incorporates AI to analyze imaging and biomarker data, which enhances diagnostic accuracy. This allows for earlier detection and tailored interventions, improving the overall effectiveness of myocarditis care.',
              icon: Brain,
            },
            {
              q: 'What role does real-time compliance monitoring play in ARCS?',
              a: "Real-time monitoring ensures healthcare providers adhere to the latest myocarditis treatment guidelines. It's essential for standardizing high-quality care and minimizing variations in treatment protocols across different providers.",
              icon: Eye,
            },
            {
              q: 'How does ARCS improve treatment adherence and protocol standardization in myocarditis?',
              a: 'By automating protocol updates, ARCS ensures healthcare teams follow the latest treatment guidelines. This standardization reduces the risk of non-compliance, promoting safe and effective myocarditis care.',
              icon: Clipboard,
            },
            {
              q: 'Can ARCS assist in managing post-treatment monitoring for myocarditis patients?',
              a: 'Absolutely. ARCS monitors patient health data continuously, detecting any signs of relapse or complications. This allows for timely adjustments in treatment, improving long-term outcomes for myocarditis patients.',
              icon: Activity,
            },
            {
              q: 'How does ARCS support early warning and prevention systems for myocarditis?',
              a: 'ARCS uses predictive modeling and continuous monitoring to detect early warning signs in at-risk individuals. This proactive approach enables preventive care, reducing the chances of severe myocarditis cases.',
              icon: AlertTriangle,
            },
            {
              q: 'How does ARCS handle the complex regulatory environment in myocarditis research?',
              a: 'ARCS aligns research protocols with regional regulations, automating compliance monitoring across different jurisdictions. This streamlines the regulatory process, making it easier to conduct global studies on myocarditis.',
              icon: Shield,
            },
            {
              q: 'How does ARCS empower patients with knowledge about myocarditis?',
              a: 'ARCS offers personalized prevention and education programs through digital platforms, informing patients about their specific risk factors and encouraging proactive health management, which is key to reducing myocarditis incidence.',
              icon: Users,
            },
            {
              q: 'What role does data privacy play in ARCS for myocarditis care?',
              a: 'Data privacy is integral to ARCS. It adjusts data-sharing protocols based on regional laws, ensuring compliance with privacy regulations, which is essential for secure and ethical data management in healthcare.',
              icon: Clock,
            },
            {
              q: 'How does ARCS help healthcare systems manage myocarditis cases more efficiently?',
              a: "ARCS's real-time compliance and monitoring reduce the administrative burden on healthcare teams. By automating updates and standardizing protocols, ARCS frees up resources for direct patient care.",
              icon: Zap,
            },
            {
              q: 'How does ARCS adapt to the rapid evolution of myocarditis research?',
              a: "ARCS's adaptive learning model continuously incorporates new findings and updates protocols. This ensures that healthcare providers stay informed of the latest research, keeping patient care aligned with the best practices.",
              icon: Shuffle,
            },
            {
              q: 'How does ARCS reduce the risk of complications in myocarditis?',
              a: 'By detecting early signs and adjusting treatment protocols in real-time, ARCS allows healthcare providers to intervene quickly. This helps prevent complications like heart failure, enhancing patient survival rates and quality of life.',
              icon: Heart,
            },
            {
              q: 'How does ARCS handle data from wearable health devices in myocarditis management?',
              a: 'ARCS integrates data from wearables, such as heart rate and blood pressure, into its system. This data is monitored continuously, enabling healthcare providers to respond promptly to any signs of cardiac distress.',
              icon: Activity,
            },
            {
              q: 'What impact does ARCS have on myocarditis research funding allocation?',
              a: "ARCS's influence mapping identifies high-impact research areas and key stakeholders, guiding funding toward studies that can yield the most significant advancements in myocarditis care and patient outcomes.",
              icon: PieChart,
            },
            {
              q: 'How does ARCS improve patient outcomes in myocarditis?',
              a: 'Through continuous monitoring, personalized care adjustments, and compliance with the latest protocols, ARCS enables timely, precise care that improves recovery rates and minimizes long-term health impacts.',
              icon: TrendingUp,
            },
            {
              q: 'How does ARCS assist healthcare providers with real-time patient risk assessment?',
              a: 'ARCS compiles data from various sources to generate a real-time risk score, providing healthcare providers with insights into which patients are most at risk and allowing for timely, data-informed intervention.',
              icon: BarChart2,
            },
            {
              q: 'How does ARCS support crisis management during myocarditis outbreaks?',
              a: "ARCS's predictive modeling helps public health leaders prepare for outbreaks, suggesting infrastructure and resource allocation strategies that optimize readiness and response to increasing myocarditis cases.",
              icon: AlertTriangle,
            },
            {
              q: 'How does ARCS support telemedicine in myocarditis care?',
              a: 'ARCS integrates with telemedicine platforms, enabling remote monitoring and consultations. This extends access to specialized care and ensures continuous patient support, even outside traditional healthcare settings.',
              icon: MessageSquare,
            },
            {
              q: 'How does ARCS use community-specific data to drive myocarditis prevention?',
              a: 'ARCS identifies regions or demographics with high myocarditis risk, enabling targeted public health interventions and resources. This community-focused approach enhances prevention and early detection.',
              icon: Users,
            },
            {
              q: 'How does ARCS improve healthcare resource management in myocarditis treatment?',
              a: 'By automating compliance and streamlining monitoring, ARCS reduces operational overhead, allowing healthcare providers to allocate resources more effectively toward direct patient care and critical interventions.',
              icon: Shuffle,
            },
            {
              q: 'How does ARCS optimize clinical trial compliance in myocarditis research?',
              a: 'ARCS monitors regulatory adherence throughout clinical trials, ensuring that studies comply with local and international standards. This reduces the risk of compliance issues and promotes safe, ethical research.',
              icon: Clipboard,
            },
            {
              q: "What is your vision for ARCS's future in addressing myocarditis?",
              a: 'My vision is for ARCS to become a central framework in myocarditis care, enabling data-driven precision in prevention, diagnosis, and treatment. I believe ARCS can transform myocarditis management, leading to earlier intervention, personalized care, and, ultimately, a higher quality of life for patients worldwide.',
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
