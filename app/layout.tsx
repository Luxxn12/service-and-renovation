import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "next/document";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const businessName = "Servis & Renovasi Kramik, Granite, Baja Ringan, dan Cat";
const businessDescription =
  "Jasa pemasangan kramik, granite, rangka baja ringan, dan pengecatan rumah profesional di Denpasar, Bali.";

export const metadata: Metadata = {
  metadataBase: new URL("https://service-and-renovation.vercel.app/"),
  title: {
    default: businessName,
    template: `%s | ${businessName}`,
  },
  description: businessDescription,
  keywords: [
    "jasa renovasi denpasar",
    "servis kramik bali",
    "pemasangan granite",
    "baja ringan denpasar",
    "pengecatan rumah bali",
    "renovasi rumah bali",
    "kontraktor denpasar",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: businessName,
    description: businessDescription,
    url: "https://service-and-renovation.vercel.app/",
    siteName: businessName,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Servis & Renovasi Kramik, Granite, Baja Ringan, dan Cat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessName,
    description: businessDescription,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  category: "construction",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: businessName,
  description: businessDescription,
  image:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  url: "https://service-and-renovation.vercel.app/",
  telephone: "+62-852-1053-9485",
  email: "Akun.agnes99.an@mail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Keboiwa Selatan, Gg. Mangga, Banjar Lepang",
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    postalCode: "80235",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.6383802,
    longitude: 115.1842048,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Denpasar",
    },
    {
      "@type": "AdministrativeArea",
      name: "Bali",
    },
  ],
  sameAs: [
    "https://www.google.com/maps?q=-8.6383802,115.1842048&z=17&hl=id",
    "https://wa.me/6285210539485",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pemasangan dan renovasi kramik serta granite",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Konstruksi rangka baja ringan",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pengecatan interior dan eksterior rumah",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <Head>
        <meta name="google-site-verification" content="I4KF-_0_m_FrJzJxBxskRdbjb4nNoS_jseU0BYa-uUo" />
      </Head>
      <body
        className={`${inter.variable} antialiased bg-slate-100 text-slate-900`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
