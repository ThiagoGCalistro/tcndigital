import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              TCN Digital
            </h3>
            <p className="text-background/70 text-sm">
              Transformando ideias em experiências digitais únicas e impactantes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sites Corporativos</a></li>
              <li><a href="#" className="hover:text-background transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sistemas Web</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-background transition-colors">Portfólio</a></li>
              <li><a href="#depoimentos" className="hover:text-background transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-background transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} TCN Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
