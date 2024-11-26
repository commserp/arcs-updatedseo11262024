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
    title: 'Real-Time Content Monitoring and Detection',
    description:
      'Comprehensive monitoring of digital channels for rapid insights.',
    bgapplication:
      'ARCS processes both structured and unstructured data across complex media landscapes, enabling swift detection and response to disinformation threats.',
    content: [
      'Natural Language Processing (NLP) and Computer Vision: Advanced NLP identifies disinformation traits, while computer vision models analyze images and videos to detect manipulated media.',
      'Behavioral Analysis: ARCS evaluates posting patterns, frequency, and sentiment shifts to flag potential disinformation campaigns.',
      'Real-Time Flagging and Alerts: Content deviating from credible sources is autonomously flagged, allowing immediate intervention.',
    ],
    icon: Search,
    metrics: [
      { label: 'Detection Speed', value: '<1s', trend: 'down' },
      { label: 'Accuracy', value: '99.7%', trend: 'up' },
      { label: 'Coverage', value: '100%', trend: 'up' },
    ],
  },
  {
    title: 'Pattern Recognition for Disinformation Campaign Detection',
    description: 'Early detection of coordinated disinformation activities.',
    bgapplication:
      'ARCS identifies signs of coordinated activities, such as repetitive messaging and bot-driven engagement, to detect disinformation campaigns in their early stages.',
    content: [
      'Temporal and Semantic Pattern Analysis: Analyzes time-based posting frequencies to detect high-volume, repetitive content indicative of bot activity or coordinated narratives.',
      'Network Mapping of Campaign Origin and Spread: Maps the dissemination pathways of disinformation, tracing back to primary influencers and campaign sources.',
      'Campaign Flagging and Tracking: Tracks the evolution and reach of detected disinformation campaigns across digital media.',
    ],
    icon: GitBranch,
    metrics: [
      { label: 'Pattern Detection', value: '98.5%', trend: 'up' },
      { label: 'Campaign Tracking', value: '100%', trend: 'up' },
      { label: 'Response Time', value: '<5min', trend: 'down' },
    ],
  },
  {
    title: 'Psychographic Profiling and Targeted Influence Analysis',
    description:
      'Revealing psychologically manipulative content targeting specific audience segments.',
    bgapplication:
      'ARCS uses psychographic profiling to detect content crafted to exploit emotional triggers, cognitive biases, or divisive language in distinct audience segments.',
    content: [
      'Psycholinguistic Analysis: Leverages psycholinguistics and machine learning to assess language targeting emotions such as fear, anger, or polarization.',
      'Audience Reaction Analysis: Studies engagement metrics and sentiment trends to identify demographic and psychographic groups most influenced by specific narratives.',
      'Targeting Detection and Influence Pathways: Maps pathways of influence by examining audience interactions with content.',
    ],
    icon: Brain,
    metrics: [
      { label: 'Profiling Accuracy', value: '97.8%', trend: 'up' },
      { label: 'Influence Detection', value: '96.5%', trend: 'up' },
      { label: 'Audience Insights', value: '99.1%', trend: 'up' },
    ],
  },
  {
    title: 'Deepfake and Synthetic Media Detection',
    description:
      'Sophisticated detection of manipulated media in influence operations.',
    bgapplication:
      'ARCS incorporates advanced algorithms to identify deepfakes and other synthetic media used in disinformation campaigns.',
    content: [
      'Convolutional Neural Networks (CNNs) and Deepfake Detection Models: Detects synthetic media through indicators like unnatural facial movements, pixel inconsistencies, and audio anomalies.',
      'Anomaly Detection Algorithms: Identifies discrepancies within media files, flagging potential synthetic content for verification.',
      'Immediate Alerting and Flagging: Detected synthetic media is promptly flagged for review and action.',
    ],
    icon: Eye,
    metrics: [
      { label: 'Detection Rate', value: '99.3%', trend: 'up' },
      { label: 'False Positive Rate', value: '0.7%', trend: 'down' },
      { label: 'Processing Speed', value: '<2s', trend: 'down' },
    ],
  },
  {
    title: 'Automated Decision Support for News Verification',
    description:
      'AI-driven system for rapid content verification and action recommendations.',
    bgapplication:
      'ARCS guides analysts through verifying flagged content, assessing authenticity, and making evidence-based decisions on recommended actions.',
    content: [
      'AI-Driven Verification Models: Synthesizes information from credible sources, checks for alignment with verified content, and recommends courses of action.',
      'Impact Assessment and Source Comparison: Evaluates the influence of flagged content on public sentiment and compares it to known reliable sources.',
      'Automated Tagging and Verification: Classifies content as verified, unverified, or requiring further review, streamlining the analysis process.',
    ],
    icon: Shield,
    metrics: [
      { label: 'Verification Speed', value: '<30s', trend: 'down' },
      { label: 'Accuracy', value: '98.9%', trend: 'up' },
      { label: 'Efficiency Gain', value: '85%', trend: 'up' },
    ],
  },
  {
    title: 'Predictive Modeling for Influence Operation Trends',
    description:
      'Anticipating shifts in disinformation strategies and emerging narratives.',
    bgapplication:
      'ARCS uses predictive capabilities to forecast disinformation trends, offering preemptive insights into potential areas of manipulation.',
    content: [
      'Historical Pattern Analysis: Analyzes past disinformation efforts to identify recurring themes, narrative shifts, and common tactics.',
      'Bayesian Inference and Trend Forecasting: Applies Bayesian models to predict the likelihood of future influence operations based on prior data.',
      'Preemptive Strategy Development: Enables organizations to counteract influence operations before they gain traction.',
    ],
    icon: TrendingUp,
    metrics: [
      { label: 'Prediction Accuracy', value: '94.7%', trend: 'up' },
      { label: 'Trend Detection', value: '97.2%', trend: 'up' },
      { label: 'Preemptive Actions', value: '78%', trend: 'up' },
    ],
  },
];

