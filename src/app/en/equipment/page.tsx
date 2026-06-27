import type { Metadata } from "next";
import { EquipmentPageContent } from "@/views/MiscPagesContent";
import { enDictionary } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: enDictionary.equipment.title,
  description: enDictionary.equipment.subtitle,
};

export default function EnEquipmentPage() {
  return <EquipmentPageContent />;
}
