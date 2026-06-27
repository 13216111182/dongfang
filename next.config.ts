import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 开启静态导出
  images: {
    unoptimized: true // Cloudflare不支持Next内置图片优化，必须关闭
  }
};

export default nextConfig;
