"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Share2, 
  Check 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductFaqSection from "@/components/ProductFaqSection";
import RelatedProductsSection from "@/components/RelatedProductsSection";
import Footer from "@/components/Footer";
import { UnifiedProduct } from "@/data/productLookup";
import { SITE_CONFIG } from "@/config/site";
import { sanitizeInput } from "@/utils/security";

interface ProductDetailViewProps {
  product: UnifiedProduct;
  relatedProducts?: UnifiedProduct[];
}

export default function ProductDetailView({
  product,
  relatedProducts,
}: ProductDetailViewProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  // Dynamic Breadcrumb tracking based on where user actually came from
  const [breadcrumbTrail, setBreadcrumbTrail] = useState<{
    parentName: string;
    parentHref: string;
    subName?: string;
    subHref?: string;
  }>({
    parentName: product.breadcrumbName,
    parentHref: product.breadcrumbHref,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Check current URL search params first (if passed via card link)
    const currentParams = new URLSearchParams(window.location.search);
    let typeParam = currentParams.get("type");
    let catParam = currentParams.get("category");
    let sourcePath = window.location.pathname;

    // 2. If not present in current URL, check document.referrer
    if (!typeParam && !catParam && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.origin === window.location.origin) {
          typeParam = refUrl.searchParams.get("type");
          catParam = refUrl.searchParams.get("category");
          sourcePath = refUrl.pathname;
        }
      } catch (e) {
        // ignore
      }
    }

    const isCupboards = product.type === "cupboards" || sourcePath.startsWith("/cupboards");
    const isCounters = product.type === "counters" || sourcePath.startsWith("/counters");
    const isTables = product.type === "tables" || sourcePath.startsWith("/tables");

    const parentName = isCupboards
      ? "Cupboards & Racks"
      : isCounters
      ? "Counters"
      : "Tables";

    const parentHref = isCupboards
      ? "/cupboards"
      : isCounters
      ? "/counters"
      : "/tables";

    const subName =
      typeParam ||
      (catParam && catParam !== "All"
        ? `${catParam} ${isTables ? "Tables" : isCupboards ? "Cupboards" : "Counters"}`
        : product.subcategory || undefined);
    
    const subHref = subName
      ? `${parentHref}?type=${encodeURIComponent(subName)}`
      : undefined;

    setBreadcrumbTrail({
      parentName,
      parentHref,
      subName,
      subHref,
    });
  }, [product]);

  // WhatsApp link for requesting more product images
  const handleRequestImagesWhatsApp = () => {
    const safeTitle = sanitizeInput(product.title, 80);
    const safeCode = sanitizeInput(product.code, 30);
    const text = `Hello JDS Furniture! 👋\n\nI am viewing ${safeTitle} (${safeCode}) on your website.\nCould you please send me more high-resolution product images, finish/color samples, and details?`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // WhatsApp link for direct chat / pricing inquiry
  const handleDirectWhatsAppChat = () => {
    const safeTitle = sanitizeInput(product.title, 80);
    const safeCode = sanitizeInput(product.code, 30);
    const safeCat = sanitizeInput(product.subcategory || product.category, 50);
    const text = `Hello JDS Furniture! 👋\n\nI am interested in ordering/customizing:\n• Item: ${safeTitle}\n• Code: ${safeCode}\n• Category: ${safeCat}\n\nPlease let me know the availability, pricing, and customization options.`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // WhatsApp link for discussing custom project
  const handleDiscussProjectWhatsApp = () => {
    const safeTitle = sanitizeInput(product.title, 80);
    const safeCode = sanitizeInput(product.code, 30);
    const safeCat = sanitizeInput(product.subcategory || product.category, 50);
    const text = `Hello JDS Furniture! 👋\n\nI would like to discuss a custom bespoke project based on:\n• Model: ${safeTitle}\n• Code: ${safeCode}\n• Category: ${safeCat}\n\nI'd like to consult on dimensions, material & finish preferences, and 3D design for my space.`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Social share triggers
  const handleShare = (platform: "facebook" | "instagram" | "whatsapp" | "twitter" | "copy") => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareText = `Check out this handcrafted ${product.title} (${product.code}) from JDS Furniture: ${currentUrl}`;

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
    } else if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, "_blank");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, "_blank");
    } else {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(currentUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col justify-between selection:bg-gray-900 selection:text-white">
      {/* 1. Fixed Navbar (Top of screen, always fixed) */}
      <Navbar />

      {/* 2. Main Product Content Area */}
      <main className="flex-1 max-w-7xl 2xl:max-w-[1640px] mx-auto w-full px-4 sm:px-6 lg:px-8 2xl:px-12 pt-28 sm:pt-36 pb-20">
        
        {/* Two-Column Layout matching Reference Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-start">
          
          {/* =========================================================
              LEFT COLUMN: Breadcrumb + Large High-Resolution Product Image
             ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col space-y-4 sm:space-y-5">
            
            {/* Breadcrumb matching user's exact navigation path: Home / All Cupboards & Racks / Server Racks / Server Rack */}
            <nav aria-label="Breadcrumb" className="text-sm sm:text-base font-semibold flex items-center flex-wrap gap-1.5 sm:gap-2 select-none">
              <Link 
                href="/" 
                className="text-gray-500 hover:text-black font-semibold transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-300 font-normal select-none">/</span>
              <Link 
                href={breadcrumbTrail.parentHref} 
                className="text-gray-500 hover:text-black font-semibold transition-colors"
              >
                {breadcrumbTrail.parentName}
              </Link>
              {breadcrumbTrail.subName && (
                <>
                  <span className="text-gray-300 font-normal select-none">/</span>
                  <Link
                    href={breadcrumbTrail.subHref || breadcrumbTrail.parentHref}
                    className="text-gray-500 hover:text-black font-semibold transition-colors"
                  >
                    {breadcrumbTrail.subName}
                  </Link>
                </>
              )}
              <span className="text-gray-300 font-normal select-none">/</span>
              <span className="text-slate-800 font-bold">
                {product.title}
              </span>
            </nav>

            {/* Large Product Image Canvas matching reference screenshot */}
            <div className="relative w-full aspect-square bg-transparent group overflow-hidden">
              {/* Discount Percentage Badge on Top Left matching OfferSection */}
              {product.discountPercentage && (
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 px-2.5 sm:px-3 py-1 bg-red-700 text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-md">
                  {product.discountPercentage}
                </div>
              )}

              {/* Product Main Image */}
              {product.image ? (
                <Image
                  src={product.image}
                  alt={`${product.title} - ${product.code}`}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                />
              ) : (
                <div className="w-full h-full min-h-[340px] bg-gray-50/80 border border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="w-16 h-16 rounded-full bg-gray-200/80 flex items-center justify-center text-gray-500 mb-3">
                    <svg className="w-8 h-8 stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold font-mono text-gray-600 uppercase tracking-wider">
                    {product.code}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    Product image pending upload
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Product Info & Actions matching Screenshot (Sticky sidebar until image ends)
             ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col space-y-6 lg:pl-2 product-details-sticky self-start">
            
            {/* 1. Brand Subtitle & Title */}
            <div className="space-y-2 sm:space-y-3">
              <span className="text-sm sm:text-base font-semibold text-gray-800 tracking-normal block font-sans">
                JDS Furniture
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight font-sans">
                {product.title}
              </h1>
              {/* Product SKU Code & Discount Badge Row */}
              <div className="pt-1 flex items-center gap-3">
                <span className="text-xs font-mono text-gray-400 font-medium tracking-wider">
                  {product.code}
                </span>
                {product.discountPercentage && (
                  <span className="px-2 py-0.5 bg-red-700 text-white font-extrabold text-[10px] tracking-wider uppercase rounded-xs shadow-xs">
                    {product.discountPercentage}
                  </span>
                )}
              </div>
            </div>

            {/* 2. WhatsApp Image Request Row matching Reference Screenshot (Text only, non-clickable) */}
            <div className="flex items-center gap-3 py-1 select-none">
              {/* Standalone WhatsApp Outline Icon matching Share & Button icon */}
              <svg
                className="w-7 h-7 sm:w-8.5 sm:h-8.5 fill-current text-gray-900 shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.2 0-.44.05-.67.28-.23.23-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29s-1.48-.73-1.71-.81c-.23-.08-.4-.12-.57.12-.17.25-.66.82-.81.99-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.77-1.84-.21-.48-.42-.42-.58-.43h-.5z" />
              </svg>

              {/* Plain Text Display (Not a link) */}
              <span className="text-xs sm:text-base font-semibold text-gray-700 font-sans">
                Request more product images via WhatsApp.
              </span>
            </div>

            {/* 3. Two Main Action Buttons matching Screenshot (Adaptive full-width on mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              
              {/* Button 1: DISCUSSES YOUR PROJECT -> */}
              <button
                onClick={handleDiscussProjectWhatsApp}
                className="w-full sm:w-auto h-[48px] sm:h-[56px] px-6 sm:px-8 border border-black bg-white text-black font-bold uppercase tracking-wider text-xs sm:text-[13px] md:text-sm rounded-none transition-transform duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 sm:gap-3 group cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span className="whitespace-nowrap font-sans">DISCUSSES YOUR PROJECT</span>
                <span className="text-base sm:text-lg font-normal leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0">→</span>
              </button>

              {/* Button 2: Contact whatsapp */}
              <button
                onClick={handleDirectWhatsAppChat}
                className="w-full sm:w-auto h-[48px] sm:h-[56px] px-5 sm:px-6 border border-black bg-white text-black font-semibold tracking-tight text-xs sm:text-[13px] md:text-sm rounded-none transition-all duration-200 hover:bg-black hover:text-white hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 sm:gap-3 group cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span className="whitespace-nowrap font-sans">Contact whatsapp</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0 transition-colors duration-200"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.2 0-.44.05-.67.28-.23.23-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29s-1.48-.73-1.71-.81c-.23-.08-.4-.12-.57.12-.17.25-.66.82-.81.99-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.77-1.84-.21-.48-.42-.42-.58-.43h-.5z" />
                </svg>
              </button>

            </div>

            {/* 4. Share Row matching Screenshot (Enlarged & Uniform Same Size Icons) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-3">
              <span className="text-sm sm:text-base font-bold text-gray-900 font-sans">
                Share :
              </span>

              {/* Social Icons matching screenshot: Facebook, Instagram, WhatsApp, X (All same large size: w-6 h-6) */}
              <div className="flex items-center gap-5 text-gray-900">
                {/* Facebook (Fixed smooth circle) */}
                <button
                  onClick={() => handleShare("facebook")}
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer flex items-center justify-center p-0.5"
                  title="Share on Facebook"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.005C18.343 21.144 22 17.008 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </button>

                {/* Instagram */}
                <button
                  onClick={() => handleShare("instagram")}
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer flex items-center justify-center p-0.5"
                  title="Share / View on Instagram"
                  aria-label="Share on Instagram"
                >
                  <svg className="w-6 h-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </button>

                {/* WhatsApp (Enlarged full 24x24 size matching all other icons) */}
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer flex items-center justify-center p-0.5"
                  title="Share via WhatsApp"
                  aria-label="Share via WhatsApp"
                >
                  <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.1l-.3-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.2 0-.44.05-.67.28-.23.23-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29s-1.48-.73-1.71-.81c-.23-.08-.4-.12-.57.12-.17.25-.66.82-.81.99-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.77-1.84-.21-.48-.42-.42-.58-.43h-.5z" />
                  </svg>
                </button>

                {/* X / Twitter */}
                <button
                  onClick={() => handleShare("twitter")}
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer flex items-center justify-center p-0.5"
                  title="Share on X"
                  aria-label="Share on X"
                >
                  <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>

                {/* Copy Link Button */}
                <button
                  onClick={() => handleShare("copy")}
                  className="ml-2 text-xs font-semibold px-2.5 py-1 border border-gray-300 rounded-xs hover:border-gray-900 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy direct product link"
                >
                  {copiedLink ? (
                    <>
                      <Check size={12} className="text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={12} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================
            FAQS & CONTACT SECTION (Accordion + Contact Form)
           ========================================================= */}
        <ProductFaqSection product={product} />

        {/* =========================================================
            RELATED PRODUCTS SECTION ("You may also Like" Carousel)
           ========================================================= */}
        <RelatedProductsSection
          currentProduct={product}
          products={relatedProducts}
        />

      </main>

      {/* =========================================================
          FOOTER (Clean & Static without Top Banner or Animations)
         ========================================================= */}
      <Footer minimal />
    </div>
  );
}
