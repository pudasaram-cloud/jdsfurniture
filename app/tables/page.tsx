"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowRight, SlidersHorizontal, X, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import QuickContactButton from "@/components/QuickContactButton";
import {
  allTables,
  TableProduct,
  TABLE_MAIN_CATEGORIES,
  OFFICE_TABLE_SUBCATEGORIES,
  HOME_TABLE_SUBCATEGORIES,
} from "@/data/tables";

const ITEMS_PER_PAGE = 28;

function TablesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const typeParam = searchParams.get("type") || "";

  // Filter States
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(typeParam);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "name">("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Sync state whenever URL searchParams change (e.g. from Navbar click)
  useEffect(() => {
    setSelectedCategory(categoryParam);
    setSelectedSubcategory(typeParam);
  }, [categoryParam, typeParam]);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...allTables];

    // Main Category Filter
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Subcategory Filter
    if (selectedSubcategory) {
      result = result.filter((p) => p.subcategory === selectedSubcategory);
    }

    // Price Range Filter
    if (priceRange === "under-30k") {
      result = result.filter((p) => p.numericPrice < 30000);
    } else if (priceRange === "30k-50k") {
      result = result.filter((p) => p.numericPrice >= 30000 && p.numericPrice <= 50000);
    } else if (priceRange === "50k-80k") {
      result = result.filter((p) => p.numericPrice >= 50000 && p.numericPrice <= 80000);
    } else if (priceRange === "above-80k") {
      result = result.filter((p) => p.numericPrice > 80000);
    }

    // Search Query (by code or title)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategory, selectedSubcategory, priceRange, searchQuery, sortBy]);

  // Total Pages Calculation
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  // Paginated Slice (28 products per page)
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, priceRange, searchQuery, sortBy]);

  // Lock background body scroll when mobile filter drawer is open
  useEffect(() => {
    if (showFilters && typeof window !== "undefined" && window.innerWidth < 768) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow || "";
      };
    }
  }, [showFilters]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const gridEl = document.getElementById("product-grid-top");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  const activeFilterCount =
    (selectedCategory !== "All" ? 1 : 0) +
    (selectedSubcategory ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedSubcategory("");
    setPriceRange("all");
    setSearchQuery("");
    setSortBy("featured");
    setCurrentPage(1);
  };

  const renderFilterContent = (isMobile = false) => (
    <div className="space-y-6 text-left">
      {/* Panel Top Title */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-200">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-900 font-sans">
          Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </span>
        <div className="flex items-center gap-3">
          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="text-xs text-gray-500 hover:text-black underline cursor-pointer"
            >
              Reset All
            </button>
          )}
          {/* Hide/Close Button */}
          <button
            onClick={() => setShowFilters(false)}
            className="p-1 text-gray-400 hover:text-black cursor-pointer transition-colors flex items-center gap-1 group"
            aria-label="Hide Filters"
            title="Hide Filters"
          >
            {!isMobile && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 group-hover:text-black">
                Hide
              </span>
            )}
            <X size={isMobile ? 18 : 15} />
          </button>
        </div>
      </div>

      {/* Quick Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search model or code..."
          className="w-full pl-9 pr-7 py-2 text-xs border border-gray-300 rounded-xs focus:outline-none focus:border-gray-900 bg-white"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"
          >
            <X size={12} />
          </button>
        )}
      </div>

      {/* 1. Category */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-sans pb-1.5 border-b border-gray-100">
          Category
        </h4>
        <div className="flex flex-col space-y-1.5">
          {TABLE_MAIN_CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? allTables.length
                : allTables.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSubcategory("");
                }}
                className="flex items-center justify-between text-xs py-1 text-left cursor-pointer group"
              >
                <span
                  className={`transition-colors ${
                    isSelected
                      ? "font-extrabold text-black underline underline-offset-4"
                      : "font-medium text-gray-600 group-hover:text-black"
                  }`}
                >
                  {cat === "All" ? "All Tables" : `${cat} Tables`}
                </span>
                <span className="text-[11px] font-mono text-gray-400">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Subcategory (Table Type) */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-sans pb-1.5 border-b border-gray-100">
          Table Type
        </h4>
        <div className="flex flex-col space-y-1.5 max-h-56 overflow-y-auto pr-1">
          <button
            onClick={() => setSelectedSubcategory("")}
            className="flex items-center justify-between text-xs py-1 text-left cursor-pointer group"
          >
            <span
              className={`transition-colors ${
                !selectedSubcategory
                  ? "font-extrabold text-black underline underline-offset-4"
                  : "font-medium text-gray-600 group-hover:text-black"
              }`}
            >
              All Types
            </span>
          </button>

          {(selectedCategory === "All" || selectedCategory === "Home") &&
            HOME_TABLE_SUBCATEGORIES.map((sub) => {
              const isSelected = selectedSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(isSelected ? "" : sub)}
                  className="flex items-center justify-between text-xs py-1 text-left cursor-pointer group"
                >
                  <span
                    className={`transition-colors ${
                      isSelected
                        ? "font-extrabold text-black underline underline-offset-4"
                        : "font-medium text-gray-600 group-hover:text-black"
                    }`}
                  >
                    {sub}
                  </span>
                </button>
              );
            })}

          {(selectedCategory === "All" || selectedCategory === "Office") &&
            OFFICE_TABLE_SUBCATEGORIES.map((sub) => {
              const isSelected = selectedSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(isSelected ? "" : sub)}
                  className="flex items-center justify-between text-xs py-1 text-left cursor-pointer group"
                >
                  <span
                    className={`transition-colors ${
                      isSelected
                        ? "font-extrabold text-black underline underline-offset-4"
                        : "font-medium text-gray-600 group-hover:text-black"
                    }`}
                  >
                    {sub}
                  </span>
                </button>
              );
            })}
        </div>
      </div>

      {/* 3. Price Range */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-sans pb-1.5 border-b border-gray-100">
          Price Range
        </h4>
        <div className="flex flex-col space-y-2 text-xs">
          {[
            { id: "all", label: "All Prices" },
            { id: "under-30k", label: "Under LKR 30,000" },
            { id: "30k-50k", label: "LKR 30,000 – 50,000" },
            { id: "50k-80k", label: "LKR 50,000 – 80,000" },
            { id: "above-80k", label: "Above LKR 80,000" },
          ].map((item) => {
            const isSelected = priceRange === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPriceRange(item.id)}
                className="flex items-center gap-2 text-left cursor-pointer group py-0.5"
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? "border-black bg-black"
                      : "border-gray-300 group-hover:border-black"
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span
                  className={`transition-colors ${
                    isSelected ? "font-bold text-black" : "text-gray-600 group-hover:text-black"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Dynamic Title & Breadcrumb calculation
  const pageTitle = selectedSubcategory
    ? selectedSubcategory
    : selectedCategory && selectedCategory !== "All"
    ? `${selectedCategory} Tables`
    : "All Tables";

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      {/* Fixed Navbar (always visible on this page) */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20">
        
        {/* Top Header Row matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* Dynamic Breadcrumb */}
          <div className="text-xs sm:text-sm font-medium text-gray-500 flex items-center gap-1.5 select-none shrink-0">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            {selectedSubcategory || (selectedCategory && selectedCategory !== "All") ? (
              <>
                <Link
                  href="/tables"
                  onClick={resetFilters}
                  className="hover:text-black transition-colors"
                >
                  Tables
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-semibold">{pageTitle}</span>
              </>
            ) : (
              <span className="text-gray-900 font-semibold">All tables</span>
            )}
          </div>

          {/* Large Bold Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-sans">
            {pageTitle}
          </h1>
        </div>

        {/* Controls Bar matching screenshot */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-gray-200">
          
          {/* Left: Show Filters Button + Product Count */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-5 py-2.5 border border-gray-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-98 ${
                showFilters || activeFilterCount > 0
                  ? "bg-gray-900 text-white shadow-xs"
                  : "bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              <SlidersHorizontal size={14} />
              <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-white text-gray-900 text-[10px] font-bold flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Product Count Display */}
            <span className="text-sm sm:text-base font-semibold text-gray-700">
              {filteredProducts.length} Products
            </span>
          </div>

          {/* Right: Sort by Control */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-medium text-gray-500 hidden sm:inline">
              Sort by:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none px-4 py-2.5 pr-8 border border-gray-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs bg-white text-gray-900 hover:bg-gray-50 cursor-pointer focus:outline-none transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-gray-900">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area: Side Filter Panel + Product Grid */}
        <div className="flex items-start gap-8 lg:gap-12 pt-8">
          
          {/* 1. Desktop Left Side Filter Panel (Fixed/Sticky on scroll) */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 260 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:block shrink-0 sticky top-24 self-start z-20 overflow-hidden"
              >
                <div className="w-[260px] pr-6 border-r border-gray-200 max-h-[calc(100vh-7.5rem)] overflow-y-auto overscroll-contain custom-scrollbar pb-8">
                  {renderFilterContent()}
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* 2. Mobile Slide-Over Filter Drawer */}
          <AnimatePresence>
            {showFilters && (
              <div className="md:hidden fixed inset-0 z-50 flex">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowFilters(false)}
                  className="fixed inset-0 bg-black/40 backdrop-blur-xs"
                />
                <motion.aside
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-4/5 max-w-xs bg-white h-full max-h-[100dvh] z-10 p-5 sm:p-6 overflow-y-auto overscroll-contain shadow-2xl flex flex-col justify-between"
                >
                  {renderFilterContent(true)}
                </motion.aside>
              </div>
            )}
          </AnimatePresence>

          {/* 3. Main Product Grid Container */}
          <div className="flex-1 min-w-0">
            {/* Anchor for smooth scroll on page change */}
            <div id="product-grid-top" className="scroll-mt-36" />

            {/* Products Grid matching screenshot (Adaptive 3 or 4 Columns) */}
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-4">
                <p className="text-lg font-semibold text-gray-600">
                  No products found matching your active filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-gray-900 text-white font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-black transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div
                  className={`grid gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-14 transition-all duration-300 ${
                    showFilters
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {paginatedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/tables/${product.id}${
                        selectedSubcategory
                          ? `?type=${encodeURIComponent(selectedSubcategory)}`
                          : selectedCategory && selectedCategory !== "All"
                          ? `?category=${encodeURIComponent(selectedCategory)}`
                          : ""
                      }`}
                      className="group flex flex-col justify-between space-y-4 cursor-pointer"
                    >
                      {/* Product Image Area */}
                      <div className="relative w-full aspect-square flex items-center justify-center p-3 rounded-lg bg-white transition-transform duration-300 group-hover:-translate-y-1">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>

                      {/* Product Info & Action Button */}
                      <div className="space-y-3 pt-1">
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
                  ))}
                </div>

                {/* Pagination Navigation Bar (28 products per page) */}
                {totalPages > 1 && (
                  <div className="mt-14 sm:mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5">
                    
                    {/* Showing Products Counter */}
                    <div className="text-xs sm:text-sm text-gray-500 font-medium order-2 sm:order-1">
                      Showing{" "}
                      <span className="font-bold text-gray-900">
                        {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                      </span>{" "}
                      –{" "}
                      <span className="font-bold text-gray-900">
                        {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}
                      </span>{" "}
                      of{" "}
                      <span className="font-bold text-gray-900">{filteredProducts.length}</span> Products
                    </div>

                    {/* Text-Only Pagination Controls (No Boxes) */}
                    <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2 select-none">
                      {/* Previous Button (Only visible from page 2 onwards) */}
                      {currentPage > 1 && (
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors text-gray-900 hover:text-black hover:underline cursor-pointer active:scale-95"
                          aria-label="Previous Page"
                        >
                          <ChevronLeft size={16} />
                          <span>PREVIOUS</span>
                        </button>
                      )}

                      {/* Page Numbers (Text Only) */}
                      <div className="flex items-center gap-3 sm:gap-5">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                          const isActive = currentPage === pageNum;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer py-1 px-1 ${
                                isActive
                                  ? "text-black font-extrabold underline underline-offset-6 decoration-2"
                                  : "text-gray-400 hover:text-black"
                              }`}
                              aria-label={`Page ${pageNum}`}
                              aria-current={isActive ? "page" : undefined}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>

                      {/* Next Button (Only visible if not on the last page) */}
                      {currentPage < totalPages && (
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors text-gray-900 hover:text-black hover:underline cursor-pointer active:scale-95"
                          aria-label="Next Page"
                        >
                          <span>NEXT</span>
                          <ChevronRight size={16} />
                        </button>
                      )}
                    </div>

                  </div>
                )}
              </>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}

export default function TablesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-sm font-mono text-gray-400">Loading catalog...</div>
        </div>
      }
    >
      <TablesContent />
    </Suspense>
  );
}
