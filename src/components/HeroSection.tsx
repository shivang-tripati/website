"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./Navbar";
import { SovereignBackground } from "./BackgroundEffects";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  // Letter animation variants
  const titleWords = ["Enterprise", "Communication,", "Reimagined."];
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 80,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Cinematic background: Aurora mesh + light beams + interactive particles */}
      <motion.div style={{ y }} className="absolute inset-0">
        <SovereignBackground variant="hero" />
      </motion.div>
      <motion.div
        style={{ y }}
        className="absolute inset-0 grid-texture"
      />

      {/* Orbital ring decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-ghost opacity-30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full border border-ghost-gold opacity-20"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-label inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-low">
            <span className="w-2 h-2 rounded-full gold-gradient animate-pulse" />
            Now in Public Beta
          </span>
        </motion.div>

        {/* Title with text masking reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-display mb-8"
        >
          {titleWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${
                  i === titleWords.length - 1 ? "gold-gradient-text" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-body max-w-2xl mx-auto mb-12 text-lg"
        >
          Transform your enterprise workflows with a platform that delivers{" "}
          <span className="text-on-surface font-medium">quiet authority</span>.
          Connect teams, clients, and systems through one sovereign interface.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton>
            <a
              href="#pricing"
              className="gold-sheen gold-gradient px-8 py-3.5 rounded-full text-base font-semibold text-[#1a1400] inline-block hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-[0.98]"
            >
              Start Free Trial
            </a>
          </MagneticButton>
          <a
            href="#features"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-primary border border-ghost-gold hover:bg-primary/[0.05] transition-all duration-300"
          >
            Explore Features
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-surface-high border-2 border-surface flex items-center justify-center"
              >
                <span className="text-xs font-medium text-on-surface-variant">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-on-surface-variant">
            Trusted by <span className="text-on-surface font-semibold">1,000+</span> teams nation-wide
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-ghost flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
