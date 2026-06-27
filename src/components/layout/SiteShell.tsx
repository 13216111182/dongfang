"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getDictionary, getLocaleFromPath } from "@/i18n";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { FloatingActions } from "@/components/layout/FloatingActions";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const dict = getDictionary(locale);

  useEffect(() => {
    document.documentElement.lang = dict.langTag;
  }, [dict.langTag]);

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileBottomBar />
      <FloatingActions />
    </LocaleProvider>
  );
}
