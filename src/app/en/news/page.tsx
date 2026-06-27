import type { Metadata } from "next";
import { NewsListContent } from "@/views/MiscPagesContent";
import { enDictionary } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: enDictionary.newsPage.title,
  description: enDictionary.newsPage.subtitle,
};

export default function EnNewsPage() {
  return <NewsListContent />;
}
