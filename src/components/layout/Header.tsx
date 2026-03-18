import Link from "next/link"
import Container from "./Container"
import { siteConfig } from "@/data/site"

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold">
            {siteConfig.name}
          </Link>

          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/contact">Contato</Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
