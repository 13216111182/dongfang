"use client";

import { Phone, MapPin, Mail, User } from "lucide-react";
import { Breadcrumb, PageHeader } from "@/components/ui/PageHeader";
import { siteConfig, primaryPhone } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";

export function ContactPageContent() {
  const { dict } = useLocale();
  const homeHref = dict.locale === "en" ? "/en" : "/";

  return (
    <>
      <div className="pt-20">
        <Breadcrumb
          items={[{ label: dict.common.home, href: homeHref }, { label: dict.contact.title }]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <PageHeader title={dict.contact.title} subtitle={dict.contact.subtitle} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-6">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#fa561d]" />
              <div>
                <h3 className="font-bold text-gray-900">{dict.common.address}</h3>
                <p className="mt-1 text-gray-600">{dict.site.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-6">
              <User className="mt-1 h-6 w-6 shrink-0 text-[#fa561d]" />
              <div>
                <h3 className="font-bold text-gray-900">{dict.common.contactPerson}</h3>
                <p className="mt-1 text-gray-600">{dict.site.contactPerson}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-6">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-[#fa561d]" />
              <div>
                <h3 className="font-bold text-gray-900">{dict.common.phone}</h3>
                <p className="mt-1 text-gray-600">
                  {dict.common.phone}：{primaryPhone}
                  {siteConfig.tel && (
                    <>
                      <br />
                      {dict.common.tel}：{siteConfig.tel}
                    </>
                  )}
                  {siteConfig.fax && (
                    <>
                      <br />
                      {dict.common.fax}：{siteConfig.fax}
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-gray-50 p-6">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-[#fa561d]" />
              <div>
                <h3 className="font-bold text-gray-900">{dict.common.email}</h3>
                <p className="mt-1 text-gray-600">{siteConfig.email}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#181b28] p-8 text-white">
            <h3 className="text-xl font-bold">{dict.contact.formTitle}</h3>
            <p className="mt-2 text-gray-300">{dict.contact.formSubtitle}</p>
            <form className="mt-8 space-y-4" action="#" method="post">
              <input
                type="text"
                name="name"
                placeholder={dict.contact.namePlaceholder}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#fa561d] focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder={dict.contact.phonePlaceholder}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#fa561d] focus:outline-none"
              />
              <textarea
                name="message"
                rows={4}
                placeholder={dict.contact.messagePlaceholder}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 focus:border-[#fa561d] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#fa561d] py-3 font-bold transition hover:bg-[#e04a15]"
              >
                {dict.common.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
