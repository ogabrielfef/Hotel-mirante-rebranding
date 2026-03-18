import "./globals.css"
import type { ReactNode } from "react"
import { getBaseMetadata } from "@/lib/seo/metadata"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata = getBaseMetadata()

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
