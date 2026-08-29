"use client";

import { useRef, useState } from "react";
import {
    motion,
    useInView,
    useReducedMotion,
    type Variants,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
    PhoneCall,
    Users,
    Settings2,
    BarChart3,
    ShieldCheck,
    Headphones,
    Infinity as InfinityIcon,
    MessageSquare,
    Radio,
    CreditCard,
    LayoutDashboard,
    GitBranch,
    Bot,
    Clock,
    Lock,
    CheckCircle,
    ChevronRight,
    Sparkles,
    Star,
    Rocket,
    Target,
    Gem,
} from "lucide-react";

import { MagneticButton } from "./magic-button";
import { Button } from "./ui/button";

// ============================================================================
// TYPES
// ============================================================================

type FeatureBadge = "1 Month" | "Lifetime";

type Feature = {
    label: string;
    badge?: FeatureBadge;
    highlight?: boolean;
};

type PlanAccent = "emerald" | "blue" | "gold" | "purple";

type Plan = {
    name: string;
    subtitle: string;
    price: string;
    priceLabel: string;
    cta: string;
    accent: PlanAccent;
    popular?: boolean;
    features: Feature[];
    icon: LucideIcon;
};

type ProductType = "bulk" | "dialer";

type InfoBadge = {
    icon: LucideIcon;
    text: string;
};

type TrustItemData = {
    icon: LucideIcon;
    title: string;
    desc: string;
};

// ============================================================================
// PRODUCT DATA
// ============================================================================

const BULK_PLANS: Plan[] = [
    {
        name: "Starter",
        subtitle: "Perfect for Small Campaigns",
        price: "₹6,499",
        priceLabel: "One Time Payment",
        cta: "Buy Now",
        accent: "emerald",
        icon: Rocket,
        features: [
            { label: "10,000 Bulk Voice Calls", badge: "Lifetime" },
            { label: "5,000 Bulk WhatsApp", badge: "Lifetime" },
            { label: "Virtual & Button WhatsApp" },
            { label: "Report & Dashboard" },
            { label: "Real-time Analytics" },
            {
                label: "Bulk Only Plan",
                highlight: true,
            },
        ],
    },
    {
        name: "Growth",
        subtitle: "Best for Growing Businesses",
        price: "₹18,999",
        priceLabel: "One Time Payment",
        cta: "Buy Now",
        accent: "blue",
        popular: true,
        icon: Target,
        features: [
            { label: "100,000 Bulk Voice Calls", badge: "Lifetime" },
            { label: "25,000 Bulk WhatsApp", badge: "Lifetime" },
            { label: "Virtual & Button WhatsApp" },
            { label: "Report & Dashboard" },
            { label: "Real-time Analytics" },
            { label: "Reverse API Access" },
            {
                label: "Bulk Only Plan",
                highlight: true,
            },
        ],
    },
    {
        name: "Enterprise",
        subtitle: "Built for Large Scale Campaigns",
        price: "₹69,999",
        priceLabel: "One Time Payment",
        cta: "Contact Sales",
        accent: "gold",
        icon: Gem,
        features: [
            {
                label: "Up to 500,000 Bulk Voice Calls",
                badge: "Lifetime",
            },
            {
                label: "200,000 Bulk WhatsApp",
                badge: "Lifetime",
            },
            { label: "Virtual & Button WhatsApp" },
            { label: "Report & Dashboard" },
            { label: "Real-time Analytics" },
            { label: "Reverse API Access" },
            { label: "Seamless Integration" },
            {
                label: "Bulk Only Plan",
                highlight: true,
            },
        ],
    },
];

