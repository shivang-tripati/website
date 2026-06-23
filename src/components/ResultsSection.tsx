"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { AuroraMesh } from "./BackgroundEffects";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value % 1 !== 0) {
      return `${prefix}${latest.toFixed(1)}${suffix}`;
    }
    return `${prefix}${Math.round(latest)}${suffix}`;
  });
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const results = [
  {
    value: 3,
    suffix: "x",
    label: "Productivity Boost",
    description: "Teams using Sovereign report 3x productivity gains within the first 90 days.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster Response Time",
    description: "Average first-response time drops by 40% with intelligent ACD routing.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 60,
    suffix: "%",
    label: "Cost Reduction",
    description: "Consolidating 5+ tools into one platform eliminates redundancy and licensing waste.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    description: "Enterprise-grade infrastructure with georedundancy and automatic failover.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]; 

export function ResultsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="results" className="py-32 relative bg-surface-lowest overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-lowest to-surface pointer-events-none" />

      {/* Aurora background */}
      <AuroraMesh />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label inline-block mb-4 text-primary">Proven Results</span>
          <h2 className="text-headline-lg mb-6">
            Numbers That Speak With{" "}
            <span className="gold-gradient-text">Quiet Authority</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Real outcomes from real teams. These aren&apos;t projections — they&apos;re measured results from our customer base.
          </p>
        </motion.div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl bg-surface-low p-8 text-center hover:bg-surface-low/80 transition-colors duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/[0.08] text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {result.icon}
              </div>

              {/* Animated number */}
              <p className="text-5xl font-black gold-gradient-text mb-3">
                <AnimatedCounter value={result.value} suffix={result.suffix} />
              </p>

              {/* Label */}
              <h3 className="text-lg font-semibold text-on-surface mb-3">{result.label}</h3>

              {/* Description */}
              <p className="text-sm text-on-surface-variant leading-relaxed">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
