"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import QuickContactButton from "@/components/QuickContactButton";
import { UnifiedProduct, getRelatedProducts } from "@/data/productLookup";

interface RelatedProductsSectionProps {
  currentProduct: UnifiedProduct;
  products?: UnifiedProduct[];
}

export default function RelatedProductsSection({
  currentProduct,
  products,
}: RelatedProductsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // If products not passed or few, fetch up to 12 from same category/subcategory
  const relatedList =
    products && products.length > 0
      ? products
      : getRelatedProducts(currentProduct, 12);

  // If no related products exist at all, don't render empty section
  if (!relatedList || relatedList.length === 0) {
    return null;
  }

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector<HTMLElement>(".product-card")?.offsetWidth || 300;
    const scrollStep = cardWidth * 2; // Scroll 2 cards at a time or full view

    if (direction === "left") {
      if (container.scrollLeft <= 10) {
        // Wrap around to end
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollStep, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        // Wrap around to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full pt-16 sm:pt-24 pb-16 border-t border-gray-200 mt-16 sm:mt-24">
      
      {/* Header Row: "You may also Like" on Left, Circular Arrows on Right */}
      <div className="flex items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight font-sans">
          You may also Like
        </h2>

        {/* Circular Arrow Navigation (< and >) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Previous Button (<) */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Previous related products"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
          >
            <ChevronLeft size={20} className="stroke-[2]" />
          </button>

          {/* Next Button (>) */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Next related products"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
          >
            <ChevronRight size={20} className="stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track with scroll snapping */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-4 sm:gap-8 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory overscroll-x-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {relatedList.map((item) => (
          <div
            key={item.id}
            className="product-card shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[calc(25%-1.5rem)] snap-start flex flex-col justify-between"
          >
            <Link
              href={`/${item.type}/${item.id}`}
              className="group flex flex-col justify-between h-full space-y-4 cursor-pointer"
            >
              {/* Product Image Area matching reference */}
              <div className="relative w-full aspect-square flex items-center justify-center p-3 rounded-lg bg-white transition-transform duration-300 group-hover:-translate-y-1">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 select-none">
                    <div className="w-10 h-10 rounded-full bg-gray-200/80 flex items-center justify-center text-gray-500 mb-1.5">
                      <svg className="w-5 h-5 stroke-current stroke-[1.6]" fill="none" viewBox="0 0 24 24">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-gray-400 uppercase tracking-wider">
                      {item.code}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info & Action Button */}
              <div className="space-y-3 pt-1">
                {/* Title & Product Code Row */}
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-extrabold uppercase text-gray-900 tracking-wider font-sans truncate pr-2">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 tracking-wider shrink-0">
                    {item.code}
                  </span>
                </div>

                {/* Quick Contact Action Button connecting to WhatsApp */}
                <QuickContactButton title={item.title} code={item.code} className="rounded-none" />
              </div>
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}
