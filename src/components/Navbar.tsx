"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cross, Menu, Phone, X } from "lucide-react";
import {
  SHOP_NAME,
  SHOP_PHONE_DISPLAY,
  SHOP_PHONE_LINK,
  hasPhone,
} from "@/config/shop";

const links = [
  { href: "/#main", label: "होम" },
  { href: "/about", label: "आमच्याबद्दल" },
  { href: "/#seva", label: "सेवा" },
  { href: "/#utpadane", label: "उपलब्ध उत्पादने" },
  { href: "/contact", label: "संपर्क" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fffdf9]/90 shadow-[0_8px_30px_-18px_rgba(28,25,23,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="मुख्य नेव्हिगेशन"
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
          scrolled ? "py-2.5" : "py-4 sm:py-5"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${SHOP_NAME} — होम`}>
          <span className="grid size-10 place-items-center rounded-2xl bg-[#1c1917] text-[#feefdc] shadow-[0_10px_25px_-12px_rgba(28,25,23,0.6)] transition-transform duration-300 group-hover:-rotate-6 sm:size-11">
            <Cross className="size-5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-[17px] font-bold tracking-tight text-[#1c1917] sm:text-lg">
              {SHOP_NAME}
            </span>
            <span className="block text-[11px] font-medium tracking-[0.14em] text-[#b35410] uppercase">
              विश्वासू मेडिकल स्टोअर
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-[#44403c] transition hover:bg-[#feefdc] hover:text-[#1c1917]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {hasPhone ? (
            <a
              href={`tel:${SHOP_PHONE_LINK}`}
              className="hidden items-center gap-2 rounded-full bg-[#d96a12] px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(217,106,18,0.7)] transition hover:-translate-y-0.5 hover:bg-[#b35410] active:translate-y-0 sm:inline-flex"
            >
              <Phone className="size-4" aria-hidden />
              कॉल करा
            </a>
          ) : (
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-[#d96a12] px-5 py-2.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-14px_rgba(217,106,18,0.7)] transition hover:-translate-y-0.5 hover:bg-[#b35410] sm:inline-flex"
            >
              <Phone className="size-4" aria-hidden />
              कॉल करा
            </Link>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "मेनू बंद करा" : "मेनू उघडा"}
            className="grid size-11 place-items-center rounded-full border border-[#ece5d8] bg-white/80 text-[#1c1917] backdrop-blur transition hover:bg-[#feefdc] lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 overflow-hidden rounded-3xl border border-[#ece5d8] bg-[#fffdf9]/95 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="p-3">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[16px] font-medium text-[#1c1917] transition hover:bg-[#feefdc]"
                  >
                    {l.label}
                    <span aria-hidden className="text-[#d96a12]">
                      →
                    </span>
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2 border-t border-[#ece5d8] p-3">
                {hasPhone ? (
                  <a
                    href={`tel:${SHOP_PHONE_LINK}`}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#d96a12] px-5 py-3.5 text-[16px] font-semibold text-white"
                  >
                    <Phone className="size-4" aria-hidden />
                    {SHOP_PHONE_DISPLAY} — कॉल करा
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#d96a12] px-5 py-3.5 text-[16px] font-semibold text-white"
                  >
                    <Phone className="size-4" aria-hidden />
                    संपर्क पानावर जा
                  </Link>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
