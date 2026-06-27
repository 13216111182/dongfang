"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig, primaryPhone } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";

export function Footer() {
  const { dict } = useLocale();

  return (
    <footer className="border-t border-[var(--header-border)] bg-[var(--footer-bg)] text-gray-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="mb-2 text-lg font-bold text-gray-900">{dict.footer.hotline}</p>
          <p className="mb-6 text-2xl font-bold text-[#fa561d]">
            {siteConfig.phones.join(" ")}
          </p>
          <Link
            href={dict.locale === "en" ? "/en/contact" : "/contact"}
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm text-gray-800 transition hover:border-[#fa561d] hover:bg-[#fa561d] hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {dict.common.contactNow}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-gray-900">{dict.footer.categories}</h3>
          <ul className="space-y-3">
            {dict.categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`${dict.locale === "en" ? "/en" : ""}/products/${cat.slug}`}
                  className="flex items-center gap-2 text-gray-600 transition hover:translate-x-1 hover:text-[#fa561d]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fa561d]" />
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-gray-900">{dict.footer.contact}</h3>
          <div className="space-y-2 text-sm leading-relaxed text-gray-600">
            <p>{dict.common.address}：{dict.site.address}</p>
            <p>{dict.common.contactPerson}：{dict.site.contactPerson}</p>
            <p>{dict.common.phone}：{primaryPhone}</p>
            {siteConfig.tel && <p>{dict.common.tel}：{siteConfig.tel}</p>}
            {siteConfig.fax && <p>{dict.common.fax}：{siteConfig.fax}</p>}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-gray-900">{dict.footer.quickLinks}</h3>
          <ul className="space-y-3">
            {[
              { href: `${dict.locale === "en" ? "/en" : ""}/factory`, label: dict.footer.factory },
              { href: `${dict.locale === "en" ? "/en" : ""}/equipment`, label: dict.footer.equipment },
              { href: `${dict.locale === "en" ? "/en" : ""}/news`, label: dict.footer.news },
              { href: `${dict.locale === "en" ? "/en" : ""}/about`, label: dict.footer.about },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-600 transition hover:text-[#fa561d]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto px-4 py-6 text-center text-sm text-gray-500 lg:px-8">
          <p>COPYRIGHT © 2026 青州市东方塑业有限公司</p>
        </div>
      </div>
    </footer>
  );
}
