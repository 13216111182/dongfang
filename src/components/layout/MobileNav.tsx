"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, primaryPhone } from "@/config/site";
import type { Locale, NavItem } from "@/i18n/types";

export function MobileNav({
  items,
  locale,
  langSwitch,
}: {
  items: readonly NavItem[];
  locale: Locale;
  langSwitch: { label: string; href: string };
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const homeHref = locale === "en" ? "/en" : "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  const drawer =
    mounted && open
      ? createPortal(
          <>
            <div
              className="fixed inset-0 z-[200] bg-black/60"
              onClick={close}
              aria-hidden="true"
            />
            <div className="fixed inset-y-0 right-0 z-[201] flex w-72 flex-col bg-white shadow-2xl">
              <div className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-white p-4">
                <Link
                  href={homeHref}
                  onClick={close}
                  className="flex shrink-0 items-center"
                  aria-label={siteConfig.name}
                >
                  <Image
                    src="/images/brand/logo-dongfang.png"
                    alt={siteConfig.name}
                    width={180}
                    height={82}
                    className="h-14 w-auto object-contain"
                    unoptimized
                  />
                </Link>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg p-2 text-gray-700"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto bg-white p-4 pb-24">
                {items.map((item) => (
                  <div key={item.href} className="border-b border-gray-100">
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-3 font-medium text-gray-800 hover:text-[#fa561d]"
                    >
                      {item.label}
                    </Link>
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={close}
                        className="block py-2 pl-4 text-sm text-gray-500 hover:text-[#fa561d]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href={langSwitch.href}
                  onClick={close}
                  className="mt-4 block rounded-lg border border-gray-200 py-3 text-center text-gray-800 hover:border-[#fa561d] hover:text-[#fa561d]"
                >
                  {langSwitch.label}
                </Link>
              </nav>
              <div className="shrink-0 border-t border-gray-100 bg-gray-50 p-4">
                <a
                  href={`tel:${primaryPhone}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#fa561d] py-3 font-bold text-white"
                >
                  <Phone className="h-5 w-5" />
                  {primaryPhone}
                </a>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 text-gray-700"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>
      {drawer}
    </div>
  );
}
