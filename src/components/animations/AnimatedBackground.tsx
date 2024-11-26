import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  pattern?: 'dots' | 'grid' | 'waves';
  color?: string;
  className?: string;
}

export default function AnimatedBackground({
  pattern = 'dots',
  color = 'blue',
  className = ''
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      switch (pattern) {
        case 'dots':
          drawDots(ctx, time);
          break;
        case 'grid':
          drawGrid(ctx, time);
          break;
        case 'waves':
          drawWaves(ctx, time);
          break;
      }

      time += 0.01;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pattern]);

  const drawDots = (ctx: CanvasRenderingContext2D, time: number) => {
    const spacing = 30;
    for (let x = 0; x < ctx.canvas.width; x += spacing) {
      for (let y = 0; y < ctx.canvas.height; y += spacing) {
        const scale = (Math.sin(x * 0.05 + time) + Math.cos(y * 0.05 + time)) * 0.5 + 1;
        ctx.beginPath();
        ctx.arc(x, y, 2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${0.1 * scale})`;
        ctx.fill();
      }
    }
  };

  const drawGrid = (ctx: CanvasRenderingContext2D, time: number) => {
    const spacing = 40;
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.lineWidth = 1;

    for (let x = 0; x < ctx.canvas.width; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < ctx.canvas.height; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y + Math.sin(time + y * 0.02) * 5);
      ctx.lineTo(ctx.canvas.width, y + Math.sin(time + y * 0.02) * 5);
      ctx.stroke();
    }
  };

  const drawWaves = (ctx: CanvasRenderingContext2D, time: number) => {
    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height / 2);

    for (let x = 0; x < ctx.canvas.width; x++) {
      const y = Math.sin(x * 0.02 + time) * 20 + ctx.canvas.height / 2;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}