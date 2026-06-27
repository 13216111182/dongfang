"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig, primaryPhone } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { ScrollHeader } from "./FloatingActions";

export function Header() {
  const { dict } = useLocale();
  const homeHref = dict.locale === "en" ? "/en" : "/";

  return (
    <ScrollHeader>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link
          href={homeHref}
          className="relative z-20 flex shrink-0 items-center"
          aria-label={dict.site.name}
        >
          <Image
            src="/images/brand/logo-dongfang.png"
            alt={dict.site.name}
            width={240}
            height={108}
            className="h-14 w-auto object-contain sm:h-16 lg:h-[4.75rem]"
            priority
            unoptimized
          />
        </Link>

        <DesktopNav items={dict.nav} locale={dict.locale} />

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={dict.langSwitch.href}
            className="rounded-full bg-[#fa561d] px-5 py-1.5 text-sm font-medium text-white transition hover:bg-[#e04a15] hover:shadow-lg hover:shadow-orange-500/30"
          >
            {dict.langSwitch.label}
          </Link>
          <div className="flex items-center gap-2 text-gray-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fa561d]/20 ring-1 ring-[#fa561d]/40">
              <Phone className="h-4 w-4 text-[#fa561d]" />
            </div>
            <a
              href={`tel:${primaryPhone}`}
              className="text-lg font-bold tracking-wide transition hover:text-[#fa561d]"
            >
              {primaryPhone}
            </a>
          </div>
        </div>

        <MobileNav items={dict.nav} locale={dict.locale} langSwitch={dict.langSwitch} />
      </div>
    </ScrollHeader>
  );
}
