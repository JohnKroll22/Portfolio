import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  "",
  "/about",
  "/projects",
  "/skills",
  "/experience",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
