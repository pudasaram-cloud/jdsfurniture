"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

// Counters Categories (6 items - Pure text vertical dropdown)
export const COUNTER_ITEMS = [
  { id: "cash-counters", name: "Cash Counters", href: "#category-counters" },
  { id: "low-counters", name: "Low Counters", href: "#category-counters" },
  { id: "display-counters", name: "Display Counters", href: "#category-counters" },
  { id: "reception-counters", name: "Reception Counters", href: "#category-counters" },
  { id: "service-counters", name: "Service Counters", href: "#category-counters" },
  { id: "custom-counters", name: "Custom Counters", href: "#contact" },
];

// Tables Categories - Office (8 items)
export const OFFICE_TABLES = [
  { id: "exec-tables", name: "Executive Tables", href: "#category-tables" },
  { id: "mgr-tables", name: "Manager Tables", href: "#category-tables" },
  { id: "off-tables", name: "Officer Tables", href: "#category-tables" },
  { id: "staff-tables", name: "Staff Tables", href: "#category-tables" },
  { id: "meet-tables", name: "Meeting Tables", href: "#category-tables" },
  { id: "comp-tables", name: "Computer Tables", href: "#category-tables" },
  { id: "workstations", name: "Workstations", href: "#category-tables" },
  { id: "sec-tables", name: "Security Tables", href: "#category-tables" },
];

// Tables Categories - Home (7 items)
export const HOME_TABLES = [
  { id: "dining-tables", name: "Dining Tables", href: "#category-tables" },
  { id: "study-tables", name: "Study Tables", href: "#category-tables" },
  { id: "coffee-tables", name: "Coffee Tables", href: "#category-tables" },
  { id: "centre-tables", name: "Center Tables", href: "#category-tables" },
  { id: "side-tables", name: "Nesting Tables", href: "#category-tables" },
  { id: "console-tables", name: "Console Tables", href: "#category-tables" },
  { id: "bedside-tables", name: "Bedside Tables", href: "#category-tables" },
];

// Cupboards & Racks - Office Cupboards & Racks (5 items)
export const OFFICE_CUPBOARDS = [
  { id: "off-cup-1", name: "Office Cupboards", href: "#category-cupboards" },
  { id: "off-cup-2", name: "File Cupboards", href: "#category-cupboards" },
  { id: "off-cup-3", name: "Staff Lockers", href: "#category-cupboards" },
  { id: "off-cup-4", name: "Helmet Racks", href: "#category-cupboards" },
  { id: "off-cup-5", name: "Shoe Racks", href: "#category-cupboards" },
];

// Cupboards & Racks - Office Racks (Empty as racks merged into office list)
export const OFFICE_RACKS: { id: string; name: string; href: string }[] = [];

// Cupboards & Racks - Home Cupboards (4 items)
export const HOME_CUPBOARDS = [
  { id: "home-cup-1", name: "Pantry Cupboards", href: "#category-cupboards" },
  { id: "home-cup-2", name: "Kitchen Cupboards", href: "#category-cupboards" },
  { id: "home-cup-3", name: "Bedroom Cupboards", href: "#category-cupboards" },
  { id: "home-cup-4", name: "Storage Cupboards", href: "#category-cupboards" },
];

