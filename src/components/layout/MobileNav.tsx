"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  const homeHref = locale === "en" ? "/en" : "/";

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

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/60" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-[101] w-72 transform bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <Link
            href={homeHref}
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-gray-700"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          {items.map((item) => (
            <div key={item.href} className="border-b border-gray-100">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-medium text-gray-800 hover:text-[#fa561d]"
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 pl-4 text-sm text-gray-500 hover:text-[#fa561d]"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href={langSwitch.href}
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg border border-gray-200 py-3 text-center text-gray-800 hover:border-[#fa561d] hover:text-[#fa561d]"
          >
            {langSwitch.label}
          </Link>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-gray-50 p-4">
          <a
            href={`tel:${primaryPhone}`}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#fa561d] py-3 font-bold text-white"
          >
            <Phone className="h-5 w-5" />
            {primaryPhone}
          </a>
        </div>
      </div>
    </div>
  );
}
