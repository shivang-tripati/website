"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// ============================================
// 1. AURORA MESH — Slowly morphing gradient blobs
// ============================================
export function AuroraMesh({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary gold blob */}
      <motion.div
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, -20, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,202,80,0.07) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary warm blob */}
      <motion.div
        animate={{
          x: [0, -60, 50, -30, 0],
          y: [0, 40, -50, 30, 0],
          scale: [1, 0.9, 1.1, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(234,194,88,0.05) 0%, rgba(242,202,80,0.02) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Tertiary cool accent blob */}
      <motion.div
        animate={{
          x: [0, 40, -60, 20, 0],
          y: [0, -30, 50, -40, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute bottom-[15%] left-[30%] w-[450px] h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(191,205,255,0.04) 0%, rgba(191,205,255,0.01) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}

// ============================================
// 2. LIGHT BEAMS — Sweeping golden streaks
// ============================================
export function LightBeams({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Beam 1 — Slow diagonal sweep */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 0.6, 0.6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 12,
        }}
        className="absolute top-0 left-0 w-[1px] h-[140%] origin-top"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(242,202,80,0.15) 30%, rgba(242,202,80,0.08) 70%, transparent 100%)",
          transform: "rotate(25deg)",
          transformOrigin: "top left",
        }}
      />

      {/* Beam 2 — Slower, wider beam */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 0.4, 0.4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 18,
          delay: 6,
        }}
        className="absolute top-0 left-0 w-[2px] h-[140%] origin-top"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(234,194,88,0.1) 20%, rgba(234,194,88,0.06) 80%, transparent 100%)",
          transform: "rotate(20deg)",
          transformOrigin: "top left",
          boxShadow: "0 0 20px 4px rgba(242,202,80,0.03)",
        }}
      />

      {/* Beam 3 — From right side */}
      <motion.div
        animate={{
          x: ["200%", "-100%"],
          opacity: [0, 0.3, 0.3, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 20,
          delay: 10,
        }}
        className="absolute top-0 right-0 w-[1px] h-[140%] origin-top"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(191,205,255,0.08) 30%, rgba(191,205,255,0.04) 70%, transparent 100%)",
          transform: "rotate(-30deg)",
          transformOrigin: "top right",
        }}
      />
    </div>
  );
}

// ============================================
// 3. PARTICLE FIELD — Canvas-based floating particles
// ============================================
export function ParticleField({
  className = "",
  particleCount = 60,
  connectionDistance = 120,
  particleColor = "rgba(242, 202, 80, ",
  speed = 0.3,
}: {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  particleColor?: string;
  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }>
  >([]);
  const mouseRef = useRef({ x: -999, y: -999 });

  const initParticles = useCallback(
    (width: number, height: number) => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    },
    [particleCount, speed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initParticles(rect.width, rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Mouse interaction — gentle push away
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDistance) {
            const alpha = (1 - cdist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${particleColor}${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initParticles, connectionDistance, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}

// ============================================
// 4. COMBINED: The Sovereign Background
// ============================================
export function SovereignBackground({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "section" | "minimal";
  className?: string;
}) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <AuroraMesh />
        <LightBeams />
        <ParticleField particleCount={50} connectionDistance={100} speed={0.25} />
        {/* Extra hero glow at center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 35%, rgba(242,202,80,0.05) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <AuroraMesh />
        <ParticleField particleCount={25} connectionDistance={80} speed={0.15} />
      </div>
    );
  }

  // minimal
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <AuroraMesh />
    </div>
  );
}
