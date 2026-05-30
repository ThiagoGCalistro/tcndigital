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
import { MapPin, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { getService } from "@/data/services";
import { getCity, cities } from "@/data/cities";
import { SITE_URL, breadcrumbSchema, faqSchema } from "@/data/seo";

const ServicoCidade = () => {
  const { slug, cidade } = useParams();
  const navigate = useNavigate();
  const service = getService(slug);
  const city = getCity(cidade);

  if (!service || !city) {
    return <Navigate to="/404" replace />;
  }

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const ServiceIcon = service.icon;
  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 8);

  const faq = [
    {
      question: `Quanto custa ${service.name} em ${city.name}?`,
      answer: `${service.name} ${
        service.price === "Sob Consulta"
          ? "tem valor sob consulta, personalizado conforme o escopo do projeto"
          : `começa em ${service.price}, em até 12x sem juros`
      }. Solicite um orçamento sem compromisso para o seu projeto em ${city.name}.`,
    },
    {
      question: `A TCN Digital atende ${city.name} de forma remota?`,
      answer: `Sim. Atendemos ${city.name} e toda a região tanto remotamente quanto presencialmente, com contato direto via WhatsApp e todo o processo podendo ser feito online.`,
    },
    ...service.faq.slice(0, 2),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title={`${service.name} em ${city.name} - SP | TCN Digital`}
        description={`${service.name} para empresas e profissionais de ${city.name} e região. ${service.intro[0]}`}
        path={`/servicos/${service.slug}/${city.slug}`}
        keywords={`${service.name} ${city.name}, ${service.name} em ${city.name}, criação de site ${city.name}, ${service.tagline} ${city.name}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.name} em ${city.name}`,
            serviceType: service.name,
            description: `${service.name} para empresas e profissionais de ${city.name} e região.`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "City", name: city.name },
            url: `${SITE_URL}/servicos/${service.slug}/${city.slug}`,
          },
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: service.name, path: `/servicos/${service.slug}` },
            { name: city.name, path: `/servicos/${service.slug}/${city.slug}` },
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
            to={`/criacao-de-site-em/${city.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Criação de sites em {city.name}
          </Link>

          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <ServiceIcon className="h-9 w-9 text-white" />
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                <MapPin className="h-4 w-4 text-accent" />
                {city.name} · SP
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.name} em <span className="text-gradient">{city.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              {service.tagline} para empresas e profissionais de {city.name} e região, com design
              profissional e foco em resultados.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                {service.priceLabel && (
                  <span className="text-sm text-white/60 block">{service.priceLabel}</span>
                )}
                <span className="text-3xl md:text-4xl font-bold">{service.price}</span>
                <span className="text-sm text-white/60 block">{service.priceNote}</span>
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

      {/* Introdução + incluídos */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {service.name} para o seu negócio em{" "}
                <span className="text-gradient">{city.name}</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>{city.intro}</p>
                {service.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="pt-6">
                <Button
                  onClick={goToContact}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Quero {service.name} em {city.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-card p-8 animate-fade-in">
              <h3 className="text-xl font-bold mb-6">O que está incluído</h3>
              <div className="space-y-4">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-accent/10 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full mt-6">
                <Link to={`/servicos/${service.slug}`}>
                  Ver detalhes do serviço
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a <span className="text-gradient">TCN Digital</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border shadow-card p-6 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 bg-gradient-primary rounded-xl shadow-sm mb-4">
                    <BenefitIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
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
                {service.name} em {city.name}: vamos começar?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Receba uma proposta personalizada, sem compromisso. Resposta em até 24 horas úteis.
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

      {/* Mesma solução em outras cidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">
              {service.name} em outras cidades da região
            </h2>
            <p className="text-muted-foreground mb-8">
              Atendemos toda a região de {city.name} e do Médio Paranapanema
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/servicos/${service.slug}/${c.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent hover:text-accent transition-colors shadow-sm"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {service.name} em {c.name}
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

export default ServicoCidade;
