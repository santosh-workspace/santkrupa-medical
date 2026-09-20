import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  LayoutGrid,
  MapPin,
  Phone,
  Smile,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  GOOGLE_MAPS_URL,
  SHOP_NAME,
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_LINK,
  hasPhone,
} from "@/config/shop";

export const metadata: Metadata = {
  title: "आमच्याबद्दल व सेवा | संतकृपा मेडिकल, आळंदी देवाची",
  description:
    "आळंदी देवाची येथील २४ तास मेडिकल स्टोअर — आमच्या सेवा, उपलब्ध उत्पादनांच्या श्रेणी आणि ग्राहकांसाठी आमची बांधिलकी जाणून घ्या.",
};

const services = [
  {
    icon: HeartHandshake,
    title: "वैयक्तिक मार्गदर्शन",
    desc: "औषधे आणि उत्पादने निवडताना सोप्या भाषेत स्पष्ट माहिती. घाई न करता ऐकून घेतो.",
  },
  {
    icon: LayoutGrid,
    title: "दैनंदिन गरजांची पूर्तता",
    desc: "औषधे, प्रथमोपचार, निगा आणि घरगुती आरोग्य उत्पादने — उपलब्धतेनुसार — एकाच ठिकाणी.",
  },
  {
    icon: Smile,
    title: "कुटुंबासाठी सोय",
    desc: "लहान मुले, वयस्कर व्यक्ती आणि प्रत्येक कुटुंबासाठी विचारपूर्वक निवडलेली उत्पादने.",
  },
];

const ranges = [
  "औषधे (चिठ्ठीनुसार, उपलब्धतेनुसार)",
  "प्रथमोपचार साहित्य",
  "आरोग्य व वैयक्तिक निगा",
  "आरोग्य तपासणी साहित्य",
  "बेबी केअर",
  "ज्येष्ठ नागरिकांसाठी आवश्यक उत्पादने",
  "पोषण व आरोग्यविषयक उत्पादने",
  "स्वच्छता व हायजीन उत्पादने",
];

