import type { Metadata } from "next"
import { siteConfig } from "@/data/site"

export function getBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.domain),

    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.domain,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}
