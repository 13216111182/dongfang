<<<<<<< HEAD
# 青州恒利塑编有限公司 - 官网

基于 Next.js 16 + TypeScript + Tailwind CSS 构建的企业官网，复刻自 qzhlbianzhidai.com，并加入现代化厂家展示设计。

## 技术栈

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Swiper** - 首页轮播
- **Lucide React** - 图标

## 项目结构

```
web/
├── public/images/          # 静态图片资源
│   ├── banners/          # 轮播图
│   ├── products/         # 产品图片
│   ├── brand/            # Logo、二维码等
│   └── icons/            # 图标
├── src/
│   ├── app/              # 页面路由
│   ├── components/       # UI 组件
│   ├── config/           # 站点配置
│   └── data/             # 产品、新闻等数据
```

## 页面路由

| 路径 | 说明 |
|------|------|
| `/` | 首页 |
| `/about` | 公司简介 |
| `/products` | 产品展示（分页） |
| `/products/[slug]` | 产品分类 |
| `/products/detail/[id]` | 产品详情 |
| `/news` | 新闻动态 |
| `/factory` | 厂景厂貌 |
| `/equipment` | 生产设备 |
| `/contact` | 联系我们 |

## 开发

```bash
cd web
npm install
npm run dev
```

访问 http://localhost:3000

## 构建部署

```bash
npm run build
npm start
```

## 自定义内容

- 站点信息：修改 `src/config/site.ts`
- 产品数据：修改 `src/data/products.ts`
- 产品分类：修改 `src/data/categories.ts`
- 新闻内容：修改 `src/data/news.ts`
- 新增图片：放入 `public/images/` 对应目录
=======
# dongfang
东方塑业
>>>>>>> c3c43bc00ed07627d5d25651b1a139db548c3456
