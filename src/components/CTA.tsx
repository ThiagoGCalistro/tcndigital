import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CTAProps {
  onQuoteClick: () => void;
}

export const CTA = ({ onQuoteClick }: CTAProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Pronto Para Decolar Seu Negócio Online?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Faça como centenas de empresas que já transformaram sua presença digital com a TCN Digital
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              "Sites responsivos e modernos",
              "SEO otimizado para Google",
              "Páginas de alta conversão"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-primary-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onQuoteClick}
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto shadow-2xl"
            >
              Solicitar Orçamento Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/70">
            🎉 Promoção: Parcelamento em até 12x sem juros para novos clientes
          </p>
        </div>
      </div>
    </section>
  );
};
