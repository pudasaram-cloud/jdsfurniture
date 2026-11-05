export * from "./types";
export * from "./office";
export * from "./home";

import { CupboardProduct, CupboardCategory, CupboardItemType } from "./types";
import {
  officeProducts,
  officeCupboards,
  fileCupboards,
  staffLockers,
  officeHelmetRacks,
  officeShoeRacks,
} from "./office";

import {
  homeProducts,
  pantryCupboards,
  kitchenCupboards,
  bedroomCupboards,
  homeStorageCupboards,
  kitchenRacks,
  pantryRacks,
  bookshelves,
  homeShoeRacks,
  homeHelmetRacks,
  wallRacks,
} from "./home";

export const CUPBOARD_MAIN_CATEGORIES: readonly (CupboardCategory | "All")[] = [
  "All",
  "Home",
  "Office",
] as const;

export const CUPBOARD_TYPE_FILTER: readonly ("All Types" | CupboardItemType)[] = [
  "All Types",
  "Cupboards",
  "Racks",
] as const;

export const OFFICE_CUPBOARDS_LIST = [
  "Office Cupboards",
  "File Cupboards",
  "Staff Lockers",
] as const;

export const OFFICE_RACKS_LIST = [
  "Helmet Racks",
  "Shoe Racks",
] as const;

export const HOME_CUPBOARDS_LIST = [
  "Pantry Cupboards",
  "Kitchen Cupboards",
  "Bedroom Cupboards",
  "Storage Cupboards",
] as const;

export const HOME_RACKS_LIST = [
  "Kitchen Racks",
  "Pantry Racks",
  "Bookshelves",
  "Shoe Racks",
  "Helmet Racks",
  "Wall Racks",
] as const;

// Combined legacy lists for backwards compatibility
export const storageCupboards: CupboardProduct[] = [
  ...homeStorageCupboards,
];

export const helmetRacks: CupboardProduct[] = [
  ...officeHelmetRacks,
  ...homeHelmetRacks,
];

export const shoeRacks: CupboardProduct[] = [
  ...officeShoeRacks,
  ...homeShoeRacks,
];

export const utilityRacks: CupboardProduct[] = [
  ...officeHelmetRacks,
  ...homeHelmetRacks,
  ...officeShoeRacks,
  ...homeShoeRacks,
  ...wallRacks,
  ...kitchenRacks,
  ...pantryRacks,
  ...bookshelves,
];

// Combined master list of all cupboard & rack products
export const allCupboards: CupboardProduct[] = [
  ...officeProducts,
  ...homeProducts,
];
