"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  { name: "Stripe", width: "w-24" },
  { name: "Notion", width: "w-20" },
  { name: "Slack", width: "w-20" },
  { name: "Figma", width: "w-16" },
  { name: "Linear", width: "w-20" },
  { name: "Vercel", width: "w-20" },
  { name: "Supabase", width: "w-24" },
  { name: "Railway", width: "w-20" },
];

export function LogoCloud() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-label text-center mb-12"
        >
          Powering the world&apos;s most ambitious teams
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex shrink-0 gap-16 items-center"
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className={`${logo.width} h-12 flex items-center justify-center shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-500`}
                >
                  <span className="text-lg font-semibold text-on-surface-variant tracking-wider whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
