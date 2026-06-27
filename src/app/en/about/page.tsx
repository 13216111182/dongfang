import type { Metadata } from "next";
import { AboutPageContent } from "@/views/AboutPageContent";
import { enDictionary } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: enDictionary.about.title,
  description: enDictionary.about.subtitle,
};

export default function EnAboutPage() {
  return <AboutPageContent />;
}
