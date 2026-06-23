"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const crmLogos = [
  { name: "Salesforce", color: "#00A1E0" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Zoho", color: "#E42527" },
  { name: "Freshdesk", color: "#25C16F" },
  { name: "Zendesk", color: "#03363D" },
  { name: "Pipedrive", color: "#017737" },
  { name: "Microsoft Dynamics", color: "#002050" },
  { name: "Monday.com", color: "#FF3D57" },
];

const apiFeatures = [
  {
    title: "REST APIs",
    description: "Full CRUD operations for contacts, calls, campaigns, and analytics. OAuth 2.0 secured.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Webhooks",
    description: "Real-time event notifications for call events, SMS delivery, and agent status changes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  }
];

function IntegrationLogo({
  logo,
  index,
}: {
  logo: (typeof crmLogos)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface-low hover:bg-surface-high transition-all duration-500 cursor-default"
    >
      {/* Logo placeholder circle */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold transition-all duration-500"
        style={{
          backgroundColor: isHovered ? `${logo.color}20` : "rgba(42,42,42,0.5)",
          color: isHovered ? logo.color : "#9a9694",
        }}
      >
        {logo.name.charAt(0)}
      </div>
      <span className="text-xs text-on-surface-variant font-medium text-center leading-tight group-hover:text-on-surface transition-colors duration-300">
        {logo.name}
      </span>
    </motion.div>
  );
}

export function IntegrationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="integrations" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label inline-block mb-4 text-primary">Integrations</span>
          <h2 className="text-headline-lg mb-6">
            Connects to <span className="gold-gradient-text">Everything</span> You Use
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Native CRM integrations, powerful APIs, and embeddable widgets — Sovereign fits into your existing tech stack, not the other way around.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — CRM logos grid */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-headline-md mb-2">CRM Integrations</h3>
            <p className="text-body mb-8">
              One-click setup. Bi-directional sync. Full context on every call.
            </p>

            <div className="grid grid-cols-4 gap-3">
              {crmLogos.map((logo, i) => (
                <IntegrationLogo key={logo.name} logo={logo} index={i} />
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="w-2 h-2 rounded-full gold-gradient" />
              <span>+ 20 more via Zapier & native connectors</span>
            </div>
          </motion.div>

          {/* Right — API features */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-headline-md mb-2">Developer APIs</h3>
            <p className="text-body mb-8">
              Build custom integrations with our comprehensive API platform.
            </p>

            <div className="space-y-4">
              {apiFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-4 p-5 rounded-xl bg-surface-low hover:bg-surface-high transition-colors duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-on-surface mb-1">{feature.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code snippet */}
            <div className="mt-6 rounded-xl bg-surface-lowest p-5 overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-on-surface-variant ml-2">api-example.js</span>
              </div>
              <pre className="text-sm text-on-surface-variant leading-relaxed overflow-x-auto">
                <code>{`// Send a standard HTTP POST request to trigger a call
const response = await fetch('https://api.sovereign.com/v1/calls', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '+1234567890',
    from: '+0987654321',
    record: true
  })
});

const call = await response.json();
console.log('Call initiated:', call.id);`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
