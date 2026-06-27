"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "@/components/providers/LocaleProvider";

export function CategoryFilter() {
  const { dict } = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prefix = dict.locale === "en" ? "/en" : "";
  const productsRoot = `${prefix}/products`;
  const isProductsRoot = pathname === productsRoot;

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      <Link
        href={productsRoot}
        className={`rounded-full px-5 py-2 text-sm font-medium transition ${
          isProductsRoot
            ? "bg-[#fa561d] text-white shadow-md shadow-orange-500/20"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {dict.products.all}
      </Link>
      {dict.categories.map((cat) => {
        const href = `${prefix}/products/${cat.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={cat.slug}
            href={href}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              active
                ? "bg-[#fa561d] text-white shadow-md shadow-orange-500/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </Link>
        );
      })}
    </div>
  );
}
