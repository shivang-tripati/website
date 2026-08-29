export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-surface-lowest text-on-surface py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 border-b border-white/[0.06] pb-8">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">Tracking & Storage</span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Cookie Policy</h1>
                    <p className="text-sm text-on-surface-variant">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
                </div>

                <div className="space-y-10 text-on-surface-variant text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">1. Understanding Cookies</h2>
                        <p>
                            Cookies and local storage tokens are small text files placed on your terminal device to ensure dashboard session persistence, provide security validation, and track application performance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">2. Categories of Cookies We Use</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-surface-low border border-white/[0.04]">
                                <h3 className="font-semibold text-on-surface text-base mb-1">Strictly Necessary Cookies</h3>
                                <p className="text-sm">
                                    Required for logging into the ACS Client Console, authenticating API tokens, and maintaining active contact center sessions.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface-low border border-white/[0.04]">
                                <h3 className="font-semibold text-on-surface text-base mb-1">Performance & Analytics Cookies</h3>
                                <p className="text-sm">
                                    Used to quantify system latency, identify UI bottlenecks, and track how documentation and landing features are consumed.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface-low border border-white/[0.04]">
                                <h3 className="font-semibold text-on-surface text-base mb-1">Functional & Preference Cookies</h3>
                                <p className="text-sm">
                                    Retains dashboard theme parameters, custom view states, and timezone configurations for reporting suites.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-on-surface mb-3">3. Managing Cookie Preferences</h2>
                        <p>
                            You can block or purge cookies using your browser settings. However, disabling essential session tokens will prevent access to authenticated portions of the ACS Client Portal.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}