"use client";

import { MapPin, Phone, Clock, Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Location = () => {
  const quickInfo = [
    { icon: MapPin, label: "BR-381", sublabel: "Saída 817 • Careaçu - MG" },
    { icon: Phone, label: "(35) 3135-0135", sublabel: "WhatsApp disponível" },
    { icon: Clock, label: "Recepção 24h", sublabel: "Check-in flexível" },
  ];

  return (
    <section id="location" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_var(--primary)_1px,_transparent_0)] bg-[length:40px_40px]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Localização
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Fácil Acesso, <span className="text-primary">Conexão Perfeita</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Posicionado estrategicamente na BR-381, uma das principais rodovias do país, 
              somos o ponto de parada ideal entre Belo Horizonte e São Paulo.
            </p>

            {/* Quick Info Cards */}
            <div className="space-y-4 mb-8">
              {quickInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{info.label}</p>
                    <p className="text-sm text-muted-foreground">{info.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/localizacao">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver Rotas e Mapa
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Map Preview */}
          <div className="animate-slide-up relative" style={{ animationDelay: '100ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <div className="aspect-[4/3] bg-muted">
                <iframe
                  title="Localização do Hotel Mirante"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4400.165072544236!2d-45.699173302913216!3d-22.047025607575897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbad274a8070d1%3A0x107a890e9471f32a!2sHotel%20Mirante!5e0!3m2!1spt-BR!2sbr!4v1773878796957!5m2!1spt-BR!2sbr"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
              📍 Saída 817
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
