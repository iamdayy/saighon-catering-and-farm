import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://saighon-catering.daydev.studio/sitemap.xml",
    host: "https://saighon-catering.daydev.studio",
  };
}
