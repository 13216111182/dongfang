"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useLocale } from "@/components/providers/LocaleProvider";

const bannerImages = [
  { image: "/images/banners/1-.jpg", key: "banner1" as const, href: "/products/pe-bag" },
  { image: "/images/banners/2-.jpg", key: "banner2" as const, href: "/products" },
];

export function HeroSlider() {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
        loop
        speed={1200}
        className="hero-swiper aspect-[16/7] max-h-[720px] w-full md:aspect-[21/8]"
      >
        {bannerImages.map((banner) => (
          <SwiperSlide key={banner.image}>
            <Link href={`${prefix}${banner.href}`} className="relative block h-full w-full">
              <Image
                src={banner.image}
                alt={dict.home[banner.key]}
                fill
                className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
              <div className="absolute bottom-[20%] left-[8%] max-w-lg text-white">
                <p className="mb-2 text-sm font-medium tracking-widest text-[#fa561d] uppercase">
                  {dict.home.bannerTag}
                </p>
                <h2 className="text-2xl font-bold drop-shadow-lg md:text-4xl">
                  {dict.home[banner.key]}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button type="button" className="hero-prev absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-[#fa561d] md:left-8" aria-label="Previous">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button type="button" className="hero-next absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-[#fa561d] md:right-8" aria-label="Next">
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
