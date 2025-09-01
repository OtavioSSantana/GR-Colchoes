"use client"

import { useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Truck, Shield } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Colchão de Mola",
    description: "Vivencie o puro conforto",
    image: "/BRILHANTE1 (1).webp",
    badge: "Mais Vendido",
    features: ["Molas Ensacadas", "Alta Durabilidade", "Extra Conforto"],
    whatsappMessage: "Oi! Vi os colchões de molas da GR Colchões e quero saber qual modelo combina melhor com meu perfil. Pode me mostrar as opções?"
  },
  {
    id: 2,
    name: "Colchão de Espuma",
    description: "Suporte firme para coluna",
    image: "/ANJOS-Anjos-Star-One-2-1 (1).png",
    badge: "Premium",
    features: ["Ortopedico", "Alta Densidade", "Anti Alérgico"],
    whatsappMessage: "Olá! Estou interessado em colchões de espuma. Pode me explicar as diferenças e me ajudar a escolher o mais confortável?"
  },
  {
    id: 3,
    name: "Box Bau",
    description: "Praticidade e espaço extra",
    image: "/box bau.png",
    badge: "Luxo",
    features: ["Espaço Extra", "Durabilidade", "Personalização"],
    whatsappMessage: "Olá! Vi o Box Bau no site e gostaria de saber valores e tamanhos disponíveis."
  },
  {
    id: 4,
    name: "Travesseiro",
    description: "Encontre o apoio ideal",
    image: "/travesseiro.png",
    badge: "Inovação",
    features: ["Memory Foam", "Latex", "Cervical"],
    whatsappMessage: "Oi! Gostaria de ver as opções de travesseiros da GR Colchões para melhorar meu sono. Pode me mostrar?"
  },
  {
    id: 5,
    name: "Protetor Impermeavel",
    description: "Proteja seu sono",
    image: "/protetor impermeavel.webp",
    badge: "Inovação",
    features: ["Antialérgico", "Impermeavel", "Lavavel"],
    whatsappMessage: "Olá! Quero saber mais sobre os protetores impermeáveis de colchão. Pode me passar os modelos disponíveis?"
  }
]

export function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="produtos" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nossos Colchões Premium
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra a combinação perfeita de conforto, suporte e qualidade para suas noites de sono
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-large rounded-full p-3 hover:scale-110 transition-transform"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background shadow-large rounded-full p-3 hover:scale-110 transition-transform"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Products Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="min-w-[300px] flex-shrink-0 snap-center hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">

                  <CardTitle className="mb-2 text-xl">{product.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                </CardContent>

                <CardFooter className="p-6 pt-0 gap-2">
                  <Button 
                    variant="gradient" 
                    className="w-full"
                    onClick={() => window.open(
                      `https://wa.me/5519999462361?text=${encodeURIComponent(product.whatsappMessage)}`,
                      '_blank'
                    )}
                  >
                    Ver Detalhes
                  </Button>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Shield className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}