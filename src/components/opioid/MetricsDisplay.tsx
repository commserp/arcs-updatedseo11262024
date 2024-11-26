import React from 'react';

interface Metric {
  value: string;
  label: string;
}

interface MetricsDisplayProps {
  metrics: Metric[];
  className?: string;
}

export default function MetricsDisplay({ metrics, className = '' }: MetricsDisplayProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {metrics.map((metric, index) => (
        <div key={index} className="text-center p-4 bg-white/50 rounded-lg">
          <div className="text-2xl font-bold gradient-text">{metric.value}</div>
          <div className="text-sm text-gray-500">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}