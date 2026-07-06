"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Terminal,
  Play,
  CheckCircle2,
  Loader2,
  Code2,
  Phone,
  MessageSquare,
  Globe,
} from "lucide-react";

// ============================================
// Floating Glassmorphism Navigation Header
// ============================================
function GlassNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="backdrop-blur-md bg-gray-950/40 border border-white/10 rounded-full px-6 py-3 max-w-5xl w-[90%] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Company X
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "Docs", "Developers"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-4">
          <a
            href="#talk"
            className="hidden sm:flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            Talk to an expert
            <ArrowRight className="w-3 h-3" />
          </a>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-indigo-500/25 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

// ============================================
// Feature Update Badge
// ============================================
function FeatureBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-gray-300">
        <span className="text-base">🇮🇳</span>
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Localized Data Hosting
        </span>
        <span className="text-gray-500">|</span>
        <span>Now live in Mumbai & Bangalore</span>
        <ChevronRight className="w-3 h-3 text-gray-500" />
      </div>
    </motion.div>
  );
}

// ============================================
// API Terminal Component
// ============================================
type Language = "cURL" | "Node.js" | "Python";
type TerminalState = "idle" | "loading" | "success";

function APITerminal() {
  const [activeLang, setActiveLang] = useState<Language>("Node.js");
  const [terminalState, setTerminalState] = useState<TerminalState>("idle");
  const [showResponse, setShowResponse] = useState(false);

  const codeSnippets: Record<Language, string> = {
    "cURL": `curl -X POST https://api.companyx.in/v1/voice/calls \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+919876543210",
    "from": "+918012345678",
    "url": "https://your-server.com/twiml",
    "callback_url": "https://your-server.com/status"
  }'`,
    "Node.js": `import { CompanyX } from '@companyx/sdk';

const client = new CompanyX('YOUR_API_KEY');

const call = await client.voice.calls.create({
  to: '+919876543210',
  from: '+918012345678',
  url: 'https://your-server.com/twiml',
  callbackUrl: 'https://your-server.com/status'
});

console.log(call.id);`,
    "Python": `from companyx import CompanyX

client = CompanyX('YOUR_API_KEY')

call = client.voice.calls.create(
    to='+919876543210',
    from='+918012345678',
    url='https://your-server.com/twiml',
    callback_url='https://your-server.com/status'
)

print(call.id)`,
  };

  const responseJSON = `{
  "id": "call_8xK9mN2pQ4rT6vW",
  "status": "queued",
  "to": "+919876543210",
  "from": "+918012345678",
  "direction": "outbound-api",
  "created_at": "2025-01-15T10:30:45Z",
  "price": null,
  "price_unit": "INR"
}`;

  const handleRunRequest = () => {
    if (terminalState !== "idle") return;
    setTerminalState("loading");
    setShowResponse(false);

    setTimeout(() => {
      setTerminalState("success");
      setShowResponse(true);
    }, 1800);
  };

  const resetTerminal = () => {
    setTerminalState("idle");
    setShowResponse(false);
  };

  // Syntax highlighting helper
  const highlightCode = (code: string) => {
    return code.split("\n").map((line, i) => {
      // Keywords
      let highlighted = line
        .replace(/(import|from|const|await|async|function|return|var|let)/g, '<span class="text-purple-400">$1</span>')
        .replace(/(true|false|null|undefined)/g, '<span class="text-orange-400">$1</span>')
        .replace(/('.*?')/g, '<span class="text-green-400">$1</span>')
        .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
        .replace(/\b(client|call|console|log|CompanyX)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/\b(to|from|url|callbackUrl|id)\b/g, '<span class="text-cyan-400">$1</span>');

      return (
        <div key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: highlighted || " " }} />
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Terminal Window */}
      <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/50">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900/80 border-b border-white/10">
          {/* Mac-style traffic lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          {/* Language Tabs */}
          <div className="flex items-center gap-1 bg-gray-800/50 rounded-lg p-1">
            {(["cURL", "Node.js", "Python"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setActiveLang(lang);
                  resetTerminal();
                }}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
                  activeLang === lang
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Code Pane */}
        <div className="p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-300">
            <code>{highlightCode(codeSnippets[activeLang])}</code>
          </pre>
        </div>

        {/* Run Button */}
        <div className="px-4 pb-4">
          <motion.button
            onClick={handleRunRequest}
            disabled={terminalState !== "idle"}
            whileHover={{ scale: terminalState === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: terminalState === "idle" ? 0.98 : 1 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              terminalState === "idle"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                : terminalState === "loading"
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-green-600/20 text-green-400 border border-green-500/30"
            }`}
          >
            {terminalState === "idle" && (
              <>
                <Play className="w-4 h-4" />
                Run Request
              </>
            )}
            {terminalState === "loading" && (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Executing...
              </>
            )}
            {terminalState === "success" && (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Request Completed
              </>
            )}
          </motion.button>
        </div>

        {/* Response Panel */}
        <AnimatePresence>
          {showResponse && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/10 bg-gray-950/50"
            >
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900/60">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-green-400">200 OK</span>
                  <span className="text-xs text-gray-500">application/json</span>
                </div>
                <span className="text-xs text-gray-500">142ms</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>
                    {responseJSON.split("\n").map((line, i) => {
                      let highlighted = line
                        .replace(/"([^"]+)":/g, '<span class="text-cyan-400">"$1"</span>:')
                        .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
                        .replace(/: ([0-9]+)/g, ': <span class="text-orange-400">$1</span>')
                        .replace(/: (null)/g, ': <span class="text-orange-400">$1</span>');
                      return (
                        <div key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: highlighted || " " }} />
                      );
                    })}
                  </code>
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl -z-10" />
    </motion.div>
  );
}

// ============================================
// Main Hero Section
// ============================================
export function HeroSectionCompanyX() {
  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Radial Fade */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, transparent 20%, #030712 80%)",
        }}
      />

      {/* Navigation */}
      <GlassNav />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <FeatureBadge />

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Programmable Voice &{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SMS
              </span>{" "}
              built for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Indian Scale
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              Enterprise-grade communication APIs with{" "}
              <span className="text-white font-semibold">99.99% uptime</span>, direct telecom carrier routing, and strict{" "}
              <span className="text-white font-semibold">TRAI/DLT compliance</span>. Build reliable customer experiences across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA */}
              <motion.a
                href="#get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="#talk"
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors duration-300"
              >
                Talk to an expert
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>Direct Carrier Routing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MessageSquare className="w-4 h-4 text-pink-400" />
                <span>TRAI Compliant</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - API Terminal */}
          <div className="lg:pl-8">
            <APITerminal />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionCompanyX;
