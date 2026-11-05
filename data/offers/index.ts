export * from "./types";
export * from "./specialOffers";

import { specialOffers } from "./specialOffers";

// Backward-compatible export name
export const offerProducts = specialOffers;
