"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { ProductPage } from "@/lib/product-pages";

interface ProductLandingPageProps {
    product: ProductPage;
}

export function ProductLandingPage({
    product,
}: ProductLandingPageProps) {
    return (
        <main className="overflow-hidden">

            {/* ========================= */}
            {/* HERO                      */}
            {/* ========================= */}

            <section className="relative pt-36 pb-24">
                <div
                    className="
                        absolute
                        inset-0
                        -z-10
                        bg-gradient-to-b
                        from-surface
                        via-surface-lowest
                        to-surface
                    "
                />

                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-4xl text-center">

                        <p
                            className="
                                mb-5
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-primary
                            "
                        >
                            {product.hero.eyebrow}
                        </p>

                        <h1
                            className="
                                text-display
                                text-balance
                            "
                        >
                            {product.hero.headline}
                        </h1>

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl
                                text-lg
                                leading-8
                                text-on-surface-variant
                            "
                        >
                            {product.hero.subheadline}
                        </p>

                        <div
                            className="
                                mt-9
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-3
                                sm:flex-row
                            "
                        >
                            <Link
                                href={
                                    product.hero
                                        .primaryCtaHref
                                }
                                className="
                                    gold-gradient
                                    inline-flex
                                    min-h-12
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    px-7
                                    text-sm
                                    font-semibold
                                    text-[#1a1400]
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:shadow-lg
                                "
                            >
                                {
                                    product.hero
                                        .primaryCta
                                }

                                <ArrowRight
                                    className="h-4 w-4"
                                />
                            </Link>

                            {product.hero
                                .secondaryCta &&
                                product.hero
                                    .secondaryCtaHref && (
                                    <Link
                                        href={
                                            product
                                                .hero
                                                .secondaryCtaHref
                                        }
                                        target={
                                            product.hero
                                                .secondaryCtaHref
                                                .startsWith(
                                                    "http"
                                                )
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            product.hero
                                                .secondaryCtaHref
                                                .startsWith(
                                                    "http"
                                                )
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="
                                            inline-flex
                                            min-h-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-border
                                            bg-surface-low
                                            px-7
                                            text-sm
                                            font-semibold
                                            text-on-surface
                                            transition
                                            hover:bg-surface-high
                                        "
                                    >
                                        {
                                            product.hero
                                                .secondaryCta
                                        }
                                    </Link>
                                )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* OVERVIEW                   */}
            {/* ========================= */}

            <section className="py-20">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-headline-lg">
                        {
                            product.overview
                                .headline
                        }
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-lg
                            leading-8
                            text-on-surface-variant
                        "
                    >
                        {
                            product.overview
                                .description
                        }
                    </p>
                </div>
            </section>

            {/* ========================= */}
            {/* FEATURES                   */}
            {/* ========================= */}

            <section className="bg-surface-lowest py-24">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                            Capabilities
                        </p>

                        <h2 className="text-headline-lg">
                            Everything you need.
                        </h2>
                    </div>

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-5
                            md:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {product.features.map(
                            (feature) => {
                                const Icon =
                                    feature.icon;

                                return (
                                    <article
                                        key={
                                            feature.title
                                        }
                                        className="
                                            rounded-2xl
                                            border
                                            border-border
                                            bg-surface-low
                                            p-6
                                            transition-all
                                            hover:-translate-y-1
                                            hover:border-primary/20
                                            hover:shadow-lg
                                        "
                                    >
                                        {Icon && (
                                            <div
                                                className="
                                                    mb-5
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    bg-primary/10
                                                    text-primary
                                                "
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>
                                        )}

                                        <h3 className="font-semibold text-on-surface">
                                            {
                                                feature.title
                                            }
                                        </h3>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                leading-6
                                                text-on-surface-variant
                                            "
                                        >
                                            {
                                                feature.description
                                            }
                                        </p>
                                    </article>
                                );
                            }
                        )}
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* BENEFITS                   */}
            {/* ========================= */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                            Why it matters
                        </p>

                        <h2 className="text-headline-lg">
                            Built for business outcomes.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {product.benefits.map(
                            (benefit) => (
                                <div
                                    key={
                                        benefit.title
                                    }
                                    className="
                                        flex
                                        gap-4
                                        rounded-2xl
                                        border
                                        border-border
                                        bg-surface-low
                                        p-6
                                    "
                                >
                                    <CheckCircle2
                                        className="
                                            mt-0.5
                                            h-5
                                            w-5
                                            shrink-0
                                            text-primary
                                        "
                                    />

                                    <div>
                                        <h3 className="font-semibold">
                                            {
                                                benefit.title
                                            }
                                        </h3>

                                        <p
                                            className="
                                                mt-2
                                                text-sm
                                                leading-6
                                                text-on-surface-variant
                                            "
                                        >
                                            {
                                                benefit.description
                                            }
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* USE CASES                  */}
            {/* ========================= */}

            <section className="bg-surface-lowest py-24">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                            Use cases
                        </p>

                        <h2 className="text-headline-lg">
                            Designed around your workflow.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {product.useCases.map(
                            (useCase) => (
                                <article
                                    key={
                                        useCase.title
                                    }
                                    className="
                                        rounded-2xl
                                        border
                                        border-border
                                        bg-surface-low
                                        p-6
                                    "
                                >
                                    <h3 className="font-semibold">
                                        {
                                            useCase.title
                                        }
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            leading-6
                                            text-on-surface-variant
                                        "
                                    >
                                        {
                                            useCase.description
                                        }
                                    </p>
                                </article>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* FAQ                        */}
            {/* ========================= */}

            {product.faq.length > 0 && (
                <section className="py-24">
                    <div className="mx-auto max-w-3xl px-6">

                        <h2 className="mb-10 text-center text-headline-lg">
                            Frequently asked questions
                        </h2>

                        <div className="space-y-3">
                            {product.faq.map(
                                (item) => (
                                    <details
                                        key={
                                            item.question
                                        }
                                        className="
                                            group
                                            rounded-2xl
                                            border
                                            border-border
                                            bg-surface-low
                                            p-5
                                        "
                                    >
                                        <summary
                                            className="
                                                cursor-pointer
                                                list-none
                                                font-medium
                                                text-on-surface
                                            "
                                        >
                                            {
                                                item.question
                                            }
                                        </summary>

                                        <p
                                            className="
                                                mt-3
                                                text-sm
                                                leading-6
                                                text-on-surface-variant
                                            "
                                        >
                                            {
                                                item.answer
                                            }
                                        </p>
                                    </details>
                                )
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ========================= */}
            {/* CTA                        */}
            {/* ========================= */}

            <section className="py-24">
                <div
                    className="
                        mx-auto
                        max-w-4xl
                        rounded-3xl
                        border
                        border-primary/20
                        bg-primary/5
                        px-6
                        py-16
                        text-center
                        sm:px-12
                    "
                >
                    <h2 className="text-headline-lg">
                        {product.cta.headline}
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-xl
                            leading-7
                            text-on-surface-variant
                        "
                    >
                        {product.cta.description}
                    </p>

                    <Link
                        href={
                            product.cta.primaryHref
                        }
                        className="
                            gold-gradient
                            mt-8
                            inline-flex
                            min-h-12
                            items-center
                            gap-2
                            rounded-full
                            px-7
                            text-sm
                            font-semibold
                            text-[#1a1400]
                            transition
                            hover:-translate-y-0.5
                            hover:shadow-lg
                        "
                    >
                        {product.cta.primaryText}

                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}