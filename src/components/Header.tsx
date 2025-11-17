import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header = ({ onQuoteClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-lg shadow-lg border-b border-border/50 text-foreground' 
        : 'bg-transparent text-primary-foreground'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center animate-fade-in-left">
            <h1 className="text-2xl font-bold">
              <img src="logo.png" alt="TCN Digital logo" width="200px" className={`transition-transform duration-300 hover:scale-105 ${
      scrolled 
        ? '' 
        : 'brightness-0 invert'
    }`}/>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
            <a href="#servicos" className="hover:text-accent transition-all duration-300 relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="hover:text-accent transition-all duration-300 relative group">
              Portfólio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#depoimentos" className="hover:text-accent transition-all duration-300 relative group">
              Depoimentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contato" className="hover:text-accent transition-all duration-300 relative group">
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
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
              <a
                href="#servicos"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Portfólio
              </a>
              <a
                href="#depoimentos"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
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