const DIALER_PLANS: Plan[] = [
    {
        name: "Starter",
        subtitle: "Perfect for Small Teams",
        price: "₹4,999",
        priceLabel: "One Time",
        cta: "Get Started",
        accent: "emerald",
        icon: Rocket,
        features: [
            { label: "Up to 5 Agents" },
            { label: "IVR", badge: "1 Month" },
            { label: "Manual Dialer", badge: "1 Month" },
            { label: "5,000 Bulk Voice Calls", badge: "Lifetime" },
            { label: "Dashboard" },
            { label: "1 Admin Account" },
        ],
    },
    {
        name: "Growth",
        subtitle: "Best for Growing Businesses",
        price: "₹14,999",
        priceLabel: "One Time",
        cta: "Get Started",
        accent: "blue",
        popular: true,
        icon: Target,
        features: [
            { label: "Up to 5 Agents" },
            { label: "IVR", badge: "1 Month" },
            { label: "Auto Dialer", badge: "1 Month" },
            { label: "Manual Dialer", badge: "1 Month" },
            {
                label: "10,000 Bulk Voice Calls",
                badge: "Lifetime",
            },
            {
                label: "5,000 Bulk WhatsApp",
                badge: "Lifetime",
            },
            { label: "CRM" },
            { label: "1 Admin Account" },
        ],
    },
    {
        name: "Enterprise",
        subtitle: "Built for Scale & Performance",
        price: "₹39,999",
        priceLabel: "One Time",
        cta: "Contact Sales",
        accent: "gold",
        icon: Gem,
        features: [
            { label: "Up to 10 Agents" },
            { label: "IVR", badge: "1 Month" },
            { label: "Auto Dialer", badge: "1 Month" },
            { label: "Manual Dialer", badge: "1 Month" },
            {
                label: "25,000 Bulk Voice Calls",
                badge: "Lifetime",
            },
            {
                label: "15,000 Bulk WhatsApp",
                badge: "Lifetime",
            },
            { label: "CRM, HRMS, API" },
            { label: "1 Admin Account" },
        ],
    },
];

// ============================================================================
// ANIMATION
// ============================================================================

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// ============================================================================
// HELPERS
// ============================================================================

function getIconForLabel(label: string): LucideIcon {
    const lower = label.toLowerCase();

    if (/ivr|dialer|call/i.test(lower)) return PhoneCall;
    if (/agent|user|admin/i.test(lower)) return Users;
    if (/crm|hrms|api|integration/i.test(lower)) return Settings2;
    if (/bulk|whatsapp|voice/i.test(lower)) return MessageSquare;
    if (/report|dashboard|analytics/i.test(lower)) {
        return LayoutDashboard;
    }
    if (/reverse/i.test(lower)) return GitBranch;
    if (/lifetime/i.test(lower)) return InfinityIcon;
    if (/virtual|button/i.test(lower)) return Radio;
    if (/seamless/i.test(lower)) return Bot;

    return CheckCircle;
}

// ============================================================================
// VALIDITY BADGE
// ============================================================================

function ValidityBadge({
    value,
}: {
    value?: FeatureBadge;
}) {
    if (!value) return null;

    const isLifetime = value === "Lifetime";

    return (
        <span
            className={[
                "inline-flex shrink-0 items-center gap-1",
                "rounded-full border px-2 py-1",
                "text-[10px] font-bold uppercase tracking-wide",
                "whitespace-nowrap",
                isLifetime
                    ? "border-gold/20 bg-gold-muted text-gold"
                    : "border-primary/20 bg-primary-container text-primary",
            ].join(" ")}
        >
            {isLifetime && <InfinityIcon size={10} aria-hidden="true" />}
            {value}
        </span>
    );
}

// ============================================================================
// TRUST ITEM
// ============================================================================

