"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageSquare, Send, Sparkles, Phone, User, SlidersHorizontal } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { sanitizeInput, isBotSubmission } from "@/utils/security";

interface ProjectConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  "Custom Furniture Design (Bespoke Residential)",
  "Commercial & Corporate Office Fitout",
  "Space Planning & Architectural Consultation",
  "Material Selection & Custom Edging",
  "Delivery & On-Site Installation",
];

const MATERIAL_FINISH_OPTIONS = [
  { id: "warm-woodgrain", label: "Warm Woodgrain Melamine", desc: "Golden oak tone, heat and scratch resistant" },
  { id: "dark-woodgrain", label: "Dark Woodgrain Melamine", desc: "Deep walnut shade, executive corporate & living grain" },
  { id: "matte-solid", label: "Solid Matte Black / White", desc: "Clean minimalist finish with high-impact 2mm PVC edging" },
  { id: "consult", label: "Guide Me / Undecided", desc: "Expert recommendation based on your room lighting & usage" },
];

export default function ProjectConsultationModal({
  isOpen,
  onClose,
  defaultService = "Custom Furniture Design (Bespoke Residential)",
}: ProjectConsultationModalProps) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [selectedFinish, setSelectedFinish] = useState("warm-woodgrain");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    spaceType: "Residential",
    dimensionsOrIdea: "",
    honeypot: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  // Lock body scroll reliably across mobile Safari and desktop browsers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow || "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isBotSubmission(formData.honeypot)) {
      setSubmitted(true);
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    if (isBotSubmission(formData.honeypot)) {
      setSubmitted(true);
      return;
    }

    const safeService = sanitizeInput(selectedService, 80);
    const safeFinish = sanitizeInput(selectedFinish, 50);
    const safeSpace = sanitizeInput(formData.spaceType, 50);
    const safeName = sanitizeInput(formData.name, 60) || "Customer";
    const safePhone = sanitizeInput(formData.phone, 20) || "Not specified";
    const safeDetails = sanitizeInput(formData.dimensionsOrIdea, 600) || "Custom design consultation";

    const message = `Hello JDS Furniture! 👋\n\nI would like to discuss a custom project:\n• Service: ${safeService}\n• Finish Preference: ${safeFinish}\n• Space Type: ${safeSpace}\n• Name: ${safeName}\n• Phone: ${safePhone}\n• Details: ${safeDetails}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm -z-10"
          />

          {/* Centering container that prevents top-clipping on small mobile screens */}
          <div className="min-h-full flex items-center justify-center p-2.5 sm:p-4 md:p-6 py-4 sm:py-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white text-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden flex flex-col max-h-[92dvh] sm:max-h-[88vh]"
            >
              {/* Header: Fixed at top of modal */}
              <div className="shrink-0 bg-gradient-to-r from-gray-950 via-stone-900 to-gray-950 text-white p-4 sm:p-6 relative pr-14 sm:pr-16">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-90 text-neutral-300 hover:text-white transition-all cursor-pointer z-10"
                  aria-label="Close modal"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>

                <div className="flex items-center gap-2 text-[#0074E1] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-1.5">
                  <Sparkles size={14} className="shrink-0" />
                  <span>BESPOKE CONSULTATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight font-sans leading-tight">
                  Discuss Your Project
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-lg leading-relaxed line-clamp-2 sm:line-clamp-none">
                  Share your room dimensions, reference sketches, or project scope. Our master designers will guide you from 3D blueprints to final installation.
                </p>
              </div>

              {submitted ? (
                /* Success Confirmation View */
                <div className="p-6 sm:p-10 text-center space-y-5 overflow-y-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} className="sm:w-9 sm:h-9" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900">Consultation Request Received!</h4>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-gray-900">{formData.name || "valued client"}</span>. Our architectural joinery team will review your requirements and reach out within 24 hours with custom 3D design possibilities.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handleWhatsAppInquiry}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <MessageSquare size={16} />
                      <span>Connect Instantly on WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-xs sm:text-sm rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View: Single smooth scrollable container without nested conflict */
                <form 
                  onSubmit={handleSubmit} 
                  className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-7 space-y-4 sm:space-y-5 custom-scrollbar"
                >
                  
                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700">
                      Select Required Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-base sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0074E1]/30 focus:border-[#0074E1] transition-all font-medium"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

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

                  {/* Material & Finish Preference */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700">
                      <SlidersHorizontal size={13} className="text-[#0074E1] shrink-0" />
                      <span>Material & Finish Preference</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {MATERIAL_FINISH_OPTIONS.map((finish) => {
                        const isSelected = selectedFinish === finish.id;
                        return (
                          <div
                            key={finish.id}
                            onClick={() => setSelectedFinish(finish.id)}
                            className={`p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all select-none active:scale-[0.98] ${
                              isSelected
                                ? "border-[#0074E1] bg-blue-50/70 ring-1 ring-[#0074E1] shadow-xs"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-gray-900">{finish.label}</span>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-[#0074E1]" />
                              )}
                            </div>
                            <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">{finish.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-name" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3 text-gray-400 pointer-events-none" />
                        <input
                          id="modal-name"
                          name="name"
                          autoComplete="name"
                          required
                          maxLength={60}
                          type="text"
                          placeholder="e.g. Ruwan Silva"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-base sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0074E1]/30 focus:border-[#0074E1] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="modal-phone" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-3 text-gray-400 pointer-events-none" />
                        <input
                          id="modal-phone"
                          name="phone"
                          autoComplete="tel"
                          required
                          maxLength={20}
                          type="tel"
                          placeholder="070 109 5008"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-base sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0074E1]/30 focus:border-[#0074E1] transition-all font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Space Type & Idea Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:col-span-1">
                      <label htmlFor="modal-space-type" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700">
                        Space Type
                      </label>
                      <select
                        id="modal-space-type"
                        name="spaceType"
                        value={formData.spaceType}
                        onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-base sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0074E1]/30 focus:border-[#0074E1] transition-all"
                      >
                        <option value="Residential">Residential / Home</option>
                        <option value="Corporate Office">Corporate Office / Banking</option>
                        <option value="Hotel & Hospitality">Hotel / Villa / Resort</option>
                        <option value="Retail & Commercial">Retail / Commercial</option>
                      </select>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label htmlFor="modal-idea" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-700">
                        Project Idea / Space Dimensions
                      </label>
                      <textarea
                        id="modal-idea"
                        name="dimensionsOrIdea"
                        rows={2}
                        maxLength={600}
                        placeholder="e.g. 10-seater boardroom table or 8ft bedroom wardrobe layout..."
                        value={formData.dimensionsOrIdea}
                        onChange={(e) => setFormData({ ...formData, dimensionsOrIdea: e.target.value })}
                        className="w-full px-3.5 py-2 bg-white border border-gray-300 rounded-lg text-base sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0074E1]/30 focus:border-[#0074E1] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Action Buttons: Clean mobile stack & desktop row */}
                  <div className="pt-2 sm:pt-3 flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-3 justify-between items-stretch sm:items-center border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handleWhatsAppInquiry}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:scale-[0.98] rounded-lg text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <MessageSquare size={16} />
                      <span>Instant WhatsApp Chat</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold text-xs tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <Send size={14} />
                      <span>Submit Request</span>
                    </button>
                  </div>

                </form>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
