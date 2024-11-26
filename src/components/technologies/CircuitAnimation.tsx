import React, { useEffect, useRef } from 'react';

interface CircuitAnimationProps {
  color: string;
  active: boolean;
}

export default function CircuitAnimation({ color, active }: CircuitAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit nodes
    const nodes: { x: number; y: number; connections: number[] }[] = [];
    const numNodes = 20;

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: []
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const target = Math.floor(Math.random() * numNodes);
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });

    let progress = 0;

    const animate = () => {
      if (!active) {
        progress = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${Math.sin(progress + i) * 0.5 + 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${Math.sin(progress + i) * 0.5 + 0.5})`;
        ctx.fill();
      });

      progress += 0.02;
      animationRef.current = requestAnimationFrame(animate);
    };

    if (active) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [active, color]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ opacity: active ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
    />
  );
}