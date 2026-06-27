import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetailContent } from "@/views/MiscPagesContent";
import { newsItems } from "@/data/news";
import { getDictionary } from "@/i18n";

export function generateStaticParams() {
  return newsItems.map((item) => ({ id: item.id }));
}

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = getDictionary("zh").news.find((n) => n.id === id);
  if (!news) return { title: "新闻详情" };
  return {
    title: news.title,
    description: news.summary,
    keywords: news.keywords,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = getDictionary("zh").news.find((n) => n.id === id);
  if (!news) notFound();
  return <NewsDetailContent id={id} />;
}
