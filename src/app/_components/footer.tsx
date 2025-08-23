import { Card } from "@/components/ui/card"
import { MapPin, Clock, Star, Moon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Trust Indicators Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/5 to-purple-600/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Trust Indicators */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-3 text-lg text-gray-600 font-medium">
                  4.9 de 5.0 • 2.847 avaliações
                </span>
              </div>
              
              {/* Brand Logos */}
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 pt-6">
                <div className="text-3xl font-bold text-gray-400 hover:text-blue-900 transition-colors cursor-pointer">
                  PROBEL
                </div>
                <div className="text-3xl font-bold text-gray-400 hover:text-blue-900 transition-colors cursor-pointer">
                  CASTOR
                </div>
                <div className="text-3xl font-bold text-gray-400 hover:text-blue-900 transition-colors cursor-pointer">
                  KING KOIL
                </div>
                <div className="text-3xl font-bold text-gray-400 hover:text-blue-900 transition-colors cursor-pointer">
                  ORTOBOM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-white/90 backdrop-blur-xl border-gray-200/30 hover:scale-105 transition-transform cursor-pointer animate-slide-in shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Visite Nossa Loja</p>
                  <p className="text-sm text-gray-600">Av. Santana, 859 - Hortolândia</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-xl border-gray-200/30 hover:scale-105 transition-transform cursor-pointer animate-slide-in shadow-lg" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Aberto Agora</p>
                  <p className="text-sm text-gray-600">Seg-Sex: 8h às 18h</p>
                  <p className="text-sm text-gray-600">Sabados: 9h às 14h</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-xl border-gray-200/30 hover:scale-105 transition-transform cursor-pointer animate-slide-in shadow-lg" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Moon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Teste de 100 Noites</p>
                  <p className="text-sm text-gray-600">Durma bem ou devolvemos</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </footer>
  )
}
