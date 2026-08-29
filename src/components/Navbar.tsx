"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { MagneticButton } from "./magic-button";
import { ClientLoginDialog } from "./ClientLoginDialog";
import { CallbackDialog } from "./CallbackDialog";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  const [theme, setTheme] = useState<"dark" | "light">(
    "dark"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const preferredTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "dark";

    document.documentElement.classList.toggle(
      "dark",
      preferredTheme === "dark"
    );

    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const openCallback = () => {
    setLoginOpen(false);
    setCallbackOpen(true);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        aria-label="Main navigation"
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500
          ${scrolled
            ? "glass py-3"
            : "bg-transparent py-5"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
          "
        >
          {/* Logo */}
          <a
            href="#"
            className="
              group
              flex
              items-center
              gap-2
              rounded-lg
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                gold-gradient
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              <span className="text-sm font-cursive text-[#1a1400]">
                ACS
              </span>
            </div>

            <span className="text-lg font-bold text-on-surface tracking-tight">
              Agilis Communication Services
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  group
                  relative
                  text-sm
                  text-on-surface-variant
                  transition-colors
                  duration-300
                  hover:text-on-surface
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-background
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-0
                    bg-primary
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-surface-low
                text-on-surface-variant
                transition-all
                hover:border-border-strong
                hover:bg-surface-high
                hover:text-on-surface
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
              "
            >
              {theme === "dark" ? (
                <Sun
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              ) : (
                <Moon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Client Login */}
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="
                inline-flex
                h-10
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-surface-low
                px-5
                text-sm
                font-medium
                text-on-surface
                transition-all
                hover:border-primary/30
                hover:bg-surface-high
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
              "
            >
              Client Login
            </button>

            {/* Sales CTA */}
            <MagneticButton strength={0.08}>
              <button
                type="button"
                onClick={() => setCallbackOpen(true)}
                className="
                  group
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  gold-sheen
                  gold-gradient
                  px-5
                  text-sm
                  font-semibold
                  text-[#1a1400]
                  shadow-[0_8px_20px_rgba(79,70,229,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_28px_rgba(79,70,229,0.28)]
                  active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                "
              >
                Talk to an Expert

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                  "
                  aria-hidden="true"
                />
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-on-surface
              md:hidden
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
            "
          >
            {mobileOpen ? (
              <X
                className="h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="h-6 w-6"
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{ duration: 0.25 }}
              className="
                mx-4
                mt-3
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-surface
                shadow-xl
                md:hidden
              "
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-on-surface-variant
                      transition-colors
                      hover:bg-surface-high
                      hover:text-on-surface
                    "
                  >
                    {link.label}
                  </a>
                ))}

                <div className="my-3 border-t border-border" />

                <button
                  type="button"
                  onClick={() => {
                    setLoginOpen(true);
                    setMobileOpen(false);
                  }}
                  className="
                    rounded-xl
                    border
                    border-border
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-on-surface
                  "
                >
                  Client Login
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCallbackOpen(true);
                    setMobileOpen(false);
                  }}
                  className="
                    mt-1
                    rounded-xl
                    gold-gradient
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-[#1a1400]
                  "
                >
                  Talk to an Expert
                </button>

                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    setMobileOpen(false);
                  }}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    text-on-surface-variant
                    hover:bg-surface-high
                  "
                >
                  {theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Dialogs */}
      <ClientLoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onContactSales={openCallback}
      />

      <CallbackDialog
        open={callbackOpen}
        onOpenChange={setCallbackOpen}
      />
    </>
  );
}