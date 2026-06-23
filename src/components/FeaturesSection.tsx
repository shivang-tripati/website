"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    slug: "auto-call-distribution",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    label: "ACD",
    title: "Auto Call Distribution",
    description: "Intelligent queue management with skill-based, round-robin, and priority routing. Route calls to the right agent instantly with real-time load balancing.",
  },
  {
    slug: "call-management",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
      </svg>
    ),
    label: "CALL MANAGEMENT",
    title: "Transfer, Routing & Recording",
    description: "Warm and blind transfers, ring groups, hunt groups, and automatic call recording with cloud storage. Full compliance with PCI-DSS and GDPR.",
  },
  {
    slug: "call-masking",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    label: "PRIVACY",
    title: "Call Masking",
    description: "Protect customer and agent phone numbers with virtual number masking. Enable two-way communication without exposing personal information.",
  },
  {
    slug: "dialer-suite",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "OUTBOUND",
    title: "Dialer Suite",
    description: "Predictive, progressive, and preview dialers that maximize agent efficiency. Auto-detect voicemail, manage DNC lists, and pace campaigns intelligently.",
  },
  {
    slug: "crm-integrations",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    label: "ECOSYSTEM",
    title: "CRM Integrations",
    description: "Native integrations with Salesforce, HubSpot, Zoho, and 200+ tools. Bi-directional sync, screen-pops, and automatic call logging.",
  },
  {
    slug: "bulk-sms-voice-broadcasts",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    label: "MESSAGING",
    title: "Bulk SMS & Voice Broadcasts",
    description: "Send millions of SMS or voice messages simultaneously. DLT compliant, smart scheduling, dynamic personalization, and real-time delivery analytics.",
  },
];

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-surface-low p-8 transition-all duration-600 group ${className}`}
    >
      {/* Flashlight spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(242, 202, 80, 0.06), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
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
      ref={ref}
      id="features"
      className="py-32 relative bg-surface-lowest"
    >
      {/* Section glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-lowest to-surface pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label inline-block mb-4 text-primary">
            Platform Features
          </span>
          <h2 className="text-headline-lg mb-6">
            Every Feature Your Team{" "}
            <span className="gold-gradient-text">Actually Needs</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            From auto-call distribution to call masking, from bulk SMS to AI copilot — every capability built with enterprise depth and consumer simplicity.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <SpotlightCard>
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-surface-high flex items-center justify-center mb-5 text-primary group-hover:bg-primary/[0.1] transition-colors duration-500">
                  {feature.icon}
                </div>

                {/* Label */}
                <span className="text-label text-primary/60 block mb-2 text-[0.65rem]">
                  {feature.label}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-on-surface mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <Link
                  href={`/features/${feature.slug}`}
                  className="mt-5 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500"
                >
                  <span className="text-xs font-medium">Learn more</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
