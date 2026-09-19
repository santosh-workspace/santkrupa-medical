import Link from "next/link";
import { Cross, MapPin, Phone } from "lucide-react";
import {
  GOOGLE_MAPS_URL,
  SHOP_NAME,
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_LINK,
  SHOP_TAGLINE,
  hasPhone,
} from "@/config/shop";

export default function Footer() {
  return (
    <footer className="border-t border-[#ece5d8] bg-[#fbf7f1]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-2xl bg-[#1c1917] text-[#feefdc]">
                <Cross className="size-5" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[17px] font-bold text-[#1c1917]">
                  {SHOP_NAME}
                </span>
                <span className="block text-[11px] font-medium tracking-[0.14em] text-[#b35410] uppercase">
                  विश्वासू मेडिकल स्टोअर
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[14.5px] leading-7 text-[#57534e]">
              {SHOP_TAGLINE} दैनंदिन आरोग्यविषयक गरजा आणि आवश्यक उत्पादने —
              उपलब्धतेनुसार — जवळच मिळाव्यात, हाच आमचा प्रयत्न.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {hasPhone ? (
                <a
                  href={`tel:${SHOP_PHONE_LINK}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1c1917] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-black"
                >
                  <Phone className="size-4" aria-hidden />
                  {SHOP_PHONE_DISPLAY}
                </a>
              ) : null}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#e7dcc8] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#1c1917] transition hover:border-[#d96a12]/40 hover:bg-[#fff8f0]"
              >
                <MapPin className="size-4" aria-hidden />
                नकाशावर पहा
              </a>
            </div>
          </div>

          <nav aria-label="फूटर नेव्हिगेशन">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#78716c] uppercase">
              महत्त्वाच्या लिंक्स
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px] font-medium text-[#44403c]">
              <li>
                <Link href="/" className="transition hover:text-[#b35410]">
                  होम
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#b35410]">
                  आमच्याबद्दल • सेवा
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-[#b35410]">
                  संपर्क
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="transition hover:text-[#b35410]">
                  गोपनीयता धोरण
                </Link>
              </li>
            </ul>
          </nav>

          <div id="privacy">
            <p className="text-[13px] font-bold tracking-[0.14em] text-[#78716c] uppercase">
              गोपनीयता • नोंद
            </p>
            <p className="mt-4 text-[13.5px] leading-6 text-[#78716c]">
              ही वेबसाइट केवळ माहितीसाठी आहे. येथे ऑनलाइन विक्री, बुकिंग किंवा
              पेमेंट घेतले जात नाही. आपण फोनवर किंवा दुकानात विचारलेली माहिती
              केवळ सेवेसाठी वापरली जाते. वैद्यकीय सल्ल्यासाठी नेहमी डॉक्टरांचा
              सल्ला घ्या.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#ece5d8] pt-6 text-[13px] text-[#a8a29e] sm:flex-row">
          <p>© 2026 {SHOP_NAME}. सर्व हक्क राखीव.</p>
          <p>प्रेमाने • स्वच्छ • विश्वासू — महाराष्ट्र</p>
        </div>
      </div>
    </footer>
  );
}
