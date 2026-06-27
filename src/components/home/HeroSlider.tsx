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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-6 right-4 z-10 flex items-center gap-2 md:right-8">
        <button
          type="button"
          className="hero-prev flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-md backdrop-blur-sm transition hover:bg-[#fa561d] hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="hero-next flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-md backdrop-blur-sm transition hover:bg-[#fa561d] hover:text-white"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
