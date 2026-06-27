"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { useLocale } from "@/components/providers/LocaleProvider";

export function ProductCard({ product }: { product: Product }) {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";

  return (
    <li>
      <Link
        href={`${prefix}/products/detail/${product.id}`}
        className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg hover:ring-[#fa561d]/20"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-3 transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
            <span className="rounded-full bg-[#fa561d] px-4 py-1 text-xs font-medium text-white">
              {dict.common.viewDetail}
            </span>
          </div>
        </div>
        <p className="border-t border-gray-50 py-3 text-center text-sm font-medium text-gray-700 transition group-hover:text-[#fa561d]">
          {product.title}
        </p>
      </Link>
    </li>
  );
}
