import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce ModaStyle",
    description: "Loja virtual completa com sistema de pagamentos integrado e painel administrativo",
    image: portfolio1,
    category: "E-commerce",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Landing Page ConvertPro",
    description: "Landing page de alta conversão para empresa de marketing digital",
    image: portfolio2,
    category: "Landing Page",
    tags: ["React", "Tailwind", "SEO"],
  },
  {
    title: "Site Corporativo TechSolutions",
    description: "Website institucional moderno para empresa de tecnologia",
    image: portfolio3,
    category: "Site Corporativo",
    tags: ["React", "Blog", "CMS"],
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Projetos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos sites e sistemas que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors">
                    Ver Projeto
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
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
