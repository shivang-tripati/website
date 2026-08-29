"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContactSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        phone: "",
        companyName: "",
        serviceOfInterest: "Cloud Contact Center (CCaaS)",
        monthlyVolume: "10k - 50k calls/messages",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Insert your API submission logic here
        setSubmitted(true);
    };

    return (
        <section ref={ref} id="contact" className="py-32 relative bg-surface-lowest">
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-lowest to-surface pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-label inline-block mb-4 text-primary font-medium tracking-wider uppercase text-xs">
                        Connect With Our Engineers
                    </span>
                    <h2 className="text-headline-lg mb-6 text-3xl md:text-5xl font-bold tracking-tight text-on-surface">
                        Talk to an <span className="gold-gradient-text">Enterprise Expert</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto text-lg text-on-surface-variant">
                        Whether you need custom carrier routing, high-volume CPaaS throughput, or bespoke software integration, our technical architects are here to help.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Direct Channels & SLA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="rounded-2xl bg-surface-low p-8 border border-white/[0.04]">
                            <h3 className="text-xl font-semibold text-on-surface mb-6">Direct Engagement</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/[0.08] text-primary">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-on-surface-variant">Enterprise Inquiries</h4>
                                        <p className="text-base font-semibold text-on-surface mt-0.5">enterprise@acs.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/[0.08] text-primary">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-on-surface-variant">Instant Support Desk</h4>
                                        <p className="text-base font-semibold text-on-surface mt-0.5">+91 (800) 425-2726</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-surface-low p-8 border border-white/[0.04]">
                            <h4 className="text-sm font-semibold tracking-wide text-primary uppercase mb-4">Enterprise Guarantees</h4>
                            <ul className="space-y-3 text-sm text-on-surface-variant">
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full gold-gradient" />
                                    Guaranteed 18-minute first response for Tier-1 accounts
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full gold-gradient" />
                                    Direct WhatsApp Bridge with lead systems architect
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full gold-gradient" />
                                    Custom NDA execution prior to architecture discovery
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Dynamic Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="rounded-2xl bg-surface-low p-8 md:p-10 border border-white/[0.04]">
                            {submitted ? (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/[0.1] text-primary flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-on-surface mb-2">Message Dispatched</h3>
                                    <p className="text-on-surface-variant max-w-md mx-auto">
                                        An enterprise architect will review your technical requirements and contact you within 18 minutes.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Sarah Connor"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-sm transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                                Work Email
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="sarah@enterprise.com"
                                                value={formData.workEmail}
                                                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-sm transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                                Phone / WhatsApp
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-sm transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Acme Technologies"
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-sm transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                                Primary Requirement
                                            </label>
                                            <select
                                                value={formData.serviceOfInterest}
                                                onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-sm transition-colors"
                                            >
                                                <option>Contact Center Setup (CCaaS)</option>
                                                <option>Bulk WhatsApp Business API</option>
                                                <option>Smart Cloud IVR & Voice Calls</option>
                                                <option>Bulk SMS & OTP Gateway</option>
                                                <option>Omnichannel CRM Software</option>
                                                <option>Cloud HRMS & Payroll</option>
                                                <option>Custom Business Software / ERP</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                                Monthly Expected Volume
                                            </label>
                                            <select
                                                value={formData.monthlyVolume}
                                                onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-sm transition-colors"
                                            >
                                                <option>&lt; 10,000 interactions</option>
                                                <option>10,000 - 100,000 interactions</option>
                                                <option>100,000 - 1,000,000 interactions</option>
                                                <option>1,000,000+ (High Volume Enterprise)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                            Technical Scope / Comments (Optional)
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Outline any specific API integrations, legacy PBX setups, or compliance protocols needed..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-surface-lowest border border-white/[0.08] focus:border-primary focus:outline-none text-on-surface text-sm transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl gold-gradient font-semibold text-surface-lowest transition-opacity hover:opacity-90 active:scale-[0.99] text-sm tracking-wide"
                                    >
                                        Request Technical Architecture Call
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}