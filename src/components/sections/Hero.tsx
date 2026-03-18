import Container from "@/components/layout/Container"
import Button from "@/components/ui/Button"

interface Props {
  title: string
  description: string
}

export default function Hero({ title, description }: Props) {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold">{title}</h1>

          <p className="text-gray-600">{description}</p>

          <Button>Saiba mais</Button>
        </div>
      </Container>
    </section>
  )
}
