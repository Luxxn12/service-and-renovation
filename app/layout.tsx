import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Servis & Renovasi Kramik, Granite, Baja Ringan, dan Cat",
  description:
    "Jasa pemasangan kramik, granite, rangka baja ringan, dan pengecatan rumah profesional di Denpasar, Bali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased bg-slate-100 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
