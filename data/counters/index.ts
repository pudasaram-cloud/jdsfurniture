export * from "./types";
export * from "./cashCounters";
export * from "./lowCounters";
export * from "./displayCounters";
export * from "./receptionCounters";
export * from "./serviceCounters";
export * from "./customCounters";

import { CounterProduct, CounterCategory, CounterSubcategory } from "./types";
import { cashCounters } from "./cashCounters";
import { lowCounters } from "./lowCounters";
import { displayCounters } from "./displayCounters";
import { receptionCounters } from "./receptionCounters";
import { serviceCounters } from "./serviceCounters";
import { customCounters } from "./customCounters";

export const COUNTER_MAIN_CATEGORIES: readonly (CounterCategory | "All")[] = [
  "All",
  "Retail",
  "Corporate",
  "Commercial",
  "Bespoke",
] as const;

export const COUNTER_SUBCATEGORIES: readonly CounterSubcategory[] = [
  "Cash Counters",
  "Low Counters",
  "Display Counters",
  "Reception Counters",
  "Service Counters",
  "Custom Counters",
] as const;

// Combined master list of all 70 counter products across categories
export const allCounters: CounterProduct[] = [
  ...cashCounters,
  ...lowCounters,
  ...displayCounters,
  ...receptionCounters,
  ...serviceCounters,
  ...customCounters,
];
