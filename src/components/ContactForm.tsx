import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";

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
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Solicitação enviada!",
      description: "Em breve entraremos em contato com você.",
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
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border shadow-lg space-y-6">
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
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
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
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-sm text-muted-foreground">contato@tcndigital.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-sm text-muted-foreground">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="text-lg font-bold mb-2 text-primary">Resposta Rápida</h3>
                <p className="text-sm text-foreground">
                  Respondemos todas as solicitações em até 24 horas úteis. Para urgências, entre em contato via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