// Cupboards & Racks - Home Racks (6 items)
export const HOME_RACKS = [
  { id: "home-rack-1", name: "Kitchen Racks", href: "#category-cupboards" },
  { id: "home-rack-2", name: "Pantry Racks", href: "#category-cupboards" },
  { id: "home-rack-3", name: "Bookshelves", href: "#category-cupboards" },
  { id: "home-rack-4", name: "Shoe Racks", href: "#category-cupboards" },
  { id: "home-rack-5", name: "Helmet Racks", href: "#category-cupboards" },
  { id: "home-rack-6", name: "Wall Racks", href: "#category-cupboards" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTablesPage = pathname.startsWith("/tables");
  const isCountersPage = pathname.startsWith("/counters");
  const isCupboardsPage = pathname.startsWith("/cupboards");

  const [activeNav, setActiveNav] = useState(
    isTablesPage
      ? "Tables"
      : isCountersPage
      ? "Counters"
      : isCupboardsPage
      ? "Cupboards"
      : "Home"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countersOpen, setCountersOpen] = useState(false);
  const [tablesOpen, setTablesOpen] = useState(false);
  const [cupboardsOpen, setCupboardsOpen] = useState(false);
  const [mobileCountersOpen, setMobileCountersOpen] = useState(false);
  const [mobileTablesOpen, setMobileTablesOpen] = useState(false);
  const [mobileCupboardsOpen, setMobileCupboardsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setNavLoadingKey] = useState(0);

  const headerRef = useRef<HTMLElement>(null);

  // Sync activeNav with current route
  useEffect(() => {
    if (pathname.startsWith("/tables")) {
      setActiveNav("Tables");
    } else if (pathname.startsWith("/counters")) {
      setActiveNav("Counters");
    } else if (pathname.startsWith("/cupboards")) {
      setActiveNav("Cupboards");
    } else if (pathname === "/") {
      setActiveNav("Home");
    }
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Counters", href: "#category-counters", isExpandable: true },
    { name: "Tables", href: "#category-tables", isExpandable: true },
    { name: "Cupboards", href: "#category-cupboards", isExpandable: true },
    { name: "Contact", href: "#contact" },
  ];

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setCountersOpen(false);
        setTablesOpen(false);
        setCupboardsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCountersOpen(false);
        setTablesOpen(false);
        setCupboardsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close desktop dropdowns on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setCountersOpen(false);
        setTablesOpen(false);
        setCupboardsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background body scroll when mobile menu is open to prevent bleed-through scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow || "";
      };
    }
  }, [mobileMenuOpen]);

  const showNavbar = true;

  const handleNavClick = (item: { name: string; href: string; isExpandable?: boolean }) => {
    setActiveNav(item.name);
    setNavLoadingKey((prev) => prev + 1);

    if (item.name === "Counters") {
      setTablesOpen(false);
      setCupboardsOpen(false);
      setCountersOpen((prev) => !prev);
      return;
    }

    if (item.name === "Tables") {
      setCountersOpen(false);
      setCupboardsOpen(false);
      setTablesOpen((prev) => !prev);
      return;
    }

    if (item.name === "Cupboards") {
      setCountersOpen(false);
      setTablesOpen(false);
      setCupboardsOpen((prev) => !prev);
      return;
    }

    setCountersOpen(false);
    setTablesOpen(false);
    setCupboardsOpen(false);

    if (item.name === "Home") {
      if (!isHome) {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (item.href.startsWith("#") && item.href.length > 1) {
      if (!isHome) {
        router.push(`/${item.href}`);
      } else {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleSubItemClick = (href: string, tabName: string = "Tables", subItemName?: string) => {
    setCountersOpen(false);
    setTablesOpen(false);
    setCupboardsOpen(false);
    setMobileMenuOpen(false);
    setActiveNav(tabName);
    setNavLoadingKey((prev) => prev + 1);

    if (tabName === "Tables") {
      if (subItemName) {
        router.push(`/tables?type=${encodeURIComponent(subItemName)}`);
      } else if (href.startsWith("/tables")) {
        router.push(href);
      } else {
        router.push("/tables");
      }
      return;
    }

    if (tabName === "Counters") {
      if (subItemName) {
        router.push(`/counters?type=${encodeURIComponent(subItemName)}`);
      } else if (href.startsWith("/counters")) {
        router.push(href);
      } else {
        router.push("/counters");
      }
      return;
    }

    if (tabName === "Cupboards") {
      if (subItemName) {
        router.push(`/cupboards?type=${encodeURIComponent(subItemName)}`);
      } else if (href.startsWith("/cupboards")) {
        router.push(href);
      } else {
        router.push("/cupboards");
      }
      return;
    }

    if (!isHome) {
      if (href.startsWith("#")) {
        router.push(`/${href}`);
      } else {
        router.push(href);
      }
      return;
    }

    if (href.startsWith("#") && href.length > 1) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Modern Animation Variants for Counters Vertical Dropdown
  const countersDropdownVariants = {
    hidden: {
      opacity: 0,
      y: -6,
      scaleY: 0.96,
      transition: {
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -6,
      scaleY: 0.96,
      transition: {
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Modern Animation Variants for Tables & Cupboards Full-Width Panels
  const fullWidthPanelVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -6,
      transition: {
        duration: 0.22,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -6,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/90 shadow-xs transition-colors duration-300"
    >
      <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo - ALWAYS visible on mobile and desktop matching screenshot */}
          <Link 
            href="/" 
            onClick={() => {
              setCountersOpen(false);
              setTablesOpen(false);
              setCupboardsOpen(false);
              setMobileMenuOpen(false);
            }}
            className="flex items-center group transition-opacity hover:opacity-90 py-1"
          >
            <Image
              src="/assets/jds-logo.png"
              alt="JDS Furniture Logo"
              width={160}
              height={70}
              style={{ aspectRatio: "160/70" }}
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 h-full">
            {navItems.map((item) => {
              const isCounters = item.name === "Counters";
              const isTables = item.name === "Tables";
              const isCupboards = item.name === "Cupboards";
              const isExpandable = isCounters || isTables || isCupboards;
              const isMenuOpen = 
                (isCounters && countersOpen) ||
                (isTables && tablesOpen) ||
                (isCupboards && cupboardsOpen);
              const isActive = (activeNav === item.name) || isMenuOpen;

              return (
                <div key={item.name} className="relative h-full flex items-center">
                  <button
                    onClick={() => handleNavClick(item)}
                    aria-expanded={isMenuOpen ? "true" : undefined}
                    aria-haspopup={isExpandable ? "true" : undefined}
                    className={`group/nav relative py-2 text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "text-gray-900 font-bold"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Chevron indicators for Counters, Tables & Cupboards */}
                    {isExpandable && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 text-gray-400 group-hover/nav:text-gray-900 ${
                          isMenuOpen ? "rotate-180 text-gray-900" : "rotate-0"
                        }`}
                      />
                    )}
                  </button>

                  {/* ========================================================
                      1. COUNTERS: VERTICAL WHITE DROPDOWN CARD
                     ======================================================== */}
                  {isCounters && (
                    <AnimatePresence>
                      {countersOpen && (
                        <motion.div
                          key="counters-vertical-dropdown"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={countersDropdownVariants}
                          style={{ originY: 0 }}
                          className="absolute top-full -left-6 sm:-left-8 w-72 sm:w-80 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] border-t border-gray-100 py-6 px-8 sm:px-10 z-50 flex flex-col space-y-3.5 text-left rounded-b-2xl"
                        >
                          {/* Top Bar matching Tables: View All Counters Link */}
                          <div className="pb-2.5 border-b border-gray-200 flex items-center justify-end">
                            <button
                              onClick={() => handleSubItemClick("/counters", "Counters")}
                              className="text-xs sm:text-sm font-bold text-gray-900 hover:text-black transition-colors hover:underline cursor-pointer flex items-center gap-1"
                            >
                              View All Counters →
                            </button>
                          </div>

                          {/* 6 Counter Items matching Tables text size & font */}
                          <div className="flex flex-col space-y-2 pt-0.5">
                            {COUNTER_ITEMS.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => handleSubItemClick("/counters", "Counters", subItem.name)}
                                className="group/item relative flex items-center text-left cursor-pointer transition-all duration-200 w-full py-0.5"
                              >
                                <span className="relative text-[15px] sm:text-[16px] font-semibold text-gray-900 font-sans tracking-tight transition-all duration-200 group-hover/item:translate-x-1.5">
                                  {subItem.name}
                                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover/item:w-full" />
                                </span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => {
                setCountersOpen(false);
                setTablesOpen(false);
                setCupboardsOpen(false);
                setNavLoadingKey((prev) => prev + 1);
                setActiveNav("Contact");
                const el = document.querySelector("#contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-5 py-2.5 border border-gray-900 text-gray-900 text-xs sm:text-sm font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer shadow-xs active:scale-95 hover:shadow-md"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Clean Hamburger & Close Icon matching screenshot) */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setCountersOpen(false);
                setTablesOpen(false);
                setCupboardsOpen(false);
              }}
              className="p-1.5 sm:p-2 text-gray-900 hover:text-black hover:bg-gray-100 rounded-md transition-colors focus:outline-none cursor-pointer flex items-center justify-center active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X size={26} className="text-gray-900 stroke-[2.2]" />
              ) : (
                <Menu size={26} className="text-gray-900 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. TABLES: FULL WIDTH EXPANDABLE PANEL WITH 2 IMAGES
         ======================================================== */}
      <AnimatePresence>
        {tablesOpen && (
          <motion.div
            key="tables-fullwidth-panel"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fullWidthPanelVariants}
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-b border-x border-gray-200/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] z-40 overflow-hidden rounded-b-2xl"
          >
            <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-7 sm:py-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* 1. Office Column (9 Items) */}
                <div className="lg:col-span-3 space-y-3.5">
                  <h3 className="text-black font-extrabold text-lg sm:text-xl font-sans tracking-wide pb-2.5 border-b border-gray-200 select-none cursor-default">
                    Office
                  </h3>

                  <div className="flex flex-col space-y-2 pt-1">
                    {OFFICE_TABLES.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubItemClick("/tables", "Tables", subItem.name)}
                        className="group/office flex items-center text-left w-full py-0.5 cursor-pointer"
                      >
                        <span className="relative text-[15px] sm:text-[16px] font-semibold text-gray-900 font-sans tracking-tight transition-all duration-200 group-hover/office:translate-x-1.5">
                          {subItem.name}
                          <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover/office:w-full" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Home Column (9 Items) */}
                <div className="lg:col-span-3 space-y-3.5">
                  <h3 className="text-black font-extrabold text-lg sm:text-xl font-sans tracking-wide pb-2.5 border-b border-gray-200 select-none cursor-default">
                    Home
                  </h3>

                  <div className="flex flex-col space-y-2 pt-1">
                    {HOME_TABLES.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubItemClick("/tables", "Tables", subItem.name)}
                        className="group/home flex items-center text-left w-full py-0.5 cursor-pointer"
                      >
                        <span className="relative text-[15px] sm:text-[16px] font-semibold text-gray-900 font-sans tracking-tight transition-all duration-200 group-hover/home:translate-x-1.5">
                          {subItem.name}
                          <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover/home:w-full" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Right Side: Only Images & View All Tables Link */}
                <div className="lg:col-span-6 space-y-3.5">
                  <div className="pb-2.5 border-b border-gray-200 flex items-center justify-end">
                    <button
                      onClick={() => handleSubItemClick("/tables", "Tables")}
                      className="text-xs sm:text-sm font-bold text-gray-900 hover:text-black transition-colors hover:underline cursor-pointer flex items-center gap-1"
                    >
                      View All Tables →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-1">
                    {/* Image 1: Round Meeting Table */}
                    <div
                      onClick={() => handleSubItemClick("/tables", "Tables", "Meeting Tables")}
                      className="group/card cursor-pointer relative w-full h-[260px] sm:h-[290px] lg:h-[310px] rounded-xl overflow-hidden bg-white shadow-xs border border-gray-200/70 transition-all duration-300 group-hover/card:shadow-md group-hover/card:border-gray-300"
                    >
                      <Image
                        src="/assets/wk/wk01.jpg"
                        alt="Round Meeting Table"
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Image 2: Dining Table */}
                    <div
                      onClick={() => handleSubItemClick("/tables", "Tables", "Dining Tables")}
                      className="group/card cursor-pointer relative w-full h-[260px] sm:h-[290px] lg:h-[310px] rounded-xl overflow-hidden bg-white shadow-xs border border-gray-200/70 transition-all duration-300 group-hover/card:shadow-md group-hover/card:border-gray-300"
                    >
                      <Image
                        src="/assets/dt/dt12.jpg"
                        alt="Dining Table"
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          3. CUPBOARDS & RACKS: FULL WIDTH EXPANDABLE PANEL (NO IMAGES)
         ======================================================== */}
      <AnimatePresence>
        {cupboardsOpen && (
          <motion.div
            key="cupboards-fullwidth-panel"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fullWidthPanelVariants}
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-b border-x border-gray-200/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] z-40 overflow-hidden rounded-b-2xl"
          >
            <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-7 sm:py-8">
              
              {/* 2 Main Halves: Office (Left) & Home (Right), Each with 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                
                {/* 1. Office Half */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2.5 border-b border-gray-200">
                    <h3 className="text-black font-extrabold text-lg sm:text-xl font-sans tracking-wide select-none cursor-default">
                      Office
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                    {/* Office Cupboards */}
                    <div className="flex flex-col space-y-2">
                      {OFFICE_CUPBOARDS.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubItemClick("/cupboards", "Cupboards", subItem.name)}
                          className="group/cupboard flex items-center text-left w-full py-0.5 cursor-pointer"
                        >
                          <span className="relative text-[15px] sm:text-[16px] font-semibold text-gray-900 font-sans tracking-tight transition-all duration-200 group-hover/cupboard:translate-x-1.5">
                            {subItem.name}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover/cupboard:w-full" />
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Office Category Showcase Image */}
                    <div
                      onClick={() => handleSubItemClick("/cupboards?category=Office", "Cupboards")}
                      className="group/card cursor-pointer relative w-full h-[190px] sm:h-[200px] rounded-xl overflow-hidden bg-gray-100 shadow-xs border border-gray-200/70 transition-all duration-300 group-hover/card:shadow-md group-hover/card:border-gray-300"
                    >
                      <Image
                        src="/assets/category/storage-cupboards.jpg"
                        alt="Office Cupboards & Racks"
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3.5 sm:p-4">
                        <span className="text-white text-xs sm:text-sm font-bold tracking-wide flex items-center gap-1 group-hover/card:underline">
                          Office Collection →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Home Half */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2.5 border-b border-gray-200">
                    <h3 className="text-black font-extrabold text-lg sm:text-xl font-sans tracking-wide select-none cursor-default">
                      Home
                    </h3>
                    <button
                      onClick={() => handleSubItemClick("/cupboards", "Cupboards")}
                      className="text-xs sm:text-sm font-bold text-gray-900 hover:text-black transition-colors hover:underline cursor-pointer flex items-center gap-1"
                    >
                      View All Cupboards & Racks →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                    {/* Home Cupboards */}
                    <div className="flex flex-col space-y-2">
                      {HOME_CUPBOARDS.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubItemClick("/cupboards", "Cupboards", subItem.name)}
                          className="group/homecup flex items-center text-left w-full py-0.5 cursor-pointer"
                        >
                          <span className="relative text-[15px] sm:text-[16px] font-semibold text-gray-900 font-sans tracking-tight transition-all duration-200 group-hover/homecup:translate-x-1.5">
                            {subItem.name}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover/homecup:w-full" />
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Home Racks */}
                    <div className="flex flex-col space-y-2">
                      {HOME_RACKS.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubItemClick("/cupboards", "Cupboards", subItem.name)}
                          className="group/homerack flex items-center text-left w-full py-0.5 cursor-pointer"
                        >
                          <span className="relative text-[15px] sm:text-[16px] font-semibold text-gray-900 font-sans tracking-tight transition-all duration-200 group-hover/homerack:translate-x-1.5">
                            {subItem.name}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover/homerack:w-full" />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          MOBILE MENU DRAWER & ACCORDIONS (COUNTERS, TABLES, CUPBOARDS)
         ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden w-full bg-white border-t border-gray-100 px-5 pt-3 pb-24 space-y-3 overflow-y-auto overscroll-contain h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] shadow-2xl"
          >
          {navItems.map((item) => {
            const isCounters = item.name === "Counters";
            const isTables = item.name === "Tables";
            const isCupboards = item.name === "Cupboards";
            const isActive = activeNav === item.name;

            // Counters Accordion on Mobile
            if (isCounters) {
              return (
                <div key={item.name} className="border-b border-gray-100 pb-3">
                  <button
                    type="button"
                    onClick={() => setMobileCountersOpen(!mobileCountersOpen)}
                    className={`w-full text-left py-2.5 rounded-md text-base font-bold transition-colors flex items-center justify-between ${
                      mobileCountersOpen || isActive
                        ? "text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    <span>Counters</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileCountersOpen ? "rotate-180 text-gray-900" : "rotate-0 text-gray-500"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileCountersOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="pl-3 pt-3 space-y-2 overflow-hidden"
                      >
                        <div className="pb-1 border-b border-gray-100 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={() => handleSubItemClick("/counters", "Counters")}
                            className="text-xs font-bold text-gray-900 hover:text-black transition-colors hover:underline cursor-pointer"
                          >
                            View All Counters →
                          </button>
                        </div>
                        <div className="space-y-1.5 pl-1">
                          {COUNTER_ITEMS.map((subItem) => (
                            <button
                              type="button"
                              key={subItem.id}
                              onClick={() => handleSubItemClick("/counters", "Counters", subItem.name)}
                              className="w-full text-left py-1 text-sm font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Tables Accordion on Mobile
            if (isTables) {
              return (
                <div key={item.name} className="border-b border-gray-100 pb-3">
                  <button
                    type="button"
                    onClick={() => setMobileTablesOpen(!mobileTablesOpen)}
                    className={`w-full text-left py-2.5 rounded-md text-base font-bold transition-colors flex items-center justify-between ${
                      mobileTablesOpen || isActive
                        ? "text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    <span>Tables</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileTablesOpen ? "rotate-180 text-gray-900" : "rotate-0 text-gray-500"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileTablesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="pl-3 pt-3 space-y-4 overflow-hidden"
                      >
                        <div className="pb-1 border-b border-gray-100 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={() => handleSubItemClick("/tables", "Tables")}
                            className="text-xs font-bold text-gray-900 hover:text-black transition-colors hover:underline cursor-pointer"
                          >
                            View All Tables →
                          </button>
                        </div>

                        {/* Office Section */}
                        <div className="space-y-2">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-black border-b border-gray-200 pb-1">
                            Office
                          </div>
                          <div className="space-y-1.5 pl-1">
                            {OFFICE_TABLES.map((subItem) => (
                              <button
                                type="button"
                                key={subItem.id}
                                onClick={() => handleSubItemClick("/tables", "Tables", subItem.name)}
                                className="w-full text-left py-1 text-sm font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Home Section */}
                        <div className="space-y-2">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-black border-b border-gray-200 pb-1">
                            Home
                          </div>
                          <div className="space-y-1.5 pl-1">
                            {HOME_TABLES.map((subItem) => (
                              <button
                                type="button"
                                key={subItem.id}
                                onClick={() => handleSubItemClick("/tables", "Tables", subItem.name)}
                                className="w-full text-left py-1 text-sm font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Cupboards Accordion on Mobile
            if (isCupboards) {
              return (
                <div key={item.name} className="border-b border-gray-100 pb-3">
                  <button
                    type="button"
                    onClick={() => setMobileCupboardsOpen(!mobileCupboardsOpen)}
                    className={`w-full text-left py-2.5 rounded-md text-base font-bold transition-colors flex items-center justify-between ${
                      mobileCupboardsOpen || isActive
                        ? "text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    <span>Cupboards & Racks</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileCupboardsOpen ? "rotate-180 text-gray-900" : "rotate-0 text-gray-500"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileCupboardsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="pl-3 pt-3 space-y-4 overflow-hidden"
                      >
                        <div className="pb-1 border-b border-gray-100 flex items-center justify-end">
                          <button
                            type="button"
                            onClick={() => handleSubItemClick("/cupboards", "Cupboards")}
                            className="text-xs font-bold text-gray-900 hover:text-black transition-colors hover:underline cursor-pointer"
                          >
                            View All Cupboards & Racks →
                          </button>
                        </div>

                        {/* Office Section */}
                        <div className="space-y-2">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-black border-b border-gray-200 pb-1">
                            Office
                          </div>
                          
                          <div className="pl-1 space-y-1">
                            {OFFICE_CUPBOARDS.map((subItem) => (
                              <button
                                type="button"
                                key={subItem.id}
                                onClick={() => handleSubItemClick("/cupboards", "Cupboards", subItem.name)}
                                className="w-full text-left py-1 text-sm font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer"
                              >
                                {subItem.name}
                              </button>
                            ))}

                          </div>
                        </div>

                        {/* Home Section */}
                        <div className="space-y-2">
                          <div className="text-xs font-extrabold uppercase tracking-wider text-black border-b border-gray-200 pb-1">
                            Home
                          </div>
                          
                          <div className="pl-1 space-y-1">
                            {HOME_CUPBOARDS.map((subItem) => (
                              <button
                                type="button"
                                key={subItem.id}
                                onClick={() => handleSubItemClick("/cupboards", "Cupboards", subItem.name)}
                                className="w-full text-left py-1 text-sm font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer"
                              >
                                {subItem.name}
                              </button>
                            ))}
                            {HOME_RACKS.map((subItem) => (
                              <button
                                type="button"
                                key={subItem.id}
                                onClick={() => handleSubItemClick("/cupboards", "Cupboards", subItem.name)}
                                className="w-full text-left py-1 text-sm font-semibold text-gray-900 hover:text-black transition-colors cursor-pointer"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                type="button"
                key={item.name}
                onClick={() => {
                  handleNavClick(item);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2.5 rounded-md text-base font-bold transition-colors flex items-center justify-between ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span>{item.name}</span>
              </button>
            );
          })}

          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveNav("Contact");
                if (!isHome) {
                  router.push("/#contact");
                } else {
                  const el = document.querySelector("#contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="w-full py-3 border border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-all text-sm cursor-pointer shadow-xs active:scale-95"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
  );
}
