export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  image?: string;
};

export const categories: ProductCategory[] = [
  {
    slug: "pe-bag",
    name: "PE袋",
    description: "适用于化工、饲料、粮食等行业的PE塑料袋产品。",
  },
  {
    slug: "pe-cloth",
    name: "PE布",
    description: "高强度PE布材料，适用于多种工业包装场景。",
  },
  {
    slug: "woven-bag",
    name: "编织袋",
    description: "各类塑料编织袋，支持彩印、覆膜等多种工艺。",
  },
  {
    slug: "farm-film-bag",
    name: "农膜袋",
    description: "专为农业领域设计的耐用农膜包装袋。",
  },
  {
    slug: "container-bag",
    name: "集装袋",
    description: "大容量集装袋，适用于大宗物料运输与仓储。",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
