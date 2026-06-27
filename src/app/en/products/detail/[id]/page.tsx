import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/views/ProductDetailContent";
import { getProductById, products } from "@/data/products";
import { enDictionary } from "@/i18n/dictionaries/en";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product details" };
  return {
    title: product.title,
    description: `${product.title} - ${enDictionary.site.name}`,
  };
}

export default async function EnProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const idx = products.findIndex((p) => p.id === id);
  return (
    <ProductDetailContent
      product={product}
      prev={idx > 0 ? products[idx - 1] : null}
      next={idx < products.length - 1 ? products[idx + 1] : null}
    />
  );
}
