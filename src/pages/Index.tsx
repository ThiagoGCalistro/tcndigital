import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { Testimonials } from "@/components/Testimonials";
import { BlogSection } from "@/components/BlogSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { SITE_URL } from "@/data/seo";
const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
      <Seo
        title="TCN Digital - Criação de Sites em Piraju e Região | Landing Pages e Sistemas"
        description="Criação de sites profissionais, landing pages de alta conversão e sistemas web personalizados em Piraju e região. A partir de R$ 1.500 em 12x sem juros. Solicite seu orçamento!"
        path="/"
        keywords="criação de sites, criação de sites Piraju, landing page, desenvolvimento de sistemas, site profissional, agência digital Piraju"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "TCN Digital",
          url: SITE_URL,
          inLanguage: "pt-BR",
        }}
      />
      <Header onQuoteClick={scrollToContact} />
      <Hero onQuoteClick={scrollToContact} />
      <Clients />
      <Services onQuoteClick={scrollToContact} />
      <Portfolio />
      <CTA onQuoteClick={scrollToContact} />
      <Testimonials />
      <BlogSection />
      <ContactForm />
      <Footer />
    </div>;
};
export default Index;