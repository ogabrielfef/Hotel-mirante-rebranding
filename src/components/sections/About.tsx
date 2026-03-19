"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Coffee, Star, Shield } from "lucide-react";
import receptionImage from "../../../public/reception.jpg";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const highlights = [
    { icon: Clock, label: "Recepção 24h" },
    { icon: Coffee, label: "Café da manhã" },
    { icon: Star, label: "Bem avaliado" },
    { icon: Shield, label: "Estrutura nova" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              <MapPin className="w-4 h-4" />
              Hotel em Careaçu – MG
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Bem-vindo ao <span className="text-primary">Hotel Mirante</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p className="text-lg">
                Procurando uma <strong className="text-foreground">hospedagem em Careaçu</strong> com conforto e bom preço? 
                O Hotel Mirante é a escolha certa! Estrutura nova, quartos climatizados e café da manhã completo.
              </p>
              <p>
                Ideal para famílias, viajantes a trabalho ou quem está de passagem pela região. 
                Oferecemos o melhor custo-benefício em <strong className="text-foreground">hotel no centro de Careaçu</strong>.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-muted/50 p-3 rounded-xl border border-border/50"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground text-sm">{item.label}</span>
                  </div>
                );
              })}
            </div>
            
            <Link href="/sobre">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Conheça Nossa História
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={receptionImage} 
                alt="Recepção do Hotel Mirante em Careaçu" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-24 -left-6 bg-card p-5 rounded-xl shadow-xl border border-border max-w-[220px]">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Excelente hotel, novinho, pessoal muito atencioso, garagem coberta e café da manhã servido numa linda padaria/cafeteria, situada no térreo..."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Hóspede satisfeito</p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
