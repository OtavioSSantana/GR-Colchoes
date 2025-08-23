import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Truck, Heart, Shield, Sparkles, Moon, CloudSnow } from "lucide-react"

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Moon className="w-12 h-12 text-blue-500/20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <CloudSnow className="w-16 h-16 text-blue-500/10" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-10 h-10 text-purple-500/30" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-up">

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent leading-tight">
              O Sono dos Seus Sonhos<br />
              <span className="text-3xl md:text-5xl font-normal text-gray-800">
                Começa Aqui
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Transforme suas noites com colchões premium das melhores marcas. 
              Atendimento personalizado e entrega expressa em Hortolândia.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Entrega Expressa</p>
                  <p className="text-sm text-gray-600">No mesmo dia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Consultoria Gratuita</p>
                  <p className="text-sm text-gray-600">Especialistas em sono</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Garantia Total</p>
                  <p className="text-sm text-gray-600">100 dias de teste</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="default" size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-blue-900 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Sparkles className="w-5 h-5 mr-2" />
                Ver Coleção Premium
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-7 bg-white/80 backdrop-blur-sm border-blue-900 hover:bg-blue-100 text-blue-900">
                <Phone className="w-5 h-5 mr-2" />
                (19) 99946-2361
              </Button>
            </div>


          </div>
        </div>


      </section>
    </div>
  );
}