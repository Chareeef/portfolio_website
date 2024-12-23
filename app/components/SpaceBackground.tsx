"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: {
      x: number;
      y: number;
      radius: number;
      speed: { x: number; y: number };
      spikes: number;
    }[] = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3,
        },
        spikes: Math.floor(Math.random() * 3) + 4,
      });
    }

    function drawStar(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
      spikes: number,
      color: string,
    ) {
      ctx.beginPath();
      ctx.fillStyle = color;

      for (let i = 0; i < spikes * 2; i++) {
        const angle = (i * Math.PI) / spikes;
        const distance = i % 2 === 0 ? radius : radius * 0.4;
        ctx.lineTo(
          x + Math.cos(angle) * distance,
          y + Math.sin(angle) * distance,
        );
      }

      ctx.closePath();
      ctx.fill();
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const starColor = theme === "dark" ? "white" : "black";

      stars.forEach((star) => {
        drawStar(ctx, star.x, star.y, star.radius, star.spikes, starColor);
        star.x += star.speed.x;
        star.y += star.speed.y;

        if (star.x < 0 || star.x > canvas.width) star.speed.x *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speed.y *= -1;
      });

      requestAnimationFrame(drawStars);
    }

    drawStars();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default SpaceBackground;
