"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticButton } from "./Navbar";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For growing teams ready to unify their channels.",
    features: [
      "Up to 5 team members",
      "3 communication channels",
      "Basic workflow automation",
      "Email support",
      "1,000 AI-assisted replies/mo",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For teams that demand intelligence and scale.",
    features: [
      "Up to 25 team members",
      "Unlimited channels",
      "Advanced workflow builder",
      "Priority support",
      "10,000 AI-assisted replies/mo",
      "Custom analytics dashboards",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with sovereign requirements.",
    features: [
      "Unlimited team members",
      "Unlimited everything",
      "Custom AI model training",
      "Dedicated success manager",
      "SSO & SAML",
      "Custom SLA",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [annual, setAnnual] = useState(false);

  return (
    <section ref={ref} id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-label inline-block mb-4 text-primary">
            Pricing
          </span>
          <h2 className="text-headline-lg mb-6">
            Invest in{" "}
            <span className="gold-gradient-text">Sovereign</span> Power
          </h2>
          <p className="text-body max-w-xl mx-auto text-lg mb-8">
            No hidden fees. No per-message charges. Just pure value.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-surface-low rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !annual
                  ? "bg-surface-high text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                annual
                  ? "bg-surface-high text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Annual
              <span className="text-xs text-primary font-semibold">-20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={
                isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
              }
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 + i * 0.1,
              }}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                plan.popular
                  ? "bg-surface-low ring-1 ring-primary/20 scale-[1.02]"
                  : "bg-surface-low hover:bg-surface-low/80"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gold-gradient px-5 py-1.5 rounded-full text-xs font-bold text-[#1a1400] uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-on-surface mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl md:text-5xl font-bold text-on-surface">
                  {plan.price === "Custom"
                    ? plan.price
                    : annual
                    ? `$${Math.round(parseInt(plan.price.replace("$", "")) * 0.8)}`
                    : plan.price}
                </span>
                {plan.period && (
                  <span className="text-on-surface-variant mb-1">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="mb-8">
                {plan.popular ? (
                  <MagneticButton>
                    <button className="gold-sheen gold-gradient w-full px-6 py-3.5 rounded-full text-base font-semibold text-[#1a1400] hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-[0.98]">
                      {plan.cta}
                    </button>
                  </MagneticButton>
                ) : (
                  <button className="w-full px-6 py-3.5 rounded-full text-base font-medium text-primary border border-ghost-gold hover:bg-primary/[0.05] transition-all duration-300 active:scale-[0.98]">
                    {plan.cta}
                  </button>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-3 text-sm text-on-surface-variant"
                  >
                    <svg
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
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
