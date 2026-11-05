"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Landmark, Building2, Briefcase, ShieldCheck, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  category?: string;
}

// Full project items list using assets from public/assets/op/
const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Commercial Bank Srilanka",
    subtitle: "Custom Commercial Joinery & Executive Banking Interiors.",
    image: "/assets/op/cmb02.jpeg",
    buttonText: "DISCUSS YOUR PROJECT",
    category: "Commercial Banking",
  },
  {
    id: 2,
    title: "Commercial Bank Security room",
    subtitle: "Architectural Workspaces & Executive Lounge Furnishings.",
    image: "/assets/op/cmb03.jpeg",
    buttonText: "DISCUSS YOUR PROJECT",
    category: "Corporate Office",
  },
  {
    id: 3,
    title: "SYNERGY KOLLUPITIYA",
    subtitle: "Contemporary Ergonomic Workstations & Bespoke Fittings.",
    image: "/assets/op/cmb01.jpeg",
    buttonText: "DISCUSS YOUR PROJECT",
    category: "Commercial Interior",
  },
  {
    id: 4,
    title: "COMMERCIAL BANK auditorium",
    subtitle: "Furniture Built for Business. Designed for Every Space.",
    image: "/assets/op/cmb04.jpeg",
    buttonText: "DISCUSS YOUR PROJECT",
    category: "Commercial Banking & Workspace",
  },
  {
    id: 5,
    title: "COMMERCIAL BANK SRI LANKA",
    subtitle: "Tailored Ergonomic Seating & Custom Modular Furniture.",
    image: "/assets/op/cmb05.jpeg",
    buttonText: "DISCUSS YOUR PROJECT",
    category: "Hospitality & Premium Living",
  },
];

// 3 Featured project cards matching the mockup image layout
// const FEATURED_PROJECT_CARDS = [
//   {
//     id: 1,
//     title: "CBC FINANCE",
//     image: "/assets/op/o1.jpeg",
//     projectIndex: 0,
//   },
//   {
//     id: 2,
//     title: "EW BALASOORIYA",
//     image: "/assets/op/o2.jpeg",
//     projectIndex: 1,
//   },
//   {
//     id: 3,
//     title: "SYNERGY KOLLUPITIYA",
//     image: "/assets/op/o3.jpeg",
//     projectIndex: 2,
//   },
// ];

// Key Clients & Corporate Partners logos data
const CLIENT_LOGOS = [
  {
    id: 1,
    name: "CBC FINANCE",
    category: "Financial Institution",
    icon: Landmark,
  },
  {
    id: 2,
    name: "EW BALASOORIYA",
    category: "Corporate HQ",
    icon: Building2,
  },
  {
    id: 3,
    name: "SYNERGY KOLLUPITIYA",
    category: "Commercial Real Estate",
    icon: Briefcase,
  },
  {
    id: 4,
    name: "COMMERCIAL BANK",
    category: "Banking Sector",
    icon: ShieldCheck,
  },
  {
    id: 5,
    name: "CEYLON RESORTS",
    category: "Hospitality & Leisure",
    icon: Award,
  },
  {
    id: 6,
    name: "ATELIER EXECUTIVE",
    category: "Private Luxury Spaces",
    icon: Sparkles,
  },
];

export default function OurProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const sectionRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Framer Motion Scroll Parallax Effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax subtle vertical movement & scale on scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.99, 1, 0.99]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  const handleSelectCard = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  // Automatic slideshow transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [handleNext]);

  const currentProject = PROJECTS[currentIndex];

  // Framer Motion slide variants for smooth transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.02,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 32 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.6 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 32 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="our-projects"
      className="w-full bg-white text-gray-900 pt-16 sm:pt-24 pb-6 sm:pb-8 border-t border-gray-200/70 overflow-hidden relative"
    >
      <div className="w-full space-y-12 sm:space-y-16">
        
        {/* Header Content Container (Centered max-w-7xl / 2xl:max-w-[1640px]) */}
        <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 space-y-10 sm:space-y-12">
          
          {/* Top Header Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans uppercase">
              OUR PROJECTS
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-normal tracking-wide">
              Spaces We&apos;ve Helped Bring to Life.
            </p>
          </motion.div>

          {/* 3-Card Grid Section matching the mockup image (o1, o2, o3) - Commented out for now (Uncomment if needed later) */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
            {FEATURED_PROJECT_CARDS.map((card, index) => {
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => handleSelectCard(card.projectIndex)}
                  className="group flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#E2E0DB] shadow-sm transition-all duration-500 group-hover:shadow-lg">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <h3 className="mt-4 sm:mt-5 text-sm sm:text-base font-extrabold tracking-wider text-gray-900 uppercase font-sans text-center group-hover:text-[#0074E1] transition-colors">
                    {card.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
          */}

          {/* Center Project Headline, Tagline & Action Button */}
          <div ref={showcaseRef} className="flex flex-col items-center text-center space-y-4 sm:space-y-5 max-w-4xl mx-auto px-2 justify-center pt-6">
            
            {/* Animated Title & Subtitle Only */}
            <div className="min-h-[90px] sm:min-h-[100px] flex flex-col items-center justify-center space-y-3 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id + "-text"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-3 flex flex-col items-center w-full"
                >
                  {/* Dynamic Project Title */}
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 uppercase font-sans leading-tight">
                    {currentProject.title}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl">
                    {currentProject.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Static Discuss Your Project Button (Fixed in Place) */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 bg-white/50 hover:bg-gray-900 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer active:scale-95 group"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 100% Full-Width Edge-to-Edge Project Image Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden bg-gray-100 group border-y border-gray-200/60"
        >
          {/* Main Image Viewport with Animated Transitions */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[80vh] min-h-[400px] sm:min-h-[550px]"
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentProject.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  priority={currentIndex === 0}
                  className="object-cover object-center transition-transform duration-700 hover:scale-102"
                  sizes="100vw"
                />
                
                {/* Subtle Gradient Overlay for Text Overlay Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                {/* Bottom Left Category & Image Counter Tag */}
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 z-20 flex items-center gap-3">
                  <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase rounded-xs border border-white/10 shadow-sm">
                    {currentProject.category || "Featured Project"}
                  </span>
                  <span className="text-white/80 font-mono text-xs font-medium tracking-widest px-3 py-1.5 bg-black/40 backdrop-blur-xs rounded-xs border border-white/10">
                    0{currentIndex + 1} / 0{PROJECTS.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next / Prev Navigation Overlay Buttons directly on Image sides */}
            {PROJECTS.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Project"
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next Project"
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
