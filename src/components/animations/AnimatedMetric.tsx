import React, { useState, useEffect } from 'react';

interface AnimatedMetricProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down';
  delay?: number;
  className?: string;
}

export default function AnimatedMetric({
  value,
  label,
  trend,
  delay = 0,
  className = ''
}: AnimatedMetricProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  const finalValue = typeof value === 'number' ? value : parseFloat(value) || 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible && finalValue > 0) {
      const duration = 1000;
      const steps = 20;
      const increment = finalValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        if (current < finalValue) {
          current += increment;
          setDisplayValue(Math.min(current, finalValue));
        } else {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, finalValue]);

  return (
    <div className={`text-center transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    } ${className}`}>
      <div className="text-2xl font-bold gradient-text">
        {displayValue.toFixed(1)}%
      </div>
      <div className="text-sm text-gray-500">
        {label}
      </div>
      {trend && (
        <div className={`text-xs ${
          trend === 'up' ? 'text-emerald-500' : 'text-blue-500'
        }`}>
          {trend === 'up' ? '↑' : '↓'}
        </div>
      )}
    </div>
  );
}