export type Locale = "zh" | "en";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type Dictionary = {
  locale: Locale;
  langTag: string;
  site: {
    name: string;
    shortName: string;
    description: string;
    keywords: string[];
    contactPerson: string;
    address: string;
    aboutText: string;
  };
  nav: NavItem[];
  langSwitch: { label: string; href: string };
  common: {
    home: string;
    readMore: string;
    viewAll: string;
    viewDetail: string;
    contactNow: string;
    consultOrder: string;
    callNow: string;
    backToList: string;
    prev: string;
    next: string;
    total: string;
    items: string;
    category: string;
    phone: string;
    mobile: string;
    tel: string;
    fax: string;
    email: string;
    address: string;
    contactPerson: string;
    submit: string;
    scanMobile: string;
    backToTop: string;
    phoneConsult: string;
  };
  home: {
    bannerTag: string;
    banner1: string;
    banner2: string;
    productsTitle: string;
    productsHighlight: string;
    productsSubtitle: string;
    viewAllProducts: string;
    aboutTag: string;
    aboutTitle: string;
    aboutHighlight: string;
    aboutSlogan: string;
    viewMore: string;
    brandLine: string;
    brandTitle: string;
    featuredTitle: string;
    featuredSubtitle: string;
    viewAllCount: string;
    newsTitle: string;
    newsSubtitle: string;
    hotline: string;
    hotlineLabel: string;
    ctaTitle: string;
    ctaSubtitle: string;
    advantagesTitle: string;
    advantagesSubtitle: string;
  };
  stats: { value: number; suffix: string; label: string }[];
  advantages: { title: string; description: string }[];
  categories: { slug: string; name: string; description: string }[];
  news: { id: string; title: string; date: string; summary: string }[];
  about: {
    title: string;
    subtitle: string;
    extra: string;
    stats: { label: string; value: string }[];
  };
  products: {
    title: string;
    subtitle: string;
    all: string;
    detailDesc: string;
    emptyCategory: string;
  };
  newsPage: { title: string; subtitle: string; detailExtra: string };
  factory: { title: string; subtitle: string; images: { alt: string }[] };
  equipment: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    hotline: string;
    categories: string;
    contact: string;
    quickLinks: string;
    factory: string;
    equipment: string;
    news: string;
    about: string;
  };
  mobileBar: { home: string; products: string; phone: string };
};
