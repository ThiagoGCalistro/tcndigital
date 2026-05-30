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
import {
  MapPin,
  ArrowRight,
  Search,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { getCity, cities } from "@/data/cities";
import { services } from "@/data/services";
import { SITE_URL, breadcrumbSchema, faqSchema } from "@/data/seo";

const reasons = [
  {
    icon: Search,
    title: "Seja encontrado no Google",
    description:
      "Quando alguém procura pelo seu serviço, é o seu site que precisa aparecer — não o do concorrente.",
  },
  {
    icon: Smartphone,
    title: "Presença 24 horas por dia",
    description:
      "Seu site trabalha por você o tempo todo, apresentando seu negócio mesmo fora do horário comercial.",
  },
  {
    icon: TrendingUp,
    title: "Mais credibilidade",
    description:
      "Um site profissional transmite confiança e posiciona a sua empresa acima da concorrência local.",
  },
  {
    icon: Users,
    title: "Mais clientes",
    description:
      "Com páginas focadas em conversão, você transforma visitantes em contatos e contatos em vendas.",
  },
];

const CriacaoDeSiteCidade = () => {
  const { cidade } = useParams();
  const navigate = useNavigate();
  const city = getCity(cidade);

  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const goToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goToContact = () => goToSection("contato");

  const nearbyCities = cities.filter((c) => c.slug !== city.slug).slice(0, 8);

  const cityFaq = [
    {
      question: `Quanto custa criar um site em ${city.name}?`,
      answer:
        "As landing pages começam em R$ 1.500 e os sites institucionais completos a partir de R$ 2.000, em até 12x sem juros. O valor final depende do escopo — solicite um orçamento sem compromisso.",
    },
    {
      question: `A TCN Digital atende empresas de ${city.name} presencialmente?`,
      answer: `Atendemos ${city.name} e toda a região tanto presencialmente quanto de forma remota. Todo o processo pode ser feito online, com agilidade e contato direto via WhatsApp.`,
    },
    {
      question: `Em quanto tempo meu site em ${city.name} fica pronto?`,
      answer:
        "Uma landing page leva em média de 1 a 2 semanas, e um site institucional completo de 3 a 4 semanas, dependendo da complexidade e da agilidade nas aprovações.",
    },
    {
      question: "O site funciona bem no celular e aparece no Google?",
      answer:
        "Sim. Todos os nossos sites são 100% responsivos e desenvolvidos com boas práticas de SEO, preparados para um bom posicionamento nas buscas do Google.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title={`Criação de Sites em ${city.name} - SP | TCN Digital`}
        description={`Criação de sites, landing pages e sistemas em ${city.name} e região. Design profissional, otimização para o Google e foco em resultados. Solicite seu orçamento com a TCN Digital!`}
        path={`/criacao-de-site-em/${city.slug}`}
        keywords={`criação de site em ${city.name}, criar site ${city.name}, desenvolvimento de sites ${city.name}, landing page ${city.name}, site profissional ${city.name}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Criação de Sites em ${city.name}`,
            serviceType: "Criação de sites e landing pages",
            description: `Criação de sites profissionais, landing pages e sistemas para empresas e profissionais de ${city.name} e região.`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "City", name: city.name },
            url: `${SITE_URL}/criacao-de-site-em/${city.slug}`,
          },
          faqSchema(cityFaq),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Criação de Sites", path: "/criacao-de-sites" },
            { name: city.name, path: `/criacao-de-site-em/${city.slug}` },
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
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{city.name} · São Paulo</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Criação de Sites em <span className="text-gradient">{city.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Sites profissionais, landing pages de alta conversão e sistemas sob medida para
              empresas e profissionais de {city.name} e região. Tudo com design moderno e foco em
              resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={goToContact}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 hover:scale-105 font-semibold"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => goToSection("servicos")}
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Ver serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A sua empresa em {city.name} no <span className="text-gradient">mundo digital</span>
            </h2>
            <p>{city.intro}</p>
            <p>
              Na <strong className="text-foreground">TCN Digital</strong>, desenvolvemos sites e
              landing pages pensados para o seu público em {city.name}: páginas rápidas, bonitas no
              celular e no computador, otimizadas para aparecer no Google e construídas para
              converter visitantes em clientes. Seja para divulgar seus serviços, vender produtos ou
              captar contatos, criamos a solução ideal para o seu momento.
            </p>
            <p>
              Atendemos comércios, profissionais liberais, prestadores de serviço e empresas de
              todos os portes — sempre com atendimento próximo e propostas sob medida. Você cuida do
              seu negócio; nós cuidamos da sua presença digital.
            </p>
            <div className="pt-2">
              <Button
                onClick={goToContact}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                Quero um orçamento para {city.name}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos serviços em <span className="text-gradient">{city.name}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções digitais completas para o seu negócio crescer
            </p>
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
                    <Link to={`/servicos/${service.slug}/${city.slug}`}>
                      {service.name} em {city.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que ter um site */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que sua empresa em {city.name} precisa de um{" "}
              <span className="text-gradient">site</span>
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

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-primary rounded-3xl shadow-glow p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para ter um site em {city.name}?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Fale com a TCN Digital e receba uma proposta personalizada, sem compromisso.
                Resposta em até 24 horas úteis.
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

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas frequentes sobre{" "}
                <span className="text-gradient">criação de sites em {city.name}</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {cityFaq.map((item, index) => (
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

      {/* Cidades próximas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Também atendemos cidades próximas</h2>
            <p className="text-muted-foreground mb-8">
              Criação de sites em toda a região de {city.name} e do Médio Paranapanema
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/criacao-de-site-em/${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent hover:text-accent transition-colors shadow-sm"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {c.name}
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

export default CriacaoDeSiteCidade;
