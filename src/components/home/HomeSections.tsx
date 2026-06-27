"use client";

import Link from "next/link";
import { ArrowRight, Factory, Shield, Truck, Wrench } from "lucide-react";
import { siteConfig, primaryPhone } from "@/config/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CountUp } from "@/components/ui/CountUp";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { useLocale } from "@/components/providers/LocaleProvider";

const icons = [Factory, Wrench, Shield, Truck];

export function StatsSection() {
  const { dict } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#181b28] py-14 text-white">
      <div className="absolute inset-0 bg-[url('/images/banners/02.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:px-8">
        {dict.stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 100} className="text-center">
            <p className="text-4xl font-black text-[#fa561d] md:text-5xl">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-gray-300 md:text-base">{stat.label}</p>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}

export function AdvantagesSection() {
  const { dict } = useLocale();

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-[#fa561d]/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateIn>
          <SectionTitle title={dict.home.advantagesTitle} subtitle={dict.home.advantagesSubtitle} />
        </AnimateIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dict.advantages.map((item, index) => {
            const Icon = icons[index] ?? Factory;
            return (
              <AnimateIn key={item.title} delay={index * 80}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#fa561d]/30 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fa561d]/10 text-[#fa561d] transition group-hover:bg-[#fa561d] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BrandBanner() {
  const { dict } = useLocale();

  return (
    <section className="bg-[#fa561d] py-10 text-center text-white">
      <AnimateIn>
        <p className="text-sm font-medium uppercase tracking-[0.3em] opacity-80">
          {dict.home.brandLine}
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">{dict.home.brandTitle}</h2>
      </AnimateIn>
    </section>
  );
}

export function ContactCTA() {
  const { dict } = useLocale();
  const contactHref = dict.locale === "en" ? "/en/contact" : "/contact";

  return (
    <section className="relative overflow-hidden bg-[#181b28] py-16 text-white md:py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#fa561d]/20 blur-3xl" />
      <AnimateIn className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">{dict.home.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">{dict.home.ctaSubtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#fa561d] px-8 py-3.5 font-bold shadow-lg shadow-orange-500/30 transition hover:scale-105 hover:bg-[#e04a15]"
          >
            {dict.common.callNow}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${primaryPhone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 transition hover:border-[#fa561d] hover:bg-white/5"
          >
            {primaryPhone}
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}

export function AdvMoreBar() {
  const { dict } = useLocale();
  const productsHref = dict.locale === "en" ? "/en/products" : "/products";

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 bg-white px-4 py-8 sm:flex-row lg:px-8">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fa561d]/10">
          <span className="text-2xl">📞</span>
        </div>
        <div>
          <p className="text-sm text-gray-500">{dict.home.hotlineLabel}</p>
          <p className="text-2xl font-bold text-[#fa561d]">{dict.home.hotline}</p>
        </div>
      </div>
      <Link
        href={productsHref}
        className="inline-flex items-center gap-2 rounded-full bg-[#181b28] px-8 py-3 font-medium text-white transition hover:bg-[#fa561d]"
      >
        {dict.home.viewAllProducts} +
      </Link>
    </div>
  );
}
