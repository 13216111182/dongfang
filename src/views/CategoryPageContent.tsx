"use client";

import { Suspense } from "react";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductGrid, Pagination } from "@/components/products/ProductGrid";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getCategoryBySlugFromDict } from "@/i18n";
import type { Product } from "@/data/products";

type Props = {
  slug: string;
  items: Product[];
  page: number;
  totalPages: number;
  basePath: string;
};

export function CategoryPageContent({ slug, items, page, totalPages, basePath }: Props) {
  const { dict } = useLocale();
  const category = getCategoryBySlugFromDict(dict, slug);
  const homeHref = dict.locale === "en" ? "/en" : "/";
  const productsHref = dict.locale === "en" ? "/en/products" : "/products";

  if (!category) return null;

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[
            { label: dict.common.home, href: homeHref },
            { label: dict.products.title, href: productsHref },
            { label: category.name },
          ]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <PageHeader title={category.name} subtitle={category.description} />
        <Suspense fallback={null}>
          <CategoryFilter />
        </Suspense>
        {items.length > 0 ? (
          <AnimateIn>
            <ProductGrid products={items} />
            <Pagination currentPage={page} totalPages={totalPages} basePath={basePath} />
          </AnimateIn>
        ) : (
          <p className="pb-20 text-center text-gray-500">{dict.products.emptyCategory}</p>
        )}
      </div>
    </>
  );
}
