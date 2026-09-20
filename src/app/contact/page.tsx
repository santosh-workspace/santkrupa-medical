import type { Metadata } from "next";
import { Clock, ExternalLink, Info, Mail, MapPin, Navigation, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  SHOP_ADDRESS,
  SHOP_EMAIL,
  SHOP_NAME,
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_LINK,
  SHOP_TIMINGS,
  SHOP_TIMINGS_NOTE,
  hasAddress,
  hasPhone,
  hasTimings,
} from "@/config/shop";

export const metadata: Metadata = {
  title: "संतकृपा मेडिकल, आळंदी — संपर्क व पत्ता | २४ तास मेडिकल स्टोअर",
  description:
    "Juna Charoli Road, Alandi Devachi — Santkrupa Medical & General Store. दररोज २४ तास खुले. फोन: +91 99229 69583. नकाशावरील स्थान व मार्ग येथे पहा.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 sm:pt-28">
      <section aria-label="संपर्क माहिती" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-[#feefdc] blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 pt-10 pb-10 text-center sm:px-6">
          <AnimatedSection>
            <p className="text-[13px] font-bold tracking-[0.18em] text-[#d96a12] uppercase">
              संपर्क • स्थान • वेळ
            </p>
            <h1 className="text-balance mt-4 text-4xl leading-[1.15] font-bold tracking-tight text-[#1c1917] sm:text-5xl">
              आमच्याशी संपर्क साधा
            </h1>
            <p className="mx-auto mt-5 max-w-2xl rounded-2xl border border-[#f3e7d3] bg-[#fff8f0] px-5 py-4 text-[14.5px] leading-7 text-[#57534e]">
              <Info className="mr-1.5 inline size-4 -translate-y-0.5 text-[#b35410]" aria-hidden />
              दुकानात येण्यापूर्वी आवश्यक उत्पादनाची उपलब्धता फोनवरून तपासू
              शकता — म्हणजे आपली फेरी वाचेल.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section aria-label="तपशील" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection className="space-y-4">
            <div className="rounded-3xl border border-[#ece5d8] bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#1c1917]">{SHOP_NAME}</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold tracking-[0.12em] text-[#78716c] uppercase">
                      पूर्ण पत्ता
                    </span>
                    <span className="mt-1 block text-[15px] leading-7 font-medium text-[#1c1917]">
                      {hasAddress ? SHOP_ADDRESS : "पत्ता लवकरच येथे अद्ययावत केला जाईल."}
                    </span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold tracking-[0.12em] text-[#78716c] uppercase">
                      फोन
                    </span>
                    {hasPhone ? (
                      <a
                        href={`tel:${SHOP_PHONE_LINK}`}
                        className="mt-1 block text-lg font-bold text-[#1c1917] underline decoration-[#fbc384] decoration-2 underline-offset-4 hover:text-[#b35410]"
                      >
                        {SHOP_PHONE_DISPLAY}
                      </a>
                    ) : (
                      <span className="mt-1 block text-[15px] font-medium text-[#78716c]">
                        फोन नंबर लवकरच येथे अद्ययावत केला जाईल.
                      </span>
                    )}
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold tracking-[0.12em] text-[#78716c] uppercase">
                      ईमेल
                    </span>
                    <a
                      href={`mailto:${SHOP_EMAIL}`}
                      className="mt-1 block text-[15px] font-medium break-all text-[#1c1917] underline decoration-[#fbc384] decoration-2 underline-offset-4 hover:text-[#b35410]"
                    >
                      {SHOP_EMAIL}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <Clock className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold tracking-[0.12em] text-[#78716c] uppercase">
                      वेळ
                    </span>
                    <span className="mt-1 block text-[15px] font-medium text-[#1c1917]">
                      {hasTimings ? SHOP_TIMINGS : SHOP_TIMINGS_NOTE}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {hasPhone ? (
                  <a
                    href={`tel:${SHOP_PHONE_LINK}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d96a12] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(217,106,18,0.65)] transition hover:-translate-y-0.5 hover:bg-[#b35410]"
                  >
                    <Phone className="size-4" aria-hidden />
                    कॉल करा
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[#e7e5e4] px-6 py-3.5 text-[15px] font-semibold text-[#78716c]">
                    <Phone className="size-4" aria-hidden />
                    कॉल करा — लवकरच
                  </span>
                )}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1c1917] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
                >
                  <Navigation className="size-4" aria-hidden />
                  मार्ग पहा
                  <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-[#e7dcc8] bg-[#fff8f0]/60 px-6 py-5 text-[13.5px] leading-6 text-[#78716c]">
              कृपया लक्षात ठेवा — वैद्यकीय सल्ल्यासाठी नेहमी डॉक्टरांचा सल्ला
              घ्या. औषधे डॉक्टरांच्या चिठ्ठीनुसारच दिली जातात.
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="overflow-hidden rounded-3xl border border-[#ece5d8] bg-white shadow-[0_30px_70px_-45px_rgba(120,70,20,0.5)]">
            <div className="flex items-center justify-between border-b border-[#ece5d8] px-6 py-4">
              <p className="text-[15px] font-bold text-[#1c1917]">
                नकाशावरील स्थान
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#b35410] hover:underline"
              >
                Google Maps वर उघडा
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>
            <div className="relative h-[380px] sm:h-[460px] lg:h-full lg:min-h-[520px]">
              <iframe
                title={`${SHOP_NAME} — Google Maps स्थान`}
                src={GOOGLE_MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
