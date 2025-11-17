import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface CTAProps {
  onQuoteClick: () => void;
}

export const CTA = ({ onQuoteClick }: CTAProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-destaque/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6 animate-scale-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground text-sm">Transformação Digital</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground animate-fade-in">
            Pronto Para Decolar Seu Negócio <span className="text-accent">Online?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Faça como centenas de empresas que já transformaram sua presença digital com a TCN Digital
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              "Sites responsivos e modernos",
              "SEO otimizado para Google",
              "Páginas de alta conversão"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-primary-foreground glass-effect py-3 px-4 rounded-xl hover:scale-105 transition-transform duration-300">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={onQuoteClick}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              Solicitar Orçamento Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/70 flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="h-4 w-4 text-accent" />
            Promoção: Parcelamento em até 12x sem juros para novos clientes
          </p>
        </div>
      </div>
    </section>
  );
};
