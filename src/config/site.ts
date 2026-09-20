/**
 * साइट-स्तरीय SEO कॉन्फिग — एकाच ठिकाणी domain बदला.
 *
 * Custom domain जोडल्यावर फक्त खालील मूल्य बदला (किंवा Vercel मध्ये
 * NEXT_PUBLIC_SITE_URL हे environment variable सेट करा) —
 * canonical, sitemap, robots, OG आणि JSON-LD आपोआप अपडेट होतील.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://santkrupamedical.vercel.app";

export const SITE_LOCALE = "mr_IN";
export const SITE_LANGUAGES = ["mr", "en"] as const;
