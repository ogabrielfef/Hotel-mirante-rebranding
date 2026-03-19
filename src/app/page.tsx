import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import AccommodationsServices from "@/components/sections/AccommodationsServices"
import Services from "@/components/sections/Services"
import Gallery from "@/components/sections/Gallery"
import Location from "@/components/sections/Location"

export default async function Home() {

  return (
    <>
      <Hero/>
      <About/>
      <AccommodationsServices/>
      <Services/>
      <Gallery/>
      <Location/>
    </>
  )
}
