import React from 'react';
import { Brain, Star, Award } from 'lucide-react';

export default function LeadershipInfo() {
  return (
    <>
      <div className="glass-card p-8 rounded-2xl hover-glow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Leadership Bio */}
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg opacity-75 blur" />
                <Brain className="relative w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">James Scott</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                A pioneering philanthropist and technology expert with over two
                decades dedicated to advancing solutions in critical
                infrastructure, technology, and societal resilience. His career
                exemplifies an unwavering commitment to integrating
                sophisticated technologies across sectors to address global
                challenges.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Scott's passion for technology began in high school through an
                advanced STEM program. Coming from an abusive household, he
                found support and mentorship in Mr. Bianco, whose guidance
                shaped his future path. A pivotal moment came when SGS Thomson
                Microelectronics recognized his potential, introducing him to
                aerospace and defense technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                His advisory services now span more than 50 countries,
                establishing labs, tech startups, institutes, and think tanks
                worldwide. His initiatives integrate AI, quantum computing,
                bioengineering, and advanced analytics to develop adaptive
                solutions for emerging global challenges.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:w-1/3 space-y-6">
            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-5 h-5 text-blue-600" />
                <h4 className="text-lg font-semibold gradient-text">
                  The ARCS Process
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Scott's culminating achievement is the Adaptive Regulatory
                Compliance System (ARCS), revolutionizing compliance processes
                with AI and quantum technology integration.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover-glow">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-5 h-5 text-emerald-600" />
                <h4 className="text-lg font-semibold gradient-text">
                  Legacy of Innovation
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                His unique influence mapping and problem-solving architecture
                have established the gold standard for rapid, solution-oriented
                public-private partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
