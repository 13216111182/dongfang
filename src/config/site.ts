export const siteConfig = {
  name: "青州市东方塑业有限公司",
  shortName: "东方塑业",
  description:
    "青州市东方塑业有限公司是一家生产各类塑料PE袋、编织袋、覆膜编织袋制品的厂家，产品咨询电话：13806493898",
  keywords: [
    "青州编织袋厂家",
    "PE袋生产商",
    "编织袋供应商",
    "覆膜编织袋制品",
    "青州市东方塑业有限公司",
    "东方塑业",
  ],
  url: "https://www.dongfangsuye.com",
  phones: ["13806493898"],
  tel: "",
  fax: "",
  contactPerson: "房经理",
  address: "山东省青州市东方中路805号",
  email: "info@dongfangsuye.com",
  foundedYear: 2006,
  videoUrl: "https://vid.eo1.yingkelai.net/0324/qzhlbianzhidai-com.mp4",
  aboutText:
    "青州市东方塑业有限公司位于山东省青州市东方中路805号，是一家专业从事各类塑料PE袋、编织袋、覆膜编织袋制品研发与生产的现代化企业。公司拥有完善的生产设备和经验丰富的技术团队，产品广泛应用于化工、饲料、粮食、建材等行业，以优良的制作工艺和完善的售后服务赢得客户信赖。",
} as const;

export const navItems = [
  { label: "综合首页", href: "/" },
  { label: "公司简介", href: "/about" },
  {
    label: "产品中心",
    href: "/products",
    children: [
      { label: "PE袋", href: "/products/pe-bag" },
      { label: "PE布", href: "/products/pe-cloth" },
      { label: "编织袋", href: "/products/woven-bag" },
      { label: "农膜袋", href: "/products/farm-film-bag" },
      { label: "集装袋", href: "/products/container-bag" },
    ],
  },
  { label: "新闻动态", href: "/news" },
  { label: "厂景厂貌", href: "/factory" },
  { label: "生产设备", href: "/equipment" },
  { label: "联系我们", href: "/contact" },
] as const;

export const banners = [
  {
    image: "/images/banners/1-.jpg",
    alt: "PE袋 · 专业定制生产",
    href: "/products/pe-bag",
  },
  {
    image: "/images/banners/2-.jpg",
    alt: "编织袋 · 种类多样",
    href: "/products",
  },
] as const;

export const stats = [
  { value: 19, suffix: "+", label: "年行业经验" },
  { value: 90, suffix: "%", label: "客户回购率" },
  { value: 2006, suffix: "", label: "创建于2006年" },
  { value: 365, suffix: "天", label: "真诚服务" },
] as const;

export const advantages = [
  {
    title: "源头厂家直供",
    description: "自有生产基地，从原料到成品全流程把控，价格更有竞争力。",
  },
  {
    title: "定制生产能力",
    description: "支持规格、印刷、覆膜等个性化定制，满足各行业包装需求。",
  },
  {
    title: "严格品质管控",
    description: "完善质检体系，确保每一批次产品稳定可靠、耐用美观。",
  },
  {
    title: "完善售后保障",
    description: "专业团队全程跟进，快速响应客户咨询与售后问题。",
  },
] as const;

/** Primary contact phone */
export const primaryPhone = siteConfig.phones[0];
