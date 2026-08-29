export type Product = {
    id: string;
    name: string;
    shortName: string;
    description: string;
    href: string;
    icon: string;
    accent: string;
    external?: boolean;
};

export const products: Product[] = [
    {
        id: "dialer",
        name: "Dialer & IVR",
        shortName: "Dialer",
        description:
            "Cloud calling, IVR and agent-based communication.",
        href: "https://calls.agiliscommunications.com/",
        icon: "phone",
        accent: "blue",
        external: true,
    },

    {
        id: "voice",
        name: "Bulk Voice",
        shortName: "Voice",
        description:
            "Reach thousands of customers with automated voice calls.",
        href: "http://obd.agiliscommunications.com/OBDSEA/user",
        icon: "volume",
        accent: "emerald",
        external: true,
    },

    {
        id: "whatsapp",
        name: "Bulk WhatsApp",
        shortName: "WhatsApp",
        description:
            "Engage customers at scale through WhatsApp messaging.",
        href: "https://www.smswt.in/sign-in",
        icon: "message",
        accent: "green",
        external: true,
    },

    {
        id: "sms",
        name: "Bulk SMS",
        shortName: "SMS",
        description:
            "Send reliable transactional and promotional SMS campaigns.",
        href: "http://sirfsms.com/sms/login.aspx",
        icon: "send",
        accent: "amber",
        external: true,
    },
];