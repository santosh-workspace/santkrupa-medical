import {
  Baby,
  Bandage,
  HeartPulse,
  Leaf,
  Pill,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    icon: Pill,
    title: "औषधे",
    desc: "डॉक्टरांच्या चिठ्ठीनुसार आवश्यक औषधे, उपलब्धतेनुसार.",
  },
  {
    icon: Bandage,
    title: "प्रथमोपचार साहित्य",
    desc: "पट्ट्या, मलम आणि घरासाठी लागणारे मूलभूत साहित्य.",
  },
  {
    icon: Sparkles,
    title: "आरोग्य व वैयक्तिक निगा",
    desc: "दैनंदिन निगेसाठी सौम्य आणि उपयुक्त उत्पादने.",
  },
  {
    icon: Stethoscope,
    title: "आरोग्य तपासणी साहित्य",
    desc: "घरच्या घरी तपासणीसाठी लागणारी मूलभूत साधने.",
  },
  {
    icon: Baby,
    title: "बेबी केअर",
    desc: "लहान बाळांसाठी सौम्य निगा उत्पादने.",
  },
  {
    icon: Users,
    title: "ज्येष्ठ नागरिकांसाठी",
    desc: "वयस्कर व्यक्तींच्या सोयीसाठी आवश्यक उत्पादने.",
  },
  {
    icon: Leaf,
    title: "पोषण व आरोग्य",
    desc: "समतोल आहाराला पूरक पोषण उत्पादने.",
  },
  {
    icon: HeartPulse,
    title: "स्वच्छता व हायजीन",
    desc: "घर आणि वैयक्तिक स्वच्छतेसाठी आवश्यक वस्तू.",
  },
];

export default function ProductCategories() {
  return (
    <section id="utpadane" aria-label="उपलब्ध उत्पादने" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold tracking-[0.18em] text-[#d96a12] uppercase">
            उपलब्ध उत्पादने
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight text-[#1c1917] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            आरोग्याच्या गरजांसाठी आवश्यक उत्पादने
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#57534e] sm:text-base sm:leading-8">
            आपल्या दैनंदिन आरोग्यविषयक गरजा लक्षात घेऊन विविध प्रकारची
            आवश्यक उत्पादने — उपलब्धतेनुसार — येथे मिळतात.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {categories.map((c, i) => (
            <AnimatedSection key={c.title} delay={Math.min(i * 0.06, 0.3)}>
              <article className="group h-full rounded-3xl border border-[#ece5d8] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fbc384] hover:shadow-[0_28px_50px_-30px_rgba(217,106,18,0.5)]">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#fff8f0] text-[#b35410] ring-1 ring-[#f3e7d3] transition group-hover:bg-[#d96a12] group-hover:text-white group-hover:ring-[#d96a12]">
                  <c.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-[17px] font-bold text-[#1c1917]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#78716c]">
                  {c.desc}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mx-auto mt-8 max-w-3xl rounded-2xl border border-dashed border-[#e7dcc8] bg-[#fff8f0]/70 px-5 py-4 text-center text-[13.5px] leading-6 text-[#78716c]">
          विशिष्ट उत्पादन हवे असल्यास दुकानात येण्यापूर्वी फोनवरून उपलब्धता
          तपासा — म्हणजे आपली फेरी वाचेल.
        </AnimatedSection>
      </div>
    </section>
  );
}
