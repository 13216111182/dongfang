"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale, NavItem } from "@/i18n/types";

export function DesktopNav({
  items,
  locale,
}: {
  items: NavItem[];
  locale: Locale;
}) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isActive = (href: string) => {
    const home = locale === "en" ? "/en" : "/";
    if (href === home) return pathname === home;
    return pathname.startsWith(href);
  };

  return (
    <nav className="pointer-events-none hidden flex-1 justify-center lg:flex">
      <ul className="pointer-events-auto flex items-center gap-1 xl:gap-2">
        {items.map((item) => (
          <li
            key={item.href}
            className="relative"
            onMouseEnter={() => item.children && setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              href={item.href}
              className={`relative flex items-center gap-1 px-3 py-6 text-sm font-bold transition xl:px-4 xl:text-base ${
                isActive(item.href)
                  ? "text-[#fa561d]"
                  : "text-gray-700 hover:text-[#fa561d]"
              }`}
            >
              {item.label}
              {item.children && (
                <ChevronDown
                  className={`h-4 w-4 transition ${openMenu === item.label ? "rotate-180" : ""}`}
                />
              )}
              {isActive(item.href) && (
                <span className="absolute bottom-4 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#fa561d]" />
              )}
            </Link>
            {item.children && openMenu === item.label && (
              <div className="absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 overflow-hidden rounded-lg border border-gray-100 bg-white py-1 shadow-xl">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block px-5 py-3 text-sm transition hover:bg-[#fa561d] hover:text-white ${
                      pathname === child.href ? "text-[#fa561d]" : "text-gray-700"
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
