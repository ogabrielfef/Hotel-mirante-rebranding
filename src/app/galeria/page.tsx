'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight, MapPin, Camera } from "lucide-react";

import roomImage from "../../../public/room-comfortable.jpg";
import receptionImage from "../../../public/reception.jpg";
import breakfastImage from "../../../public/breakfast.jpg";
import commonAreaImage from "../../../public/common-area.jpg";
import parkingImage from "../../../public/parking.jpg";
import heroImage from "../../../public/hero-hotel.jpg";
import bathroomImage from "../../../public/bathroom.jpg";
import hallwayImage from "../../../public/hallway.jpg";
import gardenImage from "../../../public/garden.jpg";
import roomDoubleImage from "../../../public/room-double.jpg";
import roomSuiteImage from "../../../public/room-suite.jpg";
import roomTripleImage from "../../../public/room-triple.jpg";
import Image from "next/image";
import Link from "next/link";

const galleryCategories = [
  {
    name: "Quartos",
    images: [
      { src: roomImage, alt: "Quarto confortável com cama queen size", description: "Quarto Standard equipado com cama confortável, ar-condicionado e TV" },
      { src: roomDoubleImage, alt: "Quarto duplo aconchegante", description: "Quarto duplo ideal para casais ou viajantes a trabalho" },
      { src: roomSuiteImage, alt: "Suíte espaçosa", description: "Suíte com área de estar separada e mais espaço" },
      { src: roomTripleImage, alt: "Flat completo", description: "Flat completo com cozinha para famílias ou estadias prolongadas" },
    ],
  },
  {
    name: "Áreas Comuns",
    images: [
      { src: receptionImage, alt: "Recepção acolhedora", description: "Nossa recepção funciona 24 horas para sua comodidade" },
      { src: commonAreaImage, alt: "Área de convivência", description: "Espaço de convivência para relaxar e socializar" },
      { src: hallwayImage, alt: "Corredor aconchegante", description: "Corredores limpos e bem iluminados" },
      { src: heroImage, alt: "Fachada do Hotel", description: "Vista externa do Hotel Mirante" },
    ],
  },
  {
    name: "Serviços",
    images: [
      { src: breakfastImage, alt: "Café da manhã completo", description: "Café da manhã variado servido das 6h às 10h" },
      { src: parkingImage, alt: "Estacionamento amplo", description: "Estacionamento gratuito com vagas para todos os tipos de veículos" },
      { src: bathroomImage, alt: "Banheiro moderno", description: "Banheiros privativos com água quente e itens de higiene" },
      { src: gardenImage, alt: "Área externa", description: "Área verde para momentos de tranquilidade" },
    ],
  },
];

const allImages = galleryCategories.flatMap(category => 
  category.images.map(img => ({ ...img, category: category.name }))
);

// Define mosaic layout patterns
const getMosaicClass = (index: number): string => {
  const patterns = [
    "col-span-2 row-span-2", // Large square
    "col-span-1 row-span-1", // Small square
    "col-span-1 row-span-2", // Tall rectangle
    "col-span-1 row-span-1", // Small square
    "col-span-2 row-span-1", // Wide rectangle
    "col-span-1 row-span-1", // Small square
    "col-span-1 row-span-1", // Small square
    "col-span-1 row-span-2", // Tall rectangle
    "col-span-2 row-span-1", // Wide rectangle
    "col-span-1 row-span-1", // Small square
    "col-span-1 row-span-1", // Small square
    "col-span-2 row-span-2", // Large square
  ];
  return patterns[index % patterns.length];
};

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Todos");

  const filteredImages = filter === "Todos" 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/common-area.jpg')`}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/60" />
          </div>
          <div className="relative container mx-auto px-4 text-center text-white">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Camera className="w-4 h-4 text-accent" />
              Fotos Reais do Hotel
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Galeria de Fotos
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Conheça cada cantinho do Hotel Mirante em Careaçu. Estrutura nova, ambientes limpos e aconchegantes.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-background sticky top-20 z-40 border-b border-border/50 backdrop-blur-lg bg-background/95">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={filter === "Todos" ? "default" : "outline"}
                onClick={() => setFilter("Todos")}
                className={filter === "Todos" 
                  ? "bg-primary hover:bg-primary/90" 
                  : "border-border hover:border-primary/50"}
              >
                Todos ({allImages.length})
              </Button>
              {galleryCategories.map(category => (
                <Button
                  key={category.name}
                  variant={filter === category.name ? "default" : "outline"}
                  onClick={() => setFilter(category.name)}
                  className={filter === category.name 
                    ? "bg-primary hover:bg-primary/90" 
                    : "border-border hover:border-primary/50"}
                >
                  {category.name} ({category.images.length})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Mosaic Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${getMosaicClass(index)}`}
                >
                  <Image
                    src={image.src}
                    alt={`${image.alt} - Hotel em Careaçu`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs text-accent font-medium mb-1 block">{image.category}</span>
                      <p className="text-white font-semibold text-sm md:text-base">{image.alt}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Category badge for larger items */}
                  {(index % 12 === 0 || index % 12 === 11) && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.category}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Photo count indicator */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Mostrando <span className="font-semibold text-foreground">{filteredImages.length}</span> fotos
                {filter !== "Todos" && <span> em {filter}</span>}
              </p>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-black/98 border-none">
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              {selectedImage !== null && (
                <div className="flex flex-col items-center">
                  <Image
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                  <div className="p-6 text-center text-white">
                    <span className="text-accent text-sm font-medium">{filteredImages[selectedImage].category}</span>
                    <p className="text-lg font-medium mt-1 mb-2">{filteredImages[selectedImage].alt}</p>
                    <p className="text-sm text-white/70">{filteredImages[selectedImage].description}</p>
                    <p className="text-xs text-white/50 mt-2">{selectedImage + 1} de {filteredImages.length}</p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Gostou do que viu?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Venha Conhecer Pessoalmente
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              As fotos mostram apenas um pouco do que preparamos para você. Reserve agora e viva a experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quartos">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-14 group font-semibold"
                >
                  Ver Nossos Quartos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open("https://wa.me/553531350135?text=Olá, gostaria de fazer uma reserva no Hotel Mirante", "_blank")}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-6 h-14"
              >
                Reservar Agora
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Galeria;
