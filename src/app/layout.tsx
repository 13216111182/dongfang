import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { zhDictionary } from "@/i18n/dictionaries/zh";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: {
    default: `${zhDictionary.site.name} - 编织袋和PE袋厂家`,
    template: `%s - ${zhDictionary.site.name}`,
  },
  description: zhDictionary.site.description,
  keywords: zhDictionary.site.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900 antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
