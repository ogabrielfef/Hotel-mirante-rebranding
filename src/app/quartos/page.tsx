'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Tv, Thermometer, Bath, Users, Sofa, Microwave, ChefHat, Refrigerator, Laptop, ChevronLeft, ChevronRight, ArrowRight, Check, Coffee, Sparkles, Shield, MapPin } from "lucide-react";

import roomComfortable from "../../../public/room-comfortable.jpg";
import roomSuite from "../../../public/room-suite.jpg";
import roomTriple from "../../../public/room-triple.jpg";
import roomDouble from "../../../public/room-double.jpg";
import bathroom from "../../../public/bathroom.jpg";
import Image from "next/image";

const rooms = [
  {
    id: 1,
    name: "Quarto Standard",
    description: "Ideal para casais ou viajantes solo. Ambiente aconchegante com tudo que você precisa para uma estadia tranquila em Careaçu.",
    images: [roomComfortable, bathroom, roomDouble],
    capacity: "2 pessoas",
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Tv, label: "TV" },
      { icon: Thermometer, label: "Ar condicionado" },
      { icon: Bath, label: "Banheiro privativo" },
      { icon: Refrigerator, label: "Frigobar" },
      { icon: Laptop, label: "Mesa para trabalho" },
    ],
    highlight: "Mais Procurado",
  },
  {
    id: 2,
    name: "Quarto Standard 2",
    description: "Mais espaço e conforto para quem busca uma hospedagem especial. Área de estar separada para maior privacidade.",
    images: [roomSuite, bathroom, roomComfortable],
    capacity: "2-4 pessoas",
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Tv, label: "TV" },
      { icon: Thermometer, label: "Ar condicionado" },
      { icon: Bath, label: "Banheiro" },
      { icon: Refrigerator, label: "Frigobar" },
      { icon: Laptop, label: "Mesa para trabalho" },
      { icon: Sofa, label: "Área de estar" },
    ],
    highlight: "Melhor Custo-Benefício",
  },
  {
    id: 3,
    name: "Suíte",
    description: "Perfeito para famílias ou estadias prolongadas. Acomodação completa com cozinha equipada e todo o conforto de casa.",
    images: [roomTriple, bathroom, roomSuite],
    capacity: "Até 4 pessoas",
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Tv, label: "TV" },
      { icon: Bath, label: "Banheiro" },
      { icon: Refrigerator, label: "Frigobar" },
      { icon: Microwave, label: "Micro-ondas" },
      { icon: Sofa, label: "Área de estar" },
      { icon: ChefHat, label: "Cozinha" },
    ],
    highlight: "Ideal para Famílias",
  },
  {
    id: 4,
    name: "Suíte 2",
    description: "Perfeito para famílias ou estadias prolongadas. Acomodação completa com cozinha equipada e todo o conforto de casa.",
    images: [roomTriple, bathroom, roomSuite],
    capacity: "Até 4 pessoas",
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Tv, label: "TV" },
      { icon: Bath, label: "Banheiro" },
      { icon: Refrigerator, label: "Frigobar" },
      { icon: Microwave, label: "Micro-ondas" },
      { icon: Sofa, label: "Área de estar" },
      { icon: ChefHat, label: "Cozinha" },
    ],
    highlight: "Ideal para Famílias",
  },
  {
    id: 5,
    name: "Flat",
    description: "Perfeito para famílias ou estadias prolongadas. Acomodação completa com cozinha equipada e todo o conforto de casa.",
    images: [roomTriple, bathroom, roomSuite],
    capacity: "Até 4 pessoas",
    amenities: [
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Tv, label: "TV" },
      { icon: Bath, label: "Banheiro" },
      { icon: Refrigerator, label: "Frigobar" },
      { icon: Microwave, label: "Micro-ondas" },
      { icon: Sofa, label: "Área de estar" },
      { icon: ChefHat, label: "Cozinha" },
    ],
    highlight: "Ideal para Famílias",
  },
];

const RoomCard = ({ room, onReserve }: { room: typeof rooms[0]; onReserve: (name: string) => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-border/50 hover:border-primary/30 group">
      <div className="aspect-[16/10] overflow-hidden relative flex-shrink-0">
        {/* Highlight Badge */}
        {room.highlight && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {room.highlight}
          </div>
        )}
        
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {room.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${room.name} - Hotel em Careaçu - Foto ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {room.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-2xl text-primary">{room.name}</CardTitle>
        <CardDescription className="mt-2 text-base">
          {room.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-6 text-sm">
          <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-medium">{room.capacity}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-6">
          {room.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Check className="w-4 h-4 text-secondary" />
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <Button
            onClick={() => onReserve(room.name)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Reservar Agora
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Quartos = () => {
  const handleReserve = (roomName: string) => {
    window.open(
      `https://wa.me/5500000000000?text=Olá, gostaria de fazer uma reserva no ${roomName} do Hotel Mirante em Careaçu`,
      "_blank"
    );
  };

  const allAmenities = [
    { icon: Wifi, label: "Wi-Fi Gratuito", desc: "Internet de alta velocidade" },
    { icon: Coffee, label: "Café da Manhã", desc: "Delicioso café da manhã em um empório" },
    { icon: Thermometer, label: "Ar Condicionado", desc: "Controle individual" },
    { icon: Bath, label: "Banheiro Privativo", desc: "Água quente 24h" },
    { icon: Sparkles, label: "Limpeza Diária", desc: "Ambiente sempre limpo" },
    { icon: Shield, label: "Segurança", desc: "Monitoramento 24h" },
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/hero-hotel.jpg')`}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/60" />
          </div>
          <div className="container mx-auto px-4 text-center relative text-white">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              Hospedagem em Careaçu – MG
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quartos do Hotel Mirante
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Encontre a acomodação perfeita para sua estadia. Todos os quartos equipados 
              com conforto, Wi-Fi gratuito e café da manhã incluso.
            </p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} onReserve={handleReserve} />
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section - Redesigned with copy */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Content */}
              <div>
                <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                  Incluído em Todos os Quartos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Tudo Para Seu <span className="text-primary">Conforto</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  No Hotel Mirante em Careaçu, cada detalhe foi pensado para tornar sua estadia 
                  mais confortável e prática. Oferecemos o melhor custo-benefício da região, 
                  com serviços que fazem a diferença.
                </p>
                
                <div className="space-y-4">
                  {allAmenities.slice(0, 3).map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{amenity.label}</p>
                          <p className="text-sm text-muted-foreground">{amenity.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-4">
                {allAmenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div 
                      key={index} 
                      className="bg-card p-6 rounded-2xl shadow-md border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <p className="font-semibold text-foreground mb-1">{amenity.label}</p>
                      <p className="text-sm text-muted-foreground">{amenity.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Using accent colors for harmony */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Reserve Seu Quarto Agora
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Garanta Sua Hospedagem em Careaçu
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Entre em contato pelo WhatsApp e reserve o quarto ideal para você. 
              Atendimento rápido e personalizado.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.open("https://wa.me/553531350135?text=Olá, gostaria de fazer uma reserva no Hotel Mirante em Careaçu", "_blank")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-14 group font-semibold"
            >
              Reservar pelo WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Quartos;
