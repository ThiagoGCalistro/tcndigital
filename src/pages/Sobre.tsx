import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";

const Sobre = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Sobre a TCN Digital | Criação de Sites em Piraju - SP"
        description="Conheça a TCN Digital, fundada em Piraju-SP. Criamos sites, landing pages e sistemas com tecnologia, criatividade e atendimento próximo para empresas de toda a região."
        path="/sobre"
        type="article"
      />
      <Header onQuoteClick={goToContact} />
      <About onQuoteClick={goToContact} />
      <Footer />
    </div>
  );
};

export default Sobre;
