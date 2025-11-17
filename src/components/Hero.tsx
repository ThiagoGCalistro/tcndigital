import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
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
      
      <div className="container mx-auto px-4 z-10" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-destaque shadow-primary backdrop-blur-sm rounded-full border border-primary/30 text-destaque-foreground">
            <span className="font-regular">Sites a partir de</span> <span className="font-bold">R$1.500</span> <span className="font-regular">em</span> <span className="font-bold">12x sem juros</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Transforme Sua Presença Digital
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Criamos sites profissionais e landing pages de alta conversão para impulsionar seu negócio no digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={onQuoteClick} size="lg" className="bg-destaque text-destaque-foreground hover:bg-primary-hover text-lg px-8 py-6 h-auto shadow-primary">
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-2 border-primary-foreground text-primary-foreground text-lg px-8 py-6 h-auto bg-transparent hover:bg-primary-hover/90">
              Ver Nossos Trabalhos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Code className="h-10 w-10 text-primary-foreground mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-1">Código Profissional</h3>
              <p className="text-sm text-primary-foreground/80 text-center">
                Desenvolvido com as melhores tecnologias
              </p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Zap className="h-10 w-10 text-primary-foreground mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-1">Entrega Rápida</h3>
              <p className="text-sm text-primary-foreground/80 text-center">
                Seu site no ar em tempo recorde
              </p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Shield className="h-10 w-10 text-primary-foreground mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-1">Garantia Total</h3>
              <p className="text-sm text-primary-foreground/80 text-center">
                Suporte e manutenção incluídos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};