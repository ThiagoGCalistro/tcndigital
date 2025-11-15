import { Building2 } from "lucide-react";

const clients = [
  { name: "TechCorp Brasil", industry: "Tecnologia" },
  { name: "Loja Virtual Plus", industry: "E-commerce" },
  { name: "Clínica Saúde+", industry: "Saúde" },
  { name: "Advocacia Moderna", industry: "Jurídico" },
  { name: "Restaurante Sabor", industry: "Alimentação" },
  { name: "Academia FitLife", industry: "Fitness" },
];

export const Clients = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empresas Que Confiam Em Nós
          </h2>
          <p className="text-muted-foreground text-lg">
            Ajudamos marcas de diversos segmentos a crescerem online
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Building2 className="h-12 w-12 text-primary mb-3" />
              <h3 className="font-semibold text-sm text-center mb-1">
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
