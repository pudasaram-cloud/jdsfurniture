import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCupboardProduct, getRelatedProducts } from "@/data/productLookup";
import ProductDetailView from "@/components/ProductDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getCupboardProduct(id);
  if (!product) return { title: "Cupboard Not Found | JDS Furniture" };
  return {
    title: `${product.title} (${product.code}) | JDS Furniture`,
    description: product.description || `Custom joinery ${product.title} by JDS Furniture.`,
  };
}

export default async function CupboardDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getCupboardProduct(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  return <ProductDetailView product={product} relatedProducts={related} />;
}
