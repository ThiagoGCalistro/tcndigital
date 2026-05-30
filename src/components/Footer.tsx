import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-destaque rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">
               <img src="logo-cinza.png" alt="TCN Digital logo" width="150px" className="brightness-0 invert"/>
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Transformando ideias em experiências digitais únicas e impactantes.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4 text-accent">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#servicos" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Landing Pages</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Sites Corporativos</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Consultoria</a></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4 text-accent">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/sobre" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Sobre Nós</Link></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Portfólio</a></li>
              <li><a href="#depoimentos" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Contato</a></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4 text-accent">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-gradient-primary hover:scale-110 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-gradient-primary hover:scale-110 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-gradient-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-gradient-primary hover:scale-110 transition-all duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} TCN Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
