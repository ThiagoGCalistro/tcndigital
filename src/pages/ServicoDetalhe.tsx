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
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { getService } from "@/data/services";
import { SITE_URL, breadcrumbSchema, faqSchema } from "@/data/seo";

const ServicoDetalhe = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title={`${service.name} em Piraju e Região | TCN Digital`}
        description={service.intro[0]}
        path={`/servicos/${service.slug}`}
        keywords={`${service.name}, ${service.name} Piraju, ${service.tagline}, criação de sites, TCN Digital`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            description: service.intro[0],
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "AdministrativeArea", name: "Piraju e região - SP" },
            url: `${SITE_URL}/servicos/${service.slug}`,
          },
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Serviços", path: "/#servicos" },
            { name: service.name, path: `/servicos/${service.slug}` },
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
            to="/#servicos"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setTimeout(() => {
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para serviços
          </Link>

          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <ServiceIcon className="h-9 w-9 text-white" />
              </div>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                {service.tagline}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.name}</h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              {service.intro[0]}
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

      {/* Introdução + O que está incluído */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">
                Sobre o <span className="text-gradient">serviço</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                {service.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principais <span className="text-gradient">benefícios</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              O que você ganha ao escolher a TCN Digital para este serviço
            </p>
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

      {/* Como funciona */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como <span className="text-gradient">funciona</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um processo claro do início à entrega
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="relative bg-card rounded-2xl border border-border shadow-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-white font-bold text-lg mb-4 shadow-sm">
                  {index + 1}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
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
              {service.faq.map((item, index) => (
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
                Pronto para começar?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Solicite um orçamento de {service.name} sem compromisso e dê o próximo passo na
                presença digital do seu negócio.
              </p>
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

      <Footer />
    </div>
  );
};

export default ServicoDetalhe;
