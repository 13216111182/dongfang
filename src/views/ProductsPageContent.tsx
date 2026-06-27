"use client";

import { Suspense } from "react";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { CategoryCards } from "@/components/products/CategoryCards";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductGrid, Pagination } from "@/components/products/ProductGrid";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Product } from "@/data/products";

type Props = {
  items: Product[];
  page: number;
  totalPages: number;
  total: number;
  basePath: string;
};

export function ProductsPageContent({ items, page, totalPages, total, basePath }: Props) {
  const { dict } = useLocale();
  const homeHref = dict.locale === "en" ? "/en" : "/";

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[{ label: dict.common.home, href: homeHref }, { label: dict.products.title }]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <PageHeader title={dict.products.title} subtitle={dict.products.subtitle} />
        <Suspense fallback={null}>
          <CategoryFilter />
        </Suspense>
        <AnimateIn>
          <CategoryCards />
        </AnimateIn>
        <div className="my-10 border-t border-gray-100" />
        <AnimateIn delay={100}>
          <ProductGrid products={items} />
        </AnimateIn>
        <Pagination currentPage={page} totalPages={totalPages} basePath={basePath} />
        <p className="pb-16 text-center text-sm text-gray-500">
          {dict.common.total} {total} {dict.common.items}
        </p>
      </div>
    </>
  );
}
