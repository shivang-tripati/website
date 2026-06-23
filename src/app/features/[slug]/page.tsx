import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/CTAFooter";
import { FeatureLandingPage } from "@/components/FeatureLandingPage";
import { getAllFeatureSlugs, getFeaturePage } from "@/lib/feature-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllFeatureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getFeaturePage(slug);

  if (!page) {
    return { title: "Feature Not Found" };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
    },
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getFeaturePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(page.structuredData) }}
      />
      <Navbar />
      <FeatureLandingPage page={page} />
      <Footer />
    </>
  );
}
