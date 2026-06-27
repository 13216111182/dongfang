"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { CategoryCards } from "@/components/products/CategoryCards";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductGrid, Pagination } from "@/components/products/ProductGrid";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useLocale } from "@/components/providers/LocaleProvider";
import { paginateProducts, type Product } from "@/data/products";

type Props = {
  products: Product[];
  basePath: string;
};

function ProductsPageBody({ products, basePath }: Props) {
  const { dict } = useLocale();
  const searchParams = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
  const result = paginateProducts(products, page, 32);
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
          <ProductGrid products={result.items} />
        </AnimateIn>
        <Pagination currentPage={result.page} totalPages={result.totalPages} basePath={basePath} />
        <p className="pb-16 text-center text-sm text-gray-500">
          {dict.common.total} {result.total} {dict.common.items}
        </p>
      </div>
    </>
  );
}

export function ProductsPageContent({ products, basePath }: Props) {
  return (
    <Suspense fallback={null}>
      <ProductsPageBody products={products} basePath={basePath} />
    </Suspense>
  );
}
