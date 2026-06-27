export type NewsItem = {
  id: string;
  title: string;
  date: string;
  summary: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "东方塑业参加2025年塑料包装行业展览会",
    date: "2025-03-15",
    summary: "公司携最新编织袋、覆膜袋产品亮相行业展会，获得众多客户关注与好评。",
  },
  {
    id: "2",
    title: "新生产线正式投产，产能再提升",
    date: "2025-02-20",
    summary: "引进先进编织袋生产设备，进一步保障产品交付速度与品质稳定性。",
  },
  {
    id: "3",
    title: "与多家化工企业达成长期合作",
    date: "2025-01-08",
    summary: "凭借优质产品与完善服务，公司与国内多家知名化工企业建立战略合作关系。",
  },
];

export function getNewsById(id: string) {
  return newsItems.find((n) => n.id === id);
}
