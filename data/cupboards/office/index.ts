export * from "./officeCupboards";
export * from "./fileCupboards";
export * from "./staffLockers";
export * from "./helmetRacks";
export * from "./shoeRacks";

import { CupboardProduct } from "../types";
import { officeCupboards } from "./officeCupboards";
import { fileCupboards } from "./fileCupboards";
import { staffLockers } from "./staffLockers";
import { officeHelmetRacks } from "./helmetRacks";
import { officeShoeRacks } from "./shoeRacks";

export const officeProducts: CupboardProduct[] = [
  ...officeCupboards,
  ...fileCupboards,
  ...staffLockers,
  ...officeHelmetRacks,
  ...officeShoeRacks,
];
