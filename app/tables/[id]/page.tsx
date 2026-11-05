import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTableProduct, getRelatedProducts } from "@/data/productLookup";
import ProductDetailView from "@/components/ProductDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getTableProduct(id);
  if (!product) return { title: "Table Not Found | JDS Furniture" };
  return {
    title: `${product.title} (${product.code}) | JDS Furniture`,
    description: product.description || `Handcrafted ${product.title} by JDS Furniture.`,
  };
}

export default async function TableDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getTableProduct(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  return <ProductDetailView product={product} relatedProducts={related} />;
}
