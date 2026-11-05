/**
 * Centralized site configuration for JDS Furniture.
 * Reads environment variables with safe production fallbacks.
 */
export const SITE_CONFIG = {
  name: "JDS Furniture",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94701095008",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jdsfurniture.lk",
  contactEmail: "info@jdsfurniture.lk",
  defaultCurrency: "LKR",
} as const;

