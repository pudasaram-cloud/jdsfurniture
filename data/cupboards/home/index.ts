export * from "./pantryCupboards";
export * from "./kitchenCupboards";
export * from "./bedroomCupboards";
export * from "./storageCupboards";
export * from "./kitchenRacks";
export * from "./pantryRacks";
export * from "./bookshelves";
export * from "./shoeRacks";
export * from "./helmetRacks";
export * from "./wallRacks";

import { CupboardProduct } from "../types";
import { pantryCupboards } from "./pantryCupboards";
import { kitchenCupboards } from "./kitchenCupboards";
import { bedroomCupboards } from "./bedroomCupboards";
import { homeStorageCupboards } from "./storageCupboards";
import { kitchenRacks } from "./kitchenRacks";
import { pantryRacks } from "./pantryRacks";
import { bookshelves } from "./bookshelves";
import { homeShoeRacks } from "./shoeRacks";
import { homeHelmetRacks } from "./helmetRacks";
import { wallRacks } from "./wallRacks";

export const homeProducts: CupboardProduct[] = [
  ...pantryCupboards,
  ...kitchenCupboards,
  ...bedroomCupboards,
  ...homeStorageCupboards,
  ...kitchenRacks,
  ...pantryRacks,
  ...bookshelves,
  ...homeShoeRacks,
  ...homeHelmetRacks,
  ...wallRacks,
];
