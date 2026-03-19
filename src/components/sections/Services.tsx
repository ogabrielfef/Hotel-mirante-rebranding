"use client";

import { Wifi, Coffee, Car, Clock, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  { 
    icon: Wifi, 
    title: "Wi-Fi Gratuito",
    desc: "Conexão de alta velocidade em todos os ambientes"
  },
  { 
    icon: Coffee, 
    title: "Café da Manhã",
    desc: "Mesa farta com opções variadas das 6h às 10h"
  },
  { 
    icon: Car, 
    title: "Estacionamento",
    desc: "Amplo e seguro, para carros e caminhões"
  },
  { 
    icon: Clock, 
    title: "Recepção 24h",
    desc: "Atendimento disponível a qualquer momento"
  },
  { 
    icon: Sparkles, 
    title: "Climatização",
    desc: "Ar-condicionado em todos os quartos"
  },
  { 
    icon: Shield, 
    title: "Segurança",
    desc: "Monitoramento e iluminação constantes"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Comodidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Tudo Para Seu <span className="text-primary">Conforto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviços pensados para tornar sua estadia prática e agradável
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 animate-slide-up border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/servicos">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            >
              Ver Todos os Serviços
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
