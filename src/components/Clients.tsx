import { Building2 } from "lucide-react";

const clients = [
  { name: "TechCorp Brasil", industry: "Tecnologia" },
  { name: "Moreira Noguchi", industry: "Jurídico" },
  { name: "Marki", industry: "Tecnologia" },
  { name: "Noguchi Advocacia", industry: "Jurídico" },
  { name: "RavenRO", industry: "Jogos" },
  { name: "Academia FitLife", industry: "Fitness" },
];

export const Clients = () => {
  return (
    <section className="py-16 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-destaque rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empresas Que <span className="text-gradient">Confiam</span> Em Nós
          </h2>
          <p className="text-muted-foreground text-lg">
            Ajudamos marcas de diversos segmentos a crescerem online
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border shadow-card hover-lift hover:shadow-glow transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-gradient-primary rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-sm text-center mb-1 group-hover:text-accent transition-colors">
                {client.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center">
                {client.industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
