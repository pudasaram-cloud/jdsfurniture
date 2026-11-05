"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full mt-16 sm:mt-20 h-[calc(100svh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[560px] md:min-h-[720px] xl:min-h-[800px] 2xl:min-h-[880px] overflow-hidden bg-[#7F9BA6]">
      {/* Background Room Photo (home.jpg) */}
      <Image
        src="/assets/home.jpg"
        alt="We Craft Your Dream Furniture"
        fill
        priority
        className="object-cover object-[center_bottom] sm:object-center select-none pointer-events-none"
        sizes="100vw"
        quality={95}
      />

      {/* Subtle overlay gradient to ensure text readability while preserving natural sunlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20 pointer-events-none" />

      {/* Hero Content: Custom Mobile Layout (< md) & Classic Centered Desktop Layout (md+) */}
      <div className="absolute inset-0 flex flex-col items-start md:items-center justify-start pt-16 xs:pt-20 sm:pt-24 md:pt-20 lg:pt-24 xl:pt-28 px-6 xs:px-8 sm:px-12 md:px-16 text-left md:text-center z-10 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-start md:items-center max-w-3xl md:max-w-4xl w-full">
          
          {/* ========================================================= */}
          {/* 1. MOBILE HEADLINE: 4 Stacked Lines, Left-Aligned         */}
          {/* ========================================================= */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden text-[50px] xs:text-[58px] sm:text-[66px] font-extrabold tracking-tight font-sans leading-[0.98] text-left select-none"
          >
            <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              We Craft
            </span>
            <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              Your
            </span>
            <span className="block text-black">
              Dream
            </span>
            <span className="block text-black">
              Furniture
            </span>
          </motion.h1>

          {/* ========================================================= */}
          {/* 2. DESKTOP HEADLINE: 2 Lines, Centered in Wall Space       */}
          {/* ========================================================= */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block text-[56px] lg:text-[70px] 2xl:text-[80px] font-extrabold tracking-tight font-sans leading-[1.1] text-center select-none"
          >
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              We Craft Your{" "}
            </span>
            <span className="text-black">Dream</span>
            <br />
            <span className="text-black">Furniture</span>
          </motion.h1>

          {/* ========================================================= */}
          {/* 3. ACTION BUTTON: Left-aligned on Mobile, Center Desktop  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 xs:mt-6 sm:mt-7 self-start ml-0 md:ml-0 md:self-center"
          >
            <Link
              href="/tables"
              className="inline-flex items-center justify-center px-8 sm:px-11 py-3.5 sm:py-4 bg-[#338DEF] hover:bg-[#2075D8] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-md sm:rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] active:scale-95 cursor-pointer"
            >
              EXPLORE COLLECTION
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
