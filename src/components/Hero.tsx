"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SHOP_PHONE_DISPLAY, SHOP_PHONE_LINK, hasPhone } from "@/config/shop";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="मुख्य परिचय"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] size-[480px] rounded-full bg-[#feefdc] blur-[120px]" />
        <div className="absolute top-40 left-[-12%] size-[420px] rounded-full bg-[#f6efe4] blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fff8f0] to-transparent" />
        <div className="dot-grid absolute top-24 left-6 hidden h-40 w-64 opacity-60 lg:block" />
        <div className="dot-grid absolute right-8 bottom-10 hidden h-32 w-52 opacity-50 lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-24">
        {/* Copy */}
        <div className="max-w-2xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-[#ece5d8] bg-white/70 px-4 py-1.5 text-[13px] font-semibold text-[#b35410] backdrop-blur"
          >
            <ShieldCheck className="size-4" aria-hidden />
            परिसरातील विश्वासू आरोग्य साथी
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.08}
            className="text-balance mt-5 text-[38px] leading-[1.12] font-bold tracking-[-0.02em] text-[#1c1917] sm:text-5xl lg:text-[58px] lg:leading-[1.08]"
          >
            आपल्या आरोग्यासाठी,
            <br />
            <span className="relative inline-block">
              विश्वासू मेडिकल स्टोअर
              <svg
                aria-hidden
                viewBox="0 0 320 14"
                className="absolute -bottom-1 left-0 w-full text-[#f79e4e]"
                fill="none"
              >
                <path
                  d="M4 10C80 3 220 3 316 8"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.18}
            className="mt-5 max-w-xl text-[16px] leading-8 text-[#57534e] sm:text-lg sm:leading-9"
          >
            दैनंदिन आरोग्यविषयक गरजा, औषधे आणि आवश्यक हेल्थकेअर उत्पादने —
            उपलब्धतेनुसार, एकाच ठिकाणी.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.28}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            {hasPhone ? (
              <a
                href={`tel:${SHOP_PHONE_LINK}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d96a12] px-7 py-3.5 text-[16px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(217,106,18,0.65)] transition hover:-translate-y-0.5 hover:bg-[#b35410] active:translate-y-0"
              >
                <Phone className="size-[18px]" aria-hidden />
                आमच्याशी संपर्क करा
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d96a12] px-7 py-3.5 text-[16px] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(217,106,18,0.65)] transition hover:-translate-y-0.5 hover:bg-[#b35410] active:translate-y-0"
              >
                <Phone className="size-[18px]" aria-hidden />
                आमच्याशी संपर्क करा
              </Link>
            )}
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#e7dcc8] bg-white px-7 py-3.5 text-[16px] font-semibold text-[#1c1917] transition hover:border-[#d96a12]/40 hover:bg-[#fff8f0]"
            >
              दुकानाची माहिती पहा
              <ArrowRight
                className="size-[18px] transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.38}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] font-medium text-[#78716c]"
          >
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-[#d96a12]" aria-hidden />
              वैयक्तिक मार्गदर्शन
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-[#d96a12]" aria-hidden />
              सोयीचे स्थान
            </span>
            {hasPhone && (
              <a href={`tel:${SHOP_PHONE_LINK}`} className="underline decoration-[#fbc384] decoration-2 underline-offset-4 hover:text-[#1c1917]">
                {SHOP_PHONE_DISPLAY}
              </a>
            )}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#feefdc] via-transparent to-[#f6efe4] blur-2xl" />
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_40px_80px_-40px_rgba(120,70,20,0.45)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop"
              alt="स्वच्छ आणि आधुनिक मेडिकल स्टोअरमधील औषधांची रचना"
              width={1040}
              height={880}
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="aspect-[6/5] w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/25 via-transparent to-transparent" />
          </motion.div>

          {/* floating cards */}
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-[#ece5d8] bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#feefdc] text-[#b35410]">
              <ShieldCheck className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-bold text-[#1c1917]">विश्वासार्ह सेवा</span>
              <span className="block text-[12px] text-[#78716c]">ग्राहक प्रथम</span>
            </span>
          </motion.div>

          <motion.div
            animate={reduce ? undefined : { y: [0, 9, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-2 bottom-8 flex items-center gap-3 rounded-2xl border border-[#ece5d8] bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-6"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#1c1917] text-[#feefdc]">
              <BadgeCheck className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-bold text-[#1c1917]">दैनंदिन गरजा</span>
              <span className="block text-[12px] text-[#78716c]">एकाच ठिकाणी</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
