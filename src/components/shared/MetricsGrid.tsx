import React from 'react';
import { AnimatedMetric } from '../animations';

interface Metric {
  label: string;
  value: string;
  trend?: 'up' | 'down';
}

interface MetricsGridProps {
  metrics: Metric[];
  columns?: number;
}

export default function MetricsGrid({
  metrics,
  columns = 3,
}: MetricsGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
      {metrics.map((metric, index) => (
        <AnimatedMetric
          key={index}
          value={metric.value}
          label={metric.label}
          trend={metric.trend}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
