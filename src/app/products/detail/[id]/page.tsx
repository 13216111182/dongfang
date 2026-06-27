import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/views/ProductDetailContent";
import { getProductById, products } from "@/data/products";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "产品详情" };
  return { title: product.title, description: `${product.title} - ${siteConfig.name}` };
}

export default async function ProductDetailPage({ params }: Props) {
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
