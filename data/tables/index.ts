export * from "./types";
export * from "./homeTables";
export * from "./officeTables";

import { TableProduct, TableCategory, HomeTableSubcategory, OfficeTableSubcategory } from "./types";
import { homeTables } from "./homeTables";
import { officeTables } from "./officeTables";

export const TABLE_MAIN_CATEGORIES: readonly (TableCategory | "All")[] = ["All", "Home", "Office"] as const;

export const OFFICE_TABLE_SUBCATEGORIES: readonly OfficeTableSubcategory[] = [
  "Executive Tables",
  "Manager Tables",
  "Officer Tables",
  "Staff Tables",
  "Meeting Tables",
  "Computer Tables",
  "Workstations",
  "Security Tables",
] as const;

export const HOME_TABLE_SUBCATEGORIES: readonly HomeTableSubcategory[] = [
  "Dining Tables",
  "Study Tables",
  "Coffee Tables",
  "Center Tables",
  "Nesting Tables",
  "Console Tables",
  "Bedside Tables",
] as const;

// Combined master list of all Home & Office table products
export const allTables: TableProduct[] = [
  ...homeTables,
  ...officeTables,
];
