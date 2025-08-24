"use client";

import { Button } from "@/components/ui/button";
import { Star, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-950 to-yellow-700 border-b border-blue-500/20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top Bar - Contact Info */}
        <div className="hidden lg:block py-2 border-b border-white/10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-white/80">
              <a href="tel:1999462361" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <Phone className="w-4 h-4" />
                (19) 99946-2361
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Av. Santana, 859 - Hortolândia
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                ))}
                <span className="ml-1 text-white/80">5.0 • 2.847 avaliações</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold tracking-wider">
                <span className="text-white">GR</span>{" "}
                <span className="text-yellow-300 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">COLCHÕES</span>
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-80"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#sobre" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#produtos" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Produtos
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#marcas" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Marcas
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#lojas" className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group">
              Lojas
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 hover:shadow-lg hover:scale-105 font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-300 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-950 border-t border-white/20 animate-slide-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="#inicio" className="text-white py-2 hover:text-yellow-300 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-white py-2 hover:text-yellow-300 transition-colors">
              Sobre Nós
            </a>
            <a href="#produtos" className="text-white py-2 hover:text-yellow-300 transition-colors">
              Produtos
            </a>
            <a href="#marcas" className="text-white py-2 hover:text-yellow-300 transition-colors">
              Marcas
            </a>
            <a href="#lojas" className="text-white py-2 hover:text-yellow-300 transition-colors">
              Lojas
            </a>
            <div className="pt-2 border-t border-white/20">
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 hover:shadow-lg font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}