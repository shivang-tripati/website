"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Channels",
    description:
      "Link WhatsApp Business, email, SMS, and voice in under minutes. Our guided setup handles API keys, webhooks, and verification automatically.",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-3">
          {["WhatsApp", "Email", "SMS", "Voice"].map((channel, i) => (
            <motion.div
              key={channel}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="w-24 h-24 rounded-2xl bg-surface-high flex flex-col items-center justify-center gap-2 hover:bg-surface-highest transition-colors duration-500"
            >
              <div className="w-8 h-8 rounded-lg gold-gradient opacity-80" />
              <span className="text-xs text-on-surface-variant font-medium">{channel}</span>
            </motion.div>
          ))}
        </div>
        {/* Connection lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-44 h-44 rounded-full border border-dashed border-ghost-gold"
          />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Custom Workflows For You",
    description:
      "We build the paths you need. For high-volume teams, our experts will step in and customize the platform to fit your exact business rules. Tell us what you need, and we&apos;ll handle the setup.",
    visual: (
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
        {[
          { label: "Trigger: New Message", color: "bg-primary/20 text-primary" },
          { label: "Condition: VIP Customer", color: "bg-tertiary/20 text-tertiary" },
          { label: "Action: Route to Senior", color: "bg-secondary/20 text-secondary" },
        ].map((node, i) => (
          <motion.div key={i} className="flex flex-col items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`px-5 py-3 rounded-xl text-sm font-medium ${node.color}`}
            >
              {node.label}
            </motion.div>
            {i < 2 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                viewport={{ once: true }}
                className="w-[2px] h-6 bg-ghost-gold origin-top"
              />
            )}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "Scale With Confidence",
    description:
      "Monitor real-time analytics, manage queues, and optimize team performance. Let the platform handle the growth while you focus on strategy.",
    visual: (
      <div className="relative w-full h-full flex items-end justify-center gap-2 pb-4">
        {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            transition={{
              delay: 0.3 + i * 0.05,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="w-6 rounded-t-lg"
            style={{
              background: `linear-gradient(to top, rgba(242, 202, 80, ${0.15 + (height / 100) * 0.5}), rgba(212, 175, 55, ${0.1 + (height / 100) * 0.3}))`,
            }}
          />
        ))}
      </div>
    ),
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <span className="text-label inline-block mb-4 text-primary">
            How It Works
          </span>
          <h2 className="text-headline-lg max-w-2xl">
            Three Steps to{" "}
            <span className="gold-gradient-text">Sovereign</span> Communication
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24 md:space-y-0">
          {steps.map((step, i) => (
            <ProcessStep key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center md:py-20 ${
        index % 2 === 1 ? "md:direction-rtl" : ""
      }`}
    >
      {/* Text side */}
      <div className={index % 2 === 1 ? "md:order-2" : ""}>
        <span className="text-6xl font-black gold-gradient-text opacity-30 block mb-4">
          {step.number}
        </span>
        <h3 className="text-headline-lg mb-6">{step.title}</h3>
        <p className="text-body text-lg leading-relaxed">{step.description}</p>
      </div>

      {/* Visual side */}
      <motion.div
        style={{ y }}
        className={`h-72 md:h-80 rounded-2xl bg-surface-low overflow-hidden ${
          index % 2 === 1 ? "md:order-1" : ""
        }`}
      >
        {step.visual}
      </motion.div>
    </motion.div>
  );
}
