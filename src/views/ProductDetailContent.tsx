"use client";

import Link from "next/link";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/PageHeader";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getCategoryBySlugFromDict } from "@/i18n";
import { siteConfig, primaryPhone } from "@/config/site";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
  prev: Product | null;
  next: Product | null;
};

export function ProductDetailContent({ product, prev, next }: Props) {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";
  const category = getCategoryBySlugFromDict(dict, product.category);

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[
            { label: dict.common.home, href: prefix || "/" },
            { label: dict.products.title, href: `${prefix}/products` },
            ...(category
              ? [{ label: category.name, href: `${prefix}/products/${category.slug}` }]
              : []),
            { label: product.title },
          ]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg ring-1 ring-gray-100">
            <ImageLightbox src={product.image} alt={product.title} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            {category && (
              <p className="mt-2 text-sm text-gray-500">
                {dict.common.category}：
                <Link
                  href={`${prefix}/products/${category.slug}`}
                  className="ml-1 text-[#fa561d] hover:underline"
                >
                  {category.name}
                </Link>
              </p>
            )}
            <p className="mt-6 leading-relaxed text-gray-600">
              {dict.products.detailDesc.replace("{company}", dict.site.name)}
            </p>
            <div className="mt-8 rounded-2xl bg-[#181b28] p-6 text-white">
              <p className="font-bold">{dict.common.consultOrder}</p>
              <p className="mt-2 text-2xl font-bold text-[#fa561d]">{primaryPhone}</p>
              <a
                href={`tel:${primaryPhone}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#fa561d] px-6 py-3 font-medium transition hover:bg-[#e04a15] hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                {dict.common.callNow}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between border-t border-gray-100 pt-8">
          {prev ? (
            <Link
              href={`${prefix}/products/detail/${prev.id}`}
              className="group flex items-center gap-2 text-gray-600 hover:text-[#fa561d]"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`${prefix}/products/detail/${next.id}`}
              className="group flex items-center gap-2 text-gray-600 hover:text-[#fa561d]"
            >
              <span className="text-sm">{next.title}</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
