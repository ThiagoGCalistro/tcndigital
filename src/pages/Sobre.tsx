import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

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
      <Header onQuoteClick={goToContact} />
      <About onQuoteClick={goToContact} />
      <Footer />
    </div>
  );
};

export default Sobre;
