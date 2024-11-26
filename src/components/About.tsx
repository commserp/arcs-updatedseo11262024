import React, { useEffect, useRef } from 'react';
import { Brain, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden lg:py-14 md:py-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      <div className="absolute inset-0 opacity-5 grid-pattern animate-grid-scroll" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ARCS Timeline Section */}
        <div className="mb-20 reveal opacity-0 bg-arcstimeline">
          <div className="text-center h-44 lg:h-36 xl:h-36 2xl:h-36">
            <h3 className="text-2xl font-bold gradient-text">
              ARCS Scientific Timeline
            </h3>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500" />

            {/* Timeline Events */}
            <div className="space-y-[74px]">
              {/* November 2024 */}
              <div className="relative flex items-center justify-center">
                <div className="timeline-node" />
                <div className="absolute left-1/2 ml-8 glass-card p-6 rounded-xl w-1/2 hover-glow">
                  <h4 className="text-lg font-semibold gradient-text">
                    November 2024
                  </h4>
                  <p className="text-gray-600">
                    Public launch of ARCS Scientific, introducing
                    quantum-inspired regulatory compliance systems.
                  </p>
                </div>
              </div>

              {/* July 2024 */}
              <div className="relative flex items-center justify-center">
                <div className="timeline-node" />
                <div className="absolute right-1/2 mr-8 glass-card p-6 rounded-xl w-1/2 hover-glow text-right">
                  <h4 className="text-lg font-semibold gradient-text">
                    July 2024
                  </h4>
                  <p className="text-gray-600">
                    Beta testing phase with select enterprise partners,
                    validating core technologies.
                  </p>
                </div>
              </div>

              {/* March 2024 */}
              <div className="relative flex items-center justify-center mt-20">
                <div className="timeline-node" />
                <div className="absolute left-1/2 ml-8 glass-card p-6 rounded-xl w-1/2 hover-glow">
                  <h4 className="text-lg font-semibold gradient-text">
                    March 2024
                  </h4>
                  <p className="text-gray-600">
                    Completion of quantum-inspired AI framework development and
                    initial system integration.
                  </p>
                </div>
              </div>

              {/* January 2024 */}
              <div className="relative flex items-center justify-center">
                <div className="timeline-node" />
                <div className="absolute right-1/2 mr-8 glass-card p-6 rounded-xl w-1/2 hover-glow text-right">
                  <h4 className="text-lg font-semibold gradient-text">
                    January 2024
                  </h4>
                  <p className="text-gray-600">
                    Formation of ARCS Scientific and initiation of advanced
                    compliance research program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Foundational Initiatives Section */}
        <div className="mb-20 reveal opacity-0" id="arcsFoundational">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text">
              Foundational Initiatives
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="https://blackboxanalytix.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  BlackBox Analytix
                </h4>
                <p className="text-gray-600">
                  Advanced analytics and AI solutions for regulatory compliance.
                </p>
              </div>
            </a>

            <a
              href="https://internationalcarbonmarketsinstitute.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  International Carbon Markets Institute
                </h4>
                <p className="text-gray-600">
                  Global carbon market research and regulatory frameworks.
                </p>
              </div>
            </a>

            <a
              href="https://embassyrowproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Embassy Row Project
                </h4>
                <p className="text-gray-600">
                  International regulatory compliance and diplomatic relations.
                </p>
              </div>
            </a>

            <a
              href="https://netzeroaccelerator.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Net Zero Accelerator
                </h4>
                <p className="text-gray-600">
                  Sustainable technology and regulatory compliance solutions.
                </p>
              </div>
            </a>

            <a
              href="https://aseaninstitute.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  ASEAN Institute
                </h4>
                <p className="text-gray-600">
                  Southeast Asian regulatory compliance and market access.
                </p>
              </div>
            </a>

            <a
              href="https://envirotechaccelerator.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  EnviroTech Accelerator
                </h4>
                <p className="text-gray-600">
                  Environmental technology and compliance acceleration.
                </p>
              </div>
            </a>

            <a
              href="https://emancip8project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Emancip8 Project
                </h4>
                <p className="text-gray-600">
                  Digital transformation and regulatory compliance initiatives.
                </p>
              </div>
            </a>

            <a
              href="https://ibds.institute"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Institute for Bioengineering and Data Science
                </h4>
                <p className="text-gray-600">
                  Bioengineering and data science research for regulatory
                  compliance.
                </p>
              </div>
            </a>

            <a
              href="https://resilienceprojects.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative reveal opacity-0"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
              <div className="relative glass-card p-6 rounded-2xl hover-glow h-full">
                <h4 className="text-lg font-semibold mb-2 gradient-text">
                  Resilience Project
                </h4>
                <p className="text-gray-600">
                  Opioid Addiction Deterrence Through Advanced Med Tech And Data
                  Science
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
