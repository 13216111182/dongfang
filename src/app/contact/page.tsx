import type { Metadata } from "next";
import { ContactPageContent } from "@/views/ContactPageContent";
import { zhDictionary } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zhDictionary.contact.title,
  description: zhDictionary.contact.subtitle,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
