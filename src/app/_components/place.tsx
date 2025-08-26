import { MapPin, Phone, Truck, Clock, Navigation } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Place() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-secondary">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Nossa Loja
                </span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visite nosso showroom e experimente o conforto dos nossos colchões
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Store Information */}
            <div className="space-y-6 animate-slide-in">
              <Card className="p-8 bg-gradient-card shadow-medium">
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Clock className="w-4 h-4 mr-2" />
                    Aberto Agora
                  </Badge>
                  <Badge className="bg-accent text-accent-foreground px-4 py-2">
                    <Truck className="w-4 h-4 mr-2" />
                    Entrega Hoje
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  GR Colchões Hortolândia
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Endereço Completo</p>
                      <p className="text-muted-foreground">Av. Santana, 859 - Jardim Amanda I</p>
                      <p className="text-muted-foreground">Hortolândia/SP - CEP: 13184-000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Telefone & WhatsApp</p>
                      <a href="tel:+5519999462361" className="text-primary hover:text-primary/80 font-medium text-lg">
                        (19) 99946-2361
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Horário de Funcionamento</p>
                      <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-muted-foreground">Sábado: 9h às 14h</p>
                      <p className="text-muted-foreground">Domingo: Fechado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Entrega Expressa</p>
                      <p className="text-muted-foreground">A mais rápida de Hortolândia!</p>
                      <p className="text-accent font-medium">Muitas vezes no mesmo dia</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-3">
                  <Button variant="hero" size="lg" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Navigation className="w-5 h-5 mr-2" />
                    Traçar Rota no Maps
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Map */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Card className="overflow-hidden shadow-large">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.793!2d-47.2171!3d-22.8838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b7a0a0a0a0a0%3A0x0!2sAv.+Santana%2C+859+-+Jardim+Amanda+I%2C+Hortol%C3%A2ndia+-+SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GR Colchões Hortolândia Location"
                  className="w-full h-[500px]"
                />
              </Card>
              
              <div className="absolute top-4 right-4">
                <a
                  href="https://maps.google.com/?q=Av.+Santana,+859+-+Jardim+Amanda+I,+Hortolândia,+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  <MapPin className="w-4 h-4" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}