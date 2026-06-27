import type { Metadata } from "next";
import { ProductsPageContent } from "@/views/ProductsPageContent";
import { products } from "@/data/products";
import { zhDictionary } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zhDictionary.products.title,
  description: zhDictionary.products.subtitle,
};

export default function ProductsPage() {
  return <ProductsPageContent products={products} basePath="/products" />;
}
