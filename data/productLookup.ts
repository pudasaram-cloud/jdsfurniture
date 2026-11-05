import { allTables, TableProduct } from "./tables";
import { allCupboards, CupboardProduct } from "./cupboards";
import { allCounters, CounterProduct } from "./counters";
import { offerProducts, OfferProduct } from "./offers";
import { FAQItem } from "./faqs";

export interface UnifiedProduct {
  id: string;
  title: string;
  code: string;
  price: string;
  originalPrice?: string;
  discountPercentage?: string;
  numericPrice: number;
  image: string;
  category: string;
  subcategory: string;
  itemType?: string;
  description?: string;
  inStock?: boolean;
  type: "tables" | "cupboards" | "counters";
  breadcrumbName: string;
  breadcrumbHref: string;
  faqs?: FAQItem[];
}

// Convert title to friendly title case if ALL CAPS
export function formatProductTitle(title: string): string {
  if (!title) return "Furniture Piece";
  // If it's already mixed case, keep it
  if (title !== title.toUpperCase()) return title;
  
  return title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getOfferProduct(idOrCode: string): UnifiedProduct | null {
  const decoded = decodeURIComponent(idOrCode).trim().toLowerCase();
  const found = offerProducts.find(
    (p) => p.id.toLowerCase() === decoded || p.code.toLowerCase() === decoded
  );

  if (!found) return null;

  const isCupboard = found.id === "off-4" || found.code.includes("BC");
  const type = isCupboard ? ("cupboards" as const) : ("tables" as const);
  const breadcrumbName = isCupboard ? "All Cupboards & Racks" : "All tables";
  const breadcrumbHref = isCupboard ? "/cupboards" : "/tables";

  return {
    id: found.id,
    title: formatProductTitle(found.title),
    code: found.code,
    price: found.offerPrice,
    originalPrice: found.originalPrice,
    discountPercentage: found.discountPercentage,
    numericPrice: parseInt(found.offerPrice.replace(/[^0-9]/g, "") || "0", 10),
    image: found.image,
    category: found.category,
    subcategory: found.category + (isCupboard ? " Cupboards" : " Tables"),
    description: `Special Promotional Offer (${found.discountPercentage}). Originally ${found.originalPrice}, now exclusively ${found.offerPrice}. Handcrafted signature piece.`,
    inStock: true,
    type,
    breadcrumbName,
    breadcrumbHref,
  };
}

export function getTableProduct(idOrCode: string): UnifiedProduct | null {
  const decoded = decodeURIComponent(idOrCode).trim().toLowerCase();
  
  // Check special offers first if applicable
  const foundOffer = getOfferProduct(idOrCode);
  if (foundOffer && foundOffer.type === "tables") return foundOffer;

  const found = allTables.find(
    (p) => p.id.toLowerCase() === decoded || p.code.toLowerCase() === decoded
  );

  if (!found) return null;

  return {
    ...found,
    title: formatProductTitle(found.title),
    type: "tables",
    breadcrumbName: "All tables",
    breadcrumbHref: "/tables",
  };
}

export function getCupboardProduct(idOrCode: string): UnifiedProduct | null {
  const decoded = decodeURIComponent(idOrCode).trim().toLowerCase();

  // Check special offers first if applicable
  const foundOffer = getOfferProduct(idOrCode);
  if (foundOffer && foundOffer.type === "cupboards") return foundOffer;

  const found = allCupboards.find(
    (p) =>
      p.id.toLowerCase() === decoded ||
      p.code.toLowerCase() === decoded ||
      p.id.toLowerCase().replace(/^[a-z]+-/, "") === decoded
  );

  if (!found) return null;

  return {
    ...found,
    title: formatProductTitle(found.title),
    type: "cupboards",
    breadcrumbName: "All Cupboards & Racks",
    breadcrumbHref: "/cupboards",
  };
}

export function getCounterProduct(idOrCode: string): UnifiedProduct | null {
  const decoded = decodeURIComponent(idOrCode).trim().toLowerCase();
  const found = allCounters.find(
    (p) => p.id.toLowerCase() === decoded || p.code.toLowerCase() === decoded
  );

  if (!found) return null;

  return {
    ...found,
    title: formatProductTitle(found.title),
    type: "counters",
    breadcrumbName: "All counters",
    breadcrumbHref: "/counters",
  };
}

export function getUnifiedProduct(
  idOrCode: string,
  preferredType?: "tables" | "cupboards" | "counters"
): UnifiedProduct | null {
  if (preferredType === "tables") {
    const p = getTableProduct(idOrCode);
    if (p) return p;
  } else if (preferredType === "cupboards") {
    const p = getCupboardProduct(idOrCode);
    if (p) return p;
  } else if (preferredType === "counters") {
    const p = getCounterProduct(idOrCode);
    if (p) return p;
  }

  // Fallback scan across all
  return (
    getTableProduct(idOrCode) ||
    getCupboardProduct(idOrCode) ||
    getCounterProduct(idOrCode) ||
    null
  );
}

export function getRelatedProducts(product: UnifiedProduct, count = 12): UnifiedProduct[] {
  let pool: UnifiedProduct[] = [];

  if (product.type === "tables") {
    pool = allTables
      .filter((p) => p.id !== product.id && p.code !== product.code)
      .map((p) => ({
        ...p,
        title: formatProductTitle(p.title),
        type: "tables" as const,
        breadcrumbName: "All tables",
        breadcrumbHref: "/tables",
      }));
  } else if (product.type === "cupboards") {
    pool = allCupboards
      .filter((p) => p.id !== product.id && p.code !== product.code)
      .map((p) => ({
        ...p,
        title: formatProductTitle(p.title),
        type: "cupboards" as const,
        breadcrumbName: "All Cupboards & Racks",
        breadcrumbHref: "/cupboards",
      }));
  } else {
    pool = allCounters
      .filter((p) => p.id !== product.id && p.code !== product.code)
      .map((p) => ({
        ...p,
        title: formatProductTitle(p.title),
        type: "counters" as const,
        breadcrumbName: "All counters",
        breadcrumbHref: "/counters",
      }));
  }

  // Prioritize same subcategory first
  const sameSubcategory = pool.filter((p) => p.subcategory === product.subcategory);
  const others = pool.filter((p) => p.subcategory !== product.subcategory);

  const combined = [...sameSubcategory, ...others];
  return combined.slice(0, count);
}
