"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import type { Product } from "@/data/products";
import { useLocale } from "@/components/providers/LocaleProvider";

export function ProductCarousel({ products }: { products: Product[] }) {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";
  const duplicated = [...products, ...products];

  return (
    <div className="product-carousel relative overflow-hidden py-4">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={2}
        spaceBetween={16}
        freeMode
        loop
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={4000}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 24 },
          1280: { slidesPerView: 6, spaceBetween: 24 },
        }}
        className="!overflow-visible"
      >
        {duplicated.map((product, i) => (
          <SwiperSlide key={`${product.id}-${i}`}>
            <Link
              href={`${prefix}/products/detail/${product.id}`}
              className="group block overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-3 transition duration-500 group-hover:scale-110"
                  sizes="200px"
                />
              </div>
              <p className="truncate px-3 py-3 text-center text-sm font-medium text-gray-700 group-hover:text-[#fa561d]">
                {product.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function ProductMarquee({ products }: { products: Product[] }) {
  const { dict } = useLocale();
  const prefix = dict.locale === "en" ? "/en" : "";
  const items = [...products, ...products];

  return (
    <div className="marquee-mask relative overflow-hidden py-2">
      <div className="animate-marquee flex gap-6 whitespace-nowrap">
        {items.map((product, i) => (
          <Link
            key={`${product.id}-m-${i}`}
            href={`${prefix}/products/detail/${product.id}`}
            className="inline-flex w-48 shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg"
          >
            <div className="relative aspect-square bg-gray-50">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-2"
                sizes="192px"
              />
            </div>
            <p className="truncate px-2 py-2 text-center text-xs font-medium text-gray-700">
              {product.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
