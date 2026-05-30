import noguchi from "@/assets/noguchi.png";
import ravenro from "@/assets/ravenro.png";
import marki from "@/assets/marki.jpeg";
import moreiranoguchi from "@/assets/moreiranoguchi.png";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Noguchi Advocacia",
    description: "Sistema completo com site institucional moderno e área de gestão para escritório de advocacia",
    image: noguchi,
    category: "Sistema Completo",
    url: "https://noguchi.com.br/NOVOSITE/",
    tags: ["Jurídico", "Site", "Sistema"],
  },
  {
    title: "RavenRO",
    description: "Sistema completo com painel de controle e plataforma de gerenciamento para servidor de jogos",
    image: ravenro,
    category: "Sistema Completo",
    url: "https://cp.ravenro.com.br/",
    tags: ["Jogos", "Painel", "Sistema"],
  },
  {
    title: "Marki",
    description: "Sistema completo com plataforma web e soluções digitais para empresa de tecnologia",
    image: marki,
    category: "Sistema Completo",
    url: "https://marki.com.br/",
    tags: ["Tecnologia", "Web", "Sistema"],
  },
  {
    title: "Moreira Noguchi Advogados",
    description: "Sistema completo com site institucional elegante e área de gestão para escritório de advocacia",
    image: moreiranoguchi,
    category: "Sistema Completo",
    url: "https://moreiranoguchi.com.br/",
    tags: ["Jurídico", "Site", "Sistema"],
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-destaque rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos sites e sistemas que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-card hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in flex flex-col sm:flex-row"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video sm:aspect-auto sm:w-2/5 sm:shrink-0">
                <img
                  src={project.image}
                  alt={`Site e sistema desenvolvido pela TCN Digital para ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    Ver Projeto
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="inline-block px-3 py-1 bg-gradient-primary text-white text-sm rounded-full mb-3 shadow-sm self-start">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
