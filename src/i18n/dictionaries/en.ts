import type { Dictionary } from "../types";
import { siteConfig } from "@/config/site";

const prefix = "/en";

export const enDictionary: Dictionary = {
  locale: "en",
  langTag: "en",
  site: {
    name: "Qingzhou Dongfang Plastics Industry Co., Ltd.",
    shortName: "Dongfang Plastics",
    description:
      "Qingzhou Dongfang Plastics Industry Co., Ltd. manufactures PE bags, woven bags, and laminated woven bag products. Call 13806493898 for inquiries.",
    keywords: [
      "Qingzhou woven bag manufacturer",
      "PE bag producer",
      "woven bag supplier",
      "laminated woven bags",
      "Dongfang Plastics",
    ],
    contactPerson: "Manager Fang",
    address: "No. 805, Dongfang Middle Road, Qingzhou, Shandong, China",
    aboutText:
      "Qingzhou Dongfang Plastics Industry Co., Ltd. is located at No. 805, Dongfang Middle Road, Qingzhou, Shandong. We specialize in R&D and production of PE bags, woven bags, and laminated woven bag products. With complete production facilities and an experienced technical team, our products serve chemical, feed, grain, building materials, and other industries.",
  },
  nav: [
    { label: "Home", href: `${prefix}/` },
    { label: "About", href: `${prefix}/about` },
    {
      label: "Products",
      href: `${prefix}/products`,
      children: [
        { label: "PE Bags", href: `${prefix}/products/pe-bag` },
        { label: "PE Fabric", href: `${prefix}/products/pe-cloth` },
        { label: "Woven Bags", href: `${prefix}/products/woven-bag` },
        { label: "Farm Film Bags", href: `${prefix}/products/farm-film-bag` },
        { label: "Bulk Bags", href: `${prefix}/products/container-bag` },
      ],
    },
    { label: "News", href: `${prefix}/news` },
    { label: "Factory", href: `${prefix}/factory` },
    { label: "Equipment", href: `${prefix}/equipment` },
    { label: "Contact", href: `${prefix}/contact` },
  ],
  langSwitch: { label: "中文", href: "/" },
  common: {
    home: "Home",
    readMore: "Read more",
    viewAll: "View all",
    viewDetail: "View details",
    contactNow: "Contact us",
    consultOrder: "Order inquiry",
    callNow: "Call now",
    backToList: "Back to news",
    prev: "Previous",
    next: "Next",
    total: "Total",
    items: "items",
    category: "Category",
    phone: "Mobile",
    mobile: "Mobile site",
    tel: "Tel",
    fax: "Fax",
    email: "Email",
    address: "Address",
    contactPerson: "Contact",
    submit: "Submit inquiry",
    scanMobile: "Scan for mobile site",
    backToTop: "Back to top",
    phoneConsult: "Call us",
  },
  home: {
    bannerTag: "Professional Plastic-Woven Manufacturer",
    banner1: "PE Bags · Custom Production",
    banner2: "Woven Bags · Wide Variety",
    productsTitle: "Products",
    productsHighlight: "Wide Range",
    productsSubtitle:
      "Complete production facilities · Fine craftsmanship · Excellent after-sales service",
    viewAllProducts: "View all products",
    aboutTag: "About us",
    aboutTitle: "Get to know ",
    aboutHighlight: "us",
    aboutSlogan: "Customer satisfaction is our eternal pursuit",
    viewMore: "Learn more +",
    brandLine: "dongfang plastics",
    brandTitle:
      "Craftsmanship · Trusted Manufacturer · PE & Woven Bag Solutions",
    featuredTitle: "Featured Products",
    featuredSubtitle: "Custom woven bag cases for leading enterprises",
    viewAllCount: "View all {count} products",
    newsTitle: "News",
    newsSubtitle: "Latest company updates and industry insights",
    hotline: siteConfig.phones[0],
    hotlineLabel: "National hotline",
    ctaTitle: "Need a custom woven bag solution?",
    ctaSubtitle: `Call us today. Manager Fang provides end-to-end support from product selection to bulk production.`,
    advantagesTitle: "Why choose us",
    advantagesSubtitle:
      "Craftsmanship · Trusted manufacturer · PE & woven bag supply",
  },
  stats: [
    { value: 19, suffix: "+", label: "Years of experience" },
    { value: 90, suffix: "%", label: "Repeat customer rate" },
    { value: 2006, suffix: "", label: "Founded in 2006" },
    { value: 365, suffix: " days", label: "Dedicated service" },
  ],
  advantages: [
    {
      title: "Direct from manufacturer",
      description:
        "In-house production from raw materials to finished goods for better pricing and control.",
    },
    {
      title: "Custom production",
      description:
        "Size, printing, and lamination options tailored to your industry and packaging needs.",
    },
    {
      title: "Strict quality control",
      description:
        "Full QC process ensures every batch meets durability and appearance standards.",
    },
    {
      title: "Reliable after-sales",
      description:
        "Professional team ready to respond quickly to inquiries and support requests.",
    },
  ],
  categories: [
    {
      slug: "pe-bag",
      name: "PE Bags",
      description: "PE plastic bags for chemical, feed, grain, and industrial use.",
    },
    {
      slug: "pe-cloth",
      name: "PE Fabric",
      description: "High-strength PE fabric for diverse industrial packaging.",
    },
    {
      slug: "woven-bag",
      name: "Woven Bags",
      description: "Plastic woven bags with printing and lamination options.",
    },
    {
      slug: "farm-film-bag",
      name: "Farm Film Bags",
      description: "Durable agricultural film packaging bags.",
    },
    {
      slug: "container-bag",
      name: "Bulk Bags",
      description: "Large-capacity bulk bags for transport and storage.",
    },
  ],
  news: [
    {
      id: "1",
      title: "Dongfang Plastics at 2025 Plastic Packaging Expo",
      date: "2025-03-15",
      summary:
        "We showcased our latest woven and laminated bags and received strong interest from visitors.",
    },
    {
      id: "2",
      title: "New production line commissioned",
      date: "2025-02-20",
      summary:
        "Advanced woven bag equipment boosts capacity and delivery reliability.",
    },
    {
      id: "3",
      title: "Long-term partnerships with chemical enterprises",
      date: "2025-01-08",
      summary:
        "Quality products and service have led to strategic cooperation with major clients nationwide.",
    },
  ],
  about: {
    title: "About us",
    subtitle: "Professional plastic woven bag manufacturer",
    extra:
      'We uphold a "quality first, customer first" philosophy with a complete quality management system from sourcing to shipment.',
    stats: [
      { label: "Founded", value: "2006" },
      { label: "Annual capacity", value: "120M bags" },
      { label: "Bulk bag capacity", value: "6M/year" },
      { label: "Markets served", value: "Nationwide" },
    ],
  },
  products: {
    title: "Products",
    subtitle:
      "We specialize in plastic woven bags, laminated woven bags, and related packaging with fine craftsmanship and reliable service.",
    all: "All products",
    detailDesc:
      "Manufactured by {company} with premium materials and advanced processes. Custom size, printing, and lamination available. Contact us for details.",
    emptyCategory:
      "No products in this category yet. Browse other categories or contact us for customization.",
  },
  newsPage: {
    title: "News",
    subtitle: "Company updates and industry news",
    detailExtra:
      "We continue to focus on plastic woven packaging and appreciate our customers' trust. Contact us for more information.",
  },
  factory: {
    title: "Factory tour",
    subtitle: "Modern production base with an orderly working environment",
    images: [
      { alt: "Factory overview" },
      { alt: "Production workshop" },
      { alt: "Warehouse area" },
      { alt: "Finished products" },
    ],
  },
  equipment: {
    title: "Production equipment",
    subtitle: "Advanced machinery for quality and delivery efficiency",
    items: [
      {
        title: "Woven bag lines",
        description: "Multiple automated lines with flexible specifications and high output.",
      },
      {
        title: "Lamination units",
        description: "Enhanced water and moisture resistance through advanced lamination.",
      },
      {
        title: "Printing systems",
        description: "Multi-color printing for brand customization.",
      },
      {
        title: "QC equipment",
        description: "Rigorous inspection ensures consistent product quality.",
      },
    ],
  },
  contact: {
    title: "Contact us",
    subtitle: "We look forward to hearing from you",
    formTitle: "Online inquiry",
    formSubtitle: "Fill in the form and we will get back to you soon",
    namePlaceholder: "Your name",
    phonePlaceholder: "Phone number",
    messagePlaceholder: "Inquiry (specifications, quantity, etc.)",
  },
  footer: {
    hotline: "Consultation hotline",
    categories: "Product categories",
    contact: "Contact us",
    quickLinks: "Quick links",
    factory: "Factory tour",
    equipment: "Equipment",
    news: "News",
    about: "About us",
  },
  mobileBar: { home: "Home", products: "Products", phone: "Call" },
};
