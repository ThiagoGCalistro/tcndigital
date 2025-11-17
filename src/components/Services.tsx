import { Button } from "@/components/ui/button";
import { Check, Bot, BarChart3, ArrowRight, Smartphone, Globe } from "lucide-react";

interface ServicesProps {
  onQuoteClick: () => void;
}

export const Services = ({ onQuoteClick }: ServicesProps) => {
  return (
    <section id="servicos" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-destaque/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para transformar seu negócio digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Landing Page */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-primary p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Landing Page</h3>
                  <p className="text-white/80 text-sm">Conversão e Resultados</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">A partir de</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">R$ 1.500</span>
                </div>
                <p className="text-sm text-muted-foreground">Em até 12x sem juros</p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Landing pages estratégicas focadas em conversão. Design profissional, 
                otimização para SEO e integração com ferramentas de marketing. 
                Perfeito para lançamentos, captação de leads e campanhas publicitárias.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Design responsivo e moderno",
                  "Otimização para conversão",
                  "Integração com Google Analytics",
                  "Formulários de captação de leads",
                  "SEO básico otimizado"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onQuoteClick}
                className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Site Completo */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-primary p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Desenvolvimento de Site</h3>
                  <p className="text-white/80 text-sm">Solução Completa</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">A partir de</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">R$ 2.000</span>
                </div>
                <p className="text-sm text-muted-foreground">Em até 12x sem juros</p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Site institucional completo com múltiplas páginas e funcionalidades avançadas. 
                Ideal para empresas que desejam uma presença digital robusta e profissional. 
                Blog integrado para estratégias de conteúdo e SEO.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Design responsivo premium",
                  "Blog incluso para marketing de conteúdo",
                  "Painel administrativo",
                  "SEO avançado otimizado",
                  "Integração com redes sociais"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onQuoteClick}
                className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* BOT de Atendimento */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-primary p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">BOT de Atendimento</h3>
                  <p className="text-white/80 text-sm">Automação Inteligente</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">R$ 300</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground">+ Taxa de implementação única</p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforme seu atendimento com nosso BOT inteligente. Qualifique leads automaticamente, 
                responda perguntas frequentes 24/7 e aumente suas vendas com atendimento instantâneo. 
                Integração completa com WhatsApp e principais plataformas.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Atendimento 24/7 automatizado",
                  "Qualificação inteligente de leads",
                  "Integração com WhatsApp e redes sociais",
                  "Respostas personalizadas por IA",
                  "Dashboard com métricas e relatórios",
                  "Suporte técnico contínuo"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onQuoteClick}
                className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Consultoria de Produto e Dados */}
          <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-primary p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Consultoria de Produto e Dados</h3>
                  <p className="text-white/80 text-sm">Estratégia e Resultados</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">Sob Consulta</span>
                </div>
                <p className="text-sm text-muted-foreground">Valores personalizados por projeto</p>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Especialistas em criação e otimização de produtos digitais. Desenvolvemos estratégias 
                baseadas em dados para melhorar sua gestão, controlar resultados e maximizar o ROI. 
                Da concepção à implementação, transformamos sua visão em realidade.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Criação de novos produtos digitais",
                  "Otimização de produtos existentes",
                  "Estruturação de dados e métricas",
                  "Dashboards e relatórios gerenciais",
                  "Análise de performance e KPIs",
                  "Estratégias de crescimento"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={onQuoteClick}
                className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};