"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";


import { MagneticButton } from "./magic-button";
import Hyperspeed from "./Hyperspeed";


export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0]
  );

  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0.96]
  );

  const titleWords = [
    "Enterprise",
    "Communication,",
    "Reimagined.",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.35,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 70,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [
          number,
          number,
          number,
          number
        ],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-labelledby="hero-title"
      className="
        hero-surface
        relative
        isolate
        min-h-[100svh]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* =========================================================
          HYPERSPEED BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          overflow-hidden
          pointer-events-none
        "
      >
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },

            distortion: "turbulentDistortion",

            length: 400,

            roadWidth: 10,
            islandWidth: 2,

            lanesPerRoad: 4,

            fov: 90,

            fovSpeedUp: 150,

            speedUp: 2,

            carLightsFade: 0.4,

            totalSideLightSticks: 20,

            lightPairsPerRoadWay: 40,

            shoulderLinesWidthPercentage: 0.05,

            brokenLinesWidthPercentage: 0.1,

            brokenLinesLengthPercentage: 0.5,

            lightStickWidth: [0.12, 0.5],

            lightStickHeight: [1.3, 1.7],

            movingAwaySpeed: [60, 80],

            movingCloserSpeed: [-120, -160],

            carLightsLength: [400 * 0.03, 400 * 0.2],

            carLightsRadius: [0.05, 0.14],

            carWidthPercentage: [0.3, 0.5],

            carShiftX: [-0.8, 0.8],

            carFloorSeparation: [0, 5],

            colors: {
              roadColor: 0x08090d,
              islandColor: 0x0b0d13,
              background: 0x050609,

              shoulderLines: 0x6366f1,
              brokenLines: 0x818cf8,

              leftCars: [
                0x4f46e5,
                0x6366f1,
                0x818cf8,
              ],

              rightCars: [
                0xf59e0b,
                0xfbbf24,
                0xfde68a,
              ],

              sticks: 0x6366f1,
            },
          }}
        />
      </div>

      {/* =========================================================
          READABILITY / ATMOSPHERE OVERLAY
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-[1]
          pointer-events-none
          bg-background/65
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-[1]
          pointer-events-none
          bg-[radial-gradient(
            circle_at_center,
            transparent_0%,
            hsl(var(--background)/0.2)_42%,
            hsl(var(--background)/0.82)_100%
          )]
        "
      />

      {/* =========================================================
          TOP / SIDE ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-[2]
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            left-[-10rem]
            top-[-8rem]
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-indigo-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-8rem]
            top-[10%]
            h-[26rem]
            w-[26rem]
            rounded-full
            bg-violet-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-12rem]
            left-1/2
            h-[30rem]
            w-[30rem]
            -translate-x-1/2
            rounded-full
            bg-amber-300/5
            blur-[140px]
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : contentY,
          opacity: prefersReducedMotion ? 1 : contentOpacity,
          scale: prefersReducedMotion ? 1 : contentScale,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          px-4
          py-32
          text-center
          sm:px-6
          lg:px-8
        "
      >
        {/* Eyebrow */}

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 16 }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mx-auto
            mb-7
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-border
            bg-surface/70
            px-4
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-on-surface-variant
            shadow-lg
            backdrop-blur-xl
            sm:text-xs
          "
        >
          <span
            aria-hidden="true"
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-400
              shadow-[0_0_14px_rgba(52,211,153,0.8)]
            "
          />

          Trusted by ambitious teams
        </motion.div>

        {/* =========================================================
            TITLE
        ========================================================== */}

        <motion.h1
          id="hero-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            mx-auto
            max-w-5xl
            text-display
            text-balance
            tracking-tight
          "
        >
          {titleWords.map((word, index) => (
            <span
              key={word}
              className="
                mr-[0.22em]
                inline-block
                overflow-hidden
                align-bottom
              "
            >
              <motion.span
                variants={wordVariants}
                className={`
                  inline-block
                  ${index === titleWords.length - 1
                    ? "gold-gradient-text"
                    : "text-on-surface"
                  }
                `}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* =========================================================
            DESCRIPTION
        ========================================================== */}

        <motion.p
          initial={
            prefersReducedMotion
              ? false
              : {
                opacity: 0,
                y: 24,
                filter: "blur(8px)",
              }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.7,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-7
            text-on-surface-variant
            sm:text-lg
            sm:leading-8
          "
        >
          Transform your enterprise workflows with a platform
          that delivers{" "}
          <span className="font-semibold text-on-surface">
            quiet authority
          </span>
          . Connect teams, clients, and systems through one
          ACS interface.
        </motion.p>

        {/* =========================================================
            CTA
        ========================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : {
                opacity: 0,
                y: 24,
                filter: "blur(8px)",
              }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.7,
            delay: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <MagneticButton>
            <a
              href="#pricing"
              className="
                gold-sheen
                gold-gradient
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-full
                px-7
                py-3.5
                text-base
                font-semibold
                text-[#1a1400]
                shadow-[0_12px_30px_rgba(79,70,229,0.25)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_18px_40px_rgba(79,70,229,0.3)]
                active:scale-[0.98]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-indigo-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              Start Free Trial

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </a>
          </MagneticButton>

          <a
            href="#features"
            className="
              group
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-border
              bg-surface-low/80
              px-7
              py-3.5
              text-base
              font-medium
              text-on-surface
              shadow-sm
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-primary/30
              hover:bg-surface-high
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              focus-visible:ring-offset-2
              focus-visible:ring-offset-background
            "
          >
            Explore Features

            <ArrowRight
              size={17}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </motion.div>

        {/* =========================================================
            SOCIAL PROOF
        ========================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0 }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.6,
          }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <div
            className="flex -space-x-2.5"
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-surface
                  bg-surface-high
                  shadow-sm
                  sm:h-10
                  sm:w-10
                "
              >
                <span className="text-xs font-semibold text-on-surface-variant">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-on-surface-variant">
            Trusted by{" "}
            <span className="font-semibold text-on-surface">
              1,000+
            </span>{" "}
            teams nationwide
          </p>
        </motion.div>
      </motion.div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[3]
          h-40
          bg-gradient-to-t
          from-surface
          via-surface/60
          to-transparent
        "
      />

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="
            absolute
            bottom-7
            left-1/2
            z-10
            hidden
            -translate-x-1/2
            sm:block
          "
          aria-hidden="true"
        >
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-9
              w-6
              items-start
              justify-center
              rounded-full
              border
              border-ghost
              p-1.5
            "
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1.5
                w-1
                rounded-full
                bg-primary
              "
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default HeroSection;