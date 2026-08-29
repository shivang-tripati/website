import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/CTAFooter";
import { ProductLandingPage } from "@/components/ProductLandingPage";

import {
    getAllProductSlugs,
    getProductPage,
} from "@/lib/product-pages";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getAllProductSlugs().map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const product = getProductPage(slug);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: product.metaTitle,

        description:
            product.metaDescription,

        openGraph: {
            title: product.metaTitle,

            description:
                product.metaDescription,

            type: "website",

            url:
                `/products/${product.slug}`,
        },

        twitter: {
            card: "summary_large_image",

            title:
                product.metaTitle,

            description:
                product.metaDescription,
        },

        alternates: {
            canonical:
                `/products/${product.slug}`,
        },
    };
}

export default async function ProductPage({
    params,
}: PageProps) {
    const { slug } = await params;


    console.log("slug", slug);

    const product = getProductPage(slug);

    console.log("product", product);

    if (!product) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        product.structuredData
                    ),
                }}
            />

            <Navbar />

            <ProductLandingPage
                product={product}
            />

            <Footer />
        </>
    );
}