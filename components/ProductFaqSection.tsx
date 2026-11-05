"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Check } from "lucide-react";
import { getProductFaqs } from "@/data/faqs";
import { UnifiedProduct } from "@/data/productLookup";
import { SITE_CONFIG } from "@/config/site";
import { sanitizeInput, isBotSubmission } from "@/utils/security";

interface ProductFaqSectionProps {
  product: UnifiedProduct;
}

export default function ProductFaqSection({ product }: ProductFaqSectionProps) {
  // First item open by default matching reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Contact form state with anti-bot honeypot
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Retrieve FAQs from data file (defaults to standard FAQs, supports custom ones per product/category)
  const faqs = getProductFaqs(product);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot trap: If honeypot filled, drop submission silently
    if (isBotSubmission(formState.honeypot)) {
      setIsSubmitted(true);
      setFormState({ name: "", phone: "", message: "", honeypot: "" });
      return;
    }

    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) return;

    const safeName = sanitizeInput(formState.name, 60);
    const safePhone = sanitizeInput(formState.phone, 20);
    const safeMessage = sanitizeInput(formState.message, 800);
    const safeTitle = sanitizeInput(product.title, 80);
    const safeCode = sanitizeInput(product.code, 30);

    // Send via WhatsApp matching website communication standard
    const text = `Hello JDS Furniture! 👋\n\nI have a question about ${safeTitle} (${safeCode}):\n\n• Name: ${safeName}\n• Phone: ${safePhone}\n• Message: ${safeMessage}`;

    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    }

    setIsSubmitted(true);
    setFormState({ name: "", phone: "", message: "", honeypot: "" });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section className="w-full pt-16 sm:pt-24 pb-16 border-t border-gray-200 mt-16 sm:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
        
        {/* =========================================================
            LEFT COLUMN: FAQs Accordion List (Sticky when shorter than form)
           ========================================================= */}
        <div className="lg:col-span-7 flex flex-col faq-sticky self-start">
          {/* Main FAQs Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight font-sans mb-6 sm:mb-8">
            FAQs
          </h2>

          {/* Accordion Items */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id || index}
                  className="border-b border-gray-200/90 transition-colors"
                >
                  {/* Question Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer select-none focus:outline-none"
                  >
                    <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-black font-sans leading-snug pr-4 transition-colors">
                      {faq.question}
                    </span>

                    {/* Right Toggle Icon: "X" when open, "+" when closed */}
                    <div className="shrink-0 flex items-center justify-center w-6 h-6 text-gray-900">
                      {isOpen ? (
                        <X size={20} className="stroke-[2.2]" />
                      ) : (
                        <Plus size={20} className="stroke-[2.2]" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Answer Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-6 pr-4 sm:pr-8 font-normal font-sans">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: "Didn't find the answer you're looking for?" Form (Sticky sidebar while FAQs scroll)
           ========================================================= */}
        <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0 faq-sticky self-start">
          <div className="space-y-1 mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-black font-sans tracking-tight">
              Didn’t find the answer you’re looking for?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-normal font-sans">
              Don’t hesitate to contact us — we’re happy to help!
            </p>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4">
            {/* Hidden Anti-Bot Honeypot Field */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website_hp"
                tabIndex={-1}
                autoComplete="off"
                value={formState.honeypot}
                onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
              />
            </div>

            <div>
              <input
                id="faq-contact-name"
                type="text"
                name="name"
                autoComplete="name"
                maxLength={60}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Name"
                required
                className="w-full px-4 py-3.5 border border-gray-300 rounded-none text-sm placeholder:text-gray-400 text-gray-900 bg-white focus:outline-none focus:border-black transition-colors font-sans"
              />
            </div>

            <div>
              <input
                id="faq-contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                maxLength={20}
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                placeholder="Phone number"
                required
                className="w-full px-4 py-3.5 border border-gray-300 rounded-none text-sm placeholder:text-gray-400 text-gray-900 bg-white focus:outline-none focus:border-black transition-colors font-sans"
              />
            </div>

            <div>
              <textarea
                id="faq-contact-message"
                name="message"
                rows={5}
                maxLength={800}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Message"
                required
                className="w-full px-4 py-3.5 border border-gray-300 rounded-none text-sm placeholder:text-gray-400 text-gray-900 bg-white focus:outline-none focus:border-black transition-colors resize-none font-sans"
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-8 py-3.5 border border-black bg-black text-white hover:bg-white hover:text-black text-xs sm:text-sm font-semibold tracking-wider rounded-none transition-all duration-200 cursor-pointer active:scale-95 shadow-xs font-sans"
              >
                Send message
              </button>
            </div>

            {/* Submission confirmation toast */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2"
              >
                <Check size={16} className="text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been prepared for WhatsApp chat.</span>
              </motion.div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
