'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const highlightStats = [
  { value: "10+", labelKey: "tile" },
  { value: "50+", labelKey: "renovation" },
  { value: "100%", labelKey: "painting" }
] as const;

export function Hero() {
  const { t, language } = useLanguage();

  const highlightLabels = {
    tile: language === "en" ? "Tile Projects" : "Proyek Kramik",
    renovation: language === "en" ? "Renovations" : "Renovasi",
    painting: language === "en" ? "Finishing Satisfaction" : "Kepuasan Finishing"
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 py-16 shadow-lg md:px-12 lg:px-20" id="hero">
      <Image
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
        alt="Renovation background"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover opacity-10"
      />
      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-base text-slate-600 sm:text-lg">
            {t.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://wa.me/6285210539485"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              {t.hero.contactCta}
            </Link>
            <Link
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              {t.hero.galleryCta}
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-600 sm:max-w-sm">
            {highlightStats.map((stat) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <dt className="font-semibold text-slate-500">{highlightLabels[stat.labelKey]}</dt>
                <dd className="text-2xl font-bold text-slate-900">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-md sm:p-8"
        >
          <div className="grid gap-4">
            <div className="rounded-2xl bg-slate-900 px-6 py-8 text-white shadow-inner">
              <h2 className="text-xl font-semibold">
                {t.hero.businessName}
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Keboiwa Selatan, Gg. Mangga, Banjar Lepang, Denpasar, Bali
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-sky-200">
                {language === "en" ? "Licensed & Insured Team" : "Tim Berijin & Terpercaya"}
              </p>
            </div>
            <motion.div
              className="rounded-2xl border border-slate-100 bg-white p-6"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-base font-semibold text-slate-900">
                {language === "en" ? "Why Clients Choose Us" : "Alasan Klien Memilih Kami"}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>
                    {language === "en"
                      ? "Detailed surveys and transparent progress updates."
                      : "Survei detail dan progres pekerjaan yang transparan."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>
                    {language === "en"
                      ? "Premium materials tailored to Denpasar's tropical climate."
                      : "Material premium yang sesuai dengan iklim tropis Denpasar."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>
                    {language === "en"
                      ? "Dedicated team for ceramic, granite, steel, and finishing."
                      : "Tim khusus untuk kramik, granite, baja ringan, dan finishing."}
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
