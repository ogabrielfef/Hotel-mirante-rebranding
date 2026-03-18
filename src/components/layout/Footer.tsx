import Container from "./Container"
import { siteConfig } from "@/data/site"

export default function Footer() {
  return (
    <footer className="border-t py-6 text-sm text-gray-500">
      <Container>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </p>
      </Container>
    </footer>
  )
}
