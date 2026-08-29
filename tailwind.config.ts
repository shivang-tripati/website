// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Colors
            colors: {
                background: 'var(--surface-page)',
                foreground: 'var(--text-primary)',
                surface: {
                    page: 'var(--surface-page)',
                    section: 'var(--surface-section)',
                    card: 'var(--surface-card)',
                    elevated: 'var(--surface-elevated)',
                    low: 'var(--surface-low)',
                    high: 'var(--surface-high)',
                    lowest: 'var(--surface-lowest)',
                },
                primary: {
                    DEFAULT: 'var(--brand-primary)',
                    hover: 'var(--brand-primary-hover)',
                    active: 'var(--brand-primary-active)',
                    foreground: 'var(--brand-primary-foreground)',
                    container: 'var(--brand-primary-container)',
                },
                gold: {
                    DEFAULT: 'var(--brand-gold)',
                    hover: 'var(--brand-gold-hover)',
                    foreground: 'var(--brand-gold-foreground)',
                    container: 'var(--brand-gold-container)',
                },
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    muted: 'var(--text-muted)',
                    disabled: 'var(--text-disabled)',
                },
                border: {
                    DEFAULT: 'var(--border-default)',
                    subtle: 'var(--border-subtle)',
                    strong: 'var(--border-strong)',
                    interactive: 'var(--border-interactive)',
                },
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                danger: 'var(--color-danger)',
                info: 'var(--color-info)',
            },

            // Font Family
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
            },

            // Font Size
            fontSize: {
                'display-xl': '4.5rem',
                'display-lg': '3.75rem',
                'display-md': '3rem',
                'headline-xl': '2.25rem',
                'headline-lg': '1.875rem',
                'headline-md': '1.5rem',
                'headline-sm': '1.25rem',
                'title-lg': '1.125rem',
                title: '1rem',
                'title-sm': '0.875rem',
                'body-xl': '1.125rem',
                'body-lg': '1rem',
                body: '0.875rem',
                'body-sm': '0.8125rem',
                caption: '0.75rem',
                label: '0.875rem',
                overline: '0.6875rem',
            },

            // Line Height
            lineHeight: {
                display: '1.1',
                headline: '1.2',
                title: '1.3',
                body: '1.6',
                caption: '1.4',
            },

            // Letter Spacing
            letterSpacing: {
                tight: '-0.02em',
                normal: '0',
                wide: '0.04em',
                wider: '0.08em',
            },

            // Font Weight
            fontWeight: {
                regular: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
            },

            // Spacing (extend default)
            spacing: {
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '7': '1.75rem',
                '8': '2rem',
                '9': '2.5rem',
                '10': '3rem',
                '12': '4rem',
                '16': '6rem',
                '20': '8rem',
            },

            // Border Radius
            borderRadius: {
                xs: 'var(--radius-xs)',
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
                '2xl': 'var(--radius-2xl)',
                full: 'var(--radius-full)',
            },

            // Box Shadow
            boxShadow: {
                xs: 'var(--shadow-xs)',
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                xl: 'var(--shadow-xl)',
                'glow-blue': 'var(--shadow-glow-blue)',
                'glow-gold': 'var(--shadow-glow-gold)',
            },

            // Animation
            animation: {
                'fade-in': 'fade-in var(--duration-normal) var(--ease-standard) both',
                'fade-up': 'fade-up var(--duration-normal) var(--ease-standard) both',
                'fade-down': 'fade-down var(--duration-normal) var(--ease-standard) both',
                'scale-in': 'scale-in var(--duration-normal) var(--ease-spring) both',
                'slide-in': 'slide-in var(--duration-normal) var(--ease-standard) both',
                'bounce-in': 'bounce-in var(--duration-normal) var(--ease-spring) both',
                'shimmer': 'shimmer var(--duration-slow) var(--ease-standard) infinite',
                'pulse': 'pulse var(--duration-slower) var(--ease-standard) infinite',
                'spin': 'spin var(--duration-slower) var(--ease-standard) infinite',
                'hero-reveal': 'hero-reveal var(--duration-slow) var(--ease-standard) both',
            },

            // Keyframes
            keyframes: {
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(16px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-down': {
                    from: { opacity: '0', transform: 'translateY(-16px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.95)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                'slide-in': {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(0)' },
                },
                'bounce-in': {
                    '0%': { opacity: '0', transform: 'scale(0.8)' },
                    '60%': { opacity: '1', transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)' },
                },
                'shimmer': {
                    from: { backgroundPosition: '200% 0' },
                    to: { backgroundPosition: '-200% 0' },
                },
                'pulse': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                'spin': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                'hero-reveal': {
                    from: {
                        opacity: '0',
                        transform: 'scale(1.05) translateY(20px)',
                        filter: 'blur(8px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'scale(1) translateY(0)',
                        filter: 'blur(0)',
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;