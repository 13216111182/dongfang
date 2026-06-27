"use client";

import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { ContactCTA } from "@/components/home/HomeSections";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";

export function AboutPageContent() {
  const { dict } = useLocale();

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[
            { label: dict.common.home, href: dict.locale === "en" ? "/en" : "/" },
            { label: dict.about.title },
          ]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <PageHeader title={dict.about.title} subtitle={dict.about.subtitle} />
        <div className="grid gap-12 pb-20 lg:grid-cols-2">
          <AnimateIn>
            <div className="space-y-6 leading-relaxed text-gray-600">
              <p>{dict.site.aboutText}</p>
              <p>{dict.about.extra}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {dict.about.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-[#f7f9fd] p-4 text-center ring-1 ring-gray-100"
                  >
                    <p className="text-2xl font-bold text-[#fa561d]">{item.value}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={150}>
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
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
      </div>
      <ContactCTA />
    </>
  );
}
