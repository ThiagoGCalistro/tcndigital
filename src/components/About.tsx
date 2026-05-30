import { Button } from "@/components/ui/button";
import { MapPin, Target, Eye, Heart, Sparkles, Rocket, ArrowRight } from "lucide-react";

interface AboutProps {
  onQuoteClick: () => void;
}

const values = [
  {
    icon: Target,
    title: "Nossa Missão",
    description:
      "Transformar ideias em experiências digitais que geram resultados reais, ajudando empresas de todos os tamanhos a crescerem no ambiente online com soluções sob medida.",
  },
  {
    icon: Eye,
    title: "Nossa Visão",
    description:
      "Ser referência em desenvolvimento de sites e sistemas no interior de São Paulo, levando tecnologia de ponta e atendimento próximo a quem mais precisa.",
  },
  {
    icon: Heart,
    title: "Nossos Valores",
    description:
      "Transparência, dedicação e compromisso com cada cliente. Acreditamos que parceria de verdade nasce da confiança e da entrega com excelência em cada detalhe.",
  },
];

export const About = ({ onQuoteClick }: AboutProps) => {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-white pt-36 pb-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-destaque rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Piraju, São Paulo · Brasil</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre a <span className="text-gradient">TCN Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Tecnologia, criatividade e dedicação para transformar a presença digital
              do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-destaque/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex p-3 bg-gradient-primary rounded-2xl shadow-glow mb-4">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa <span className="text-gradient">História</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed animate-fade-in">
              <p>
                A <span className="text-foreground font-semibold">TCN Digital</span> nasceu
                em <span className="text-foreground font-semibold">Piraju, no interior de São Paulo</span>,
                a partir de uma certeza: a tecnologia não precisa ser distante, complicada ou
                acessível apenas às grandes empresas dos grandes centros. Fundada com o propósito
                de aproximar negócios de todos os tamanhos do universo digital, a TCN cresceu
                unindo conhecimento técnico, sensibilidade de design e um atendimento genuinamente
                próximo.
              </p>
              <p>
                Começamos enxergando uma necessidade real: empreendedores, profissionais
                liberais e empresas locais que tinham ótimos produtos e serviços, mas quase
                nenhuma presença online estruturada. Foi aí que decidimos colocar a mão
                na massa e construir landing pages que convertem, sites institucionais que
                transmitem credibilidade e sistemas completos que organizam e impulsionam o
                dia a dia de quem confia no nosso trabalho.
              </p>
              <p>
                De Piraju para o Brasil, cada projeto que entregamos carrega o mesmo cuidado
                artesanal do início. Não tratamos clientes como números: ouvimos, entendemos
                o contexto de cada negócio e desenhamos soluções pensadas para gerar resultado
                de verdade. Já desenvolvemos sistemas completos para escritórios de advocacia,
                plataformas de gestão para servidores de jogos e ferramentas digitais para
                empresas de tecnologia, sempre com a mesma dedicação.
              </p>
              <p>
                Hoje, a TCN Digital é mais do que uma desenvolvedora de sites. Somos parceiros
                estratégicos na jornada digital dos nossos clientes, comprometidos em transformar
                ideias em experiências únicas, modernas e que realmente fazem a diferença.
                Esse é o nosso jeito de trabalhar. E é assim que construímos cada história junto
                com você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Nos <span className="text-gradient">Move</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os princípios que guiam cada projeto que desenvolvemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border shadow-card p-8 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-primary rounded-2xl shadow-sm mb-5">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl shadow-glow p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-5">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vamos construir algo incrível juntos?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Conte com a TCN Digital para transformar a presença online do seu negócio.
                Solicite um orçamento sem compromisso.
              </p>
              <Button
                onClick={onQuoteClick}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 font-semibold"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
