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
      "Qingzhou Dongfang Plastics, based in Weifang, Shandong, manufactures PE bags, woven bags, laminated bags, and FIBCs — serving all Weifang districts and Shandong cities. Call 13806493898.",
    keywords: [
      "Weifang woven bag manufacturer",
      "Shandong woven bags",
      "Qingzhou plastic woven bags",
      "Shouguang woven bags",
      "Zhucheng woven bags",
      "Jinan woven bag supplier",
      "Qingdao woven bags",
      "Zibo laminated bags",
      "Dongying chemical packaging bags",
      "Yantai FIBC manufacturer",
      "Linyi feed bags",
      "Weifang Shouguang Zhucheng woven bags",
      "Shandong province woven bag factory",
      "Dongfang Plastics",
    ],
    contactPerson: "Manager Fang",
    address: "No. 805, Dongfang Middle Road, Qingzhou, Weifang, Shandong, China",
    aboutText:
      "Qingzhou Dongfang Plastics Industry Co., Ltd. is located in Qingzhou, Weifang, Shandong Province. We manufacture PE bags, woven bags, laminated woven bags, and FIBCs, serving all 12 districts and counties under Weifang — including Weicheng, Hanting, Fangzi, Kuiwen, Qingzhou, Zhucheng, Shouguang, Anqiu, Gaomi, Changyi, Linqu, and Changle — as well as Jinan, Qingdao, Zibo, Zaozhuang, Dongying, Yantai, Jining, Tai'an, Weihai, Rizhao, Linyi, Dezhou, Liaocheng, Binzhou, and Heze across Shandong.",
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
      title: "Dongfang at 2025 Expo — Woven Bags for Weifang & Shandong",
      date: "2025-03-15",
      summary:
        "Based in Qingzhou, Weifang, Dongfang showcased woven, laminated, PE, and FIBC products to buyers from across Shandong Province.",
      content: [
        "In March 2025, Dongfang Plastics in Qingzhou, Weifang, Shandong exhibited at a major packaging trade show, presenting woven bags, laminated bags, PE bags, and FIBCs.",
        "Buyers from Zhucheng, Shouguang, Anqiu, Gaomi, Changyi, Linqu, Changle, and cities such as Zibo, Dongying, Yantai, and Qingdao showed strong interest in our color-printed and moisture-proof bags.",
        "We offer in-house production and OEM service for customers throughout Weifang's districts and Shandong's prefecture-level cities.",
      ],
    },
    {
      id: "2",
      title: "Capacity Upgrade Serves Zhucheng, Shouguang, Changle & More",
      date: "2025-02-20",
      summary:
        "New looms and lamination lines boost output for bulk orders across Weifang counties and Shandong industrial cities.",
      content: [
        "Dongfang Plastics completed a major equipment upgrade in early 2025 to better serve Weifang and surrounding regions.",
        "Laminated bags, moisture-proof sacks, and FIBCs now ship faster to Zhucheng, Shouguang, Anqiu, Gaomi, Changyi, Linqu, Changle, as well as Jinan, Zibo, and Binzhou.",
        "Full-process quality control ensures every batch meets chemical, feed, and grain packaging requirements.",
      ],
    },
    {
      id: "3",
      title: "Chemical Bag Supply for Dongying, Zibo, Binzhou & Heze",
      date: "2025-01-08",
      summary:
        "Long-term woven bag partnerships across Shandong's chemical belt — laminated, anti-static, and PE-lined options.",
      content: [
        "Shandong's chemical hubs in Dongying, Zibo, Binzhou, Heze, and Qingdao require strict load, moisture, and labeling standards. Dongfang Plastics supplies long-term woven bag programs for these markets.",
        "We offer leak-resistant laminated bags, anti-static bags, and PE-lined sacks for powders and granules.",
        "Located in Qingzhou, Weifang, we respond quickly to custom sizes, printing, and urgent replenishment across the province.",
      ],
    },
    {
      id: "4",
      title: "Laminated Bags for Zhucheng, Anqiu, Gaomi & Linyi Agri Markets",
      date: "2024-12-10",
      summary:
        "Improved lamination for feed and grain bags — serving Weifang farming counties and Jining, Tai'an, Linyi, Dezhou.",
      content: [
        "Zhucheng, Anqiu, Gaomi, and Changyi are key agri regions in Weifang. Dongfang optimized its laminated woven bag process for better moisture sealing.",
        "Products serve feed mills and grain depots across Weifang and southern/western Shandong including Linyi, Jining, Tai'an, and Dezhou.",
        "Custom sizes and printing available — contact us from any Weifang district or Shandong city.",
      ],
    },
    {
      id: "5",
      title: "FIBC Customization for Jinan, Qingdao, Yantai & Weifang",
      date: "2024-11-18",
      summary:
        "Ton bags and bulk sacks for port and industrial cities — Jinan, Qingdao, Yantai, Weihai, Rizhao, and Weifang districts.",
      content: [
        "Dongfang Plastics offers full FIBC customization for fertilizers, resins, minerals, and building materials across Shandong.",
        "Loads from 500 kg to 2000 kg with optional liners, UV coating, and anti-static features — validated by clients in Jinan, Qingdao, Yantai, Dongying, and Weifang urban districts.",
        "From design to sampling, we help reduce packaging cost and improve loading efficiency province-wide.",
      ],
    },
    {
      id: "6",
      title: "Color Printing for Weicheng, Kuiwen, Fangzi, Hanting & Beyond",
      date: "2024-10-25",
      summary:
        "Brand-focused printed woven bags for Weifang city districts and counties including Shouguang and Zhucheng.",
      content: [
        "Dongfang provides multi-color printing for woven bags to clients in Weicheng, Hanting, Fangzi, Kuiwen, Qingzhou, Zhucheng, Shouguang, Gaomi, and Changyi.",
        "Eco-friendly inks with strong color fastness — ideal for fertilizer, feed, chemical, and building-material packaging. Also shipped to Zibo, Zaozhuang, Liaocheng, and Dezhou.",
        "Trial runs and mass production supported — bring your artwork or samples.",
      ],
    },
    {
      id: "7",
      title: "PE Liner + Woven Outer Bags for Jining, Tai'an, Linyi & Weifang",
      date: "2024-09-12",
      summary:
        "Dual-layer packaging for fine chemicals and premium feed in southern Shandong and Weifang industrial clients.",
      content: [
        "PE inner liners plus woven outer bags deliver moisture sealing and load capacity for demanding applications.",
        "Widely used in Jining, Tai'an, Linyi, Heze, Rizhao, and Weifang's Zhucheng, Anqiu, and Linqu for fine chemicals and premium feed.",
        "Integrated production from our Qingzhou, Weifang base shortens lead times across Shandong.",
      ],
    },
    {
      id: "8",
      title: "Woven Bag Selection Guide for Weifang & Shandong Industries",
      date: "2024-08-05",
      summary:
        "How to choose the right bag for chemical, feed, grain, and building-material use across Shandong cities.",
      content: [
        "Plastic woven bags are widely used in Shandong, but specs vary by industry and region.",
        "Chemical hubs (Dongying, Zibo, Binzhou): laminated or PE-lined bags. Agri regions (Zhucheng, Anqiu, Shouguang, Linyi, Jining): moisture-proof feed/grain sacks. Building materials (Jinan, Tai'an, Zaozhuang): high-density weave with reinforced seams. Bulk powder: FIBCs.",
        "Dongfang Plastics serves all 12 Weifang districts/counties and 16 Shandong prefecture-level cities. Call 13806493898 for free consultation.",
      ],
    },
    {
      id: "9",
      title: "Serving All Weifang Districts & 16 Shandong Cities",
      date: "2024-07-20",
      summary:
        "From Qingzhou, Weifang — woven bags, laminated bags, PE bags, and FIBCs delivered across Shandong Province.",
      content: [
        "Dongfang Plastics is headquartered in Qingzhou, Weifang, Shandong, with convenient logistics to Zibo, Dongying, Binzhou, and the greater Weifang area.",
        "We supply Weicheng, Hanting, Fangzi, Kuiwen, Qingzhou, Zhucheng, Shouguang, Anqiu, Gaomi, Changyi, Linqu, and Changle — all 12 jurisdictions under Weifang.",
        "We also serve Jinan, Qingdao, Zibo, Zaozhuang, Dongying, Yantai, Jining, Tai'an, Weihai, Rizhao, Linyi, Dezhou, Liaocheng, Binzhou, and Heze. Contact us at 13806493898 for quotes and samples.",
      ],
    },
    {
      id: "10",
      title: "H1 2026 PP Market Review: Why Woven Bag Raw Material Costs Swung Sharply",
      date: "2026-06-20",
      summary:
        "Geopolitical shocks pushed PP raffia prices up then down in H1 2026 — woven bag buyers in Shandong should plan purchases around feedstock cycles.",
      content: [
        "In the first half of 2026, China's polypropylene market rallied on Middle East tensions and rising crude, propane, and propylene costs. PP raffia averages topped RMB 9,000/ton, lifting production costs for woven, laminated, and FIBC bags.",
        "By mid-June, risk premiums faded and spot PP fell toward RMB 8,200/ton — a drop of over 15% in weeks. Woven bag plant operating rates stayed near 43% as off-season demand for agri and construction sacks remained weak.",
        "Dongfang Plastics in Qingzhou, Weifang advises Shandong clients to stock ahead of peak season and buy on real need in slow months. We offer stable supply of laminated bags, PE liners, and ton bags for chemical, feed, and grain sectors.",
      ],
    },
    {
      id: "11",
      title: "Low Run Rates in Woven Bag Plants: Procurement Tips for a Weak Order Season",
      date: "2026-05-15",
      summary:
        "Sample woven plants run below 45% capacity — batch ordering beats bulk stockpiling for Shandong chemical and feed buyers.",
      content: [
        "Industry surveys show woven bag sample plants operating around 42–45%, below typical levels. Agri downtime and slower construction cut demand for fertilizer, building-material, and grain sacks; FIBC orders are also soft.",
        "Downstream PP sectors are mixed: some film grades pick up on holiday promotions, while traditional woven demand fades before the summer lull. Custom printed and laminated bags still need lead time — plan orders early.",
        "Dongfang Plastics reminds clients in Weifang, Zibo, Dongying, and Linyi to avoid overstocking in weak markets and consider volume contracts with flexible pricing linked to PP trends.",
      ],
    },
    {
      id: "12",
      title: "Greener Woven Packaging: Recycled PP and Policy Trends in 2026",
      date: "2026-04-10",
      summary:
        "Plastic pollution controls and higher rPP use push the industry toward lighter, recyclable, high-performance woven bags.",
      content: [
        "China continues tightening plastic pollution rules and expanding recycling systems. Single-use non-degradable woven mail bags are being phased down; recycled polypropylene (rPP) use is rising, with tax incentives for qualifying products.",
        "For manufacturers, green upgrade means lighter high-strength fabric, reusable FIBCs, and laminated sacks that balance moisture protection with recyclability. PP woven bags still dominate industrial heavy-duty use.",
        "Dongfang Plastics improves material management and eco-friendly lamination and printing, offering Shandong customers woven bag options aligned with environmental requirements.",
      ],
    },
    {
      id: "13",
      title: "Will Woven Bag Prices Drop After PP Falls? How Cost Pass-Through Works",
      date: "2026-03-22",
      summary:
        "PP may fall faster than finished sack quotes — labor, energy, lamination, and printing costs keep woven bag prices sticky.",
      content: [
        "When PP drops, clients often expect immediate cuts on woven, laminated, and FIBC prices. In practice, sacks also reflect weaving, lamination, ink, labor, power, and freight — and plants must consume higher-cost inventory first.",
        "Prices tend to rise quickly when feedstock spikes, but fall more slowly when orders are thin and fixed costs must be covered. Regional competition, print complexity, and batch size also matter.",
        "As a source factory in Qingzhou, Weifang, Dongfang Plastics quotes transparently on live PP levels and order specs. Call us for current pricing on chemical, feed, and bulk bags across Shandong.",
      ],
    },
    {
      id: "14",
      title: "2026 Woven Packaging Outlook: Shandong Chemical, Feed & Niche Opportunities",
      date: "2026-02-08",
      summary:
        "New PP capacity vs maintenance, split end-market demand — laminated bags and FIBCs offer structural growth in Shandong.",
      content: [
        "2026 brings volatile PP costs and shifting supply-demand. H1 may stay cost-supported; H2 could see more range-bound trading as capacity lands. Building-material sacks stay soft; chemical, feed, agri, and export packaging hold niches.",
        "In Shandong, Zibo, Dongying, Binzhou, and Heze need moisture-proof and anti-static bags; Zhucheng, Anqiu, Shouguang, and Linyi drive seasonal feed and grain sacks; Qingdao, Yantai, and Weihai support FIBC export flows.",
        "Dongfang Plastics serves all Weifang districts and 16 Shandong cities with woven, laminated, PE, and bulk bags — contact us for 2026 annual supply and customization.",
      ],
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
    subtitle: "Woven bags across Weifang districts & Shandong cities — industry updates",
    detailExtra:
      "We serve all 12 Weifang districts/counties and 16 Shandong prefecture-level cities with woven bags, laminated bags, PE bags, and FIBCs. Contact us for custom solutions.",
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
