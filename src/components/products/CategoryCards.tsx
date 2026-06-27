"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useLocale } from "@/components/providers/LocaleProvider";

const categoryImageMap: Record<string, string> = {
  "pe-bag": products.find((p) => p.title.includes("PE"))?.image ?? products[0]?.image,
  "pe-cloth": products.find((p) => p.title === "PE布")?.image ?? products[5]?.image,
  "woven-bag": products.find((p) => p.title === "编织袋")?.image ?? products[1]?.image,
  "farm-film-bag": products[10]?.image ?? products[0]?.image,
  "container-bag": products[15]?.image ?? products[0]?.image,
};

export function CategoryCards() {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
      {dict.categories.map((cat) => {
        const image = categoryImageMap[cat.slug] ?? products[0]?.image;
        return (
          <li key={cat.slug}>
            <Link
              href={`${prefix}/products/${cat.slug}`}
              className="group block overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-100 transition hover:-translate-y-1.5 hover:shadow-xl hover:ring-[#fa561d]/30"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {image && (
                  <Image
                    src={image}
                    alt={cat.name}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-110"
                    sizes="(max-width:768px) 50vw, 20vw"
                  />
                )}
              </div>
              <p className="py-4 text-center text-base font-bold text-gray-800 transition group-hover:text-[#fa561d]">
                {cat.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
