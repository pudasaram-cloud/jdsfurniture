"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { sanitizeInput } from "@/utils/security";

interface QuickContactButtonProps {
  title: string;
  code: string;
  className?: string;
}

export default function QuickContactButton({
  title,
  code,
  className = "",
}: QuickContactButtonProps) {
  const [cooldown, setCooldown] = useState(false);

  const handleQuickContact = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (cooldown) return;
    setCooldown(true);
    setTimeout(() => setCooldown(false), 2000);

    const safeTitle = sanitizeInput(title, 80);
    const safeCode = sanitizeInput(code, 30);
    const text = `Hello JDS Furniture! 👋\n\nI am interested in inquiring about ${safeTitle} (${safeCode}). Could you please share more details and pricing?`;

    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleQuickContact}
      disabled={cooldown}
      title={`Quick Contact for ${title}`}
      aria-label={`Quick Contact for ${title}`}
      className={`w-full flex items-center justify-center px-4 py-2.5 border border-gray-900 text-gray-900 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xs hover:bg-gray-900 hover:text-white transition-all duration-300 group/btn cursor-pointer ${
        cooldown ? "opacity-70 cursor-not-allowed" : ""
      } ${className}`}
    >
      <span className="truncate">{cooldown ? "Opening WhatsApp..." : "Quick Contact"}</span>
    </button>
  );
}
