import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCounterProduct, getRelatedProducts } from "@/data/productLookup";
import ProductDetailView from "@/components/ProductDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getCounterProduct(id);
  if (!product) return { title: "Counter Not Found | JDS Furniture" };
  return {
    title: `${product.title} (${product.code}) | JDS Furniture`,
    description: product.description || `Commercial & retail ${product.title} by JDS Furniture.`,
  };
}

export default async function CounterDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getCounterProduct(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  return <ProductDetailView product={product} relatedProducts={related} />;
}