function TrustItem({
    icon: Icon,
    title,
    desc,
}: TrustItemData) {
    return (
        <article
            className={[
                "group flex h-full items-start gap-4",
                "rounded-2xl border border-border",
                "bg-surface-low p-5",
                "transition-colors duration-200",
                "hover:border-strong hover:bg-surface-elevated",
            ].join(" ")}
        >
            <div
                className={[
                    "flex h-11 w-11 shrink-0 items-center justify-center",
                    "rounded-xl bg-primary-container",
                    "transition-colors duration-200",
                    "group-hover:bg-primary/20",
                ].join(" ")}
                aria-hidden="true"
            >
                <Icon
                    size={20}
                    strokeWidth={1.8}
                    className="text-primary"
                />
            </div>

            <div className="min-w-0">
                <h3 className="mb-1 text-sm font-semibold text-on-surface">
                    {title}
                </h3>

                <p className="text-xs leading-relaxed text-on-surface-variant">
                    {desc}
                </p>
            </div>
        </article>
    );
}

// ============================================================================
// PRODUCT TOGGLE
// ============================================================================

function ProductToggle({
    active,
    onChange,
}: {
    active: ProductType;
    onChange: (type: ProductType) => void;
}) {
    const items: {
        value: ProductType;
        label: string;
        Icon: LucideIcon;
    }[] = [
            {
                value: "bulk",
                label: "Bulk Services",
                Icon: BarChart3,
            },
            {
                value: "dialer",
                label: "Call Center",
                Icon: PhoneCall,
            },
        ];

    return (
        <fieldset className="w-full max-w-md">
            <legend className="sr-only">
                Select a product category
            </legend>

            <div
                className={[
                    "grid grid-cols-2 gap-1",
                    "rounded-2xl border border-border",
                    "bg-surface-low p-1",
                    "shadow-sm",
                ].join(" ")}
            >
                {items.map(({ value, label, Icon }) => {
                    const selected = active === value;

                    return (
                        <button
                            key={value}
                            type="button"
                            onClick={() => onChange(value)}
                            aria-pressed={selected}
                            className={[
                                "relative min-h-12 rounded-xl px-4 py-3",
                                "text-sm font-semibold",
                                "transition-all duration-200",
                                "focus-visible:outline-none",
                                "focus-visible:ring-2",
                                "focus-visible:ring-primary",
                                "focus-visible:ring-offset-2",
                                "focus-visible:ring-offset-background",
                                selected
                                    ? "bg-primary text-primary-foreground shadow-glow-blue"
                                    : [
                                        "text-on-surface-variant",
                                        "hover:bg-ghost hover:text-on-surface",
                                    ].join(" "),
                            ].join(" ")}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Icon
                                    size={16}
                                    strokeWidth={2}
                                    aria-hidden="true"
                                />
                                <span>{label}</span>
                            </span>
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}

// ============================================================================
// FEATURE LIST
// ============================================================================

function FeatureList({
    features,
    reducedMotion,
}: {
    features: Feature[];
    reducedMotion: boolean;
}) {
    return (
        <ul className="space-y-3">
            {features.map((feature, index) => {
                const Icon = getIconForLabel(feature.label);

                return (
                    <motion.li
                        key={`${feature.label}-${index}`}
                        initial={
                            reducedMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: -6,
                                }
                        }
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={
                            reducedMotion
                                ? { duration: 0 }
                                : {
                                    delay: index * 0.03,
                                    duration: 0.25,
                                }
                        }
                        className={[
                            "flex items-start gap-3",
                            feature.highlight
                                ? "rounded-xl bg-primary-container/60 px-3 py-2.5"
                                : "",
                        ].join(" ")}
                    >
                        <span
                            className={[
                                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center",
                                feature.highlight
                                    ? "text-primary"
                                    : "text-on-surface-variant",
                            ].join(" ")}
                            aria-hidden="true"
                        >
                            <Icon size={15} strokeWidth={2} />
                        </span>

                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <span
                                    className={[
                                        "text-sm leading-5",
                                        feature.highlight
                                            ? "font-semibold text-primary"
                                            : "text-on-surface",
                                    ].join(" ")}
                                >
                                    {feature.label}
                                </span>

                                <ValidityBadge
                                    value={feature.badge}
                                />
                            </div>
                        </div>
                    </motion.li>
                );
            })}
        </ul>
    );
}

// ============================================================================
// PRICING CARD
// ============================================================================

function PricingCard({
    plan,
    index,
    isBulk,
    reducedMotion,
}: {
    plan: Plan;
    index: number;
    isBulk: boolean;
    reducedMotion: boolean;
}) {
    const Icon = plan.icon;
    const isPopular = Boolean(plan.popular);
    const isContactSales = plan.cta === "Contact Sales";

    return (
        <motion.article
            initial={
                reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 24,
                    }
            }
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: "-40px",
            }}
            transition={
                reducedMotion
                    ? { duration: 0 }
                    : {
                        delay: index * 0.08,
                        duration: 0.5,
                        ease: "easeOut",
                    }
            }
            className={[
                "relative flex",
                isPopular ? "lg:-mt-4 lg:mb-4" : "",
            ].join(" ")}
        >
            <div
                className={[
                    "relative flex w-full flex-col",
                    "rounded-3xl border p-6 sm:p-7",
                    "transition-[border-color,box-shadow,background-color]",
                    "duration-200",
                    isPopular
                        ? [
                            "border-primary/35",
                            "bg-surface-elevated",
                            "shadow-glow-blue",
                        ].join(" ")
                        : [
                            "border-border",
                            "bg-surface-low",
                            "hover:border-strong",
                            "hover:bg-surface-elevated",
                            "hover:shadow-md",
                        ].join(" "),
                ].join(" ")}
            >
                {isPopular && (
                    <div className="absolute left-6 top-0 z-10 -translate-y-1/2">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold text-gold-foreground shadow-glow-gold">
                            <Star
                                size={12}
                                fill="currentColor"
                                aria-hidden="true"
                            />
                            Most Popular
                        </div>
                    </div>
                )}

                {/* Plan icon */}
                <div
                    className={[
                        "mb-5 flex h-14 w-14 items-center justify-center",
                        "rounded-2xl",
                        isPopular
                            ? "bg-primary text-white shadow-glow-blue"
                            : "bg-primary-container text-primary",
                    ].join(" ")}
                    aria-hidden="true"
                >
                    <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Header */}
                <header className="mb-6">
                    <h3 className="text-xl font-bold tracking-tight text-on-surface">
                        {plan.name}
                    </h3>

                    <p className="mt-1.5 text-sm leading-5 text-on-surface-variant">
                        {plan.subtitle}
                    </p>
                </header>

                {/* Price */}
                <div className="mb-6">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="text-4xl font-extrabold tracking-tight text-on-surface sm:text-[2.65rem]">
                            {plan.price}
                        </span>

                        <span className="text-xs font-medium text-on-surface-variant sm:text-sm">
                            {plan.priceLabel}
                        </span>
                    </div>

                    {isBulk && plan.name === "Enterprise" && (
                        <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-on-surface-variant">
                            <Sparkles
                                size={13}
                                className="mt-0.5 shrink-0 text-gold"
                                aria-hidden="true"
                            />
                            <span>
                                Custom quotes available for higher
                                volumes.
                            </span>
                        </p>
                    )}
                </div>

                {/* CTA */}
                {/* CTA */}
                <div className="mb-7">
                    <MagneticButton
                        strength={isPopular ? 0.1 : 0.06}
                    >
                        <Button
                            type="button"
                            variant={
                                isContactSales
                                    ? "outline"
                                    : isPopular
                                        ? "gold"
                                        : "primary"
                            }
                            size="lg"
                            className="w-full"
                            rightIcon={
                                <ChevronRight
                                    size={17}
                                    strokeWidth={2}
                                    aria-hidden="true"
                                    className="
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
                                />
                            }
                        >
                            {plan.cta}
                        </Button>
                    </MagneticButton>
                </div>


                {/* Divider */}
                <div
                    className="mb-6 h-px bg-border"
                    aria-hidden="true"
                />

                {/* Features */}
                <div className="flex-1">
                    <h4 className="sr-only">
                        {plan.name} plan features
                    </h4>

                    <FeatureList
                        features={plan.features}
                        reducedMotion={reducedMotion}
                    />
                </div>
            </div>
        </motion.article>
    );
}

