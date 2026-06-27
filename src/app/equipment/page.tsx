import type { Metadata } from "next";
import { EquipmentPageContent } from "@/views/MiscPagesContent";
import { zhDictionary } from "@/i18n/dictionaries/zh";

export const metadata: Metadata = {
  title: zhDictionary.equipment.title,
  description: zhDictionary.equipment.subtitle,
};

export default function EquipmentPage() {
  return <EquipmentPageContent />;
}
