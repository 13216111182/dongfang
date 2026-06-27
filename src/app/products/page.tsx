import type { Metadata } from "next";
import { ProductsPageContent } from "@/views/ProductsPageContent";
import { paginateProducts, products } from "@/data/products";
import { zhDictionary } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zhDictionary.products.title,
  description: zhDictionary.products.subtitle,
};

type Props = { searchParams: Promise<{ page?: string }> };

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const result = paginateProducts(products, page, 32);

  return (
    <ProductsPageContent
      items={result.items}
      page={result.page}
      totalPages={result.totalPages}
      total={result.total}
      basePath="/products"
    />
  );
}
