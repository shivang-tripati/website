"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagneticButton } from "./Navbar";
import { SovereignBackground } from "./BackgroundEffects";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Cinematic background */}
      <SovereignBackground variant="section" />
      <div className="absolute inset-0 grid-texture opacity-30" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-label inline-block mb-6 text-primary">
            Ready to Begin?
          </span>
          <h2 className="text-display mb-8">
            Your Team Deserves
            <br />
            <span className="gold-gradient-text">Sovereign</span> Communication.
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto mb-12">
            Join 2,400+ teams that replaced 5 tools with one sovereign platform.
            Start your free 14-day trial—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <a
                href="#"
                className="gold-sheen gold-gradient px-10 py-4 rounded-full text-lg font-semibold text-[#1a1400] inline-block hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-[0.98]"
              >
                Start Free Trial
              </a>
            </MagneticButton>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-on-surface-variant hover:text-on-surface transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog", "API Docs"],
    Company: ["About", "Careers", "Blog", "Press Kit", "Contact"],
    Resources: ["Documentation", "Community", "Status", "Security", "GDPR"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer
      ref={ref}
      className="relative bg-surface-lowest pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-lowest pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-sm font-black text-[#1a1400]">S</span>
              </div>
              <span className="text-lg font-bold">Sovereign</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Enterprise communication,
              <br />
              reimagined with quiet authority.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <div key={category}>
              <h4 className="text-label text-on-surface mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: "1px solid rgba(229,226,225,0.06)",
          }}
        >
          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Sovereign. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
