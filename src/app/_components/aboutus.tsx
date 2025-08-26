import { Users, Heart, Clock, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-secondary">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Sobre Nós
                </span>
              </h2>
            </div>
          </div>
          
          <Card className="p-8 md:p-12 bg-gradient-card shadow-soft animate-scale-in">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                Na <strong className="text-primary">GR Colchões Hortolândia</strong>, acreditamos que uma boa noite de sono transforma o seu dia. Nossa missão é oferecer colchões, box, baús e travesseiros de qualidade, com entrega rápida, muitas vezes no mesmo dia, para que você não precise esperar para dormir melhor.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Com atendimento qualificado e humanizado, ajudamos você a escolher o colchão ideal para seu conforto, saúde e estilo de vida. Mais do que vender, queremos ser parceiros do seu bem-estar.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24h</div>
                  <p className="text-sm text-muted-foreground">Entrega Expressa</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Qualidade Garantida</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <Card className="p-6 text-center hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Paixão pelo Conforto</h3>
              <p className="text-sm text-muted-foreground">Dedicação total ao seu bem-estar</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Agilidade</h3>
              <p className="text-sm text-muted-foreground">Entrega rápida e eficiente</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Excelência</h3>
              <p className="text-sm text-muted-foreground">Produtos de alta qualidade</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Atendimento Humanizado</h3>
              <p className="text-sm text-muted-foreground">Cuidado personalizado</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}