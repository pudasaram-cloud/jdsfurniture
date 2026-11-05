"use client";

import Link from "next/link";
import Image from "next/image";
import { Tag } from "lucide-react";
import { motion } from "framer-motion";
import QuickContactButton from "@/components/QuickContactButton";
import { offerProducts } from "@/data/offers";

export default function OfferSection() {
  return (
    <section className="w-full bg-white text-gray-900 pt-16 sm:pt-20 pb-16 sm:pb-20 border-t border-gray-200/60">
      {/* Offers Content Container */}
      <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-red-700 font-bold text-xs tracking-widest uppercase">
              <Tag size={15} />
              <span>LIMITED TIME PROMOTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans uppercase">
              SPECIAL OFFERS
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-normal">
              Exclusive seasonal discounts on handcrafted signature pieces.
            </p>
          </div>
        </div>

        {/* 4-Grid of Offer Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 gap-y-10 sm:gap-y-12">
          {offerProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="h-full flex flex-col"
            >
              <Link
                href={product.id === "off-4" ? `/cupboards/${product.id}` : `/tables/${product.id}`}
                className="group flex flex-col justify-between h-full space-y-4 cursor-pointer"
              >
                {/* Product Image Box with % Discount Badge */}
                <div className="relative w-full aspect-square overflow-hidden bg-transparent transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Discount Percentage Badge on Top Left */}
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-red-700 text-white font-extrabold text-[11px] tracking-wider uppercase">
                    {product.discountPercentage}
                  </div>

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Product Details & Action Button */}
                <div className="space-y-3 pt-1 flex flex-col flex-1 justify-between">
                  
                  {/* Title & Product Code Row */}
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                    <span className="font-extrabold uppercase text-gray-900 tracking-wider font-sans truncate pr-1">
                      {product.title}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 tracking-wider shrink-0">
                      {product.code}
                    </span>
                  </div>
                  
                  {/* Quick Contact Action Button connecting to WhatsApp */}
                  <div className="mt-auto pt-1">
                    <QuickContactButton title={product.title} code={product.code} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
