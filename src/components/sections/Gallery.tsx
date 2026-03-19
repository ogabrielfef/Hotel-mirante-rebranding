"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ZoomIn } from "lucide-react";
import roomImage from "../../../public/room-comfortable.jpg";
import receptionImage from "../../../public/reception.jpg";
import breakfastImage from "../../../public/breakfast.jpg";
import commonAreaImage from "../../../public/common-area.jpg";
import heroImage from "../../../public/hero-hotel.jpg";
import roomDoubleImage from "../../../public/room-double.jpg";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: roomImage, alt: "Quarto confortável", category: "Quartos" },
  { src: receptionImage, alt: "Recepção", category: "Áreas Comuns" },
  { src: breakfastImage, alt: "Café da manhã", category: "Serviços" },
  { src: commonAreaImage, alt: "Área comum", category: "Áreas Comuns" },
  { src: heroImage, alt: "Fachada do Hotel", category: "Externo" },
  { src: roomDoubleImage, alt: "Quarto duplo", category: "Quartos" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Conheça Nossos <span className="text-primary">Espaços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada ambiente foi projetado pensando no seu bem-estar
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 animate-slide-up cursor-pointer ${
                index === 0 || index === 5 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-accent font-medium mb-1 block">{image.category}</span>
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/galeria">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Ver Galeria Completa
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
