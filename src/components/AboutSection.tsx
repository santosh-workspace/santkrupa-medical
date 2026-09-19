import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section aria-label="आमच्याबद्दल थोडक्यात" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.2rem] bg-[#feefdc] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ece5d8] shadow-[0_36px_70px_-40px_rgba(120,70,20,0.5)]">
              <Image
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop"
                alt="मेडिकल दुकानातील स्वच्छ रचनेत ठेवलेली औषधे आणि आरोग्य उत्पादने"
                width={1000}
                height={800}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 560px"
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-[#ece5d8] bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur sm:left-8">
              <span className="grid size-10 place-items-center rounded-xl bg-[#1c1917] text-[#feefdc]">
                <Leaf className="size-5" aria-hidden />
              </span>
              <span className="text-[13.5px] leading-5">
                <span className="block font-bold text-[#1c1917]">स्वच्छ • नीटनेटके • विश्वासू</span>
                <span className="block text-[#78716c]">आपल्या परिसरातील दुकान</span>
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-[13px] font-bold tracking-[0.18em] text-[#d96a12] uppercase">
            आमच्याबद्दल
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            आपल्या आरोग्याची काळजी, आपल्या परिसरात
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-8 text-[#57534e] sm:text-base">
            <p>
              आजारपणात किंवा दैनंदिन गरजेच्या वेळी लांब जाण्याची धावपळ नको —
              या विचारातून आमचे दुकान परिसरातच उभे आहे. डॉक्टरांच्या चिठ्ठीनुसार
              लागणारी औषधे आणि घरासाठी आवश्यक आरोग्य उत्पादने उपलब्धतेनुसार
              देण्याचा आमचा प्रामाणिक प्रयत्न असतो.
            </p>
            <p>
              वयस्कर व्यक्ती असोत वा लहान मुले — प्रत्येक ग्राहकाला संयमाने
              ऐकून घेणे, योग्य माहिती देणे आणि गरजेनुसार मदत करणे, हेच आम्हाला
              महत्त्वाचे वाटते.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#e7dcc8] bg-white px-6 py-3 text-[15px] font-semibold text-[#1c1917] transition hover:border-[#d96a12]/40 hover:bg-[#fff8f0]"
          >
            अधिक माहिती वाचा
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
