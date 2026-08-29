"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: "contact-center",
    label: "FLAGSHIP",
    title: "Contact Center",
    href: "/products/contact-center",
    description:
      "A full-stack cloud contact center with omnichannel routing and real-time monitoring. Handle voice, chat, email, and social from one unified agent desktop.",
    features: [
      "Omnichannel agent desktop",
      "Real-time queue monitoring",
      "Quality assurance & scoring",
      "Custom dispositions & wrap-ups",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 6v4.5m0-4.5h4.5m-4.5 0l6 6M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0l6-6m-3-6V3.75m0 4.5H3.75m4.5 0l-6-6" />
      </svg>
    ),
    gradient: "from-primary/20 to-primary-container/10",
  },
  {
    id: "api-connect",
    label: "DEVELOPER",
    title: "API Connect",
    href: "/products/api-connect",
    description:
      "Programmable communication APIs for voice, SMS, and WhatsApp. Build custom workflows, embed calling into your apps, and automate customer engagement at scale with RESTful endpoints.",
    features: [
      "RESTful APIs",
      "Webhook event streaming"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-tertiary/20 to-tertiary/5",
  },
  {
    id: "click-to-call",
    label: "ENGAGEMENT",
    title: "Click-to-Call",
    href: "/products/click-to-call",
    description:
      "Embed one-click calling into your website, CRM, or app. Eliminate manual dialing, connect customers instantly, and capture every conversation with automatic logging and recording.",
    features: [
      "CRM integrated calling",
      "Automatic call logging",
      "Call recording & transcription",
      "Custom caller ID",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    id: "dialers-campaigns",
    label: "OUTBOUND",
    title: "Dialers & Campaigns",
    href: "/products/dialers-campaigns",
    description:
      "Predictive, progressive, and preview dialers that maximize agent talk time. Design multi-touch outbound campaigns across voice and SMS with intelligent pacing and compliance controls.",
    features: [
      "Predictive & progressive dialing",
      "Campaign management console",
      "DNC list compliance",
      "Campaign analytics & reporting",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    gradient: "from-primary/15 to-secondary/10",
  },
];

function ProductCard({
  product,
  isActive,
  onClick,
}: {
  product: (typeof products)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [spotlightPos, setSpotlightPos] = useState({
    x: 0,
    y: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();

      setSpotlightPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl
        border
        p-8
        transition-all duration-500
        ${isActive
          ? "border-primary/20 bg-surface-low"
          : "border-border/50 bg-surface-low/50 hover:border-primary/20 hover:bg-surface-low"
        }
      `}
    >
      {/* Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `
            radial-gradient(
              400px circle at ${spotlightPos.x}px ${spotlightPos.y}px,
              rgba(242, 202, 80, 0.06),
              transparent 60%
            )
          `,
        }}
      />

      {/* Subtle top accent */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-px
          bg-gradient-to-r
          from-transparent
          via-primary/40
          to-transparent
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`
            mb-6
            flex h-14 w-14
            items-center justify-center
            rounded-xl
            bg-gradient-to-br ${product.gradient}
            text-primary
            transition-transform duration-500
            group-hover:scale-105
          `}
        >
          {product.icon}
        </div>

        {/* Product category */}
        <span className="text-label mb-2 block text-primary/70">
          {product.label}
        </span>

        {/* Title */}
        <h3 className="text-headline-md mb-3 text-on-surface">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-body mb-6 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <ul
          aria-label={`${product.title} features`}
          className="space-y-2.5"
        >
          {product.features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                items-center
                gap-2.5
                text-sm
                text-on-surface-variant
              "
            >
              <svg
                className="h-4 w-4 shrink-0 text-primary/70"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Product navigation */}
        <Link
          href={product.href}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Explore ${product.title}`}
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            rounded-md
            py-1
            text-sm
            font-semibold
            text-primary

            opacity-100
            translate-x-0

            md:opacity-0
            md:-translate-x-2
            md:group-hover:translate-x-0
            md:group-hover:opacity-100

            transition-all
            duration-500

            hover:text-primary
            focus-visible:opacity-100
            focus-visible:translate-x-0
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          <span>Explore {product.title}</span>

          <svg
            className="
              h-4 w-4
              transition-transform duration-300
              group-hover:translate-x-1
            "
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

export function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProduct, setActiveProduct] = useState(0);

  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={ref} id="products" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-label inline-block mb-4 text-primary">Our Products</span>
          <h2 className="text-headline-lg mb-6">
            The Complete <span className="gold-gradient-text">Communication Stack</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Four powerful products that work independently or together to cover every communication need your enterprise has.
          </p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {products.map((product, i) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                product={product}
                isActive={activeProduct === i}
                onClick={() => setActiveProduct(i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
