/** 潍坊市下辖区县（市） */
export const weifangAreas = [
  "潍城区",
  "寒亭区",
  "坊子区",
  "奎文区",
  "青州市",
  "诸城市",
  "寿光市",
  "安丘市",
  "高密市",
  "昌邑市",
  "临朐县",
  "昌乐县",
] as const;

/** 山东省地级市 */
export const shandongCities = [
  "济南",
  "青岛",
  "淄博",
  "枣庄",
  "东营",
  "烟台",
  "潍坊",
  "济宁",
  "泰安",
  "威海",
  "日照",
  "临沂",
  "德州",
  "聊城",
  "滨州",
  "菏泽",
] as const;

function stripAdminSuffix(name: string) {
  return name.replace(/(市|县|区)$/, "");
}

/** 生成「地区 + 编织袋/塑编袋」类 SEO 关键词 */
export function buildRegionalSeoKeywords() {
  const bagTerms = ["编织袋", "塑编袋"] as const;
  const regional: string[] = [
    "山东编织袋厂家",
    "潍坊编织袋厂家",
    "山东塑编袋厂家",
    "潍坊塑编袋厂家",
    "山东省塑料编织袋",
  ];

  for (const area of weifangAreas) {
    const short = stripAdminSuffix(area);
    for (const term of bagTerms) {
      regional.push(`${short}${term}厂家`);
      regional.push(`${area}${term}`);
    }
  }

  for (const city of shandongCities) {
    regional.push(`${city}编织袋厂家`);
    regional.push(`${city}塑编袋`);
    regional.push(`${city}编织袋`);
  }

  return regional;
}

export const regionalSeoKeywords = buildRegionalSeoKeywords();
