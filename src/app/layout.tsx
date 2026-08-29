import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import TawkTo from "@/components/tawk-to";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACS — Enterprise Communication, Reimagined",

  description:
    "Transform your enterprise communication from a utility into a premium experience. The ACS Connection delivers enterprise power with consumer-grade grace.",

  keywords: [
    "enterprise communication",
    "business platform",
    "premium SaaS",
    "team collaboration",
  ],

  openGraph: {
    title: "ACS — Enterprise Communication, Reimagined",
    description:
      "Enterprise power, delivered with consumer-grade grace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body
        className="
          min-h-full
          flex
          flex-col
          bg-background
          text-foreground
        "
        style={{
          fontFamily:
            "var(--font-inter), system-ui, sans-serif",
        }}
      >
        <SmoothScrollProvider>
          <ScrollProgress />

          {children}

          {/* Global customer support */}
          <TawkTo />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}