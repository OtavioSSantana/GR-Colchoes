"use client"

import { useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Truck, Shield } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Colchão Ortopédico Premium",
    description: "Suporte ideal para coluna com espuma de alta densidade",
    image: "/ANJOS-Anjos-Star-One-2-1 (1).png",
    badge: "Mais Vendido",
    rating: 4.9,
    features: ["Alta Densidade", "Ortopédico", "Antialérgico"]
  },
  {
    id: 2,
    name: "Colchão Memory Foam",
    description: "Tecnologia NASA com gel cooling para noites frescas",
    image: "/BRILHANTE1 (1).webp",
    badge: "Premium",
    rating: 4.8,
    features: ["Memory Foam", "Gel Cooling", "Adaptável"]
  },
  {
    id: 3,
    name: "Colchão Pocket Spring",
    description: "Molas ensacadas individualmente para máximo conforto",
    image: "/featured-image-7.jpg",
    badge: "Luxo",
    rating: 5.0,
    features: ["Molas Pocket", "Zero Transferência", "Durável"]
  },
  {
    id: 4,
    name: "Colchão Híbrido Plus",
    description: "Combinação perfeita de molas e espuma premium",
    image: "/Gemini_Generated_Image_fl8phofl8phofl8p (1).png",
    badge: "Inovação",
    rating: 4.9,
    features: ["Híbrido", "Extra Conforto", "Respirável"]
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
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Truck className="w-4 h-4 mr-2" />
            Entrega Grátis em Hortolândia
          </Badge>
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
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-accent fill-accent'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.rating})</span>
                  </div>

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
                    onClick={() => window.open('https://wa.me/5519999462361', '_blank')}
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