import type { Metadata } from "next";
import { NewsListContent } from "@/views/MiscPagesContent";
import { zhDictionary } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zhDictionary.newsPage.title,
  description: zhDictionary.newsPage.subtitle,
};

export default function NewsPage() {
  return <NewsListContent />;
}
