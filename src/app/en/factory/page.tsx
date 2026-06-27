import type { Metadata } from "next";
import { FactoryPageContent } from "@/views/MiscPagesContent";
import { enDictionary } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: enDictionary.factory.title,
  description: enDictionary.factory.subtitle,
};

export default function EnFactoryPage() {
  return <FactoryPageContent />;
}
