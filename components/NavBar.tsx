'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

const NAV_LINK_KEYS = ["about", "services", "gallery", "contact"] as const;

export function NavBar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50"
      >
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full px-4 py-4 transition-all sm:px-6 lg:px-8",
            isScrolled
              ? "bg-white/90 shadow-lg backdrop-blur-lg"
              : "bg-white/70 backdrop-blur",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Link
            href="#hero"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900"
            onClick={closeMenu}
          >
            {t.navigation.brand}
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {NAV_LINK_KEYS.map((key) => (
              <Link
                key={key}
                href={`#${key}`}
                className="transition hover:text-slate-900"
              >
                {t.navigation.links[key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle align="right" variant="minimal" />
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
            >
              <span className="sr-only">
                {isMenuOpen ? "Close navigation" : "Open navigation"}
              </span>
              <div className="relative h-4 w-5">
                <motion.span
                  className="absolute left-0 top-0 h-0.5 w-full bg-current"
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-1.5 h-0.5 w-full bg-current"
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-3 h-0.5 w-full bg-current"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.nav
              className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-4 text-base font-medium text-slate-700">
                {NAV_LINK_KEYS.map((key) => (
                  <Link
                    key={key}
                    href={`#${key}`}
                    className="rounded-2xl px-3 py-2 hover:bg-slate-100"
                    onClick={closeMenu}
                  >
                    {t.navigation.links[key]}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
