'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mx-auto mt-20 max-w-6xl rounded-3xl bg-white px-6 py-16 shadow-md sm:px-12 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.about.title}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t.about.businessName}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.about.description}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {t.about.highlights.map((highlight, idx) => (
            <motion.div
              key={highlight}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-slate-200 hover:bg-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 text-sm font-medium text-slate-700">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
