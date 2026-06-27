import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPageContent } from "@/views/CategoryPageContent";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { getDictionary } from "@/i18n";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dict = getDictionary("en");
  const category = dict.categories.find((c) => c.slug === slug);
  if (!category) return { title: "Products" };
  return { title: category.name, description: category.description };
}

export default async function EnCategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!getCategoryBySlug(slug)) notFound();

  return (
    <CategoryPageContent
      slug={slug}
      products={getProductsByCategory(slug)}
      basePath={`/en/products/${slug}`}
    />
  );
}
