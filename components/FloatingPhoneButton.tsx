'use client';

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function FloatingPhoneButton() {
  const { language } = useLanguage();
  const label =
    language === "en"
      ? "Chat via WhatsApp with Service & Renovation"
      : "Chat WhatsApp dengan Servis & Renovasi";

  return (
    <motion.a
      href="https://wa.me/6285210539485"
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 shadow-xl shadow-slate-900/20 transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 md:bottom-8 md:right-8"
    >
      <span className="sr-only">{label}</span>
      <Phone className="h-6 w-6 text-white" aria-hidden="true" />
    </motion.a>
  );
}
