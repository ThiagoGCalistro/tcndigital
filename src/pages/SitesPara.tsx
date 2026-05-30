import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { niches } from "@/data/niches";
import { SITE_URL, breadcrumbSchema } from "@/data/seo";

const SitesPara = () => {
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
        title="Sites por Segmento | Criação de Sites por Área | TCN Digital"
        description="Criação de sites profissionais para advogados, médicos, dentistas, restaurantes, imobiliárias e muito mais. Sites sob medida para o seu segmento, em Piraju e região."
        path="/sites-para"
        keywords="site para advogados, site para médicos, site para dentistas, site por segmento, criação de site profissional"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: niches.map((niche, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `Site para ${niche.name}`,
              url: `${SITE_URL}/sites-para/${niche.slug}`,
            })),
          },
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Sites por Segmento", path: "/sites-para" },
          ]),
        ]}
      />
      <Header onQuoteClick={goToContact} />

      <section className="relative overflow-hidden bg-gradient-hero text-white pt-36 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-destaque rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sites por <span className="text-gradient">Segmento</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Cada área tem necessidades diferentes. Criamos sites sob medida para o seu segmento,
              com o que ele realmente precisa para gerar clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {niches.map((niche, index) => {
              const NicheIcon = niche.icon;
              return (
                <Link
                  key={niche.slug}
                  to={`/sites-para/${niche.slug}`}
                  className="group bg-card border border-border rounded-2xl shadow-card p-6 hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in flex items-center gap-4"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <div className="inline-flex p-3 bg-gradient-primary rounded-xl shadow-sm shrink-0">
                    <NicheIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold group-hover:text-accent transition-colors leading-tight">
                      Site para {niche.name}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">{niche.segment}</p>
                  </div>
                </Link>
              );
            })}
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

export default SitesPara;
