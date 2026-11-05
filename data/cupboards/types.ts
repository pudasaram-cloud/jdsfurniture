import { FAQItem } from "../faqs";

export type CupboardCategory = "Home" | "Office";
export type CupboardItemType = "Cupboards" | "Racks";

export interface CupboardProduct {
  id: string;
  title: string;
  code: string;
  price: string;
  numericPrice: number;
  image: string;
  category: CupboardCategory;
  subcategory: string;
  itemType: CupboardItemType;
  description: string;
  inStock?: boolean;
  faqs?: FAQItem[];
}
