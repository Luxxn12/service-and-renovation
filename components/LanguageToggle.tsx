'use client';

import { motion } from "framer-motion";
import { Globe, Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle({
  align = "right",
  variant = "default",
}: {
  align?: "left" | "center" | "right";
  variant?: "default" | "minimal";
}) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
        variant === "default"
          ? "bg-slate-900 text-white hover:bg-slate-800"
          : "bg-transparent text-slate-700 hover:text-slate-900",
        align === "left" && "justify-start",
        align === "center" && "justify-center",
        align === "right" && "justify-end",
      ]
        .filter(Boolean)
        .join(" ")}
      >
        <span className="h-2 w-2 rounded-full bg-sky-400" />
        {language === "en" ? (
          <Globe className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Languages className="h-4 w-4" aria-hidden="true" />
        )}
    </motion.button>
  );
}
