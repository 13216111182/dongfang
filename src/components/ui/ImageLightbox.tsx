"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  images?: string[];
};

export function ImageLightbox({ src, alt, images }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const list = images?.length ? images : [src];

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + list.length) % list.length);
    },
    [list.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(list.indexOf(src));
          setOpen(true);
        }}
        className="group relative block h-full w-full cursor-zoom-in"
        aria-label="查看大图"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4 transition group-hover:scale-105"
          sizes="(max-width:1024px) 100vw, 50vw"
        />
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition group-hover:opacity-100">
          <ZoomIn className="h-5 w-5" />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setOpen(false)}
            aria-label="关闭"
          >
            <X className="h-6 w-6" />
          </button>
          {list.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="上一张"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="absolute right-16 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="下一张"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={list[index]}
              alt={alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
