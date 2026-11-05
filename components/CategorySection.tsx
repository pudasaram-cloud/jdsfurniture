"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollTextReveal from "@/components/ScrollTextReveal";

const CATEGORIES = [
  {
    id: "counters",
    name: "Counters",
    image: "/assets/cc/ccw01.jpg",
    href: "/counters",
  },
  {
    id: "coffee-tables",
    name: "Coffee Tables",
    image: "/assets/cf/cf01.jpg",
    href: "/tables?type=Coffee+Tables",
  },
  {
    id: "office-tables",
    name: "Office Tables",
    image: "/assets/ex/ex01.jpg",
    href: "/tables?category=Office",
  },
  {
    id: "bedroom-cupboards",
    name: "Bedroom Cupboards",
    image: "/assets/bc/bc03.jpg",
    href: "/cupboards?type=Bedroom+Cupboards",
  },
  {
    id: "storage-cupboards",
    name: "Storage Cupboards",
    image: "/assets/hsc/sc02.jpg",
    href: "/cupboards?type=Storage+Cupboards",
  },
  {
    id: "custom-furniture",
    name: "Custom Furniture",
    image: "/assets/pc/pc02.jpg",
    href: "#custom-furniture",
  },
];

export default function CategorySection() {
  const topRowCategories = CATEGORIES.slice(0, 4);
  const bottomRowCategories = CATEGORIES.slice(4, 6);

  const handleCategoryClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="category-tables" className="w-full bg-white text-gray-900 pb-20">
      <div id="category-counters" className="scroll-mt-28" />
      <div id="category-cupboards" className="scroll-mt-28" />
      {/* Shop By Category & Vision Container */}
      <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pt-16 2xl:pt-20">
        
        {/* Section Header with Scroll Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-10 2xl:mb-12 text-left"
        >
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold tracking-tight uppercase text-gray-900 font-sans">
            SHOP BY CATEGORY
          </h2>
          <p className="text-sm 2xl:text-base text-gray-500 font-normal">
            Explore Furniture for Every Space. Discover beautifully crafted furniture tailored to your lifestyle.
          </p>
        </motion.div>


        {/* Category Cards Grid with Staggered Scroll Slide-Up Animations */}
        <div className="space-y-8 2xl:space-y-10">
          
          {/* Top Row: 4 Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
            {topRowCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                onClick={(e) => handleCategoryClick(e, cat.href)}
                className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1 block"
              >
                <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden transition-all duration-300">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 group-hover:text-[#0074E1] transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Bottom Row: 2 Category Cards + Feature Text Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
            
            {/* 2 Category Cards (Storage Cupboards & Custom Furniture) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {bottomRowCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  onClick={(e) => handleCategoryClick(e, cat.href)}
                  className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1 block"
                >
                  <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden transition-all duration-300">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900 group-hover:text-[#0074E1] transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Feature Text Block with Word-by-Word Scroll Reveal Animation */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-start items-start space-y-5 sm:space-y-6 lg:pl-8 xl:pl-12 text-left"
            >
              {/* Word by word scroll animation component */}
              <ScrollTextReveal
                text={"Your Vision. Crafted\nInto Reality\nCustom Furniture, Designed\nAround You."}
                className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans text-gray-900"
              />

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl font-normal">
                From a simple idea to a one-of-a-kind masterpiece, we bring your vision to life. Create custom tables, cupboards, and furniture perfectly tailored to your space, style, measurements, and needs.
              </p>

              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 px-6 py-3.5 border border-gray-900 text-gray-900 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-none hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer shadow-xs active:scale-95 group font-sans"
                >
                  <span>START YOUR CUSTOM DESIGN</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
