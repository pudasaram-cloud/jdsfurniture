import { FAQItem } from "../faqs";

export interface OfferProduct {
  id: string;
  title: string;
  code: string;
  originalPrice: string;
  offerPrice: string;
  discountPercentage: string;
  image: string;
  category: string;
  subcategory?: string;
  description?: string;
  inStock?: boolean;
  faqs?: FAQItem[];
}
