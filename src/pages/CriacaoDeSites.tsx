import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { SITE_URL, breadcrumbSchema } from "@/data/seo";

const CriacaoDeSites = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Criação de Sites em Piraju e Região - SP | TCN Digital"
        description="Criação de sites, landing pages e sistemas em Piraju, Avaré, Ourinhos, Manduri e toda a região. Design profissional e foco em resultados. Solicite seu orçamento!"
        path="/criacao-de-sites"
        keywords="criação de sites na região, criação de sites Piraju, sites Avaré, sites Ourinhos, agência de sites interior SP"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: cities.map((city, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `Criação de Sites em ${city.name}`,
              url: `${SITE_URL}/criacao-de-site-em/${city.slug}`,
            })),
          },
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Criação de Sites", path: "/criacao-de-sites" },
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
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Piraju e região · São Paulo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Criação de Sites em <span className="text-gradient">Piraju e Região</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              A TCN Digital cria sites profissionais, landing pages e sistemas para empresas e
              profissionais de toda a região. Escolha a sua cidade e solicite um orçamento.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de cidades */}
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {cities.map((city, index) => (
              <Link
                key={city.slug}
                to={`/criacao-de-site-em/${city.slug}`}
                className="group bg-card border border-border rounded-2xl shadow-card p-6 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="inline-flex p-2.5 bg-gradient-primary rounded-xl shadow-sm mb-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="font-bold group-hover:text-accent transition-colors">{city.name}</h2>
                <p className="text-xs text-muted-foreground mt-1">Criação de sites</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              onClick={goToContact}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CriacaoDeSites;
