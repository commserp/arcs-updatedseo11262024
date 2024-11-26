import React from 'react';
import { AnimatedCard } from '../animations';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits?: string[];
  metrics?: {
    label: string;
    value: string;
    trend?: 'up' | 'down';
  }[];
}

export default function FeatureCard({
  title,
  description,
  icon,
  benefits,
  metrics
}: FeatureCardProps) {
  return (
    <AnimatedCard
      title={title}
      description={description}
      icon={icon}
      gradient="from-blue-500 to-emerald-500"
      className="h-full"
    >
      {metrics && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold gradient-text">
                {metric.value}
              </div>
              <div className="text-sm text-gray-500">
                {metric.label}
              </div>
              {metric.trend && (
                <div className={`text-xs ${
                  metric.trend === 'up' ? 'text-emerald-500' : 'text-blue-500'
                }`}>
                  {metric.trend === 'up' ? '↑' : '↓'}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {benefits && (
        <>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Key Benefits
          </h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-gray-600"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </AnimatedCard>
  );
}