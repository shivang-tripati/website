"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Sovereign didn't just replace our communication stack—it elevated our entire customer experience. The unified timeline alone saved our team 12 hours per week.",
    name: "Sarah Chen",
    title: "VP of Customer Success",
    company: "Meridian Health",
    initials: "SC",
  },
  {
    quote:
      "The AI copilot is extraordinary. It drafts replies in our brand voice, routes intelligently, and our response time dropped from 4 hours to 18 minutes.",
    name: "Marcus Williams",
    title: "Head of Operations",
    company: "Atlas Logistics",
    initials: "MW",
  },
  {
    quote:
      "We evaluated 15 platforms before choosing Sovereign. Nothing else came close to the depth of automation and the premium feel of the interface.",
    name: "Elena Rossi",
    title: "CTO",
    company: "Vantage Finance",
    initials: "ER",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-32 relative bg-surface-lowest"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-lowest to-surface pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label inline-block mb-4 text-primary">
            Testimonials
          </span>
          <h2 className="text-headline-lg">
            Voices of{" "}
            <span className="gold-gradient-text">Quiet Authority</span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-surface-low p-10 md:p-16 min-h-[320px]">
            {/* Decorative quote mark */}
            <span className="absolute top-8 left-10 text-8xl font-black text-primary/[0.06] leading-none select-none">
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <blockquote className="text-xl md:text-2xl font-light text-on-surface leading-relaxed mb-10 italic">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-sm font-bold text-[#1a1400]">
                      {testimonials[activeIndex].initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      {testimonials[activeIndex].title},{" "}
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-surface-high hover:bg-surface-highest"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "2.4K+", label: "Teams Active" },
            { value: "18min", label: "Avg. Response" },
            { value: "4.9/5", label: "Customer Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold gold-gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
