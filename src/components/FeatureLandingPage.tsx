"use client";

import Link from "next/link";
import { useState } from "react";
import type { FeaturePage } from "@/lib/feature-pages";

function SectionContent({ section }: { section: FeaturePage["sections"][number] }) {
  const { type, content } = section;

  if ("steps" in content && Array.isArray(content.steps)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.steps.map((step: { number: number; title: string; description: string }) => (
          <div key={step.number} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            <span className="text-primary font-bold text-2xl mb-4 block">{step.number}</span>
            <h3 className="font-semibold text-on-surface mb-2">{step.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("cards" in content && Array.isArray(content.cards)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {content.cards.map((card: { stat?: string; label?: string; title?: string; description: string }) => (
          <div key={card.label ?? card.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            {card.stat && <p className="text-3xl font-bold gold-gradient-text mb-2">{card.stat}</p>}
            <h3 className="font-semibold text-on-surface mb-2">{card.label ?? card.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("capabilities" in content && Array.isArray(content.capabilities)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.capabilities.map((cap: { title: string; description: string }) => (
          <div key={cap.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            <h3 className="font-semibold text-on-surface mb-2">{cap.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{cap.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("features" in content && Array.isArray(content.features)) {
    const features = content.features as Array<{ title: string; description: string } | string>;
    const featureItems = features.filter((item): item is { title: string; description: string } => typeof item !== "string");
    if (featureItems.length === 0) return null;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {featureItems.map((feature) => (
          <div key={feature.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            <h3 className="font-semibold text-on-surface mb-2">{feature.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("items" in content && Array.isArray(content.items)) {
    return <Accordion items={content.items} />;
  }

  if ("categories" in content && Array.isArray(content.categories)) {
    return <Accordion items={content.categories.map((c: { title: string; tools: string[] }) => ({
      title: c.title,
      description: c.tools.join(", "),
    }))} />;
  }

  if ("risks" in content && Array.isArray(content.risks)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {content.risks.map((risk: { title: string; description: string }) => (
          <div key={risk.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            <h3 className="font-semibold text-on-surface mb-2">{risk.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{risk.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("benefits" in content && Array.isArray(content.benefits)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {content.benefits.map((benefit: { title: string; description: string }) => (
          <div key={benefit.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            <h3 className="font-semibold text-on-surface mb-2">{benefit.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("segments" in content && Array.isArray(content.segments)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {content.segments.map((seg: { title: string; description: string }) => (
          <div key={seg.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            <h3 className="font-semibold text-on-surface mb-2">{seg.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{seg.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("types" in content && Array.isArray(content.types)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {content.types.map((t: { title: string; description: string; tag?: string }) => (
          <div key={t.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            {t.tag && <span className="text-xs text-primary mb-2 block">{t.tag}</span>}
            <h3 className="font-semibold text-on-surface mb-2">{t.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{t.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("useCases" in content && Array.isArray(content.useCases)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {content.useCases.map((uc: { title: string; description: string; channel?: string }) => (
          <div key={uc.title} className="rounded-2xl bg-surface-low p-6 border border-white/5">
            {uc.channel && <span className="text-xs text-primary mb-2 block">{uc.channel}</span>}
            <h3 className="font-semibold text-on-surface mb-2">{uc.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{uc.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if ("tabs" in content && Array.isArray(content.tabs)) {
    return <DialerTabs tabs={content.tabs} />;
  }

  if ("before" in content && "after" in content) {
    const before = content.before as { label: string; description: string };
    const after = content.after as { label: string; description: string };
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
          <span className="text-xs text-red-400 mb-2 block">{before.label}</span>
          <p className="text-sm text-on-surface-variant leading-relaxed">{before.description}</p>
        </div>
        <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6">
          <span className="text-xs text-primary mb-2 block">{after.label}</span>
          <p className="text-sm text-on-surface-variant leading-relaxed">{after.description}</p>
        </div>
      </div>
    );
  }

  if ("quote" in content) {
    const story = content as { quote: string; attribution: string; metric?: string };
    return (
      <blockquote className="rounded-2xl bg-surface-low p-8 border border-white/5 text-center max-w-3xl mx-auto">
        <p className="text-lg text-on-surface leading-relaxed mb-4">&ldquo;{story.quote}&rdquo;</p>
        {story.metric && <p className="text-primary font-semibold mb-2">{story.metric}</p>}
        <footer className="text-sm text-on-surface-variant">{story.attribution}</footer>
      </blockquote>
    );
  }

  if ("badges" in content && "description" in content) {
    const banner = content as { badges: string[]; description: string };
    return (
      <div className="rounded-2xl bg-surface-low p-8 border border-primary/20 text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {banner.badges.map((badge) => (
            <span key={badge} className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              {badge}
            </span>
          ))}
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto">{banner.description}</p>
      </div>
    );
  }

  if ("description" in content && typeof content.description === "string") {
    const extra = content as { description: string; ctaText?: string; ctaLink?: string; note?: string };
    return (
      <div className="rounded-2xl bg-surface-low p-8 border border-white/5 max-w-3xl">
        <p className="text-sm text-on-surface-variant leading-relaxed">{extra.description}</p>
        {extra.note && <p className="text-xs text-on-surface-variant/70 mt-3">{extra.note}</p>}
        {extra.ctaText && extra.ctaLink && (
          <Link href={extra.ctaLink} className="inline-block mt-4 text-sm text-primary hover:underline">
            {extra.ctaText} →
          </Link>
        )}
      </div>
    );
  }

  return null;
}

function Accordion({ items }: { items: { title: string; description: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={item.title} className="rounded-2xl bg-surface-low border border-white/5 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-medium text-on-surface">{item.title}</span>
            <span className="text-primary text-xl leading-none">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function DialerTabs({ tabs }: { tabs: { id: string; title: string; description: string; bestFor: string }[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === tab.id
                ? "gold-gradient text-[#1a1400]"
                : "bg-surface-low text-on-surface-variant hover:text-on-surface border border-white/5"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {current && (
        <div className="rounded-2xl bg-surface-low p-6 border border-white/5">
          <p className="text-sm text-on-surface-variant leading-relaxed mb-3">{current.description}</p>
          <p className="text-xs text-primary"><span className="font-semibold">Best for:</span> {current.bestFor}</p>
        </div>
      )}
    </div>
  );
}

export function FeatureLandingPage({ page }: { page: FeaturePage }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-24 pb-32">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-lowest to-surface pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link href="/#features" className="inline-block text-sm text-primary hover:underline mb-6">
            ← All features
          </Link>
          <h1 className="text-display mb-6">
            <span className="gold-gradient-text">{page.hero.headline}</span>
          </h1>
          <p className="text-body text-lg max-w-2xl mx-auto">{page.hero.subheadline}</p>
        </div>
      </section>

      {/* Sections */}
      {page.sections.map((section) => (
        <section key={section.type} className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-headline-lg text-center mb-12">{section.headline}</h2>
            <SectionContent section={section} />
          </div>
        </section>
      ))}

      {/* FAQ */}
      {page.faq.length > 0 && (
        <section className="py-16 bg-surface-lowest">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-headline-lg text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {page.faq.map((item, i) => (
                <div key={item.question} className="rounded-2xl bg-surface-low border border-white/5 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                  >
                    <span className="font-medium text-on-surface">{item.question}</span>
                    <span className="text-primary text-xl leading-none shrink-0">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <a
            href="/contact"
            className="gold-sheen gold-gradient px-10 py-4 rounded-full text-lg font-semibold text-[#1a1400] inline-block hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-[0.98]"
          >
            {page.cta.text}
          </a>
        </div>
      </section>
    </main>
  );
}
