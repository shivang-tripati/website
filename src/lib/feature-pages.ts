import featurePagesData from "@/content/feature-pages.json";

export type FeaturePage = (typeof featurePagesData)[number];

export const featurePages = featurePagesData as FeaturePage[];

export function getFeaturePage(slug: string): FeaturePage | undefined {
  return featurePages.find((page) => page.slug === slug);
}

export function getAllFeatureSlugs(): string[] {
  return featurePages.map((page) => page.slug);
}
