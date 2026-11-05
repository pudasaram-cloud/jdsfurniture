"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Send,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface FooterProps {
  minimal?: boolean;
}

export default function Footer({ minimal = false }: FooterProps) {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmailInput("");
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      hoverClass: "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20JDS%20Furniture!%20I%20would%20like%20to%20inquire%20about%20your%20services.`,
      hoverClass: "hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/5",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      hoverClass: "hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
          <polygon points="10 15 15 12 10 9 10 15"/>
        </svg>
      ),
    },
  ];


  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Dining & Coffee Tables", href: "#category-tables" },
    { name: "Wardrobes & Storage", href: "#category-cupboards" },
    { name: "Architectural Joinery", href: "#custom-furniture" },
    { name: "Crafting Process", href: "#custom-furniture" },
    { name: "Completed Projects", href: "#our-projects" },
    { name: "Custom Furniture", href: "#custom-furniture" },
    { name: "Contact & Atelier", href: "#contact" },
  ];

  const bespokeServices = [
    { name: "Bespoke Residential Joinery", href: "#custom-furniture" },
    { name: "Corporate & Executive Fit-Outs", href: "#custom-furniture" },
    { name: "Photorealistic 3D CAD Modeling", href: "#contact" },
    { name: "Solid Kiln-Dried Timber Selection", href: "#custom-furniture" },
    { name: "Precision CNC & Hand Crafting", href: "#custom-furniture" },
    { name: "White-Glove Delivery & Assembly", href: "#contact" },
  ];

  // Minimal version for Product Detail page:
  // - Top CTA banner removed
  // - All scroll animations / motion effects removed
  // - Clean static footer with standard border-t
  if (minimal) {
    return (
      <footer className="w-full bg-white text-gray-900 border-t border-gray-200 relative z-10">
        <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
          {/* MAIN FOOTER NAVIGATION (5-COLUMN GRID) */}
          <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Brand & Socials (Span 4) */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <Link
                href="/"
                className="inline-flex items-center group transition-opacity hover:opacity-90 py-1"
              >
                <Image
                  src="/assets/jds-logo.png"
                  alt="JDS Furniture Logo"
                  width={150}
                  height={65}
                  style={{ aspectRatio: "150/65" }}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
                Sri Lanka’s premier bespoke commercial & residential furniture manufacturer. We craft premium office counters, executive tables, storage cupboards, and custom architectural solutions from heavy-duty commercial melamine and architectural powder-coated steel.
              </p>

              {/* Social Media Follow Box */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0074E1] font-mono">
                  CONNECT & PORTFOLIO
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name}`}
                      className={`w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 flex items-center justify-center shadow-xs transition-all duration-300 ${social.hoverClass} hover:scale-105 hover:shadow-md`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links (Span 2) */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0074E1]" />
                <span>EXPLORE</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {quickLinks.map((link) => (
                  <li key={`${link.name}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-gray-900 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                    >
                      <span className="text-gray-400">›</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Bespoke Services (Span 3) */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0074E1]" />
                <span>CRAFT & SERVICES</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {bespokeServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href.startsWith("#") ? `/${service.href}` : service.href}
                      className="text-gray-500 hover:text-gray-900 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                    >
                      <span className="text-gray-400">›</span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Workshop & Contact (Span 3) */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0074E1]" />
                <span>STUDIO & WORKSHOP</span>
              </h4>
              
              <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#0074E1] shrink-0 mt-0.5" />
                  <span>564/4A, Eriyagolla, Ihala Hanwella, Hanwella / Colombo, Sri Lanka</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#0074E1] shrink-0" />
                  <a href="tel:0701095008" className="hover:text-gray-900 transition-colors">
                   070-1095008 / 076-3332010
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#0074E1] shrink-0" />
                  <a href="mailto:jdsfurniture9@gmail.com" className="hover:text-gray-900 transition-colors">
                     jdsfurniture9@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#0074E1] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="text-gray-900 font-medium">Mon – Sat: 8:30 AM – 6:30 PM</p>
                    <p className="text-gray-500">Sundays & Holidays: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM COLOPHON / COPYRIGHT */}
          <div className="py-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 text-center sm:text-left">
              <span>
                © {new Date().getFullYear()} JDS Furniture (Pvt) Ltd. All rights reserved.
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="text-gray-600 font-medium">
                Crafted with Precision & Heirloom Timber
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0.95 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative z-20 bg-white text-gray-900 overflow-hidden border-t border-gray-200/80"
    >
      <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* ========================================================
            1. TOP CALL TO ACTION & CONSULTATION BANNER
           ======================================================== */}
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-gray-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Status */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-3 text-left"
            >
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-mono font-bold tracking-wider text-[#0074E1] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>WORKSHOP OPEN FOR CUSTOM COMMISSIONS</span>
              </div> */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-sans uppercase tracking-tight leading-tight">
                HAVE A SPECIFIC VISION OR ARCHITECTURAL PLAN?
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-normal max-w-xl">
                Speak directly with our master woodworkers and 3D joinery designers. We deliver bespoke craftsmanship for residences, hotels, and executive spaces.
              </p>
            </motion.div>

            {/* Right Column: Catalog / Direct Inquiry Box */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#0074E1] font-mono">
                  {/* <Sparkles size={14} /> */}
                  {/* <span>REQUEST 2026 CATALOG & TIMBER GUIDE</span> */}
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Receive our curated furniture lookbook and direct consultation access.
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={100}
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-xs sm:text-sm rounded-lg focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md hover:shadow-xl active:scale-95"
                  >
                    <span>{subscribed ? "Subscribed!" : "Get Catalog"}</span>
                    <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[11px] text-emerald-600 mt-2 flex items-center gap-1.5 font-medium"
                  >
                    <CheckCircle2 size={13} />
                    Thank you! We will email you our latest timber lookbook shortly.
                  </motion.p>
                )}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ========================================================
            2. MAIN FOOTER NAVIGATION (5-COLUMN GRID)
           ======================================================== */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Socials (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6 text-left"
          >
            <Link
              href="/"
              onClick={(e) => handleSmoothScroll(e, "#")}
              className="inline-flex items-center group transition-opacity hover:opacity-90 py-1"
            >
              <Image
                src="/assets/jds-logo.png"
                alt="JDS Furniture Logo"
                width={150}
                height={65}
                style={{ aspectRatio: "150/65" }}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              Sri Lanka’s premier bespoke commercial & residential furniture manufacturer. We craft premium office counters, executive tables, storage cupboards, and custom architectural solutions from heavy-duty commercial melamine and architectural powder-coated steel.
            </p>

            {/* Social Media Follow Box with Interactive Micro-Buttons */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0074E1] font-mono">
                CONNECT & PORTFOLIO
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name}`}
                    className={`w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 flex items-center justify-center shadow-xs transition-all duration-300 ${social.hoverClass} hover:scale-105 hover:shadow-md`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>


          {/* Column 2: Navigation Links (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4 text-left"
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0074E1]" />
              <span>EXPLORE</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={`${link.name}-${link.href}`}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-500 hover:text-gray-900 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-gray-400">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Bespoke Services (Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4 text-left"
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0074E1]" />
              <span>CRAFT & SERVICES</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {bespokeServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleSmoothScroll(e, service.href)}
                    className="text-gray-500 hover:text-gray-900 hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-gray-400">›</span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Workshop & Contact (Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-4 text-left"
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0074E1]" />
              <span>STUDIO & WORKSHOP</span>
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#0074E1] shrink-0 mt-0.5" />
                <span>564/4A, Eriyagolla, Ihala Hanwella, Hanwella / Colombo, Sri Lanka</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#0074E1] shrink-0" />
                <a href="tel:0701095008" className="hover:text-gray-900 transition-colors">
                 070-1095008 / 076-3332010
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#0074E1] shrink-0" />
                <a href="mailto:jdsfurniture9@gmail.com" className="hover:text-gray-900 transition-colors">
                   jdsfurniture9@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#0074E1] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-gray-900 font-medium">Mon – Sat: 8:30 AM – 6:30 PM</p>
                  <p className="text-gray-500">Sundays & Holidays: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Timber Quality Assurance Badge */}
            {/* <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-xs flex items-center gap-3">
                <ShieldCheck size={24} className="text-[#0074E1] shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Lifetime Craft Guarantee
                  </h5>
                  <p className="text-[11px] text-gray-500">
                    Kiln-cured solid hardwoods with structural joinery warranty.
                  </p>
                </div>
              </div>
            </div> */}

          </motion.div>

        </div>

        {/* ========================================================
            3. BOTTOM COLOPHON / COPYRIGHT & SCROLL TO TOP
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="py-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} JDS Furniture (Pvt) Ltd. All rights reserved.
            </span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="text-gray-600 font-medium">
              Crafted with Precision & Heirloom Timber
            </span>
          </div>
          

          {/* <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 shadow-xs transition-all duration-200 cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span className="text-xs uppercase font-mono font-bold tracking-wider">Back to Top</span>
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div> */}
        </motion.div>

      </div>
    </motion.footer>
  );
}

