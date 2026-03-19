'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Mail, Clock, Car, Route, Mountain, ArrowRight, CheckCircle, Star, Coffee, Shield } from "lucide-react";
import Link from "next/link";

const nearbyPlaces = [
  { name: "Posto de Combustível", distance: "400m", type: "Serviços", icon: Car },
  { name: "Restaurante", distance: "750m", type: "Alimentação", icon: Coffee },
  { name: "Farmácia 24h", distance: "500m", type: "Saúde", icon: Shield },
  { name: "Centro de Careaçu", distance: "600m", type: "Cidade", icon: MapPin },
];

const routeInfo = [
  { 
    icon: Car, 
    title: "De Belo Horizonte", 
    description: "Aprox. 5h de viagem. Acesso fácil pela região sul de MG.",
    highlight: "Rota mais comum"
  },
  { 
    icon: Car, 
    title: "De São Paulo", 
    description: "Aprox. 3h30m de viagem. Careaçu fica no caminho para o Sul de Minas.",
    highlight: "Parada estratégica"
  },
  { 
    icon: Route, 
    title: "Caminho da Fé", 
    description: "Ponto de parada para peregrinos que percorrem a rota de fé.",
    highlight: "Apoio ao peregrino"
  },
  { 
    icon: Mountain, 
    title: "Rotas Turísticas", 
    description: "Base para explorar as belezas naturais do Sul de Minas.",
    highlight: "Turismo regional"
  },
];

const Localizacao = () => {
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
              <Navigation className="w-4 h-4 text-accent" />
              Fácil de Encontrar
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Onde Estamos
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Hotel Mirante: sua melhor opção de hospedagem em <strong>Careaçu – MG</strong>. 
              Localização central e fácil acesso.
            </p>
          </div>
        </section>

        {/* Map Section with Enhanced Contact */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div>
                <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                  Hotel em Careaçu – MG
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Localização <span className="text-primary">Privilegiada</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  O Hotel Mirante está localizado no coração de <strong className="text-foreground">Careaçu – MG</strong>, 
                  com fácil acesso para quem viaja pela região. Ideal para famílias, viajantes a trabalho 
                  e turistas que buscam conforto e praticidade.
                </p>
                
                {/* Contact Cards with enhanced design */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-transparent p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Endereço</p>
                      <p className="text-muted-foreground">Rua Luiza Renno Moreira (Antiga Rodovia Fernão Dias - BR-381), nº 1029, Centro, Careaçu – MG</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-gradient-to-r from-secondary/10 to-transparent p-5 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all">
                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">WhatsApp</p>
                      <p className="text-muted-foreground">(35) 3135-0135 • Atendimento rápido</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-gradient-to-r from-accent/10 to-transparent p-5 rounded-xl border border-accent/20 hover:border-accent/40 transition-all">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">E-mail</p>
                      <p className="text-muted-foreground">hotelmirantereservas@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-gradient-to-r from-brand-red/10 to-transparent p-5 rounded-xl border border-brand-red/20 hover:border-brand-red/40 transition-all">
                    <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Horários</p>
                      <p className="text-muted-foreground">Recepção 24h • Café: 06h às 10h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Card className="overflow-hidden border-border/50 shadow-2xl">
                  <div className="aspect-[4/5] w-full bg-muted">
                    <iframe
                      title="Localização do Hotel Mirante em Careaçu"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4400.165072544236!2d-45.699173302913216!3d-22.047025607575897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbad274a8070d1%3A0x107a890e9471f32a!2sHotel%20Mirante!5e0!3m2!1spt-BR!2sbr!4v1773878796957!5m2!1spt-BR!2sbr"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Card>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-xl shadow-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Careaçu – MG
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Here - Enhanced */}
        <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Como Chegar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Rotas Para o <span className="text-primary">Hotel Mirante</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Careaçu está bem localizado para receber viajantes de várias regiões.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {routeInfo.map((route, index) => {
                const Icon = route.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Highlight badge */}
                    <div className="absolute top-4 right-4 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {route.highlight}
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{route.title}</h3>
                        <p className="text-muted-foreground">{route.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            
            {/* Reference card */}
            <div className="text-center">
              <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 border-primary/20">
                <div className="flex items-center gap-4">
                  <Navigation className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-lg text-foreground">Referência</p>
                    <p className="text-muted-foreground">Centro da cidade de Careaçu – MG</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Nearby Places - Enhanced */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Arredores
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                O Que Há <span className="text-primary">Por Perto</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                Tudo que você precisa a poucos minutos do hotel.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {nearbyPlaces.map((place, index) => {
                const Icon = place.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 text-center border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">{place.type}</span>
                    <h3 className="font-semibold mt-2 mb-1 text-foreground">{place.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.distance}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Careaçu - Enhanced */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                  Por Que Careaçu?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  A Cidade que <span className="text-primary">Acolhe Você</span>
                </h2>
              </div>
              
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full" />
                
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg relative">
                  <p>
                    <strong className="text-foreground">Careaçu – MG</strong> é uma cidade tranquila no Sul de Minas Gerais, 
                    conhecida pelo clima agradável e pela hospitalidade mineira. É o lugar ideal para quem busca 
                    descanso e contato com a natureza.
                  </p>
                  <p>
                    O <strong className="text-foreground">Hotel Mirante</strong> está estrategicamente localizado para receber 
                    viajantes que passam pela região, oferecendo conforto, segurança e um atendimento que faz você 
                    se sentir em casa.
                  </p>
                  <p>
                    Seja para uma noite de descanso ou uma estadia mais longa explorando as belezas do Sul de Minas, 
                    somos a escolha certa para sua <strong className="text-foreground">hospedagem em Careaçu</strong>.
                  </p>
                </div>
                
                {/* Benefits list */}
                <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                  {[
                    { icon: Star, label: "Bem Avaliado" },
                    { icon: CheckCircle, label: "Estrutura Nova" },
                    { icon: Coffee, label: "Café Incluso" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 text-foreground">
                        <Icon className="w-5 h-5 text-accent" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
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
              Planejando Vir para Careaçu?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Reserve sua hospedagem no Hotel Mirante. Estamos prontos para recebê-lo com todo conforto.
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
                onClick={() => window.open("https://wa.me/553531350135?text=Olá, gostaria de fazer uma reserva no Hotel Mirante em Careaçu", "_blank")}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-accent text-lg px-8 py-6 h-14"
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

export default Localizacao;
