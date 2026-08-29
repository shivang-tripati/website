"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const communicationServices = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Smart Cloud IVR",
    subtitle: "AI Interactive Voice Response",
    description: "Multi-level conversational IVR menus with drag-and-drop flow builders. AI speech recognition and real-time natural language routing for automated customer self-service.",
    stats: "85% self-service resolution",
    features: ["Visual IVR flow builder", "Speech recognition (ASR/TTS)", "CRM data dips & routing", "Multilingual voice bot", "Real-time call analytics"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Bulk SMS & OTP Gateway",
    subtitle: "High-Throughput A2P Messaging",
    description: "Enterprise SMS API for promotional campaigns, OTP verification, and transactional notifications. Carrier-grade infrastructure with automated DLT compliance and route failover.",
    stats: "99.2% instant delivery",
    features: ["DLT template management", "High TPS transactional SMS", "Fast OTP delivery gateway", "Smart scheduled campaigns", "Global unicode support"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.535 1.11.267 1.667L4.5 21.75l2.973-.744a1.875 1.875 0 011.458.204A9.2 9.2 0 0012 20.25z" />
      </svg>
    ),
    title: "Bulk WhatsApp Business API",
    subtitle: "Conversational Marketing & Support",
    description: "Official WhatsApp Business API platform for verified broadcasts, automated chatbots, rich interactive messaging, and end-to-end customer support journeys at scale.",
    stats: "98% open rate",
    features: ["Green tick verification support", "AI WhatsApp chatbot", "Rich media & catalog broadcast", "Shared team inbox", "Webhooks & API triggers"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v1.069m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    title: "Contact Center Setup (CCaaS)",
    subtitle: "Inbound & Outbound Call Center Solution",
    description: "Complete cloud contact center setup with predictive dialer, automatic call distribution (ACD), agent monitoring, live call barge-in, and omni-channel routing.",
    stats: "40% agent productivity boost",
    features: ["Predictive & auto dialer", "Skill-based call routing", "Call recording & live barge-in", "Real-time agent dashboards", "CRM integration ready"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Enterprise VoIP & SIP Trunking",
    subtitle: "Crystal-Clear Cloud Telephony",
    description: "High-availability SIP trunking and VoIP communication with HD audio codecs, low latency termination, virtual DID numbers, and automated disaster recovery failover.",
    stats: "< 80ms latency",
    features: ["Global virtual DID numbers", "HD audio quality (Opus/G.711)", "Toll-free number hosting", "SIP trunk elastic scaling", "Call detail records (CDR) API"],
  },
];

const softwareSuite = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Omnichannel CRM Software",
    subtitle: "Lead & Pipeline Management",
    description: "Customizable B2B and B2C Customer Relationship Management software. Centralize leads, automate sales funnels, track agent calls, and boost conversion velocity.",
    stats: "3x sales pipeline velocity",
    features: ["Lead auto-distribution", "One-click click-to-call", "Sales funnel automation", "Helpdesk ticketing system", "Custom dashboard & reports"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Cloud HRMS & Payroll Suite",
    subtitle: "Human Resource Management System",
    description: "End-to-end workforce management software covering automated payroll, biometric/geo-fenced attendance, compliance management, performance tracking, and employee self-service.",
    stats: "100% payroll accuracy",
    features: ["Statutory payroll automation", "Attendance & leave tracker", "Onboarding & exit workflows", "Employee self-service portal", "Performance (KPI/OKR) reviews"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Custom Business Software & ERP",
    subtitle: "Tailored Enterprise Web Solutions",
    description: "Bespoke SaaS architectures and enterprise ERP development built for your exact operational workflows. High-security, scalable databases, and bespoke third-party API integrations.",
    stats: "100% custom architecture",
    features: ["Bespoke ERP & workflow tools", "API-first microservices", "Role-based access control (RBAC)", "Custom inventory & billing", "Cloud deployment & SLA maintenance"],
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="py-32 relative bg-surface-lowest">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-lowest to-surface pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section 1: Telephony & Communication */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-label inline-block mb-4 text-primary">CPaaS & Telephony</span>
          <h2 className="text-headline-lg mb-6">
            Cloud Communication <span className="gold-gradient-text">Platforms</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Carrier-grade voice, WhatsApp, and messaging infrastructure engineered for ultra-high deliverability and enterprise call centers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {communicationServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
              className="group relative rounded-2xl bg-surface-low p-8 md:p-10 overflow-hidden border border-white/[0.04] hover:border-primary/20 transition-colors"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-bl-full" />
              <div className="relative flex items-center justify-center w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                {service.icon}
              </div>
              <h3 className="text-headline-md text-on-surface mb-1 gold-gradient-text">{service.title}</h3>
              <p className="text-sm text-primary/70 font-medium mb-4">{service.subtitle}</p>
              <p className="text-body text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] mb-6">
                <span className="w-2 h-2 rounded-full gold-gradient" />
                <span className="text-sm font-semibold text-primary">{service.stats}</span>
              </div>
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

        {/* Section 2: Enterprise Software Suite */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="text-label inline-block mb-4 text-primary">Enterprise SaaS & Apps</span>
          <h2 className="text-headline-lg mb-6">
            Intelligent Software <span className="gold-gradient-text">Suite</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Purpose-built business automation platforms — from CRM and HRMS to bespoke custom ERP software designed around your business logic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {softwareSuite.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i }}
              className="group relative rounded-2xl bg-surface-low p-8 md:p-10 overflow-hidden border border-white/[0.04] hover:border-primary/20 transition-colors"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-bl-full" />
              <div className="relative text-primary mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                {service.icon}
              </div>
              <h3 className="text-headline-md text-on-surface mb-1">{service.title}</h3>
              <p className="text-sm text-primary/70 font-medium mb-4">{service.subtitle}</p>
              <p className="text-body text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] mb-6">
                <span className="w-2 h-2 rounded-full gold-gradient" />
                <span className="text-sm font-semibold text-primary">{service.stats}</span>
              </div>
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