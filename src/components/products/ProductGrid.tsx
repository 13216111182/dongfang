"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useLocale } from "@/components/providers/LocaleProvider";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const { dict } = useLocale();
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="rounded px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
        >
          {dict.common.prev}
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={`rounded px-4 py-2 text-sm ${
            page === currentPage
              ? "bg-[#fa561d] text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="rounded px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
        >
          {dict.common.next}
        </Link>
      )}
    </div>
  );
}
