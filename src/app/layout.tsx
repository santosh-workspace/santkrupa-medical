import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SHOP_NAME, SHOP_NAME_EN } from "@/config/shop";

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SHOP_NAME} | विश्वासू मेडिकल स्टोअर`,
  description:
    "आपल्या परिसरातील विश्वासू मेडिकल स्टोअर. औषधे, हेल्थकेअर आणि दैनंदिन आरोग्यविषयक आवश्यक उत्पादने — उपलब्धतेनुसार एकाच ठिकाणी.",
  keywords: [
    "मेडिकल स्टोअर",
    "औषध दुकान",
    "फार्मसी",
    "हेल्थकेअर",
    SHOP_NAME_EN,
    "medical store Maharashtra",
  ],
  authors: [{ name: SHOP_NAME }],
  metadataBase: new URL("https://santkrupa-medical.example.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SHOP_NAME} | आपल्या आरोग्यासाठी विश्वासू मेडिकल स्टोअर`,
    description:
      "दैनंदिन आरोग्यविषयक गरजा, औषधे आणि आवश्यक हेल्थकेअर उत्पादने — उपलब्धतेनुसार एकाच ठिकाणी.",
    type: "website",
    locale: "mr_IN",
    siteName: SHOP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SHOP_NAME} | विश्वासू मेडिकल स्टोअर`,
    description:
      "औषधे, हेल्थकेअर आणि दैनंदिन आरोग्यविषयक आवश्यक उत्पादने — उपलब्धतेनुसार.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fffdf9",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  name: `${SHOP_NAME} (${SHOP_NAME_EN})`,
  description:
    "परिसरातील विश्वासू मेडिकल स्टोअर — दैनंदिन आरोग्यविषयक आवश्यक उत्पादने, उपलब्धतेनुसार.",
  areaServed: "Maharashtra, IN",
  inLanguage: "mr",
  url: "https://santkrupa-medical.example.in",
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
