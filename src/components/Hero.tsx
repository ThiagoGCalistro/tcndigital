import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
interface HeroProps {
  onQuoteClick: () => void;
}
export const Hero = ({
  onQuoteClick
}: HeroProps) => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(0.3)'
    }} />
      
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-destaque rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-destaque rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-70 left-30 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
        <div className="absolute top-80 right-50 w-3 h-3 bg-destaque rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-55 left-2/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-2/3 w-2 h-2 bg-destaque rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 glass-effect rounded-full border border-accent/30 text-primary-foreground animate-scale-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-regular">A partir de</span> <span className="font-bold text-destaque">R$1.500</span> <span className="font-regular">em</span> <span className="font-bold text-destaque">12x sem juros</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight animate-fade-in">
            Transforme Sua Presença <span className="text-gradient">Digital</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Criamos sites profissionais e landing pages de alta conversão para impulsionar seu negócio no digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button onClick={onQuoteClick} size="lg" className="bg-gradient-primary hover:shadow-glow text-primary-foreground text-lg px-8 py-6 h-auto shadow-primary transition-all duration-300 hover:scale-105 group">
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-2 border-primary-foreground/50 text-primary-foreground text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-primary-foreground transition-all duration-300 hover:scale-105">
              Ver Nossos Trabalhos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Code, title: "Código Profissional", desc: "Desenvolvido com as melhores tecnologias", delay: "0.6s" },
              { icon: Zap, title: "Entrega Rápida", desc: "Seu site no ar em tempo recorde", delay: "0.7s" },
              { icon: Shield, title: "Garantia Total", desc: "Suporte e manutenção incluídos", delay: "0.8s" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 glass-effect rounded-xl border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow animate-fade-in" style={{ animationDelay: item.delay }}>
                <item.icon className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-primary-foreground/80 text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};