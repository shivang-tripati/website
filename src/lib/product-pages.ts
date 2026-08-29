import type { LucideIcon } from "lucide-react";
import {
    PhoneCall,
    Bot,
    MessageSquare,
    BarChart3,
    Users,
    ShieldCheck,
    Zap,
    Globe,
} from "lucide-react";

export interface ProductFeature {
    title: string;
    description: string;
    icon?: LucideIcon;
}

export interface ProductUseCase {
    title: string;
    description: string;
}

export interface ProductFAQ {
    question: string;
    answer: string;
}

export interface ProductPage {
    slug: string;

    name: string;
    shortName: string;

    category: string;

    metaTitle: string;
    metaDescription: string;

    hero: {
        eyebrow: string;
        headline: string;
        subheadline: string;
        primaryCta: string;
        primaryCtaHref: string;
        secondaryCta?: string;
        secondaryCtaHref?: string;
    };

    overview: {
        headline: string;
        description: string;
    };

    features: ProductFeature[];

    benefits: {
        title: string;
        description: string;
    }[];

    useCases: ProductUseCase[];

    integrations?: string[];

    faq: ProductFAQ[];

    cta: {
        headline: string;
        description: string;
        primaryText: string;
        primaryHref: string;
    };

    structuredData: Record<string, unknown>;
}




const products: ProductPage[] = [
    {
        slug: "dialer-ivr",

        name: "Enterprise Dialer & IVR",
        shortName: "Dialer & IVR",

        category: "Voice Communication",

        metaTitle:
            "Enterprise Dialer & IVR Platform | ACS",

        metaDescription:
            "Powerful cloud dialer and IVR solutions for sales teams, support teams and enterprise communication workflows.",

        hero: {
            eyebrow: "Enterprise Voice Platform",

            headline:
                "Powerful calling. Intelligent conversations.",

            subheadline:
                "Connect your teams and customers with enterprise-grade dialers, IVR workflows, call management and real-time visibility.",

            primaryCta: "Talk to an Expert",
            primaryCtaHref: "/contact",

            secondaryCta: "Access Dialer",
            secondaryCtaHref:
                "https://calls.agiliscommunications.com",
        },

        overview: {
            headline:
                "Everything your team needs to communicate at scale.",

            description:
                "ACS Dialer & IVR brings outbound calling, inbound call routing, IVR automation, agent management and analytics together in one powerful communication platform.",
        },

        features: [
            {
                title: "Power Dialer",
                description:
                    "Connect agents with customers faster using intelligent outbound calling workflows.",
                icon: PhoneCall,
            },
            {
                title: "Interactive Voice Response",
                description:
                    "Build flexible IVR journeys that automatically route customers to the right destination.",
                icon: Bot,
            },
            {
                title: "Call Analytics",
                description:
                    "Understand call performance with actionable reporting and real-time visibility.",
                icon: BarChart3,
            },
            {
                title: "Agent Management",
                description:
                    "Manage teams, queues, permissions and calling workflows from one place.",
                icon: Users,
            },
            {
                title: "Enterprise Security",
                description:
                    "Keep communication workflows protected with enterprise-ready controls.",
                icon: ShieldCheck,
            },
            {
                title: "API Ready",
                description:
                    "Integrate voice communication into your existing applications and workflows.",
                icon: Zap,
            },
        ],

        benefits: [
            {
                title: "Increase agent productivity",
                description:
                    "Reduce manual dialing and let agents focus on meaningful conversations.",
            },
            {
                title: "Improve customer experience",
                description:
                    "Route every caller through intelligent workflows designed around their needs.",
            },
            {
                title: "Gain operational visibility",
                description:
                    "Monitor performance and identify opportunities through actionable analytics.",
            },
            {
                title: "Scale without complexity",
                description:
                    "Expand your communication infrastructure without rebuilding your systems.",
            },
        ],

        useCases: [
            {
                title: "Sales teams",
                description:
                    "Accelerate outbound campaigns and help sales teams connect with more prospects.",
            },
            {
                title: "Customer support",
                description:
                    "Create structured inbound call experiences and intelligent routing.",
            },
            {
                title: "Enterprise operations",
                description:
                    "Connect distributed teams through centralized communication infrastructure.",
            },
        ],

        integrations: [
            "CRM",
            "REST APIs",
            "Webhooks",
            "Cloud applications",
        ],

        faq: [
            {
                question:
                    "Can ACS integrate with our existing CRM?",

                answer:
                    "Yes. ACS is designed to integrate with existing business systems through APIs and webhooks.",
            },
            {
                question:
                    "Can we configure custom IVR workflows?",

                answer:
                    "Yes. IVR workflows can be designed around your business and routing requirements.",
            },
            {
                question:
                    "Is the platform suitable for large teams?",

                answer:
                    "The platform is designed for scalable enterprise communication workflows.",
            },
        ],

        cta: {
            headline:
                "Ready to transform your business communication?",

            description:
                "Talk to our team about building the right communication workflow for your organization.",

            primaryText: "Talk to an Expert",
            primaryHref: "/contact",
        },

        structuredData: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",

            name: "ACS Enterprise Dialer & IVR",

            applicationCategory:
                "BusinessApplication",

            description:
                "Enterprise dialer and IVR platform for business communication.",

            url:
                "https://agiliscommunications.com/products/dialer-ivr",
        },
    },

    // Add the other products here...
];

export function getAllProductSlugs() {
    return products.map((product) => product.slug);
}

export function getProductPage(slug: string) {
    return products.find(
        (product) => product.slug === slug
    );
}

export function getAllProducts() {
    return products;
}