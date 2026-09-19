import { HeartHandshake, LayoutGrid, MapPin, Smile } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: HeartHandshake,
    title: "विश्वासार्ह सेवा",
    desc: "प्रत्येक ग्राहकाला सन्मानाने वागवणे, हेच आमचे पहिले तत्त्व. औषधांबद्दल शंका असल्यास सोप्या भाषेत समजावून सांगतो.",
  },
  {
    icon: LayoutGrid,
    title: "विविध उत्पादने",
    desc: "दैनंदिन आरोग्य, निगा आणि घरगुती गरजांसाठी लागणारी निवडक उत्पादने — उपलब्धतेनुसार — एकाच छताखाली.",
  },
  {
    icon: Smile,
    title: "ग्राहक-केंद्रित अनुभव",
    desc: "घाई न करता ऐकून घेणे, योग्य उत्पादन निवडीसाठी मदत करणे आणि स्पष्ट माहिती देणे — हीच आमची पद्धत.",
  },
  {
    icon: MapPin,
    title: "सोयीचे ठिकाण",
    desc: "परिसरात सहज पोहोचता येईल असे दुकान. आजूबाजूच्या कुटुंबांसाठी दैनंदिन गरजा जवळच उपलब्ध.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="seva"
      aria-label="आमच्यावर विश्वास का ठेवावा"
      className="scroll-mt-24 bg-[#1c1917] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimatedSection className="max-w-2xl">
          <p className="text-[13px] font-bold tracking-[0.18em] text-[#fbc384] uppercase">
            आमची ओळख
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px]">
            आमच्यावर विश्वास का ठेवावा?
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-white/70 sm:text-base">
            मोठे दावे नाहीत — फक्त प्रामाणिक सेवा, स्वच्छ दुकान आणि ग्राहकांशी
            आपुलकीचे नाते.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={Math.min(i * 0.07, 0.28)}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#f79e4e]/40 hover:bg-white/[0.07] sm:p-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#d96a12]/15 text-[#fbc384] ring-1 ring-[#d96a12]/30 transition group-hover:bg-[#d96a12] group-hover:text-white">
                  <f.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-[14.5px] leading-7 text-white/65">
                  {f.desc}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
