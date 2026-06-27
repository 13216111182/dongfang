"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { primaryPhone } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";

export function MobileBottomBar() {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white lg:hidden">
      <ul className="grid grid-cols-3">
        <li>
          <Link href={prefix || "/"} className="flex flex-col items-center py-2 text-xs text-gray-600">
            <img src="/images/icons/i3.png" alt="" className="mb-1 h-5 w-5 invert" />
            {dict.mobileBar.home}
          </Link>
        </li>
        <li>
          <Link href={`${prefix}/products`} className="flex flex-col items-center py-2 text-xs text-gray-600">
            <img src="/images/icons/i4.png" alt="" className="mb-1 h-5 w-5 invert" />
            {dict.mobileBar.products}
          </Link>
        </li>
        <li>
          <a
            href={`tel:${primaryPhone}`}
            className="flex flex-col items-center py-2 text-xs text-[#fa561d]"
          >
            <Phone className="mb-1 h-5 w-5" />
            {dict.mobileBar.phone}
          </a>
        </li>
      </ul>
    </div>
  );
}
