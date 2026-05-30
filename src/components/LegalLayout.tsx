import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  updatedAt: string;
  children: ReactNode;
}

export const LegalLayout = ({ title, subtitle, updatedAt, children }: LegalLayoutProps) => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onQuoteClick={goToContact} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-white pt-36 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-destaque rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-lg text-white/80">{subtitle}</p>}
            <p className="text-sm text-white/60 mt-6">Última atualização: {updatedAt}</p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10">{children}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/** Bloco de seção legal: título + conteúdo padronizados. */
export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="animate-fade-in">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);
