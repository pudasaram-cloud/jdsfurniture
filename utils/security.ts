/**
 * Security and sanitization utilities for JDS Furniture client-side forms.
 */

/**
 * Strips HTML tags, JavaScript protocols, and dangerous control characters from user input.
 * Truncates output to maxLen characters to prevent buffer overflow attacks.
 */
export function sanitizeInput(input: string, maxLen = 800): string {
  if (!input || typeof input !== "string") return "";

  return input
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/javascript:/gi, "") // Neutralize JS protocol
    .replace(/data:/gi, "") // Neutralize data URI injection
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "") // Remove ASCII control characters
    .replace(/\r\n|\r/g, "\n") // Normalize line endings
    .replace(/\n{3,}/g, "\n\n") // Collapse excessive line breaks
    .trim()
    .slice(0, maxLen);
}

/**
 * Validates whether a phone number matches standard Sri Lankan or international format.
 */
export function isValidPhoneNumber(phone: string): boolean {
  if (!phone || typeof phone !== "string") return false;
  const cleaned = phone.replace(/[\s\-().]/g, "");
  // Accepts 9 to 15 digits, optionally prefixed with '+'
  return /^\+?[0-9]{9,15}$/.test(cleaned);
}

/**
 * Detects automated bot submission via a hidden honeypot field.
 * If the honeypot field contains any value, it was likely filled by an automated scraper/bot.
 */
export function isBotSubmission(honeypotValue?: string): boolean {
  return typeof honeypotValue === "string" && honeypotValue.trim().length > 0;
}

