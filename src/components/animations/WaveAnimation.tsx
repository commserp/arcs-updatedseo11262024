import React from 'react';

interface WaveAnimationProps {
  color?: string;
  height?: number;
  amplitude?: number;
  frequency?: number;
  className?: string;
}

export default function WaveAnimation({
  color = 'blue',
  height = 100,
  amplitude = 20,
  frequency = 0.02,
  className = ''
}: WaveAnimationProps) {
  const generateWavePath = () => {
    const points = [];
    for (let x = 0; x <= 1000; x += 10) {
      const y = Math.sin(x * frequency) * amplitude + height / 2;
      points.push(`${x},${y}`);
    }
    return `M0,${height} L${points.join(' L')} L1000,${height} Z`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 100"
      >
        <path
          d={generateWavePath()}
          fill={`url(#wave-gradient-${color})`}
          className="animate-wave"
        >
          <animate
            attributeName="d"
            dur="5s"
            repeatCount="indefinite"
            values={`
              ${generateWavePath()};
              ${generateWavePath()};
              ${generateWavePath()}
            `}
          />
        </path>
        <defs>
          <linearGradient
            id={`wave-gradient-${color}`}
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
            <stop offset="0%" stopColor={`var(--color-${color}-500)`} stopOpacity="0.2" />
            <stop offset="50%" stopColor={`var(--color-${color}-600)`} stopOpacity="0.3" />
            <stop offset="100%" stopColor={`var(--color-${color}-500)`} stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}