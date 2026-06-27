import type { Metadata } from "next";
import { ProductsPageContent } from "@/views/ProductsPageContent";
import { products } from "@/data/products";
import { enDictionary } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: enDictionary.products.title,
  description: enDictionary.products.subtitle,
};

export default function EnProductsPage() {
  return <ProductsPageContent products={products} basePath="/en/products" />;
}
