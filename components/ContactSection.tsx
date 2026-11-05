"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  CheckCircle2,
  MessageSquare,
  User,
  Navigation,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { sanitizeInput, isBotSubmission } from "@/utils/security";

export default function ContactSection() {
  // Form state with anti-bot honeypot
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form submit handler - forwards sanitized enquiry data directly to WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Anti-bot trap: If honeypot is filled, silently drop submission without dispatching
    if (isBotSubmission(formData.honeypot)) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    const safeName = sanitizeInput(formData.name, 60);
    const safePhone = sanitizeInput(formData.phone, 20);
    const safeEmail = sanitizeInput(formData.email, 100);
    const safeMessage = sanitizeInput(formData.message, 800);

    const text = `Hello JDS Furniture! 👋\n\nI would like to make an enquiry:\n• Name: ${safeName}\n• Phone: ${safePhone}\n• Email: ${safeEmail}\n• Message: ${safeMessage}`;

    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // WhatsApp reopen link generator
  const handleWhatsAppDirect = () => {
    const safeName = sanitizeInput(formData.name, 60) || "Customer";
    const safePhone = sanitizeInput(formData.phone, 20) || "Not provided";
    const safeEmail = sanitizeInput(formData.email, 100) || "Not provided";
    const safeMessage = sanitizeInput(formData.message, 800) || "I would like to discuss furniture options.";

    const text = `Hello JDS Furniture! 👋\n\nI would like to make an enquiry:\n• Name: ${safeName}\n• Phone: ${safePhone}\n• Email: ${safeEmail}\n• Message: ${safeMessage}`;

    window.open(
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="w-full relative z-10 bg-white text-gray-900 pt-16 sm:pt-20 pb-20 sm:pb-28 2xl:pb-32 border-t border-gray-200/70 overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Contact Us
          </h2>
        </motion.div>

        {/* ========================================================
            MAIN CONTENT: FORM (LEFT) & INTERACTIVE MAP (RIGHT)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ======================================================
              LEFT COLUMN: CONTACT FORM
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="bg-white rounded-none p-0 sm:p-2 border-0 shadow-none">

              {isSubmitted ? (
                /* Submission Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 text-center space-y-5"
                >
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900 uppercase tracking-tight font-sans">
                      Enquiry Sent!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you for contacting JDS Furniture. Your enquiry details have been forwarded to our WhatsApp team.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer rounded-none font-sans"
                    >
                      <MessageSquare size={16} />
                      <span>Reopen WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          message: "",
                          honeypot: "",
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-none font-sans"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Hidden Anti-Bot Honeypot Field */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* YOUR NAME */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-900 font-sans"
                      >
                        YOUR NAME <span className="text-[#0074E1]">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          type="text"
                          required
                          maxLength={60}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your Name"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm font-sans rounded-none focus:outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* PHONE NUMBER */}
                    <div className="space-y-2 text-left">
                      <label 
                        htmlFor="contact-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-900 font-sans"
                      >
                        PHONE NUMBER <span className="text-[#0074E1]">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          id="contact-phone"
                          name="phone"
                          autoComplete="tel"
                          type="tel"
                          required
                          maxLength={20}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your Phone Number"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm font-sans rounded-none focus:outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: EMAIL ADDRESS */}
                  <div className="space-y-2 text-left">
                    <label 
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-900 font-sans"
                    >
                      EMAIL ADDRESS <span className="text-[#0074E1]">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        maxLength={100}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your Email"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm font-sans rounded-none focus:outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 3: MESSAGE */}
                  <div className="space-y-2 text-left">
                    <label 
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-900 font-sans"
                    >
                      MESSAGE <span className="text-[#0074E1]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      maxLength={800}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your message or requirements here..."
                      className="w-full p-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-sm font-sans rounded-none focus:outline-none focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900 transition-all duration-200 resize-y"
                    />
                  </div>

                  {/* Actions Row: Submit Button Only */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-none font-sans transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-xl active:scale-95 disabled:opacity-75 group"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SENDING TO WHATSAPP...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND YOUR ENQUIRY</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 font-sans text-left pt-1">
                    * We treat all architectural plans, measurements, and personal data with strict privacy. No spam guaranteed.
                  </p>
                </form>
              )}

            </div>
          </motion.div>


          {/* ======================================================
              RIGHT COLUMN: INTERACTIVE MAP & WORKSHOP SHOWCASE
             ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm bg-gray-100 group w-full flex-1 min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
              {/* Responsive Google Maps Iframe */}
              <iframe
                title="JDS Furniture Hanwella Workshop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9883883361435!2d80.07936477652608!3d6.8919916010244275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253a1820e7b6d%3A0x61a27a67997c58c0!2sJDS%20Funiture!5e0!3m2!1sen!2slk!4v1793814704693!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.02) saturate(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Floating Luxury Location Overlay Card */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-lg text-left">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1.5 text-[#0074E1] text-[10px] font-bold uppercase tracking-wider font-sans">
                      <span>VISIT OUR WORKSHOP & SHOWROOM</span>
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-gray-900 truncate font-sans">
                      JDS Furniture Workshop & Showroom
                    </h5>
                    <p className="text-[11px] text-gray-500 truncate font-sans">
                      564/4A, Eriyagolla, Ihala Hanwella, Sri Lanka
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com/?cid=7035314787994851520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-900 hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95 font-sans"
                  >
                    <span>Directions</span>
                    <Navigation size={12} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
