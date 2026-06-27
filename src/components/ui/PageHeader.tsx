import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="border-b border-gray-100 bg-gray-50 py-3">
      <div className="mx-auto max-w-7xl px-4 text-sm text-gray-500 lg:px-8">
        {items.map((item, index) => (
          <span key={item.label}>
            {index > 0 && <span className="mx-3">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#fa561d]">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="py-12 text-center md:py-16">
      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 bg-[#fa561d]" />
    </div>
  );
}
