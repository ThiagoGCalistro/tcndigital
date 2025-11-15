import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero = ({ onQuoteClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <span className="text-primary-foreground font-medium">
              Sites a partir de R$ 1.500 em 12x sem juros
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Transforme Sua Presença Digital
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Criamos sites profissionais e landing pages de alta conversão para impulsionar seu negócio no digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onQuoteClick}
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto shadow-primary"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
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
    </section>
  );
};
