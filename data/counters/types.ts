import { FAQItem } from "../faqs";

export type CounterCategory = "Retail" | "Corporate" | "Commercial" | "Bespoke";

export type CounterSubcategory =
  | "Cash Counters"
  | "Low Counters"
  | "Display Counters"
  | "Reception Counters"
  | "Service Counters"
  | "Custom Counters";

export interface CounterProduct {
  id: string;
  title: string;
  code: string;
  price: string;
  numericPrice: number;
  image: string;
  category: CounterCategory;
  subcategory: CounterSubcategory;
  description: string;
  inStock?: boolean;
  faqs?: FAQItem[];
}
