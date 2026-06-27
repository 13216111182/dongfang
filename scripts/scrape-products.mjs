import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "..");
const outDir = path.join(__dirname, "..", "public", "images", "products");
const baseUrl = "http://qzhlbianzhidai.com";

const files = [
  path.join(root, "产品展示-青州恒利塑编有限公司.html"),
  path.join(root, "page2.html"),
  path.join(root, "page3.html"),
  path.join(root, "page4.html"),
  path.join(root, "homepage.html"),
];

const products = new Map();
const regex =
  /href="(?:https?:\/\/qzhlbianzhidai\.com)?\/article\/read\/(\d+)\.html"\s+title="([^"]*)">\s*<img\s+src="([^"]+)"\s+alt="([^"]*)"/g;

function normalizeImage(src) {
  if (src.includes("_files/")) return src.split("_files/").pop();
  if (src.startsWith("http")) return path.basename(new URL(src).pathname);
  if (src.startsWith("/upfile/")) return path.basename(src);
  if (src.startsWith("/")) return path.basename(src);
  return src;
}

function imageUrls(src) {
  const filename = normalizeImage(src);
  const urls = [];
  if (src.startsWith("/")) urls.push(baseUrl + src);
  if (src.startsWith("http")) urls.push(src);
  urls.push(
    `${baseUrl}/upfile/2025/02/${filename}`,
    `${baseUrl}/upfile/2025/03/${filename}`,
    `${baseUrl}/upload/${filename}`,
    `${baseUrl}/${filename}`
  );
  return [...new Set(urls)];
}

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  let m;
  while ((m = regex.exec(html)) !== null) {
    const [, id, title, src, alt] = m;
    products.set(id, {
      id,
      title: (title || alt).trim(),
      image: normalizeImage(src),
      srcPath: src,
    });
  }
}

console.log("Total products:", products.size);

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const existing = new Set(fs.readdirSync(outDir));
const toDownload = [...products.values()].filter((p) => !existing.has(p.image));

console.log("Missing images:", toDownload.length);

for (const p of toDownload) {
  let ok = false;
  for (const url of imageUrls(p.srcPath || p.image)) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(12000) });
      if (r.ok) {
        const buf = Buffer.from(await r.arrayBuffer());
        if (buf.length > 500) {
          fs.writeFileSync(path.join(outDir, p.image), buf);
          console.log("OK", p.image);
          ok = true;
          break;
        }
      }
    } catch {
      /* next */
    }
  }
  if (!ok) console.log("FAIL", p.id, p.title);
}

const list = [...products.values()].sort((a, b) => Number(b.id) - Number(a.id));
const escape = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const ts = `export type Product = {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
};

export const products: Product[] = [
${list
  .map(
    (p) =>
      `  { id: "${p.id}", title: "${escape(p.title)}", image: "/images/products/${p.image}", category: "woven-bag" },`
  )
  .join("\n")}
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string) {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function paginateProducts(items: Product[], page: number, pageSize = 32) {
  const start = (page - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    total: items.length,
    totalPages: Math.ceil(items.length / pageSize),
    page,
    pageSize,
  };
}
`;

fs.writeFileSync(path.join(__dirname, "..", "src", "data", "products.ts"), ts);
console.log("Done:", list.length, "products");
