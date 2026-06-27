import type { Metadata } from "next";
import { ContactPageContent } from "@/views/ContactPageContent";
import { enDictionary } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: enDictionary.contact.title,
  description: enDictionary.contact.subtitle,
};

export default function EnContactPage() {
  return <ContactPageContent />;
}
