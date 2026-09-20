import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  GOOGLE_MAPS_URL,
  SHOP_CITY,
  SHOP_COUNTRY,
  SHOP_DISTRICT,
  SHOP_EMAIL,
  SHOP_HOURS_CLOSE,
  SHOP_HOURS_OPEN,
  SHOP_LOCALITY,
  SHOP_NAME,
  SHOP_NAME_EN,
  SHOP_PHONE_LINK,
  SHOP_PIN,
  SHOP_STATE,
  SHOP_STREET,
} from "@/config/shop";
import { SITE_LANGUAGES, SITE_LOCALE, SITE_URL } from "@/config/site";

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const SEO_TITLE = "संतकृपा मेडिकल अँड जनरल स्टोअर, आळंदी | २४ तास मेडिकल स्टोअर";
const SEO_DESCRIPTION =
  "आळंदी देवाची येथील विश्वासू २४ तास मेडिकल स्टोअर — Santkrupa Medical & General Store. औषधे, हेल्थकेअर व दैनंदिन उत्पादने. फोन: +91 99229 69583.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    "मेडिकल स्टोअर आळंदी",
    "medical store Alandi Devachi",
    "24 hours medical store Alandi",
    "औषध दुकान आळंदी देवाची",
    "pharmacy Alandi Pune",
    "Santkrupa Medical",
    "Santkrupa Medical and General Store",
    "medical store near Alandi",
  ],
  authors: [{ name: SHOP_NAME_EN }],
  creator: SHOP_NAME_EN,
  publisher: SHOP_NAME_EN,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: "/",
    siteName: SHOP_NAME_EN,
    type: "website",
    locale: SITE_LOCALE,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Santkrupa Medical & General Store — 24 hours medical store in Alandi Devachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fffdf9",
  width: "device-width",
  initialScale: 1,
};

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Pharmacy",
      "@id": `${SITE_URL}/#pharmacy`,
      name: SHOP_NAME_EN,
      alternateName: "संतकृपा मेडिकल अँड जनरल स्टोअर",
      description: SEO_DESCRIPTION,
      url: SITE_URL,
      telephone: `+${SHOP_PHONE_LINK.replace(/^\+/, "")}`,
      email: SHOP_EMAIL,
      image: `${SITE_URL}/opengraph-image`,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP_STREET,
        addressLocality: SHOP_LOCALITY,
        addressRegion: SHOP_STATE,
        postalCode: SHOP_PIN,
        addressCountry: SHOP_COUNTRY,
      },
      areaServed: [
        {
          "@type": "City",
          name: `${SHOP_CITY}, ${SHOP_DISTRICT}, ${SHOP_STATE}`,
        },
        "Areas within 10 km of Alandi Devachi",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: WEEK_DAYS,
          opens: SHOP_HOURS_OPEN,
          closes: SHOP_HOURS_CLOSE,
        },
      ],
      hasMap: GOOGLE_MAPS_URL,
      sameAs: [GOOGLE_MAPS_URL],
      inLanguage: [...SITE_LANGUAGES],
      priceRange: "₹",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SHOP_NAME_EN,
      alternateName: SHOP_NAME,
      inLanguage: [...SITE_LANGUAGES],
      publisher: { "@id": `${SITE_URL}/#pharmacy` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" className={`${devanagari.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fffdf9] text-[#1c1917]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-[#1c1917] focus:px-4 focus:py-2 focus:text-white"
        >
          मुख्य मजकुराकडे जा
        </a>
        <Navbar />
        <div id="main" className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