// ============================================================================
// MAIN PRICING SECTION
// ============================================================================

export function PricingSection() {
    const [productType, setProductType] =
        useState<ProductType>("bulk");

    const ref = useRef<HTMLElement | null>(null);

    const inView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    const reducedMotion = useReducedMotion() ?? false;

    const isBulk = productType === "bulk";

    const plans = isBulk ? BULK_PLANS : DIALER_PLANS;

    const infoBadges: InfoBadge[] = isBulk
        ? [
            {
                icon: InfinityIcon,
                text: "All credits come with Lifetime Validity",
            },
            {
                icon: CreditCard,
                text: "One time payment, use forever",
            },
            {
                icon: Radio,
                text: "Bulk Only Plan",
            },
        ]
        : [
            {
                icon: Clock,
                text: "IVR & Dialer – 1 Month Validity",
            },
            {
                icon: InfinityIcon,
                text: "Bulk Voice Call – Lifetime Validity",
            },
            {
                icon: PhoneCall,
                text: "Call Center Solution",
            },
        ];

    const trustItems: TrustItemData[] = isBulk
        ? [
            {
                icon: InfinityIcon,
                title: "Lifetime Validity",
                desc: "Use anytime, with no expiry.",
            },
            {
                icon: ShieldCheck,
                title: "100% Reliable",
                desc: "High delivery rates and dependable uptime.",
            },
            {
                icon: CreditCard,
                title: "Cost Effective",
                desc: "One-time payment with long-term value.",
            },
            {
                icon: Headphones,
                title: "Dedicated Support",
                desc: "Expert support whenever you need it.",
            },
            {
                icon: Lock,
                title: "Secure & Compliant",
                desc: "Your business data stays protected.",
            },
        ]
        : [
            {
                icon: ShieldCheck,
                title: "Enterprise Grade Security",
                desc: "Secure infrastructure built for scale.",
            },
            {
                icon: ShieldCheck,
                title: "Secure & Reliable",
                desc: "Resilient systems designed for uptime.",
            },
            {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Support across phone, chat and email.",
            },
            {
                icon: Settings2,
                title: "Easy Integration",
                desc: "API and third-party integrations ready.",
            },
        ];

    return (
        <section
            ref={ref}
            id="pricing"
            aria-labelledby="pricing-title"
            className="overflow-hidden bg-background py-16 sm:py-20 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* =========================================================
                    HEADER
                ========================================================== */}
                <motion.header
                    initial={
                        reducedMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 20,
                            }
                    }
                    animate={
                        reducedMotion || inView
                            ? {
                                opacity: 1,
                                y: 0,
                            }
                            : undefined
                    }
                    variants={fadeUpVariants}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-container px-4 py-1.5 text-sm font-semibold text-primary">
                        <Sparkles
                            size={14}
                            aria-hidden="true"
                        />
                        Pricing
                    </div>

                    <h2
                        id="pricing-title"
                        className="text-display-md text-balance font-extrabold tracking-tight"
                    >
                        Choose the Right Plan for{" "}
                        <span className="text-primary">
                            Your Business
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-on-surface-variant sm:text-lg">
                        {isBulk
                            ? "Powerful bulk communication with lifetime credits — no expiry, ever."
                            : "Enterprise-grade call center and dialer platform designed to scale with your business."}
                    </p>

                    {/* Product selector */}
                    <div className="mt-8 flex justify-center">
                        <ProductToggle
                            active={productType}
                            onChange={setProductType}
                        />
                    </div>
                </motion.header>

                {/* =========================================================
                    INFO BADGES
                ========================================================== */}
                <motion.div
                    initial={
                        reducedMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 10,
                            }
                    }
                    animate={
                        reducedMotion || inView
                            ? {
                                opacity: 1,
                                y: 0,
                            }
                            : undefined
                    }
                    transition={
                        reducedMotion
                            ? { duration: 0 }
                            : {
                                delay: 0.1,
                                duration: 0.4,
                            }
                    }
                    className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5"
                    aria-label="Plan information"
                >
                    {infoBadges.map(
                        ({ icon: Icon, text }) => (
                            <div
                                key={text}
                                className={[
                                    "inline-flex items-center gap-2",
                                    "rounded-full border border-border",
                                    "bg-surface-low px-3.5 py-2",
                                    "text-xs font-medium sm:text-sm",
                                ].join(" ")}
                            >
                                <Icon
                                    size={14}
                                    className="shrink-0 text-gold"
                                    aria-hidden="true"
                                />

                                <span className="text-on-surface-variant">
                                    {text}
                                </span>
                            </div>
                        )
                    )}
                </motion.div>

                {/* =========================================================
                    PRICING GRID
                ========================================================== */}
                <div
                    className={[
                        "mt-10 grid items-stretch gap-5",
                        "md:grid-cols-2",
                        "lg:mt-14 lg:grid-cols-3 lg:gap-6",
                    ].join(" ")}
                >
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={`${productType}-${plan.name}`}
                            plan={plan}
                            index={index}
                            isBulk={isBulk}
                            reducedMotion={reducedMotion}
                        />
                    ))}
                </div>

                {/* =========================================================
                    TRUST / VALUE PROPOSITION
                ========================================================== */}
                <motion.div
                    initial={
                        reducedMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 12,
                            }
                    }
                    animate={
                        reducedMotion || inView
                            ? {
                                opacity: 1,
                                y: 0,
                            }
                            : undefined
                    }
                    transition={
                        reducedMotion
                            ? { duration: 0 }
                            : {
                                delay: 0.2,
                                duration: 0.5,
                            }
                    }
                    className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
                >
                    {trustItems
                        .slice(0, 4)
                        .map((item) => (
                            <TrustItem
                                key={item.title}
                                {...item}
                            />
                        ))}
                </motion.div>

                {/* Extra trust item */}
                {isBulk && trustItems.length > 4 && (
                    <motion.div
                        initial={
                            reducedMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 12,
                                }
                        }
                        animate={
                            reducedMotion || inView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : undefined
                        }
                        transition={
                            reducedMotion
                                ? { duration: 0 }
                                : {
                                    delay: 0.3,
                                    duration: 0.5,
                                }
                        }
                        className="mt-4 lg:max-w-[calc(25%-0.75rem)]"
                    >
                        <TrustItem {...trustItems[4]} />
                    </motion.div>
                )}

                {/* =========================================================
                    BOTTOM CTA
                ========================================================== */}
                <motion.div
                    initial={
                        reducedMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 12,
                            }
                    }
                    animate={
                        reducedMotion || inView
                            ? {
                                opacity: 1,
                                y: 0,
                            }
                            : undefined
                    }
                    transition={
                        reducedMotion
                            ? { duration: 0 }
                            : {
                                delay: 0.35,
                                duration: 0.5,
                            }
                    }
                    className="mt-10 text-center lg:mt-12"
                >
                    <p className="text-sm text-on-surface-variant">
                        Need a custom plan?{" "}
                        <a
                            href="#contact"
                            className={[
                                "inline-flex items-center gap-1",
                                "font-semibold text-primary",
                                "underline-offset-4",
                                "hover:underline",
                                "focus-visible:outline-none",
                                "focus-visible:ring-2",
                                "focus-visible:ring-primary",
                                "focus-visible:ring-offset-2",
                                "focus-visible:ring-offset-background",
                                "rounded-sm",
                            ].join(" ")}
                        >
                            Contact our sales team
                            <ChevronRight
                                size={14}
                                aria-hidden="true"
                            />
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default PricingSection;