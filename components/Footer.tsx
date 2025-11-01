'use client';

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const rightsText = t.footer.rights.replace("{{year}}", String(year));

  return (
    <footer className="mt-20 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16">
        <div>
          <p className="text-sm font-medium">{t.footer.brand}</p>
          <p className="mt-2 text-xs text-slate-400">{rightsText}</p>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:items-end">
          <Link
            href="tel:+6285210539485"
            className="underline-offset-4 hover:text-white hover:underline"
          >
            {t.footer.contactLink}: +62 852-1053-9485
          </Link>
          <LanguageToggle align="right" />
        </div>
      </div>
    </footer>
  );
}
