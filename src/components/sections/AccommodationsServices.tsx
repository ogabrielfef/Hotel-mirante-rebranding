"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Coffee, Car, Thermometer, Users, Sparkles, Check } from "lucide-react";
import roomComfortable from "../../../public/room-comfortable.jpg";
import roomSuite from "../../../public/room-suite.jpg";
import roomTriple from "../../../public/room-triple.jpg";
import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    name: "Standard",
    image: roomComfortable,
    capacity: "2 pessoas",
  },
  {
    name: "Standard 2",
    image: roomSuite,
    capacity: "2-4 pessoas",
  },
  {
    name: "Suíte",
    image: roomTriple,
    capacity: "Até 4 pessoas",
  },
  {
    name: "Suíte 2",
    image: roomTriple,
    capacity: "Até 4 pessoas",
  },
  {
    name: "Flat",
    image: roomTriple,
    capacity: "Até 4 pessoas",
  },
];

const amenities = [
  { icon: Wifi, label: "Wi-Fi grátis" },
  { icon: Coffee, label: "Café da manhã" },
  { icon: Car, label: "Estacionamento" },
  { icon: Thermometer, label: "Ar condicionado" },
  { icon: Sparkles, label: "Limpeza diária" },
  { icon: Users, label: "Atendimento 24h" },
];

const AccommodationsServices = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Hospedagem em Careaçu – MG
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Conforto e Comodidade no <span className="text-primary">Hotel Mirante</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Quartos equipados e serviços pensados para tornar sua estadia prática e agradável. 
            Seja para uma noite ou uma temporada, aqui você encontra o que precisa.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Rooms - Left Side (3 columns) */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-4">
              {rooms.map((room, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image 
                      src={room.image} 
                      alt={`${room.name} - Hotel em Careaçu`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground">{room.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA for Rooms */}
            <div className="mt-6 text-center md:text-left">
              <Link href="/quartos">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  Ver Todos os Quartos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Amenities - Right Side (2 columns) */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-8 h-full border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Tudo Incluso na Diária
              </h3>
              <p className="text-muted-foreground mb-6">
                No Hotel Mirante, você encontra o melhor custo-benefício em hospedagem na região de Careaçu.
              </p>
              
              <div className="space-y-4 mb-8">
                {amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-4 bg-card/80 backdrop-blur-sm p-3 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{amenity.label}</span>
                      <Check className="w-4 h-4 text-secondary ml-auto" />
                    </div>
                  );
                })}
              </div>

              <Link href="/servicos">
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                >
                  Ver Todos os Serviços
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsServices;
