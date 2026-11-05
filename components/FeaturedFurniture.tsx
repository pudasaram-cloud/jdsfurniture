"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import QuickContactButton from "@/components/QuickContactButton";
import { featuredProducts } from "@/data/featured";

export default function FeaturedFurniture() {
  return (
    <section className="w-full bg-white text-gray-900 pt-16 sm:pt-20 pb-16 sm:pb-20 border-t border-gray-200/60">
      <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 sm:mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans uppercase">
            Our Featured Furniture
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-normal">
            Handpicked furniture pieces loved by our customers.
          </p>
        </div>

        {/* 4x2 Grid of Featured Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 gap-y-10 sm:gap-y-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="h-full flex flex-col"
            >
              <Link
                href={product.href || `/tables/${product.id}`}
                className="group flex flex-col justify-between h-full space-y-4 cursor-pointer"
              >
                {/* Product Image Box - Clean flat, no border radius, no box shadow */}
                <div className="relative w-full aspect-square overflow-hidden bg-transparent transition-transform duration-300 group-hover:-translate-y-1">
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
