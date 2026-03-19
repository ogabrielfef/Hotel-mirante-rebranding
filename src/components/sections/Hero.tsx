"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Star, Check } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('/quarto-suite-um.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/50 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/30 rounded-full animate-float opacity-50" />
      <div className="absolute bottom-40 right-20 w-20 h-20 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Careaçu – MG • Sul de Minas</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            O Melhor Hotel em
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent">
              Careaçu – MG
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto text-white/90 font-light">
            Hospedagem confortável, café da manhã incluso e atendimento que faz você se sentir em casa. 
            Sua melhor escolha para descansar em Careaçu.
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Café da manhã", "Estacionamento", "Wi-Fi gratuito"].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                <Check className="w-4 h-4 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-white/80 text-sm">Bem avaliado pelos hóspedes</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/553531350135?text=Olá, gostaria de fazer uma reserva no Hotel Mirante em Careaçu",
                  "_blank"
                )
              }
              className="bg-brand-red hover:bg-brand-red-dark text-brand-red-foreground text-lg px-8 py-6 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Reserve Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-14 transition-all duration-300"
            >
              Conheça o Hotel
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
