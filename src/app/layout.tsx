import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sovereign — Enterprise Communication, Reimagined",
  description:
    "Transform your enterprise communication from a utility into a premium experience. The Sovereign Connection delivers enterprise power with consumer-grade grace.",
  keywords: [
    "enterprise communication",
    "business platform",
    "premium SaaS",
    "team collaboration",
  ],
  openGraph: {
    title: "Sovereign — Enterprise Communication, Reimagined",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <SmoothScrollProvider>
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
