import type { Metadata } from "next";
import { AboutPageContent } from "@/views/AboutPageContent";
import { zhDictionary } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zhDictionary.about.title,
  description: `了解${zhDictionary.site.name}的企业概况、发展历程与核心优势。`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
