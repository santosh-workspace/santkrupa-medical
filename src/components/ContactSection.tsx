import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
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

export default function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-label="संपर्क आणि पत्ता" className="relative">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          compact ? "py-10" : "py-16 lg:py-24"
        }`}
      >
        <div className="overflow-hidden rounded-[2rem] border border-[#ece5d8] bg-gradient-to-br from-[#fff8f0] via-white to-white shadow-[0_36px_80px_-50px_rgba(120,70,20,0.5)]">
          <div className="grid lg:grid-cols-2">
            <AnimatedSection className="p-7 sm:p-10 lg:p-12">
              <p className="text-[13px] font-bold tracking-[0.18em] text-[#d96a12] uppercase">
                संपर्क • स्थान
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
                दुकानाला नक्की भेट द्या
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-[#57534e]">
                दुकानात येण्यापूर्वी आवश्यक उत्पादनाची उपलब्धता फोनवरून तपासू
                शकता — म्हणजे आपला वेळ वाचेल.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex gap-3.5 rounded-2xl border border-[#ece5d8] bg-white p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold tracking-wide text-[#78716c] uppercase">
                      पत्ता
                    </span>
                    <span className="mt-0.5 block text-[15px] leading-6 font-medium text-[#1c1917]">
                      {hasAddress ? SHOP_ADDRESS : "पत्ता लवकरच येथे अद्ययावत केला जाईल."}
                    </span>
                  </span>
                </li>

                <li className="flex gap-3.5 rounded-2xl border border-[#ece5d8] bg-white p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold tracking-wide text-[#78716c] uppercase">
                      फोन
                    </span>
                    {hasPhone ? (
                      <a
                        href={`tel:${SHOP_PHONE_LINK}`}
                        className="mt-0.5 block text-[15px] font-bold text-[#1c1917] underline decoration-[#fbc384] decoration-2 underline-offset-4 hover:text-[#b35410]"
                      >
                        {SHOP_PHONE_DISPLAY}
                      </a>
                    ) : (
                      <span className="mt-0.5 block text-[15px] font-medium text-[#78716c]">
                        फोन नंबर लवकरच येथे अद्ययावत केला जाईल.
                      </span>
                    )}
                  </span>
                </li>

                <li className="flex gap-3.5 rounded-2xl border border-[#ece5d8] bg-white p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <Clock className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold tracking-wide text-[#78716c] uppercase">
                      दुकानाची वेळ
                    </span>
                    <span className="mt-0.5 block text-[15px] font-medium text-[#1c1917]">
                      {hasTimings ? SHOP_TIMINGS : SHOP_TIMINGS_NOTE}
                    </span>
                  </span>
                </li>

                <li className="flex gap-3.5 rounded-2xl border border-[#ece5d8] bg-white p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3]">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-semibold tracking-wide text-[#78716c] uppercase">
                      ईमेल
                    </span>
                    <a
                      href={`mailto:${SHOP_EMAIL}`}
                      className="mt-0.5 block truncate text-[15px] font-medium text-[#1c1917] underline decoration-[#fbc384] decoration-2 underline-offset-4 hover:text-[#b35410]"
                    >
                      {SHOP_EMAIL}
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {hasPhone ? (
                  <a
                    href={`tel:${SHOP_PHONE_LINK}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#d96a12] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(217,106,18,0.65)] transition hover:-translate-y-0.5 hover:bg-[#b35410]"
                  >
                    <Phone className="size-4" aria-hidden />
                    कॉल करा
                  </a>
                ) : (
                  <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[#e7e5e4] px-6 py-3.5 text-[15px] font-semibold text-[#78716c]">
                    <Phone className="size-4" aria-hidden />
                    कॉल करा — लवकरच
                  </span>
                )}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#1c1917] bg-[#1c1917] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
                >
                  <Navigation className="size-4" aria-hidden />
                  मार्ग पहा
                  <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                </a>
              </div>
              <p className="mt-4 text-[12.5px] leading-5 text-[#a8a29e]">
                {SHOP_NAME} — Google Maps वर स्थान पाहण्यासाठी वरील बटण वापरा.
              </p>
            </AnimatedSection>

            <div className="relative min-h-[320px] border-t border-[#ece5d8] lg:border-t-0 lg:border-l">
              <iframe
                title={`${SHOP_NAME} — नकाशावरील स्थान`}
                src={GOOGLE_MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full grayscale-[25%] contrast-[1.02]"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
