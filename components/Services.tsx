'use client';

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

type ServiceKey = "tile" | "renovation" | "steel" | "painting" | "maintenance";

const iconMap: Record<ServiceKey, ReactElement> = {
  tile: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-sky-500">
      <path
        fill="currentColor"
        d="M11 2H2v9h9V2Zm11 0h-9v9h9V2ZM11 13H2v9h9v-9Zm2 0v9h9v-9h-9Z"
        className="opacity-90"
      />
      <path
        fill="currentColor"
        d="M8 5H5v3h3V5Zm11 0h-3v3h3V5ZM8 16H5v3h3v-3Zm8 0v3h3v-3h-3Z"
        className="opacity-60"
      />
    </svg>
  ),
  renovation: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-sky-500">
      <path
        fill="currentColor"
        d="M4 20v-7h3v7h2v-9h3l-6-7l-6 7h3v9h1Zm9-9v-2h8V6l-4-4l-4 4v3h-2v4h2Z"
        className="opacity-90"
      />
      <path
        fill="currentColor"
        d="M13 14h8v2h-8zm0 4h5v2h-5z"
        className="opacity-60"
      />
    </svg>
  ),
  steel: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-sky-500">
      <path
        fill="currentColor"
        d="M3 5h18v2H3zm2 4h14v2H5zm-2 4h18v2H3zm2 4h14v2H5z"
        className="opacity-90"
      />
      <path
        fill="currentColor"
        d="M7 7h2v10H7zm8 0h2v10h-2z"
        className="opacity-60"
      />
    </svg>
  ),
  painting: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-sky-500">
      <path
        fill="currentColor"
        d="M4 3h16v7h-6v6.132a4 4 0 1 1-4 0V10H4V3Zm2 2v3h12V5H6Zm8 11.868a2 2 0 1 0 2 0V12h-2v4.868Z"
        className="opacity-90"
      />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-sky-500">
      <path
        fill="currentColor"
        d="M13.142 10.536L21 2.677L19.586 1.263l-7.858 7.858a4 4 0 1 0 1.414 1.414ZM6 20h4v2H6z"
        className="opacity-90"
      />
      <path
        fill="currentColor"
        d="M4 12a4 4 0 0 1 5.657 5.657l-2.828 2.829A4 4 0 0 1 4 12Zm2 2a2 2 0 1 0 2.829 2.828L6 19.657A2 2 0 0 0 6 14Z"
        className="opacity-60"
      />
    </svg>
  ),
};

const serviceOrder: ServiceKey[] = [
  "tile",
  "renovation",
  "steel",
  "painting",
  "maintenance",
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="mx-auto mt-20 max-w-6xl px-6 sm:px-12 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.services.title}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t.services.description}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOrder.map((key, idx) => {
            const service = t.services.items[key];
            return (
              <motion.div
                key={key}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.05 }}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-sky-100 p-2 shadow-inner">
                      {iconMap[key]}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
