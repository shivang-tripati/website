"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const useCases = [
  {
    id: "sales",
    label: "SALES",
    title: "Lead Conversion, Accelerated",
    description:
      "Arm your sales team with predictive dialers, click-to-call from CRM. Never miss a hot lead — auto-route inbound inquiries to the best-matched rep based on skill, territory, and availability.",
    metrics: [
      { value: "3.2x", label: "More calls per agent" },
      { value: "42%", label: "Higher connect rate" },
      { value: "28%", label: "Faster deal closure" },
    ],
    features: [
      "Predictive dialer campaigns",
      "CRM-embedded click-to-call",
      "Call recording for coaching",
      "Automated follow-up SMS",
    ],
    color: "primary",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: "support",
    label: "SUPPORT",
    title: "Faster Resolution, Happier Customers",
    description:
      "Slash response times with intelligent ACD routing, skill-based queuing, and AI-suggested responses. Empower agents with full customer context from CRM integration before they even pick up.",
    metrics: [
      { value: "40%", label: "Faster first response" },
      { value: "92%", label: "CSAT score" },
      { value: "65%", label: "First-call resolution" },
    ],
    features: [
      "ACD with skill-based routing",
      "IVR self-service deflection",
      "Screen-pop with CRM data",
      "Call transfer & warm handoff",
      "Post-call survey automation",
    ],
    color: "tertiary",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
      </svg>
    ),
  },
  {
    id: "marketing",
    label: "MARKETING",
    title: "Campaigns That Convert",
    description:
      "Launch multi-channel campaigns across SMS and voice with precision targeting. Schedule bulk sends, personalize at scale with dynamic templates, and track conversion in real-time dashboards.",
    metrics: [
      { value: "5.8x", label: "Campaign ROI" },
      { value: "34%", label: "Open rate (SMS)" },
      { value: "12%", label: "Conversion rate" },
    ],
    features: [
      "Bulk SMS & voice broadcasts",
      "Dynamic personalization",
      "A/B campaign testing",
      "Real-time conversion tracking",
    ],
    color: "secondary",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

const colorMap: Record<string, string> = {
  primary: "text-primary bg-primary/10",
  tertiary: "text-tertiary bg-tertiary/10",
  secondary: "text-secondary bg-secondary/10",
};

const colorMapLight: Record<string, string> = {
  primary: "text-primary",
  tertiary: "text-tertiary",
  secondary: "text-secondary",
};

export function UseCasesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} id="use-cases" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-label inline-block mb-4 text-primary">Use Cases</span>
          <h2 className="text-headline-lg mb-6">
            Built for Every <span className="gold-gradient-text">Revenue Team</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Whether you&apos;re closing deals, resolving tickets, or driving campaigns — Sovereign adapts to your workflow.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-2 mb-16"
        >
          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-surface-low text-on-surface ring-1 ring-ghost-gold"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-low/50"
              }`}
            >
              <span className={activeTab === i ? colorMapLight[uc.color] : ""}>{uc.icon}</span>
              {uc.label}
            </button>
          ))}
        </motion.div>

        {/* Active use case content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left — Description + features */}
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${colorMap[useCases[activeTab].color]}`}>
                {useCases[activeTab].icon}
                <span className="text-sm font-semibold">{useCases[activeTab].label}</span>
              </div>

              <h3 className="text-headline-lg mb-6">{useCases[activeTab].title}</h3>
              <p className="text-body text-lg leading-relaxed mb-8">
                {useCases[activeTab].description}
              </p>

              <ul className="space-y-3">
                {useCases[activeTab].features.map((feature, fi) => (
                  <motion.li
                    key={fi}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: fi * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 text-on-surface-variant"
                  >
                    <svg className={`w-5 h-5 shrink-0 ${colorMapLight[useCases[activeTab].color]}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right — Metrics cards */}
            <div className="space-y-4">
              {useCases[activeTab].metrics.map((metric, mi) => (
                <motion.div
                  key={mi}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + mi * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl bg-surface-low p-8 flex items-center gap-6 group hover:bg-surface-low/80 transition-colors duration-500"
                >
                  <span className={`text-5xl font-black ${colorMapLight[useCases[activeTab].color]} group-hover:scale-105 transition-transform duration-500`}>
                    {metric.value}
                  </span>
                  <span className="text-lg text-on-surface-variant">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
