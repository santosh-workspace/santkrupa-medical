import Link from "next/link";
import { Cross, House, MapPin, Phone } from "lucide-react";
import { SHOP_NAME } from "@/config/shop";

export const metadata = {
  title: `पेज सापडले नाही | ${SHOP_NAME}`,
  description: "मागितलेले पेज अस्तित्वात नाही. मुख्य पेजवर परत जा.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center bg-[#fffdf9] px-4 py-16 sm:px-6">
      <div className="mx-auto w-full max-w-xl text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-3xl bg-[#1c1917] text-[#feefdc]">
          <Cross className="size-7" strokeWidth={2.5} aria-hidden />
        </span>
        <p className="mt-6 text-[13px] font-bold tracking-[0.2em] text-[#d96a12] uppercase">
          ४०४ — पेज सापडले नाही
        </p>
        <h1 className="text-balance mt-3 text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
          हे पेज अस्तित्वात नाही
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-8 text-[#57534e]">
          आपण शोधत असलेला पत्ता बदलला असावा किंवा चुकीचा असावा. खालील
          बटणांनी योग्य ठिकाणी जा.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d96a12] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(217,106,18,0.65)] transition hover:bg-[#b35410]"
          >
            <House className="size-4" aria-hidden />
            होमवर जा
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e7dcc8] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1c1917] transition hover:border-[#d96a12]/40 hover:bg-[#fff8f0]"
          >
            <Phone className="size-4" aria-hidden />
            संपर्क करा
          </Link>
        </div>
        <p className="mt-6 text-[13.5px] text-[#a8a29e]">
          <Link href="/about" className="underline underline-offset-4 hover:text-[#1c1917]">
            आमच्याबद्दल
          </Link>
          {" • "}
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Santkrupa+Medical+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[#1c1917]"
          >
            <MapPin className="mr-1 inline size-3.5 -translate-y-px" aria-hidden />
            नकाशावर पहा
          </Link>
        </p>
      </div>
    </main>
  );
}
