export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-surface-lowest text-on-surface py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 border-b border-white/[0.06] pb-8">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Compliance & Trust</span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Privacy Policy</h1>
                    <p className="text-sm text-on-surface-variant">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
                </div>

                <div className="space-y-10 text-on-surface-variant text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">1. Information We Collect</h2>
                        <p className="mb-3">
                            ACS (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) processes information strictly required to operate carrier-grade telecommunications, CPaaS APIs, and enterprise cloud applications:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-on-surface">Account Credentials:</strong> Name, work email, phone number, billing address, and tax/DLT registration identifiers.</li>
                            <li><strong className="text-on-surface">Communications Telemetry:</strong> Call Detail Records (CDRs), source/destination routing numbers, message delivery timestamps, IP addresses, and session duration.</li>
                            <li><strong className="text-on-surface">Customer Content:</strong> Voice recordings, SMS payloads, and WhatsApp message content processed strictly under contract instructions.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">2. How Telephony Data is Processed</h2>
                        <p>
                            ACS functions as a <em>Data Processor</em> for communication streams transmitted via our platform. We process payloads solely to route calls, execute A2P SMS transmissions, process WhatsApp API webhooks, and generate real-time analytics. We do not sell, rent, or monetize your end-user communications.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">3. Telecommunications & DLT Compliance</h2>
                        <p>
                            Under TRAI and global telecom regulatory frameworks, transactional and promotional SMS traffic is routed across registered Distributed Ledger Technology (DLT) headers and templates. Telecommunication routing metadata is retained in alignment with statutory compliance directives.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">4. Security Infrastructure</h2>
                        <p>
                            All data in transit is encrypted using TLS 1.3, and voice/call recordings stored at rest are encrypted via AES-256. Access to our carrier interconnects and databases is managed via role-based access controls (RBAC) and zero-trust perimeter firewalls.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">5. Data Retention & Deletion</h2>
                        <p>
                            You maintain full authority over Call Detail Records and media storage lifecycles. Customers can execute automated purge policies or request total deletion of custom data by contacting <span className="text-primary">privacy@acs.com</span>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}