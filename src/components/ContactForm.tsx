import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, ShieldCheck, Clock, Users, Star } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "",
    description: "",
    hasDomain: "",
    references: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType || !formData.urgency || !formData.hasDomain || !formData.description) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Construir mensagem formatada
    const message = `*Nova Solicitação de Orçamento - TCN Digital*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}

*Tipo de Serviço:* ${formData.serviceType}
*Urgência:* ${formData.urgency || "Não especificada"}
*Possui Domínio/Hospedagem:* ${formData.hasDomain || "Não especificado"}

*Descrição do Projeto:*
${formData.description || "Não fornecida"}

*Referências:*
${formData.references || "Nenhuma referência fornecida"}`;

    // Link do WhatsApp
    const whatsappNumber = "5514997062245";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Link do email
    //const emailSubject = `Solicitação de Orçamento - ${formData.name}`;
   //const emailBody = message.replace(/\*/g, ''); // Remove markdown do email
    //const mailtoLink = `mailto:tgcalistro@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Abrir cliente de email
    //setTimeout(() => {
    //  window.location.href = mailtoLink;
    //}, 500);

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      urgency: "",
      description: "",
      hasDomain: "",
      references: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Solicite Seu Orçamento
            </h2>
            <p className="text-muted-foreground text-lg">
              Preencha o formulário abaixo e receba uma proposta personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border shadow-card space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Tipo de Serviço *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                      <SelectTrigger id="serviceType">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="landing">Landing Page focada em conversão</SelectItem>
                        <SelectItem value="website">Site completo com blog</SelectItem>
                        <SelectItem value="system">Desenvolvimento de sistema personalizado</SelectItem>
                        <SelectItem value="consultoria">Consultoria de Produto e Dados</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgência do Projeto *</Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                      <SelectTrigger id="urgency">
                        <SelectValue placeholder="Selecione a urgência" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="urgent">Urgente (1-2 semanas)</SelectItem>
                        <SelectItem value="normal">Normal (3-4 semanas)</SelectItem>
                        <SelectItem value="flexible">Flexível (+ de 1 mês)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hasDomain">Já possui domínio e hospedagem? *</Label>
                    <Select value={formData.hasDomain} onValueChange={(value) => handleChange("hasDomain", value)}>
                      <SelectTrigger id="hasDomain">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="yes">Sim</SelectItem>
                        <SelectItem value="no">Não</SelectItem>
                        <SelectItem value="dontknow">Não sei</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descreva Seu Projeto *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Conte-nos sobre seu projeto, objetivos e o que você espera do site/sistema..."
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="references">Referências (Opcional)</Label>
                  <Textarea
                    id="references"
                    value={formData.references}
                    onChange={(e) => handleChange("references", e.target.value)}
                    placeholder="Cole aqui links de sites que você gosta ou que servem de inspiração..."
                    rows={3}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-[1.02]">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Solicitação
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Ao enviar este formulário, você concorda com nossa política de privacidade
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              {/* Informações de Contato */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-card">
                <h3 className="text-xl font-bold mb-5">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-primary rounded-xl shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">E-mail</p>
                      <p className="text-sm text-muted-foreground">contato@tcndigital.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-primary rounded-xl shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Telefone</p>
                      <p className="text-sm text-muted-foreground">(14) 99706-2245</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-primary rounded-xl shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Endereço</p>
                      <p className="text-sm text-muted-foreground">Piraju, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prova Social */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-card">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {["MK", "RR", "NG", "MN"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-11 h-11 rounded-full bg-gradient-primary border-2 border-card flex items-center justify-center text-white text-xs font-bold shadow-sm"
                      >
                        {initials}
                      </div>
                    ))}
                    <div className="w-11 h-11 rounded-full bg-muted border-2 border-card flex items-center justify-center text-foreground text-xs font-bold shadow-sm">
                      +
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-bold text-sm leading-tight">Clientes satisfeitos</p>
                    <p className="text-xs text-muted-foreground">Projetos entregues com excelência</p>
                  </div>
                </div>
              </div>

              {/* Selos de Confiança */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-card space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                  <p className="text-sm text-foreground">Atendimento personalizado e seguro</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0" />
                  <p className="text-sm text-foreground">Resposta em até 24 horas úteis</p>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent shrink-0" />
                  <p className="text-sm text-foreground">Especialistas dedicados ao seu projeto</p>
                </div>
              </div>

              {/* Resposta Rápida */}
              <div className="relative overflow-hidden bg-gradient-primary p-6 rounded-2xl shadow-glow">
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <h3 className="text-lg font-bold mb-2 text-white relative z-10">Resposta Rápida</h3>
                <p className="text-sm text-white/90 relative z-10">
                  Respondemos todas as solicitações em até 24 horas úteis, com contato direto via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
