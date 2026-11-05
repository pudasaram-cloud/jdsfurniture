import { FAQItem } from "../faqs";

export type TableCategory = "Home" | "Office";

export type HomeTableSubcategory =
  | "Dining Tables"
  | "Study Tables"
  | "Coffee Tables"
  | "Bedside Tables"
  | "Console Tables"
  | "Center Tables"
  | "Nesting Tables";

export type OfficeTableSubcategory =
  | "Executive Tables"
  | "Manager Tables"
  | "Officer Tables"
  | "Staff Tables"
  | "Meeting Tables"
  | "Computer Tables"
  | "Workstations"
  | "Security Tables";

export type TableSubcategory = HomeTableSubcategory | OfficeTableSubcategory;

export interface TableProduct {
  id: string;
  title: string;
  code: string;
  price: string;
  numericPrice: number;
  image: string;
  category: TableCategory;
  subcategory: TableSubcategory;
  description: string;
  inStock?: boolean;
  faqs?: FAQItem[];
}