export default function AboutPage() {
  return (
    <main className="pt-24 sm:pt-28">
      {/* Hero */}
      <section aria-label="परिचय" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-[#feefdc] blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 pt-10 pb-12 text-center sm:px-6 lg:pt-14">
          <AnimatedSection>
            <p className="text-[13px] font-bold tracking-[0.18em] text-[#d96a12] uppercase">
              आमच्याबद्दल • सेवा
            </p>
            <h1 className="text-balance mt-4 text-4xl leading-[1.15] font-bold tracking-tight text-[#1c1917] sm:text-5xl">
              आपल्या आरोग्याच्या गरजांसाठी आम्ही सदैव तत्पर
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#57534e] sm:text-base">
              परिसरातील कुटुंबांना दैनंदिन आरोग्य उत्पादने जवळच, स्वच्छ
              वातावरणात आणि आपुलकीने मिळावीत — याच उद्देशाने आम्ही काम करतो.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 1. आमच्याबद्दल */}
      <section aria-label="आमच्याबद्दल" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-[#ece5d8] bg-white p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[#1c1917] sm:text-3xl">
              आमच्याबद्दल
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-8 text-[#57534e]">
              <p>
                {SHOP_NAME} हे परिसरातील विश्वासू मेडिकल दुकान आहे. आजारपणाच्या
                किंवा अचानक गरजेच्या वेळी लांब जावे लागू नये, म्हणून दैनंदिन
                आरोग्यविषयक आवश्यक गोष्टी जवळच उपलब्ध करून देणे — हीच आमची
                भूमिका.
              </p>
              <p>
                दुकान स्वच्छ ठेवणे, उत्पादने नीट रचणे आणि प्रत्येक ग्राहकाशी
                सन्मानाने बोलणे — या साध्या पण महत्त्वाच्या गोष्टी आम्ही रोज
                पाळतो.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                alt="आरोग्य सेवेसाठी मार्गदर्शन करतानाचे आधुनिक वैद्यकीय वातावरण"
                width={1000}
                height={760}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 560px"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. आमच्या सेवा */}
      <section aria-label="आमच्या सेवा" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <AnimatedSection className="max-w-2xl">
          <p className="text-[13px] font-bold tracking-[0.18em] text-[#d96a12] uppercase">
            आमच्या सेवा
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
            साधी, स्पष्ट आणि ग्राहक-केंद्रित सेवा
          </h2>
        </AnimatedSection>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={Math.min(i * 0.07, 0.2)}>
              <article className="h-full rounded-3xl border border-[#ece5d8] bg-[#fbf7f1] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_50px_-30px_rgba(120,70,20,0.45)] sm:p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#b35410] ring-1 ring-[#ece5d8]">
                  <s.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-[17px] font-bold text-[#1c1917]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-7 text-[#78716c]">{s.desc}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 3. श्रेणी */}
      <section aria-label="उत्पादन श्रेणी" className="bg-[#fbf7f1] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="text-[13px] font-bold tracking-[0.18em] text-[#d96a12] uppercase">
              उपलब्ध उत्पादनांच्या श्रेणी
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl">
              गरजेनुसार निवडक श्रेणी
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#57534e]">
              सर्व उत्पादने नेहमी उपलब्ध असतीलच असे नाही — उपलब्धतेनुसार माहिती
              घेऊनच दुकानाला भेट द्या.
            </p>
          </AnimatedSection>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ranges.map((r, i) => (
              <AnimatedSection key={r} delay={Math.min(i * 0.04, 0.24)}>
                <li className="flex items-start gap-3 rounded-2xl border border-[#ece5d8] bg-white px-5 py-4 text-[14.5px] font-medium text-[#1c1917]">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#d96a12]" aria-hidden />
                  {r}
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. बांधिलकी */}
      <section aria-label="आमची बांधिलकी" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 rounded-[2rem] bg-[#1c1917] p-7 text-white sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-14">
          <AnimatedSection>
            <p className="text-[13px] font-bold tracking-[0.18em] text-[#fbc384] uppercase">
              ग्राहकांसाठी आमची बांधिलकी
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              खोटे दावे नाहीत — फक्त प्रामाणिक प्रयत्न
            </h2>
            <ul className="mt-6 space-y-4 text-[14.5px] leading-7 text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-[#fbc384]" aria-hidden />
                उपलब्धतेबद्दल स्पष्ट माहिती — जे नाही, ते नाही असे प्रामाणिकपणे सांगणे.
              </li>
              <li className="flex gap-3">
                <HeartHandshake className="mt-1 size-5 shrink-0 text-[#fbc384]" aria-hidden />
                वयस्कर आणि आजारी ग्राहकांना प्राधान्याने मदत.
              </li>
              <li className="flex gap-3">
                <BadgeCheck className="mt-1 size-5 shrink-0 text-[#fbc384]" aria-hidden />
                स्वच्छता, नीटनेटकेपणा आणि योग्य साठवणुकीकडे लक्ष.
              </li>
            </ul>
          </AnimatedSection>
          <AnimatedSection
            delay={0.12}
            className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.05] p-7"
          >
            <p className="text-[15px] leading-8 text-white/80">
              विशिष्ट औषध किंवा उत्पादन हवे असल्यास दुकानात येण्यापूर्वी
              फोनवरून उपलब्धता तपासा.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {hasPhone ? (
                <a
                  href={`tel:${SHOP_PHONE_LINK}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d96a12] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#b35410]"
                >
                  <Phone className="size-4" aria-hidden />
                  {SHOP_PHONE_DISPLAY}
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d96a12] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#b35410]"
                >
                  <Phone className="size-4" aria-hidden />
                  संपर्क पानावर जा
                </Link>
              )}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10"
              >
                दुकानाचा पत्ता पहा
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
