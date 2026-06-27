"use client";

import { useEffect, useState } from "react";
import { Phone, ChevronUp } from "lucide-react";
import { siteConfig, primaryPhone } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";

export function FloatingActions() {
  const { dict } = useLocale();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 lg:bottom-8">
      <a
        href={`tel:${primaryPhone}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#fa561d] text-white shadow-lg shadow-orange-500/30 transition hover:scale-110 hover:bg-[#e04a15]"
        aria-label={dict.common.phoneConsult}
      >
        <Phone className="h-6 w-6 animate-pulse group-hover:animate-none" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-600 text-white shadow-lg transition hover:bg-gray-700 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label={dict.common.backToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}

export function ScrollHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--header-border)] bg-white/95 py-2.5 shadow-md backdrop-blur-md"
          : "border-transparent bg-white/90 py-4 shadow-sm backdrop-blur-md"
      }`}
    >
      {children}
    </header>
  );
}
