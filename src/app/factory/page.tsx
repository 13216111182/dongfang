import type { Metadata } from "next";
import { FactoryPageContent } from "@/views/MiscPagesContent";
import { zhDictionary } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zhDictionary.factory.title,
  description: zhDictionary.factory.subtitle,
};

export default function FactoryPage() {
  return <FactoryPageContent />;
}
