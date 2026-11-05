"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuickContactButton from "@/components/QuickContactButton";

interface CustomProduct {
  id: string;
  title: string;
  code: string;
  image: string;
  href: string;
}

const CUSTOM_PRODUCTS: CustomProduct[] = [
  {
    id: "hpc-2",
    title: "Tall Food Pantry Cabinet",
    code: "JDS-HPC-002",
    image: "/assets/pc/pc02.jpg",
    href: "/cupboards/hpc-2",
  },
  {
    id: "82",
    title: "Minimalist CEO Desk",
    code: "JDS-ET-003",
    image: "/assets/ex/ex04.jpg",
    href: "/tables/82",
  },
  {
    id: "114",
    title: "X-Frame Steel Boardroom Table",
    code: "JDS-MEET-001",
    image: "/assets/mt/mt-01.jpg",
    href: "/tables/114",
  },
  {
    id: "2",
    title: "Curved Cash Counter",
    code: "JDS-CC-002",
    image: "/assets/cc/ccw2.jpg",
    href: "/counters/2",
  },
  {
    id: "24",
    title: "Low Profile Coffee Table",
    code: "JDS-CT-002",
    image: "/assets/cf/cf02.jpg",
    href: "/tables/24",
  },
  {
    id: "50",
    title: "Hotel Lobby Reception Desk",
    code: "JDS-RC-002",
    image: "/assets/re/rew02.jpg",
    href: "/counters/50",
  },
  {
    id: "oc-1",
    title: "Executive Office Cupboard",
    code: "JDS-OC-001",
    image: "/assets/oc/oc01.jpg",
    href: "/cupboards/oc-1",
  },
  {
    id: "3",
    title: "Recessed Pedestal Dining Table",
    code: "JDS-DT-003",
    image: "/assets/dt/dt03.jpg",
    href: "/tables/3",
  },
  {
    id: "132",
    title: "4-Person Cluster Workstation",
    code: "JDS-WS-001",
    image: "/assets/wk/wk01.jpg",
    href: "/tables/132",
  },
  {
    id: "hbs-2",
    title: "Modern Geometric Bookshelf",
    code: "JDS-HBS-002",
    image: "/assets/br/br02.jpg",
    href: "/cupboards/hbs-2",
  },
];

export default function CustomFurnitureSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector<HTMLElement>(".custom-furniture-card");
    const cardWidth = card ? card.offsetWidth : 300;
    const gap = 32; // gap-8 = 32px
    const scrollStep = (cardWidth + gap) * 2;

    if (direction === "left") {
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollStep, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="custom-furniture" className="w-full bg-white text-gray-900 pt-16 sm:pt-20 pb-16 sm:pb-20 border-t border-gray-200/60 scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Header with Left Title and Right Circular Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
              Custom Furniture
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-normal">
              Bespoke furniture pieces handcrafted to your exact style and measurements.
            </p>
          </div>

          {/* Circular Arrow Navigation (< and >) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-start sm:self-auto">
            {/* Previous Button (<) */}
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous custom furniture"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
            >
              <ChevronLeft size={20} className="stroke-[2]" />
            </button>

            {/* Next Button (>) */}
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next custom furniture"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 shadow-xs"
            >
              <ChevronRight size={20} className="stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track with Snap Scrolling */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory overscroll-x-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {CUSTOM_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              className="custom-furniture-card shrink-0 w-[250px] sm:w-[280px] md:w-[300px] lg:w-[calc(25%-1.5rem)] snap-start flex flex-col justify-between"
            >
              <Link
                href={product.href}
                className="group flex flex-col justify-between h-full space-y-4 cursor-pointer block"
              >
                {/* Product Image Box */}
                <div className="relative w-full aspect-square overflow-hidden bg-transparent transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 25vw"
                  />
                </div>

                {/* Product Details & Action Button */}
                <div className="space-y-3 pt-2">
                  {/* Title & Product Code Row */}
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-extrabold uppercase text-gray-900 tracking-wider font-sans truncate pr-2">
                      {product.title}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 tracking-wider shrink-0">
                      {product.code}
                    </span>
                  </div>
                  
                  {/* Quick Contact Action Button connecting to WhatsApp */}
                  <QuickContactButton title={product.title} code={product.code} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
