import { Brain, Network, CircuitBoard, Lock, Workflow, Cpu, Zap, Sparkles, Shield, Database, GitBranch, Activity } from 'lucide-react';
import { Technology } from './types';

export const technologies: Technology[] = [
  {
    icon: Brain,
    title: 'Neural Processing',
    shortDescription: 'Advanced AI algorithms that mimic human cognitive processes',
    fullDescription: `Our neural processing systems utilize state-of-the-art deep learning architectures to analyze and process regulatory data in real-time. This technology enables:
      • Pattern recognition in complex regulatory frameworks
      • Adaptive learning from new compliance requirements
      • Predictive analytics for regulatory trends
      • Cognitive mapping of compliance relationships`,
    gradient: 'from-blue-500 to-blue-600',
    stats: [
      { label: 'Processing Speed', value: '500ms', icon: Zap },
      { label: 'Accuracy Rate', value: '99.9%', icon: Sparkles },
      { label: 'Data Points', value: '1M+', icon: Network }
    ],
    demo: {
      type: 'pulse',
      color: 'blue'
    }
  },
  {
    icon: Network,
    title: 'Deep Learning',
    shortDescription: 'Sophisticated neural networks for complex pattern recognition',
    fullDescription: `Our deep learning infrastructure leverages multi-layered neural networks to identify and analyze complex regulatory patterns:
      • Advanced natural language processing
      • Multi-dimensional compliance analysis
      • Automated risk assessment
      • Real-time adaptation to new regulations`,
    gradient: 'from-emerald-500 to-emerald-600',
    stats: [
      { label: 'Model Depth', value: '152', icon: GitBranch },
      { label: 'Training Data', value: '10TB', icon: Database },
      { label: 'Accuracy', value: '99.7%', icon: Activity }
    ],
    demo: {
      type: 'wave',
      color: 'emerald'
    }
  },
  {
    icon: CircuitBoard,
    title: 'System Architecture',
    shortDescription: 'Scalable and efficient computational frameworks',
    fullDescription: `Our distributed system architecture ensures maximum performance and reliability:
      • High-availability cluster computing
      • Real-time data processing
      • Fault-tolerant operations
      • Dynamic resource allocation`,
    gradient: 'from-blue-600 to-emerald-500',
    stats: [
      { label: 'Uptime', value: '99.99%', icon: Activity },
      { label: 'Response Time', value: '50ms', icon: Zap },
      { label: 'Throughput', value: '1M/s', icon: Network }
    ],
    demo: {
      type: 'grid',
      color: 'blue'
    }
  },
  {
    icon: Lock,
    title: 'Secure Computing',
    shortDescription: 'Enterprise-grade security for sensitive data processing',
    fullDescription: `Our security framework implements multiple layers of protection:
      • End-to-end encryption
      • Zero-trust architecture
      • Real-time threat detection
      • Automated security responses`,
    gradient: 'from-emerald-600 to-blue-500',
    stats: [
      { label: 'Encryption', value: '256-bit', icon: Shield },
      { label: 'Compliance', value: 'ISO 27001', icon: Lock },
      { label: 'Security Score', value: '98/100', icon: Activity }
    ],
    demo: {
      type: 'shield',
      color: 'emerald'
    }
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    shortDescription: 'Intelligent workflow optimization systems',
    fullDescription: `Our automation platform streamlines complex regulatory processes:
      • Intelligent task routing
      • Automated compliance checks
      • Smart document processing
      • Workflow optimization`,
    gradient: 'from-blue-500 to-emerald-600',
    stats: [
      { label: 'Automation Rate', value: '95%', icon: Activity },
      { label: 'Time Saved', value: '75%', icon: Zap },
      { label: 'ROI', value: '300%', icon: Sparkles }
    ],
    demo: {
      type: 'flow',
      color: 'blue'
    }
  },
  {
    icon: Cpu,
    title: 'Hardware Integration',
    shortDescription: 'Seamless integration with advanced computing infrastructure',
    fullDescription: `Our hardware integration capabilities ensure optimal performance:
      • Quantum-ready architecture
      • Custom ASIC support
      • Edge computing integration
      • Scalable infrastructure`,
    gradient: 'from-emerald-500 to-blue-600',
    stats: [
      { label: 'Processing Power', value: '100 TFLOPS', icon: Cpu },
      { label: 'Latency', value: '<1ms', icon: Zap },
      { label: 'Scalability', value: '∞', icon: GitBranch }
    ],
    demo: {
      type: 'circuit',
      color: 'emerald'
    }
  }
];