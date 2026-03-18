import { siteConfig } from "@/data/site"

export default function sitemap() {
  const base = siteConfig.domain

  return [
    {
      url: base,
      lastModified: new Date(),
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
    },
  ]
}