const strategicImpacts = [
  {
    title: 'Real-Time Detection',
    description: 'Swift identification of disinformation threats.',
    icon: Search,
  },
  {
    title: 'Pattern Recognition',
    description: 'Early detection of coordinated campaigns.',
    icon: GitBranch,
  },
  {
    title: 'Psychographic Analysis',
    description: 'Insights into targeted psychological manipulation.',
    icon: Brain,
  },
  {
    title: 'Synthetic Media Detection',
    description: 'Identification of deepfakes and manipulated content.',
    icon: Eye,
  },
];

const operationalCapabilities = [
  {
    title: 'Continuous Learning',
    description: 'Adaptive response to evolving disinformation tactics.',
    icon: Zap,
  },
  {
    title: 'Expert Integration',
    description: 'Human-in-the-loop for high-stakes decisions.',
    icon: Users,
  },
  {
    title: 'Scalable Monitoring',
    description: 'Dynamic resource allocation during high-risk periods.',
    icon: BarChart2,
  },
];

// Rest of the imports and component code remains the same...

export default function CounterDisinformation() {
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
      title="ARCS for Countering Disinformation and Influence Operations"
      subtitle="Advanced Framework for Detecting, Analyzing, and Neutralizing Digital Threats"
      industry="Intelligence and Security"
    >
      <Helmet>
        <title>
          Disinformation Countermeasures & Compliance | ARCS Scientific
        </title>
        <meta
          name="description"
          content="Combat disinformation with ARCS Scientific's advanced detection and analysis solutions. Enhance digital integrity, ensure regulatory compliance, and protect against influence operations."
        />
        <meta
          name="keywords"
          content="disinformation detection, influence operations, digital integrity, compliance monitoring, threat analysis, cybersecurity compliance"
        />
        <meta
          property="og:title"
          content="Disinformation Countermeasures & Compliance | ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Transform disinformation detection and response with advanced compliance solutions from ARCS Scientific."
        />
        <link
          rel="canonical"
          href="https://www.arcsscientific.com/disinformation"
        />
        <meta name="author" content="James Scott Institute DC" />
      </Helmet>

      {/* Rest of the component remains the same... */}
      {/* Introduction Section */}
      <div className="glass-card p-8 rounded-2xl hover-glow mb-12">
        <p className="text-gray-600 leading-relaxed">
          The Adaptive Regulatory Compliance System (ARCS) offers a
          sophisticated, agile framework designed to counter disinformation and
          influence operations with unmatched precision and adaptability.
          Through real-time data monitoring, advanced AI, predictive analytics,
          and psychographic insights, ARCS empowers organizations to proactively
          detect, analyze, and neutralize disinformation threats across digital
          ecosystems. This capability is critical for intelligence agencies,
          national security entities, public relations teams, fact-checkers, and
          organizations focused on safeguarding public trust and mitigating the
          risks of influence operations.
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

      {/* Operational Capabilities */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold gradient-text mb-6">
          Operational Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationalCapabilities.map((capability, index) => (
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
          Transformative Framework for Digital Integrity
        </h3>
        <p className="text-gray-600 leading-relaxed">
          ARCS's application in countering disinformation and influence
          operations offers a comprehensive solution for safeguarding digital
          ecosystems. By leveraging advanced AI, real-time monitoring, and
          predictive analytics, ARCS empowers organizations to proactively
          defend against evolving digital threats, preserve public trust, and
          maintain information integrity in an increasingly complex digital
          landscape.
        </p>
      </div>

      {/* Q&A with James Scott */}
      <div className="glass-card p-8 rounded-2xl hover-glow mt-12">
        <h3 className="text-xl font-semibold gradient-text mb-4">
          Q&A with James Scott on ARCS for Countering Influence Operations
        </h3>
        <div className="space-y-6">
          {[
            {
              q: 'What inspired the development of ARCS for countering influence operations?',
              a: 'We developed ARCS to address the increasing sophistication of influence operations that leverage psychology, technology, and complex data patterns. Our goal was to create an adaptive framework that allows organizations to detect, analyze, and counter these tactics in real-time, ultimately protecting public trust and information integrity.',
              icon: Lightbulb,
            },
            {
              q: 'How does ARCS detect disinformation in real time?',
              a: 'ARCS combines natural language processing and behavioral analysis to continuously scan digital channels for disinformation markers, such as sensational language, emotional manipulation, and unverified sources. This approach allows for rapid flagging of content as soon as it deviates from credible standards.',
              icon: Search,
            },
            {
              q: 'What role does artificial intelligence play in ARCS?',
              a: 'AI is foundational to ARCS, driving its core functions from content verification to predictive analytics. With machine learning, ARCS continuously improves its models to adapt to new disinformation tactics, staying effective against evolving threats.',
              icon: Brain,
            },
            {
              q: 'How does ARCS differentiate between genuine content and coordinated disinformation?',
              a: 'ARCS analyzes patterns like frequency, timing, and structural similarities across posts to identify coordinated activities. If it detects synchronized messaging or bot-like engagement, it flags the content as potentially coordinated, allowing analysts to investigate further.',
              icon: GitBranch,
            },
            {
              q: 'Can ARCS detect deepfake and synthetic media content?',
              a: 'Absolutely. ARCS uses deepfake detection models that identify anomalies in audio, video, and image files, such as unnatural facial movements or audio mismatches. This capability helps us flag synthetic content before it spreads widely.',
              icon: Eye,
            },
            {
              q: 'How does ARCS handle psychographic profiling for influence detection?',
              a: 'ARCS incorporates psychographic analysis to detect content crafted to manipulate specific audience segments emotionally or psychologically. It assesses language and engagement patterns to reveal the psychological underpinnings used to sway targeted groups.',
              icon: Users,
            },
            {
              q: "What makes ARCS's pattern recognition so effective in identifying influence campaigns?",
              a: "ARCS's pattern recognition leverages temporal and semantic analysis to identify recurring language, hashtags, or posting intervals characteristic of influence campaigns. It goes beyond surface-level content to detect the architecture behind coordinated disinformation.",
              icon: Network,
            },
            {
              q: "How does ARCS's predictive modeling work in identifying future disinformation trends?",
              a: "ARCS's predictive models analyze historical disinformation campaigns and apply trend analysis and Bayesian inference to forecast likely narratives and tactics. This enables organizations to prepare for influence tactics before they fully materialize.",
              icon: TrendingUp,
            },
            {
              q: 'How does ARCS protect election integrity?',
              a: 'During election cycles, ARCS enhances monitoring to detect disinformation aimed at influencing voter sentiment. It flags suspicious narratives and potential foreign interference early, allowing authorities to respond swiftly and maintain public trust in the electoral process.',
              icon: Shield,
            },
            {
              q: "What role does audience segmentation play in ARCS's approach?",
              a: 'Audience segmentation is critical for identifying which demographic or psychographic groups are being targeted. ARCS provides insights into engagement patterns, helping organizations tailor counter-messaging to resonate with those specific audiences effectively.',
              icon: PieChart,
            },
            {
              q: 'How does ARCS support organizations in verifying news and media content?',
              a: "ARCS's decision support engine uses AI-driven verification to cross-reference flagged content with verified sources. It provides recommendations on whether content is authentic, helping teams verify information rapidly in high-stakes situations.",
              icon: FileSearch,
            },
            {
              q: 'Can ARCS integrate with social media platforms for enhanced detection?',
              a: 'Yes, ARCS integrates seamlessly with social media APIs, allowing for real-time monitoring of posts, comments, and engagement patterns. This direct integration helps detect influence operations on platforms where misinformation spreads rapidly.',
              icon: MessageSquare,
            },
            {
              q: 'How does ARCS help organizations counter influence operations in critical infrastructure sectors?',
              a: 'ARCS monitors digital communications targeting sectors like energy, finance, and healthcare, flagging narratives that could undermine public trust. This enables proactive protection against disinformation that aims to destabilize essential services.',
              icon: Shield,
            },
            {
              q: 'How does ARCS handle resource allocation during high-risk periods?',
              a: "ARCS's resource optimizer dynamically adjusts resources based on disinformation intensity. During heightened activity, like election periods, it allocates more computational power to real-time monitoring and analysis, ensuring maximum detection capacity.",
              icon: Shuffle,
            },
            {
              q: 'How does ARCS use historical data to enhance future disinformation defenses?',
              a: 'ARCS learns from previous incidents, using historical data to refine detection models and anticipate recurring tactics. This learning approach ensures that ARCS evolves continuously, staying ahead of emerging disinformation strategies.',
              icon: Clock,
            },
            {
              q: 'How does ARCS differentiate itself from traditional threat intelligence systems?',
              a: "Unlike traditional systems, ARCS is designed with autonomous adaptation and continuous learning. It doesn't require frequent manual updates because it learns from real-time data, enabling it to respond proactively to new disinformation techniques.",
              icon: Zap,
            },
            {
              q: 'How does ARCS leverage psycholinguistic insights in its analysis?',
              a: "Psycholinguistics informs ARCS's analysis of language patterns aimed at psychological manipulation. By detecting appeals to fear, anger, or polarization, ARCS helps organizations understand the emotional drivers behind influence operations.",
              icon: Brain,
            },
            {
              q: "What makes ARCS's predictive capabilities unique?",
              a: "ARCS's predictive capabilities combine historical trend analysis with Bayesian models to project future tactics and narratives. This forward-looking approach enables organizations to stay a step ahead, countering disinformation before it gains traction.",
              icon: TrendingUp,
            },
            {
              q: 'Can ARCS assist in mapping and mitigating bot networks?',
              a: 'Yes, ARCS identifies bot networks by analyzing posting patterns, repetition frequency, and unnatural interaction patterns. Mapping these networks allows organizations to disrupt coordinated bot-driven disinformation.',
              icon: Network,
            },
            {
              q: 'How does ARCS handle high-stakes decision-making?',
              a: 'For high-stakes scenarios, ARCS includes a "human-in-the-loop" approach, where flagged content is reviewed by experts. This ensures that critical decisions are verified, enhancing response accuracy and trust in ARCS\'s recommendations.',
              icon: Users,
            },
            {
              q: 'How does ARCS address cross-platform disinformation campaigns?',
              a: 'ARCS monitors narratives across multiple platforms, detecting cross-platform consistencies and timing patterns. This multi-platform perspective provides a holistic view, allowing teams to counter coordinated disinformation more effectively.',
              icon: Shuffle,
            },
            {
              q: "What role does edge computing play in ARCS's real-time analysis?",
              a: 'Edge computing allows ARCS to process data close to its source, significantly reducing latency. This is essential for high-speed analysis across fast-paced digital platforms, ensuring real-time response capabilities.',
              icon: Zap,
            },
            {
              q: 'How does ARCS support fact-checking organizations?',
              a: 'Fact-checkers can use ARCS to automate verification, flagging questionable content and cross-referencing it with trusted sources. This enhances the accuracy and efficiency of the fact-checking process, especially during high-volume events.',
              icon: FileSearch,
            },
            {
              q: 'How does ARCS monitor for foreign interference in influence operations?',
              a: 'ARCS identifies foreign influence by tracking patterns typical of nation-state tactics, such as coordinated timing and messaging that align with geopolitical events. This enables early detection of foreign interference efforts.',
              icon: Activity,
            },
            {
              q: 'How does ARCS help counter psychological operations (psyops) against critical infrastructure?',
              a: 'ARCS monitors narratives that target specific sectors, analyzing language for fear-inducing or destabilizing tactics. Early detection allows authorities to counteract psychological operations aimed at disrupting public confidence in infrastructure.',
              icon: Shield,
            },
            {
              q: 'What does ARCS offer that traditional disinformation monitoring tools do not?',
              a: 'ARCS goes beyond surface-level monitoring by integrating psychographic profiling, adaptive learning, and multi-platform mapping. Its ability to detect emotional manipulation and pattern-based coordination gives it a competitive advantage.',
              icon: Zap,
            },
            {
              q: 'How does ARCS quantify the impact of disinformation on public sentiment?',
              a: "ARCS uses sentiment analysis to track shifts in public opinion before and after the spread of specific narratives, providing a measurable impact assessment. This data-driven approach helps quantify disinformation's influence on public perception.",
              icon: BarChart2,
            },
            {
              q: 'How does ARCS prevent synthetic media from influencing public opinion?',
              a: 'By detecting deepfakes and manipulated media, ARCS flags synthetic content before it can circulate widely. This minimizes the chance of public opinion being swayed by deceptive visual or audio narratives.',
              icon: Eye,
            },
            {
              q: 'How does ARCS support media outlets in safeguarding their integrity?',
              a: 'Media outlets use ARCS to preemptively identify and verify content, preventing the publication of false narratives. By integrating verification workflows, ARCS ensures accuracy and credibility in content dissemination.',
              icon: FileSearch,
            },
            {
              q: 'What future advancements do you envision for ARCS in countering influence operations?',
              a: "We're expanding ARCS's capabilities to integrate more advanced AI-driven behavioral predictions and to refine its adaptability across emerging digital ecosystems. Our vision is to continually evolve ARCS into an indispensable tool in protecting public trust and resilience against influence operations.",
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
