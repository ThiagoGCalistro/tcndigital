import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft, Check, MapPin, Target, Search, Smartphone } from "lucide-react";
import { getNiche, niches } from "@/data/niches";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { SITE_URL, breadcrumbSchema, faqSchema } from "@/data/seo";

const reasons = [
  {
    icon: Target,
    title: "Foco no seu segmento",
    description:
      "Sites pensados para a realidade da sua área, com as informações e o tom certos para o seu cliente.",
  },
  {
    icon: Search,
    title: "Encontrado no Google",
    description:
      "Estrutura otimizada para você aparecer quando alguém procura pelo seu serviço na sua região.",
  },
  {
    icon: Smartphone,
    title: "Perfeito no celular",
    description:
      "A maioria das buscas vem do celular. Seu site fica rápido e impecável em qualquer tela.",
  },
  {
    icon: Check,
    title: "Foco em conversão",
    description:
      "Cada página é construída para transformar o visitante em contato, e o contato em cliente.",
  },
];

const NichoDetalhe = () => {
  const { nicho } = useParams();
  const navigate = useNavigate();
  const niche = getNiche(nicho);

  if (!niche) {
    return <Navigate to="/404" replace />;
  }

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const NicheIcon = niche.icon;
  const otherNiches = niches.filter((n) => n.slug !== niche.slug).slice(0, 8);
  const someCities = cities.slice(0, 6);

  const faq = [
    ...niche.faq,
    {
      question: `Quanto custa um site para ${niche.name.toLowerCase()}?`,
      answer:
        "As landing pages começam em R$ 1.500 e os sites completos a partir de R$ 2.000, em até 12x sem juros. O valor final depende do escopo. Solicite um orçamento sem compromisso.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title={`Site para ${niche.name} em Piraju e Região | TCN Digital`}
        description={`Criação de sites para ${niche.name.toLowerCase()}. ${niche.intro[0]}`}
        path={`/sites-para/${niche.slug}`}
        keywords={`site para ${niche.keyword}, criação de site para ${niche.keyword}, site profissional ${niche.keyword}, ${niche.segment.toLowerCase()}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Criação de Sites para ${niche.name}`,
            serviceType: `Criação de sites para ${niche.name}`,
            description: niche.intro[0],
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "AdministrativeArea", name: "Piraju e região - SP" },
            url: `${SITE_URL}/sites-para/${niche.slug}`,
          },
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Sites por Segmento", path: "/sites-para" },
            { name: niche.name, path: `/sites-para/${niche.slug}` },
          ]),
        ]}
      />
      <Header onQuoteClick={goToContact} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-white pt-36 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-destaque rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/sites-para"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Sites por segmento
          </Link>

          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <NicheIcon className="h-9 w-9 text-white" />
              </div>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {niche.segment}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Site para <span className="text-gradient">{niche.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">{niche.intro[0]}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <span className="text-sm text-white/60 block">A partir de</span>
                <span className="text-3xl md:text-4xl font-bold">R$ 1.500</span>
                <span className="text-sm text-white/60 block">Em até 12x sem juros</span>
              </div>
              <Button
                onClick={goToContact}
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

      {/* Introdução + o que o site precisa ter */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que <span className="text-gradient">{niche.name}</span> precisam de um bom site
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                {niche.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="pt-6">
                <Button
                  onClick={goToContact}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Quero meu site
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-card p-8 animate-fade-in">
              <h3 className="text-xl font-bold mb-6">O que o site de {niche.name} precisa ter</h3>
              <div className="space-y-4">
                {niche.needs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-accent/10 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que a TCN Digital */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a <span className="text-gradient">TCN Digital</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => {
              const ReasonIcon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border shadow-card p-6 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 bg-gradient-primary rounded-xl shadow-sm mb-4">
                    <ReasonIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como podemos <span className="text-gradient">ajudar</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="bg-card rounded-2xl border border-border shadow-card p-8 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 bg-gradient-primary rounded-2xl shadow-sm mb-5 self-start">
                    <ServiceIcon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{service.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.intro[0]}
                  </p>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link to={`/servicos/${service.slug}`}>
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas <span className="text-gradient">frequentes</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 shadow-card"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl shadow-glow p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-20 -mb-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para ter um site profissional?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Atendemos {niche.name} em Piraju, Avaré, Ourinhos e toda a região, de forma 100%
                remota. Solicite um orçamento sem compromisso.
              </p>
              <Button
                onClick={goToContact}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 font-semibold"
              >
                Solicitar Orçamento Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Atendemos na região (cross-link para cidades) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Atendemos {niche.name} em toda a região</h2>
            <p className="text-muted-foreground mb-8">
              Criação de sites para {niche.name.toLowerCase()} em Piraju e cidades vizinhas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {someCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/criacao-de-site-em/${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent hover:text-accent transition-colors shadow-sm"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {c.name}
                </Link>
              ))}
              <Link
                to="/criacao-de-sites"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent hover:text-accent transition-colors shadow-sm"
              >
                Ver todas as cidades
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outros segmentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Sites para outros segmentos</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherNiches.map((n) => (
                <Link
                  key={n.slug}
                  to={`/sites-para/${n.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent hover:text-accent transition-colors shadow-sm"
                >
                  Site para {n.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NichoDetalhe;
