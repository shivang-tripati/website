"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "IVR",
    subtitle: "Interactive Voice Response",
    description: "Design multi-level IVR menus with drag-and-drop simplicity. Self-service powered by AI-driven speech recognition and natural language understanding.",
    stats: "85% self-service rate",
    features: ["Multi-level menu builder", "Speech recognition (ASR)", "Text-to-speech (TTS)", "Dynamic data dips", "Multilingual support"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Bulk SMS",
    subtitle: "Mass Messaging at Scale",
    description: "Send transactional and promotional SMS to millions simultaneously. Smart scheduling, template management, and delivery analytics with DLT compliance built in.",
    stats: "99.2% delivery rate",
    features: ["Promotional & transactional", "DLT compliance", "Smart scheduling", "Template management", "Unicode & long SMS support"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Voice Calls",
    subtitle: "Crystal-Clear Communication",
    description: "Enterprise-grade voice infrastructure with HD audio, global number provisioning, and intelligent call routing. Supports inbound, outbound, and conferencing.",
    stats: "< 100ms latency",
    features: ["HD voice quality", "Global DID numbers", "Call conferencing", "Voicemail-to-email", "Real-time transcription"],
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-32 relative bg-surface-lowest">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-lowest to-surface pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label inline-block mb-4 text-primary">Core Services</span>
          <h2 className="text-headline-lg mb-6">
            Communication <span className="gold-gradient-text">Primitives</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            The foundational services that power every interaction — reliable, scalable, and ready for enterprise volume.
          </p>
        </motion.div>

        {/* Service cards - full width horizontal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
              className="group relative rounded-2xl bg-surface-low p-8 md:p-10 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-bl-full" />

              {/* Icon */}
              <div className="relative text-primary mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-headline-md text-on-surface mb-1">{service.title}</h3>
              <p className="text-sm text-primary/70 font-medium mb-4">{service.subtitle}</p>

              {/* Description */}
              <p className="text-body text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Stat highlight */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] mb-6">
                <span className="w-2 h-2 rounded-full gold-gradient" />
                <span className="text-sm font-semibold text-primary">{service.stats}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                    <svg className="w-4 h-4 text-primary/60 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
