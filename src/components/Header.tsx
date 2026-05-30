import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header = ({ onQuoteClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-lg shadow-lg border-b border-border/50 text-foreground' 
        : 'bg-transparent text-primary-foreground'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center animate-fade-in-left">
            <Link to="/" className="text-2xl font-bold">
              <img src="/logo.png" alt="TCN Digital - Criação de Sites em Piraju e Região" width="200" height="48" className={`transition-transform duration-300 hover:scale-105 ${
      scrolled
        ? ''
        : 'brightness-0 invert'
    }`}/>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
            <button onClick={() => goToSection('servicos')} className="hover:text-accent transition-all duration-300 relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => goToSection('portfolio')} className="hover:text-accent transition-all duration-300 relative group">
              Portfólio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link to="/sobre" className="hover:text-accent transition-all duration-300 relative group">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="/blog" className="hover:text-accent transition-all duration-300 relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button onClick={() => goToSection('depoimentos')} className="hover:text-accent transition-all duration-300 relative group">
              Depoimentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => goToSection('contato')} className="hover:text-accent transition-all duration-300 relative group">
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="hidden md:block animate-fade-in-right">
            <Button 
              onClick={onQuoteClick} 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow text-primary-foreground shadow-primary transition-all duration-300 hover:scale-105"
            >
              Solicitar Orçamento
            </Button>
          </div>

          <button
            //className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
            className={`md:hidden text-foreground transition-transform duration-300 hover:scale-110 ${
      scrolled 
        ? '' 
        : 'brightness-0 invert'
    }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div //className="md:hidden py-4 border-t border-border animate-fade-in"
          className={`md:hidden px-4 border-5 py-4 border-t border-border animate-fade-in ${
      scrolled 
        ? '' 
        : 'bg-secondary'
        }`}>
            <nav className="flex flex-col space-y-4">
              <button
                className="text-left text-foreground hover:text-accent transition-colors"
                onClick={() => goToSection('servicos')}
              >
                Serviços
              </button>
              <button
                className="text-left text-foreground hover:text-accent transition-colors"
                onClick={() => goToSection('portfolio')}
              >
                Portfólio
              </button>
              <Link
                to="/sobre"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
              <a
                href="/blog"
                className="text-foreground hover:text-accent transition-colors"
              >
                Blog
              </a>
              <button
                className="text-left text-foreground hover:text-accent transition-colors"
                onClick={() => goToSection('depoimentos')}
              >
                Depoimentos
              </button>
              <button
                className="text-left text-foreground hover:text-accent transition-colors"
                onClick={() => goToSection('contato')}
              >
                Contato
              </button>
              <Button onClick={onQuoteClick} className="bg-gradient-primary hover:shadow-glow text-primary-foreground">
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
