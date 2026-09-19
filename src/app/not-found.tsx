import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100vh] flex-col bg-[#f5f5f5] px-6 py-10 text-[#1d1d1d] sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-between">
        <div className="pt-10 sm:pt-16">
          <h1 className="max-w-3xl text-[3rem] leading-[1.06] tracking-[-0.06em] font-medium text-[#1f1f1f] sm:text-[4rem] lg:text-[5rem]">
            This page doesn&apos;t exist
          </h1>

          <p className="mt-8 max-w-2xl text-[2rem] leading-[1.2] tracking-[-0.04em] text-[#1d1d1d] sm:text-[2.7rem]">
            It may have been moved, removed, or never existed.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#2b2b2b] px-7 py-4 text-[1.1rem] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition hover:bg-[#1d1d1d]"
            >
              Go back
            </Link>
          </div>

          <div className="mt-14 text-left text-[1.2rem] tracking-[0.18em] text-[#3a3a3a] sm:text-[1.6rem]">
            <div className="font-light uppercase">404 NOT FOUND</div>
            <div className="mt-3 font-mono text-[0.9rem] tracking-[0.04em] text-[#4b4b4b] sm:text-[1rem]">
              b0m1 : 9srnc-1789461470918-40c03b018ac3
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-wrap items-center gap-4 pb-4 text-[0.9rem] tracking-[0.28em] text-[#2d2d2d] uppercase sm:text-[1rem]">
          <Link href="/" className="transition hover:text-[#000000]">
            View documentation
          </Link>
          <span className="text-[#7a7a7a]">/</span>
          <Link href="/contact" className="transition hover:text-[#000000]">
            Copy debug prompt
          </Link>
        </footer>
      </div>
    </main>
  );
}
