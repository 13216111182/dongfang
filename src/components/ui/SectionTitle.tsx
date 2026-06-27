import type { ReactNode } from "react";

type SectionTitleProps = {
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-gradient-to-r from-[#fa561d] to-[#f77b17] ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
