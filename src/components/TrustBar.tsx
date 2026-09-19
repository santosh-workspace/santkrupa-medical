import { HeartHandshake, LayoutGrid, MapPin, Store } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  {
    icon: HeartHandshake,
    title: "विश्वासार्ह सेवा",
    desc: "प्रत्येक ग्राहकाशी आपुलकीने संवाद",
  },
  {
    icon: LayoutGrid,
    title: "विविध आरोग्य उत्पादने",
    desc: "दैनंदिन गरजांसाठी निवडक श्रेणी",
  },
  {
    icon: Store,
    title: "ग्राहकांसाठी सोयीस्कर सेवा",
    desc: "सोप्या भाषेत स्पष्ट माहिती",
  },
  {
    icon: MapPin,
    title: "दैनंदिन गरजांसाठी एकाच ठिकाणी",
    desc: "परिसरात सहज पोहोचता येणारे दुकान",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="ठळक विश्वासार्ह मुद्दे" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-1 gap-3 rounded-[1.75rem] border border-[#ece5d8] bg-white/80 p-3 shadow-[0_24px_60px_-40px_rgba(28,25,23,0.35)] backdrop-blur sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group flex items-center gap-3.5 rounded-2xl px-4 py-4 transition hover:bg-[#fff8f0]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[#f3e7d3] bg-[#fff8f0] text-[#b35410] transition group-hover:scale-105 group-hover:bg-[#d96a12] group-hover:text-white">
                <it.icon className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-[15px] font-bold text-[#1c1917]">
                  {it.title}
                </span>
                <span className="block text-[13px] leading-5 text-[#78716c]">
                  {it.desc}
                </span>
              </span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
