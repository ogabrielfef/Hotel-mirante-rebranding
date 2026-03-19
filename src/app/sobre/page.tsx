'use client'

import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Target, Eye, ArrowRight, Quote, Star, Sparkles, MapPin } from "lucide-react";
import receptionImage from "../../../public/reception.jpg";
import commonAreaImage from "../../../public/common-area.jpg";
import Image from "next/image";
import Link from "next/link";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Hospitalidade Autêntica",
      description: "Cada hóspede é tratado com carinho e atenção. Aqui no Hotel Mirante em Careaçu, você é mais que um cliente — é parte da nossa família.",
    },
    {
      icon: Award,
      title: "Estrutura Nova e Moderna",
      description: "Com apenas 2 meses de operação, oferecemos instalações novas, limpas e bem cuidadas. Tudo pensado para seu conforto.",
    },
    {
      icon: Users,
      title: "Atendimento Dedicado",
      description: "Nossa equipe está disponível 24 horas para garantir que sua estadia seja perfeita. Atendimento próximo e personalizado.",
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
              Careaçu – MG
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Conheça o Hotel Mirante
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Sua melhor opção de hospedagem em Careaçu. Estrutura nova, ambiente acolhedor e localização estratégica.
            </p>
          </div>
        </section>

        {/* História Principal */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase">
                  Quem Somos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  O Melhor <span className="text-primary">Hotel em Careaçu</span>
                </h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O <strong className="text-foreground">Hotel Mirante</strong> nasceu para oferecer aos viajantes que passam por Careaçu – MG 
                    um lugar seguro, confortável e acolhedor para descansar. Somos uma opção de 
                    <strong className="text-foreground"> hospedagem em Careaçu</strong> focada em qualidade e custo-benefício.
                  </p>
                  <p>
                    Com estrutura nova e moderna, oferecemos quartos confortáveis, café da manhã 
                    completo e estacionamento gratuito. Estamos prontos para receber famílias, 
                    viajantes a trabalho e quem está de passagem pela região.
                  </p>
                  <p>
                    Nossa localização estratégica facilita o acesso tanto para quem viaja pela região 
                    quanto para quem quer conhecer o Sul de Minas Gerais.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Recepção</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Bem Avaliado</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfação</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={receptionImage} 
                    alt="Recepção do Hotel Mirante em Careaçu" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-accent rounded-2xl -z-10" />
                
                {/* Quote Card */}
                <div className="absolute -bottom-8 right-4 bg-card p-4 rounded-xl shadow-xl border border-border max-w-[250px]">
                  <Quote className="w-6 h-6 text-accent mb-2" />
                  <p className="text-sm italic text-muted-foreground">
                    "Quem se hospeda, recomenda."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Por Que Escolher o Mirante
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                O Que Nos <span className="text-primary">Diferencia</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão e Visão - Redesigned */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--secondary)/0.08)_0%,_transparent_50%)]" />
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Nossa Essência
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Missão e <span className="text-primary">Visão</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Missão */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="relative p-10 rounded-3xl text-white">
                  {/* Decorative circles */}
                  <div className="absolute top-6 right-6 w-20 h-20 border border-white/20 rounded-full" />
                  <div className="absolute top-10 right-10 w-12 h-12 border border-white/10 rounded-full" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Target className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold">Nossa Missão</h3>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed text-lg mb-6">
                    Proporcionar a melhor experiência de hospedagem em Careaçu – MG, com quartos 
                    confortáveis, serviços de qualidade e um atendimento que faz você se sentir em casa.
                  </p>
                  
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-medium">Seu conforto é nossa prioridade</span>
                  </div>
                </div>
              </div>
              
              {/* Visão */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="relative p-10 rounded-3xl text-white">
                  {/* Decorative circles */}
                  <div className="absolute top-6 right-6 w-20 h-20 border border-white/20 rounded-full" />
                  <div className="absolute top-10 right-10 w-12 h-12 border border-white/10 rounded-full" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Eye className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold">Nossa Visão</h3>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed text-lg mb-6">
                    Ser reconhecido como o melhor hotel em Careaçu e região, referência em 
                    hospitalidade, conforto e custo-benefício para todos que nos visitam.
                  </p>
                  
                  <div className="flex items-center gap-2 text-accent">
                    <Star className="w-5 h-5 fill-accent" />
                    <span className="font-medium">Excelência em cada detalhe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem Recebemos */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={commonAreaImage} 
                    alt="Área comum do Hotel Mirante" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                  Ideal Para Você
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                  Quem <span className="text-primary">Recebemos</span>
                </h2>
                
                <div className="space-y-4">
                  {[
                    { title: "Famílias", desc: "Viajando com crianças? Temos quartos espaçosos e ambiente tranquilo" },
                    { title: "Viajantes a Trabalho", desc: "Wi-Fi, mesa de trabalho e café da manhã para começar bem o dia" },
                    { title: "Quem Está de Passagem", desc: "Localização estratégica para quem precisa de descanso na estrada" },
                    { title: "Turistas", desc: "Base perfeita para explorar o Sul de Minas Gerais" },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Now with accent/warm colors instead of blue */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-accent via-accent to-copper text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]" />
          </div>
          
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Venha Conhecer o Hotel Mirante
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              A melhor hospedagem em Careaçu espera por você. Reserve agora!
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
                onClick={() => window.open("https://wa.me/553531350135?text=Olá, gostaria de fazer uma reserva no Hotel Mirante", "_blank")}
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

export default Sobre;
