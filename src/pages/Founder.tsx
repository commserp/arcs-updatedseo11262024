import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Star,
  Award,
  Globe,
  Brain,
  Link,
  Leaf,
  Heart,
  Shield,
  Database,
  Palette,
} from 'lucide-react';
import { FadeInSection } from '../components/animations';
import FounderHero from '../components/founder/FounderHero';
import FounderSection from '../components/founder/FounderSection';

const initiatives = [
  {
    title: 'Resilience Project',
    description:
      'A groundbreaking initiative designed to combat the opioid epidemic through technological innovation, community resilience, and strategic collaborations.',
    link: 'https://resilienceprojects.org',
    icon: Heart,
  },
  {
    title: 'Embassy Row Project',
    description:
      'Fosters international cooperation by offering services to NGOs, think tanks, and startups at no cost, supported by a grant and scholarship model.',
    link: 'https://embassyrowproject.org',
    icon: Globe,
  },
  {
    title: 'NetZero Incubator & Accelerator',
    description:
      'Provides organizations with free carbon footprint assessments and helps them develop sustainable practices.',
    link: 'https://netzeroaccelerator.io',
    icon: Leaf,
  },
  {
    title: 'ASEAN Institute and Accelerator',
    description:
      'Enhances regional security and economic development, serving as a bridge between Southeast Asia and the United States.',
    link: 'https://aseaninstitute.org',
    icon: Shield,
  },
  {
    title: 'Envirotech Accelerator',
    description:
      'Pioneers advancements in climate technology, uniting various climate tech accelerators under the Envirotech Accelerator Coalition.',
    link: 'https://envirotechaccelerator.org',
    icon: Leaf,
  },
  {
    title: 'Emancip8 Project',
    description:
      "Tackles complex humanitarian issues, including child soldier reintegration, mobile healthcare, and stateless people's rights.",
    link: 'https://emancip8project.com',
    icon: Heart,
  },
  {
    title: 'Institute for Bioengineering and Data Science',
    description:
      'Specializes in interdisciplinary studies that address global health challenges through bioengineering and data science research.',
    link: 'https://ibds.institute',
    icon: Database,
  },
  {
    title: 'BlackBox Analytix',
    description:
      'Provides insights and strategic solutions through advanced data analysis for enhanced decision-making and operational efficiency.',
    link: 'https://blackboxanalytix.io',
    icon: Brain,
  },
  {
    title: 'International Carbon Markets Institute',
    description:
      'Advances carbon neutrality by connecting global stakeholders and offering education on carbon market strategies.',
    link: 'https://internationalcarbonmarketsinstitute.org',
    icon: Globe,
  },
  {
    title: 'Artifakt Gallery',
    description:
      'Serves as a cultural hub, showcasing the impact of global conflict through art and multimedia.',
    link: 'https://artifaktgallery.org',
    icon: Palette,
  },
];

export default function Founder() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>
          James Scott - Founder of ARCS Scientific | Visionary in Regulatory
          Compliance
        </title>
        <meta
          name="description"
          content="Learn about James Scott, the visionary founder of ARCS Scientific, a pioneering leader in regulatory compliance, think tank initiatives, and technology-driven societal impact."
        />
        <meta
          name="keywords"
          content="James Scott, ARCS Scientific, regulatory compliance, technology innovation, think tanks, philanthropy, social impact, quantum computing"
        />
        <meta
          property="og:title"
          content="James Scott - Founder of ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Pioneering philanthropist and technology expert with over two decades dedicated to advancing solutions in critical infrastructure, technology, and societal resilience."
        />
        <link rel="canonical" href="https://www.arcsscientific.com/founder" />
        <meta name="author" content="James Scott Think Tank" />
      </Helmet>

      <FounderHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <FadeInSection>
          <FounderSection
            icon={Star}
            title="Genesis of a Technological Visionary"
            className="mb-12"
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Scott's passion for technology was ignited in high school when he
              joined an advanced STEM program, splitting his day between
              academic classes and afternoon sessions devoted to robotics.
              Coming from an abusive household, Scott found support and
              mentorship in Mr. Bianco, a teacher whose guidance profoundly
              shaped his path.
            </p>
            <p className="text-gray-600 leading-relaxed">
              During his senior year, a pivotal moment occurred when a recruiter
              from SGS Thomson Microelectronics (now STMicroelectronics)
              recognized Scott's potential. SGS Thomson's work with the
              Department of Defense in aerospace and defense technology
              introduced Scott to the realms of advanced technology and
              international defense, laying the groundwork for his future in
              critical infrastructure technology and strategy. This opportunity
              was a transformative turning point, setting him on a path of
              international collaboration and technological innovation.
            </p>
          </FounderSection>
        </FadeInSection>

        <FadeInSection>
          <FounderSection
            icon={Globe}
            title="Pioneering Institutes and Initiatives"
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <a
                  key={index}
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
                  <div className="relative glass-card p-6 rounded-xl hover-glow">
                    <div className="flex items-center space-x-3 mb-3">
                      <initiative.icon className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold gradient-text">
                        {initiative.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {initiative.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FounderSection>
        </FadeInSection>

        <FadeInSection>
          <FounderSection
            icon={Brain}
            title="The ARCS Process: A Crowning Achievement"
            className="mb-12"
          >
            <p className="text-gray-600 leading-relaxed">
              Scott's culmination of expertise is embodied in the Adaptive
              Regulatory Compliance System (ARCS), a revolutionary framework
              integrating AI, quantum technology, and data science to adapt
              regulatory compliance processes in real time. The ARCS process
              anticipates regulatory changes and dynamically aligns compliance
              strategies with evolving standards, reducing regulatory risk and
              accelerating market readiness. This adaptive system is essential
              for industries in fast-evolving fields such as healthcare,
              critical infrastructure, and environmental technology. By enabling
              continuous, real-time compliance, ARCS positions Scott's
              initiatives at the leading edge of regulatory innovation,
              establishing him as a visionary in compliance strategy and
              infrastructure resilience.
            </p>
          </FounderSection>
        </FadeInSection>

        <FadeInSection>
          <FounderSection icon={Award} title="A Legacy of Visionary Leadership">
            <p className="text-gray-600 leading-relaxed mb-6">
              Through these transformative projects, Scott's legacy is one of
              unparalleled innovation and societal impact. His unique influence
              mapping and problem-solving architecture have created robust
              collaboration vehicles, making his institutes and think tanks the
              gold standard for rapid, solution-oriented public-private
              partnerships. Whether tackling the opioid crisis, supporting
              stateless populations, or advancing net-zero goals, Scott's work
              is distinguished by a strategic, technology-driven approach that
              addresses both immediate needs and long-term global objectives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Scott's vision and architecture for the next generation of
              international collaboration have redefined the role of technology
              in diplomacy, community resilience, and environmental action. His
              initiatives embody the belief that "the next generation of
              international diplomacy will be led by problem solvers who utilize
              intergovernmental-focused institutes & think tanks to blend
              technological leadership and innovation with incubators,
              accelerators, and finance."
            </p>
          </FounderSection>
        </FadeInSection>
      </div>
    </div>
  );
}
