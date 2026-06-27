import type { Metadata } from "next";
import { HomePageContent } from "@/views/HomePageContent";
import { enDictionary } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: `${enDictionary.site.name} - Woven Bag & PE Bag Manufacturer`,
  description: enDictionary.site.description,
  keywords: enDictionary.site.keywords,
};

export default function EnHomePage() {
  return <HomePageContent />;
}
