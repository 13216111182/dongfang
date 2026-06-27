"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import {
  StatsSection,
  AdvantagesSection,
  ContactCTA,
  BrandBanner,
  AdvMoreBar,
} from "@/components/home/HomeSections";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryCards } from "@/components/products/CategoryCards";
import { ProductGrid } from "@/components/products/ProductGrid";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";

export function HomePageContent() {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";
  const featuredProducts = products.slice(0, 12);

  return (
    <>
      <HeroSlider />
      <StatsSection />

      <section className="bg-[#f7f9fd] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateIn>
            <SectionTitle
              title={
                <>
                  {dict.home.productsTitle}{" "}
                  <span className="text-[#fa561d]">{dict.home.productsHighlight}</span>
                </>
              }
              subtitle={dict.home.productsSubtitle}
            />
          </AnimateIn>
          <AnimateIn delay={100}>
            <CategoryCards />
          </AnimateIn>
        </div>
        <AnimateIn delay={200} className="mt-10">
          <ProductCarousel products={featuredProducts} />
        </AnimateIn>
        <AdvMoreBar />
      </section>

      <BrandBanner />

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#fa561d]/5 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <AnimateIn>
            <span className="text-sm font-medium uppercase tracking-widest text-[#fa561d]">
              {dict.home.aboutTag}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              {dict.home.aboutTitle}
              <span className="text-[#fa561d]">{dict.home.aboutHighlight}</span>
            </h2>
            <h3 className="mt-4 text-xl font-bold text-gray-800">{dict.site.name}</h3>
            <p className="mt-1 text-[#fa561d]">{dict.home.aboutSlogan}</p>
            <p className="mt-6 leading-relaxed text-gray-600">{dict.site.aboutText}</p>
            <Link
              href={`${prefix}/about`}
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#fa561d] px-6 py-2.5 font-medium text-[#fa561d] transition hover:bg-[#fa561d] hover:text-white"
            >
              {dict.home.viewMore}
            </Link>
          </AnimateIn>
          <AnimateIn delay={150}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                poster="/images/banners/01.jpg"
              >
                <source src={siteConfig.videoUrl} type="video/mp4" />
              </video>
            </div>
          </AnimateIn>
        </div>
      </section>

      <AdvantagesSection />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateIn>
            <SectionTitle title={dict.home.featuredTitle} subtitle={dict.home.featuredSubtitle} />
          </AnimateIn>
          <AnimateIn delay={100}>
            <ProductGrid products={products.slice(0, 8)} />
          </AnimateIn>
          <div className="mt-8 text-center">
            <Link
              href={`${prefix}/products`}
              className="inline-flex items-center gap-2 text-[#fa561d] hover:underline"
            >
              {dict.home.viewAllCount.replace("{count}", String(products.length))}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f6fbfe] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateIn>
            <SectionTitle title={dict.home.newsTitle} subtitle={dict.home.newsSubtitle} />
          </AnimateIn>
          <div className="grid gap-6 md:grid-cols-3">
            {dict.news.map((news, i) => (
              <AnimateIn key={news.id} delay={i * 80}>
                <Link
                  href={`${prefix}/news/${news.id}`}
                  className="group flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#fa561d]/20 hover:shadow-lg"
                >
                  <time className="text-sm text-gray-400">{news.date}</time>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-[#fa561d]">
                    {news.title}
                  </h3>
                  <p className="mt-2 flex-1 line-clamp-2 text-sm text-gray-600">{news.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-[#fa561d] opacity-0 transition group-hover:opacity-100">
                    {dict.common.readMore} <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
