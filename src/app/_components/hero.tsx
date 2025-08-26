import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Truck, Heart, Shield, Sparkles, Moon, CloudSnow, Star, Clock, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Moon className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: '2s' }}>
        <CloudSnow className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-25" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-10 h-10 text-accent" />
      </div>
      <div className="absolute top-60 left-1/2 animate-float opacity-20" style={{ animationDelay: '3s' }}>
        <Star className="w-8 h-8 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center py-20">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-6 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Truck className="w-4 h-4 mr-2" />
              Entrega no Mesmo Dia
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Garantia de Qualidade
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Award className="w-4 h-4 mr-2" />
              Melhor de Hortolândia
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              GR Colchões
            </span>
            <br />
            <span className="text-foreground text-4xl md:text-5xl">
              Seu Sono Perfeito Começa Aqui
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Transforme suas noites com colchões premium. 
            Entrega rápida em Hortolândia, muitas vezes no mesmo dia!
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Conforto Superior</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">10 Anos Garantia</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Entrega Expressa</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Qualidade Premium</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm">
              Ver Catálogo Completo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-background/60 backdrop-blur-sm rounded-lg animate-fade-in" style={{ animationDelay: '1s' }}>
            <a href="tel:+5519999462361" className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-lg">(19) 99946-2361</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}