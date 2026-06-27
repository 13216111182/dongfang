import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPageContent } from "@/views/CategoryPageContent";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory, paginateProducts } from "@/data/products";
import { getDictionary } from "@/i18n";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dict = getDictionary("zh");
  const category = dict.categories.find((c) => c.slug === slug);
  if (!category) return { title: "产品分类" };
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;
  if (!getCategoryBySlug(slug)) notFound();

  const page = Math.max(1, parseInt(query.page ?? "1", 10) || 1);
  const result = paginateProducts(getProductsByCategory(slug), page, 32);

  return (
    <CategoryPageContent
      slug={slug}
      items={result.items}
      page={result.page}
      totalPages={result.totalPages}
      basePath={`/products/${slug}`}
    />
  );
}
