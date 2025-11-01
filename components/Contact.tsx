'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function Contact() {
  const { t, language } = useLanguage();

  return (
    <section
      id="contact"
      className="mx-auto mt-20 max-w-6xl rounded-3xl bg-white px-6 py-16 shadow-lg sm:px-12 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="grid gap-12 lg:grid-cols-[1fr_1.1fr]"
      >
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            {t.contact.title}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t.contact.description}
          </h2>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <p>
              <strong className="font-semibold text-slate-900">
                {t.contact.details.address}
              </strong>
              <br />
              Keboiwa Selatan, Gg. Mangga, Banjar Lepang, Denpasar, Bali
            </p>
            <p>
              <strong className="font-semibold text-slate-900">
                {t.contact.details.phone}
              </strong>
              <br />
              <Link href="tel:+6285210539485" className="text-slate-700 underline-offset-4 hover:underline">
                +62 852-1053-9485
              </Link>
            </p>
            <p>
              <strong className="font-semibold text-slate-900">
                {t.contact.details.email}
              </strong>
              <br />
              <Link href="mailto:Akun.agnes99.an@mail.com" className="text-slate-700 underline-offset-4 hover:underline">
                Akun.agnes99.an@mail.com
              </Link>
            </p>
            <p className="text-xs text-slate-500">
              {language === "en"
                ? "Reach us via WhatsApp for the quickest response."
                : "Hubungi kami melalui WhatsApp untuk respon lebih cepat."}
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner backdrop-blur">
            <h3 className="text-base font-semibold text-slate-900">
              {language === "en" ? "Quick Contact" : "Kontak Cepat"}
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              {language === "en"
                ? "Reach us directly via WhatsApp or phone for fast assistance."
                : "Hubungi kami melalui WhatsApp atau telepon untuk respon cepat."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/6285210539485"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                {language === "en" ? "Chat via WhatsApp" : "Chat lewat WhatsApp"}
              </Link>
              <Link
                href="tel:+6285210539485"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-200"
              >
                {language === "en" ? "Call Now" : "Telepon Sekarang"}
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <iframe
              title={
                language === "en"
                  ? "Google Maps - Service & Renovation"
                  : "Google Maps - Servis & Renovasi"
              }
              src="https://www.google.com/maps?q=-8.6383802,115.1842048&z=17&hl=id&output=embed"
              loading="lazy"
              className="h-64 w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
