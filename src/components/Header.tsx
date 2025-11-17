import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header = ({ onQuoteClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              <img src="logo.png" alt="TCN Digital logo" width="200px"/>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
              Portfólio
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <Button onClick={onQuoteClick} size="lg" className="bg-destaque hover:bg-primary-hover text-primary-foreground shadow-primary">
              Solicitar Orçamento
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#portfolio"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Portfólio
              </a>
              <a
                href="#depoimentos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
              <Button onClick={onQuoteClick} className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
