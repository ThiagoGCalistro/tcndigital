import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onQuoteClick={scrollToContact} />
      <Hero onQuoteClick={scrollToContact} />
      <Clients />
      <Portfolio />
      <CTA onQuoteClick={scrollToContact} />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
