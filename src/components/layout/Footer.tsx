"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUp } from "lucide-react";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src={logo} alt="Hotel Mirante" className="h-10 w-auto brightness-0 invert" />
              <div>
                <h3 className="text-xl font-bold">Hotel Mirante</h3>
                <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">Careaçu • MG</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Seu refúgio de conforto e paz às margens da BR-381. Hospitalidade autêntica desde 2010.
              <br/>
              <br/>
              Mirante Parque Hotel e Cia LTDA. <br/>
              CNPJ: 62.638.649/0001-90. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Navegação
            </h4>
            <ul className="space-y-2">
              {['Sobre', 'Quartos', 'Serviços', 'Galeria', 'Localização'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Contato
            </h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                <span>(35) 3135-0135</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                <span>hotelmirantereservas@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                <span>
                  Rua Luiza Renno Moreira, nº 1029
                  (Antiga Rodovia Fernão Dias - BR-381)
                  Centro - Careaçu/MG
                </span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Horários
            </h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm mb-6">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" />
                <div>
                  <p>Recepção: <strong>24 horas</strong></p>
                  <p>Café da manhã: <strong>06h às 10h</strong></p>
                </div>
              </li>
            </ul>
            
            {/* Social */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/hotelmirante_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Hotel Mirante. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
