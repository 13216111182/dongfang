"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Cog, Gauge, Layers, Package } from "lucide-react";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { Pagination } from "@/components/products/ProductGrid";
import { useLocale } from "@/components/providers/LocaleProvider";
import { paginateNews } from "@/data/news";
import { getNewsByIdFromDict, getSortedNews } from "@/i18n";
import { products } from "@/data/products";

const factoryImages = [
  "/images/banners/01.jpg",
  "/images/banners/02.jpg",
  "/images/banners/1-.jpg",
  "/images/banners/2-.jpg",
];

const equipmentImages = [
  products[1]?.image,
  products[4]?.image,
  products[3]?.image,
  products[6]?.image,
];

const equipmentIcons = [Cog, Layers, Package, Gauge];

export function FactoryPageContent() {
  const { dict } = useLocale();
  const homeHref = dict.locale === "en" ? "/en" : "/";

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[{ label: dict.common.home, href: homeHref }, { label: dict.factory.title }]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <PageHeader title={dict.factory.title} subtitle={dict.factory.subtitle} />
        <div className="grid gap-6 md:grid-cols-2">
          {dict.factory.images.map((img, i) => (
            <div
              key={factoryImages[i]}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={factoryImages[i]}
                alt={img.alt}
                fill
                className="object-cover transition hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function EquipmentPageContent() {
  const { dict } = useLocale();
  const homeHref = dict.locale === "en" ? "/en" : "/";

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[{ label: dict.common.home, href: homeHref }, { label: dict.equipment.title }]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <PageHeader title={dict.equipment.title} subtitle={dict.equipment.subtitle} />
        <div className="grid gap-8 md:grid-cols-2">
          {dict.equipment.items.map((item, i) => {
            const Icon = equipmentIcons[i] ?? Cog;
            const image = equipmentImages[i];
            return (
              <div key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-md">
                {image && (
                  <div className="relative aspect-[16/10] bg-gray-50">
                    <Image
                      src={image}
                      alt={item.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fa561d]/10 text-[#fa561d]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function NewsListContent() {
  return (
    <Suspense fallback={null}>
      <NewsListBody />
    </Suspense>
  );
}

function NewsListBody() {
  const { dict } = useLocale();
  const searchParams = useSearchParams();
  const homeHref = dict.locale === "en" ? "/en" : "/";
  const prefix = dict.locale === "en" ? "/en" : "";
  const basePath = `${prefix}/news`;
  const sorted = getSortedNews(dict);
  const totalPages = Math.max(1, Math.ceil(sorted.length / 10));
  const page = Math.min(
    totalPages,
    Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1)
  );
  const result = paginateNews(sorted, page, 10);

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[{ label: dict.common.home, href: homeHref }, { label: dict.newsPage.title }]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <PageHeader title={dict.newsPage.title} subtitle={dict.newsPage.subtitle} />
        <div className="space-y-8">
          {result.items.map((news) => (
            <Link
              key={news.id}
              href={`${prefix}/news/${news.id}`}
              className="group block rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md lg:p-10"
            >
              <time className="text-lg text-gray-400">{news.date}</time>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 group-hover:text-[#fa561d] md:text-3xl">
                {news.title}
              </h2>
              <p className="mt-5 text-xl leading-loose text-gray-600">{news.summary}</p>
            </Link>
          ))}
        </div>
        <Pagination currentPage={result.page} totalPages={result.totalPages} basePath={basePath} />
        <p className="pb-4 text-center text-base text-gray-500">
          {dict.common.total} {result.total} {dict.common.items}
        </p>
      </div>
    </>
  );
}

export function NewsDetailContent({ id }: { id: string }) {
  const { dict } = useLocale();
  const news = getNewsByIdFromDict(dict, id);
  const homeHref = dict.locale === "en" ? "/en" : "/";
  const newsHref = dict.locale === "en" ? "/en/news" : "/news";

  if (!news) return null;

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[
            { label: dict.common.home, href: homeHref },
            { label: dict.newsPage.title, href: newsHref },
            { label: news.title },
          ]}
        />
      </div>
      <article className="mx-auto max-w-4xl px-4 py-14 pb-24 lg:px-8">
        <time className="text-lg text-gray-400">{news.date}</time>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">{news.title}</h1>
        <div className="mt-10 space-y-7 text-xl leading-loose text-gray-600 md:text-[1.375rem] md:leading-[2]">
          {news.content?.length
            ? news.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            : <p>{news.summary}</p>}
          <p className="border-t border-gray-100 pt-8 text-lg leading-relaxed text-gray-500">
            {dict.site.name} {dict.newsPage.detailExtra}
          </p>
        </div>
        <Link
          href={newsHref}
          className="mt-12 inline-flex items-center gap-2 text-lg text-[#fa561d] hover:underline"
        >
          <ArrowLeft className="h-5 w-5" />
          {dict.common.backToList}
        </Link>
      </article>
    </>
  );
}
