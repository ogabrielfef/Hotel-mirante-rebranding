'use client'

import { Button } from "@/components/ui/button";
import { 
  Wifi, Coffee, Car, Clock, Sparkles, Shield, 
  Tv, Thermometer, Bath, Utensils, Phone, MapPin,
  ArrowRight, Check, Star, Users
} from "lucide-react";
import breakfastImage from "../../../public/breakfast.jpg";
import parkingImage from "../../../public/parking.jpg";
import receptionImage from "../../../public/reception.jpg";
import Image from "next/image";
import Link from "next/link";

const Servicos = () => {
  const mainServices = [
    {
      icon: Coffee,
      title: "Café da Manhã Completo",
      description: "Comece o dia com energia! Mesa farta servida das 6h às 10h com pães frescos, bolos caseiros, frutas da estação, frios, sucos naturais e café coado.",
      image: breakfastImage,
      highlight: "Incluso na diária",
    },
    {
      icon: Car,
      title: "Estacionamento Gratuito",
      description: "Estacione com segurança e tranquilidade. Área ampla, bem iluminada e com vigilância. Vagas para carros e veículos maiores.",
      image: parkingImage,
      highlight: "Gratuito",
    },
    {
      icon: Clock,
      title: "Recepção 24 Horas",
      description: "Chegue a qualquer hora. Nossa equipe está sempre pronta para recebê-lo, seja de dia ou de madrugada. Atendimento personalizado.",
      image: receptionImage,
      highlight: "Sempre aberto",
    },
  ];

  const additionalServices = [
    { icon: Wifi, label: "Wi-Fi de Alta Velocidade", desc: "Conexão em todos os ambientes" },
    { icon: Thermometer, label: "Ar Condicionado", desc: "Controle individual por quarto" },
    { icon: Tv, label: "TV nos Quartos", desc: "Aproveite para descansar ou relaxar" },
    { icon: Bath, label: "Banheiro Privativo", desc: "Água quente 24 horas" },
    { icon: Sparkles, label: "Limpeza Diária", desc: "Quartos sempre limpos" },
    { icon: Shield, label: "Segurança 24h", desc: "Monitoramento constante" },
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "Fácil acesso em Careaçu – MG. Ideal para quem está de passagem ou quer conhecer a região.",
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Equipe acolhedora e disponível para ajudar no que você precisar durante sua estadia.",
    },
    {
      icon: Star,
      title: "Melhor Custo-Benefício",
      description: "Qualidade e conforto a preços justos. Com café da manhã e estacionamento.",
    },
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
          <div className="relative container mx-auto px-4 text-center text-white">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              Hotel Mirante • Careaçu – MG
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Serviços e Comodidades
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Tudo pensado para tornar sua hospedagem em Careaçu confortável, prática e inesquecível.
            </p>
          </div>
        </section>

        {/* Main Services - Alternating Layout */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Diferenciais do Hotel Mirante
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                O Que Oferecemos <span className="text-primary">Para Você</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Serviços que fazem a diferença na sua estadia. Tudo incluso, sem surpresas.
              </p>
            </div>
            
            <div className="space-y-20 max-w-6xl mx-auto">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Image */}
                    <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                          src={service.image} 
                          alt={`${service.title} - Hotel em Careaçu`}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                      {/* Highlight Badge */}
                      <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg font-semibold text-sm">
                        ✓ {service.highlight}
                      </div>
                      {/* Decorative element */}
                      <div className={`absolute -z-10 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}`} />
                    </div>
                    
                    {/* Content */}
                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-secondary font-medium">
                        <Check className="w-5 h-5" />
                        <span>Disponível para todos os hóspedes</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Em Todos os Quartos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comodidades <span className="text-primary">Incluídas</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Cada quarto do Hotel Mirante vem equipado com tudo que você precisa.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-card p-6 rounded-2xl shadow-md border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{service.label}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Por Que o Hotel Mirante?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A Melhor Escolha em <span className="text-primary">Careaçu</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-accent via-accent to-copper text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para se Hospedar?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Reserve agora e aproveite todos os nossos serviços. O melhor hotel em Careaçu espera por você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quartos">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-accent text-lg px-8 py-6 h-14 group font-semibold"
                >
                  Ver Nossos Quartos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open("https://wa.me/553531350135?text=Olá, gostaria de saber mais sobre os serviços do Hotel Mirante", "_blank")}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-accent text-lg px-8 py-6 h-14"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Servicos;
