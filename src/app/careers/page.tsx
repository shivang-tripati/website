"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpontaneousTrack {
    id: string;
    title: string;
    badge: string;
    description: string;
    tags: string[];
}

const talentTracks: SpontaneousTrack[] = [
    {
        id: "developer-engineering",
        title: "Software & Telephony Engineers",
        badge: "Tech & Systems",
        description: "Backend architects, WebRTC & SIP specialists, Full-Stack Next.js developers, and CPaaS API builders ready to handle high-throughput infrastructure.",
        tags: ["FreeSWITCH / Kamailio", "Go / Node.js", "Next.js & React", "Kafka & Redis", "WebSockets / WebRTC"],
    },
    {
        id: "sales-enterprise",
        title: "Enterprise Sales & Account Executives",
        badge: "Revenue & Growth",
        description: "B2B SaaS and CPaaS closers with proven track records in selling contact center solutions, bulk communication gateways, and custom business software.",
        tags: ["Enterprise B2B Sales", "CCaaS & CPaaS", "SaaS Closers", "Key Account Management", "Technical Pre-Sales"],
    },
    {
        id: "lead-generation-marketing",
        title: "Lead Generation & Outreach Specialists",
        badge: "Demand Gen",
        description: "Cold outreach masters, outbound campaign architects, and growth marketers skilled at driving qualified enterprise pipeline for high-ticket software deals.",
        tags: ["B2B Outbound Campaigns", "LinkedIn Outreach", "Cold Email Infrastructure", "Pipeline Qualification", "Data Enrichment"],
    },
    {
        id: "general-talent",
        title: "General Enterprise Talent",
        badge: "Open Application",
        description: "Exceptional UI/UX designers, support architects, compliance analysts, or product managers who believe they can elevate the ACS ecosystem.",
        tags: ["UI/UX & Product Design", "Telecom Compliance", "Technical Support", "Product Strategy"],
    },
];

export default function CareersPage() {
    const [activeTrack, setActiveTrack] = useState<SpontaneousTrack | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        domain: "Software & Telephony Engineers",
        portfolioUrl: "",
        experienceYears: "3 - 5 Years",
        pitch: "",
    });

    const handleApplyClick = (track: SpontaneousTrack) => {
        setActiveTrack(track);
        setFormData((prev) => ({ ...prev, domain: track.title }));
        setSubmitted(false);
    };

    return (
        <main className="min-h-screen bg-surface-lowest text-on-surface pt-28 pb-24 px-6 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 inline-block">
                        Talent & Careers
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Build With <span className="gold-gradient-text">Quiet Authority</span>
                    </h1>
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                        We do not have open desk listings at the moment, but we always make room for high-impact developers, enterprise sales closers, and lead generation specialists.
                    </p>
                </div>

                {/* Status Notice Banner */}
                <div className="max-w-2xl mx-auto mb-16 p-4 rounded-2xl bg-surface-low border border-white/[0.06] flex items-center justify-center gap-3 text-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                    <p className="text-xs md:text-sm text-on-surface-variant font-medium">
                        <strong className="text-on-surface">Active Openings Status:</strong> No formal vacancies currently posted. Spontaneous applications actively reviewed weekly.
                    </p>
                </div>

                {/* Track Selection Grid */}
                <div className="mb-20">
                    <div className="text-center md:text-left mb-8 pb-4 border-b border-white/[0.06]">
                        <h2 className="text-2xl md:text-3xl font-bold mb-1">Send Your Pitch or Resume</h2>
                        <p className="text-sm text-on-surface-variant">Select the vertical that best describes your core superpower.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {talentTracks.map((track, i) => (
                            <motion.div
                                key={track.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 * i, duration: 0.6 }}
                                className="p-8 rounded-2xl bg-surface-low border border-white/[0.04] hover:border-primary/30 transition-all flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-primary/[0.08] text-primary">
                                            {track.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-2">
                                        {track.title}
                                    </h3>

                                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                                        {track.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-8">
                                        {track.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] px-2.5 py-1 rounded-md bg-surface-lowest border border-white/[0.04] text-on-surface-variant"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleApplyClick(track)}
                                    className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-primary hover:text-surface-lowest text-on-surface font-semibold text-xs tracking-wide transition-all border border-white/[0.08] hover:border-transparent"
                                >
                                    Send Profile for this Track &rarr;
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Direct Email Callout */}
                <div className="rounded-2xl p-8 md:p-12 bg-surface-low border border-white/[0.04] text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-3">Prefer direct communication?</h3>
                    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                        If you have an unconventional background, run a lead gen agency, or want to discuss strategic enterprise distribution, reach out directly to leadership.
                    </p>
                    <a
                        href="mailto:careers@acs.com?subject=Strategic%20Talent%20Pitch"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
                    >
                        careers@acs.com &rarr;
                    </a>
                </div>
            </div>

            {/* Spontaneous Application Modal */}
            <AnimatePresence>
                {activeTrack && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-surface-low border border-white/[0.08] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveTrack(null)}
                                className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {submitted ? (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/[0.1] text-primary flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-on-surface mb-2">Profile Added to Our Talent Roster</h3>
                                    <p className="text-on-surface-variant text-sm max-w-md mx-auto mb-6">
                                        We have logged your application under <strong className="text-on-surface">{formData.domain}</strong>. When relevant bandwidth or custom projects unlock, our founders will reach out directly.
                                    </p>
                                    <button
                                        onClick={() => setActiveTrack(null)}
                                        className="px-6 py-2.5 rounded-xl gold-gradient text-surface-lowest text-xs font-bold"
                                    >
                                        Done
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-6">
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{activeTrack.badge}</span>
                                        <h2 className="text-2xl font-bold text-on-surface mt-1">Submit Your Profile</h2>
                                        <p className="text-xs text-on-surface-variant mt-1">Applying for: {formData.domain}</p>
                                    </div>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setSubmitted(true);
                                        }}
                                        className="space-y-4"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Full Name *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="e.g. John Doe"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-xs"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Email Address *</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-xs"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Phone / WhatsApp *</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="+91 98765 43210"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-xs"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Years of Experience</label>
                                                <select
                                                    value={formData.experienceYears}
                                                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-xs"
                                                >
                                                    <option>1 - 3 Years</option>
                                                    <option>3 - 5 Years</option>
                                                    <option>5 - 8 Years</option>
                                                    <option>8+ Years / Senior Leader</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                                                Resume / Portfolio / LinkedIn Link *
                                            </label>
                                            <input
                                                required
                                                type="url"
                                                placeholder="https://linkedin.com/in/... or Google Drive link"
                                                value={formData.portfolioUrl}
                                                onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-xs"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                                                Brief Pitch: What results or tech can you deliver for ACS?
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="e.g. Generated $100k in outbound SaaS pipelines, built Kamailio load balancers, closed Fortune 500 accounts..."
                                                value={formData.pitch}
                                                onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-xs resize-none"
                                            />
                                        </div>

                                        <div className="pt-2 flex items-center justify-end gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setActiveTrack(null)}
                                                className="px-4 py-2.5 rounded-xl text-xs font-medium text-on-surface-variant hover:text-on-surface"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-2.5 rounded-xl gold-gradient text-surface-lowest font-semibold text-xs tracking-wide hover:opacity-90"
                                            >
                                                Send Details
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}