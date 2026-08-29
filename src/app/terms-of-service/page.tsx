export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-surface-lowest text-on-surface py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 border-b border-white/[0.06] pb-8">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Legal Agreement</span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Terms of Service</h1>
                    <p className="text-sm text-on-surface-variant">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
                </div>

                <div className="space-y-10 text-on-surface-variant text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">1. Agreement to Terms</h2>
                        <p>
                            By accessing or utilizing the ACS Cloud Telephony, CPaaS, WhatsApp Business API, CRM, HRMS, and associated custom software suites, you agree to enter into a legally binding agreement governed by these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">2. Acceptable Use Policy (AUP)</h2>
                        <p className="mb-3">Our infrastructure enforces strict compliance with telecommunications standards:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-on-surface">Spam & DND Prohibitions:</strong> Users must not deliver unsolicited calls, spam SMS, or unauthorized WhatsApp broadcasts. All outbound messaging must strictly adhere to Do-Not-Call (DND) and opt-in registries.</li>
                            <li><strong className="text-on-surface">CLI Spoofing:</strong> Falsifying caller identity or masking numbers to deceive recipients is strictly barred.</li>
                            <li><strong className="text-on-surface">Automated Abuse:</strong> High-frequency API abuse exceeding assigned TPS limits without prior authorization may result in immediate rate limiting.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">3. Credit Validity & Lifetime Balances</h2>
                        <p>
                            Where explicitly designated under promotional bulk plans (e.g., Bulk Voice, Bulk WhatsApp), service credits do not expire (&ldquo;Lifetime Validity&rdquo;). Credits remain active provided the master account maintains active standing under our security guidelines.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">4. Service Level Agreement (SLA)</h2>
                        <p>
                            ACS guarantees an enterprise uptime benchmark of 99.9% across our core SIP trunks, API Connect endpoints, and call routing infrastructure. Scheduled maintenance windows are communicated at least 48 hours in advance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">5. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by applicable law, ACS shall not be held liable for indirect, punitive, or consequential damages resulting from upstream carrier network delays, telecom regulatory shutdowns, or client API misconfigurations.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}