"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductGrid, Pagination } from "@/components/products/ProductGrid";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getCategoryBySlugFromDict } from "@/i18n";
import { paginateProducts, type Product } from "@/data/products";

type Props = {
  slug: string;
  products: Product[];
  basePath: string;
};

function CategoryPageBody({ slug, products, basePath }: Props) {
  const { dict } = useLocale();
  const searchParams = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
  const result = paginateProducts(products, page, 32);
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
        {result.items.length > 0 ? (
          <AnimateIn>
            <ProductGrid products={result.items} />
            <Pagination currentPage={result.page} totalPages={result.totalPages} basePath={basePath} />
          </AnimateIn>
        ) : (
          <p className="pb-20 text-center text-gray-500">{dict.products.emptyCategory}</p>
        )}
      </div>
    </>
  );
}

export function CategoryPageContent({ slug, products, basePath }: Props) {
  return (
    <Suspense fallback={null}>
      <CategoryPageBody slug={slug} products={products} basePath={basePath} />
    </Suspense>
  );
}
