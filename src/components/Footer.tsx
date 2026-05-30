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
               <img src="/logo-cinza.png" alt="TCN Digital - Agência de criação de sites em Piraju" width="150" height="36" loading="lazy" className="brightness-0 invert"/>
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Transformando ideias em experiências digitais únicas e impactantes.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4 text-accent">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/servicos/landing-page" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Landing Pages</Link></li>
              <li><Link to="/servicos/desenvolvimento-de-site" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Sites Corporativos</Link></li>
              <li><Link to="/servicos/consultoria-de-produto-e-dados" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Consultoria</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4 text-accent">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/sobre" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Sobre Nós</Link></li>
              <li><Link to="/criacao-de-sites" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Criação de Sites na Região</Link></li>
              <li><a href="https://blog.tcndigital.com.br" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Blog</a></li>
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

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} TCN Digital. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/politica-de-privacidade" className="hover:text-accent transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/condicoes-gerais-de-uso" className="hover:text-accent transition-colors">
              Condições Gerais de Uso
            </Link>
            <button
              onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
              className="hover:text-accent transition-colors"
            >
              Preferências de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
