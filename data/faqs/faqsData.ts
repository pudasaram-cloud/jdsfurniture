import { FAQItem } from "./types";

/**
 * Default FAQs displayed across product detail pages if no specific ones are defined.
 */
export const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "material",
    question: "What material is this furniture made of?",
    answer:
      "Crafted from premium commercial-grade melamine laminated boards, reinforced powder-coated steel framework, and impact-resistant PVC edge banding for long-lasting durability.",
  },
  {
    id: "customization",
    question: "Can I customize the dimensions, colors, or finishes?",
    answer:
      "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can tailor the length, height, depth, color combination, and layout to match your exact floor plan.",
  },
  {
    id: "assembly",
    question: "Is assembly required upon delivery?",
    answer:
      "Yes, minor assembly may be required. Our dedicated delivery and installation team provides complimentary on-site professional assembly and placement.",
  },
  {
    id: "cleaning",
    question: "How do I clean and maintain the surface?",
    answer:
      "Simply wipe down with a soft, damp microfiber cloth and mild soap. The non-porous melamine surface is stain, moisture, and scratch-resistant under normal usage.",
  },
  {
    id: "images",
    question: "Can I request more high-resolution photos and color finish samples?",
    answer:
      "Yes! Tap the 'Contact whatsapp' or 'Request more images' button to message us directly. We will share live workshop photos, 3D renders, and material swatches.",
  },
];

/**
 * Empty fallback record for backwards compatibility.
 */
export const CATEGORY_FAQS: Record<string, FAQItem[]> = {};

/**
 * Retrieves the appropriate FAQs for any product.
 * Returns the product's unique FAQs, backfilling with DEFAULT_FAQS if ever fewer than 5.
 */
export function getProductFaqs(product?: {
  id?: string;
  code?: string;
  category?: string;
  subcategory?: string;
  type?: string;
  title?: string;
  faqs?: FAQItem[];
}): FAQItem[] {
  if (product?.faqs && product.faqs.length >= 5) {
    return product.faqs;
  }

  const baseFaqs = product?.faqs ? [...product.faqs] : [];
  for (const item of DEFAULT_FAQS) {
    if (baseFaqs.length >= 5) break;
    const isDuplicate = baseFaqs.some(
      (f) =>
        f.id === item.id ||
        f.question.trim().toLowerCase() === item.question.trim().toLowerCase()
    );
    if (!isDuplicate) {
      baseFaqs.push(item);
    }
  }

  return baseFaqs.length > 0 ? baseFaqs : DEFAULT_FAQS;
}
