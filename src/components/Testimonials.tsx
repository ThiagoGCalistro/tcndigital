import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO - TechCorp Brasil",
    content: "A TCN Digital transformou completamente nossa presença online. O site ficou moderno, rápido e já aumentamos nossas conversões em 150%!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Proprietária - Loja Virtual Plus",
    content: "Profissionalismo do início ao fim. Entregaram o e-commerce antes do prazo e com qualidade excepcional. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "João Oliveira",
    role: "Diretor - Clínica Saúde+",
    content: "Atendimento impecável e resultado além das expectativas. Nosso novo site tem gerado mais agendamentos do que imaginávamos.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-destaque rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative border-border shadow-card hover-lift hover:shadow-glow transition-all duration-500 overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="p-3 bg-gradient-primary rounded-xl inline-block mb-4">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
