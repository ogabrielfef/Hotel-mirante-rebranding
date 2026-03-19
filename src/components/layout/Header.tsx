"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Quartos", path: "/quartos" },
    { label: "Serviços", path: "/servicos" },
    { label: "Galeria", path: "/galeria" },
    { label: "Localização", path: "/localizacao" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-card/98 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={logo}
            alt="Hotel Mirante Logo"
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <h1
              className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-300 ${
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}
            >
              Hotel Mirante
            </h1>
            <span
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                isScrolled || !isHomePage
                  ? "text-accent"
                  : "text-white/80"
              }`}
            >
              Careaçu • MG
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                    isScrolled || !isHomePage
                      ? isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                      : isActive
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        isScrolled || !isHomePage
                          ? "bg-accent"
                          : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/5500000000000?text=Olá, gostaria de fazer uma reserva",
                "_blank"
              )
            }
            className="hidden md:flex bg-brand-red hover:bg-brand-red-dark text-brand-red-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Reservar
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled || !isHomePage
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-border/50 shadow-lg">
          <ul className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      isActive
                        ? "text-brand-red bg-brand-red/10 border-l-4 border-brand-red"
                        : "text-gray-700 hover:text-brand-red hover:bg-brand-red/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/5500000000000?text=Olá, gostaria de fazer uma reserva",
                    "_blank"
                  )
                }
                className="w-full bg-brand-red hover:bg-brand-red-dark text-brand-red-foreground"
              >
                Reservar Agora
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
