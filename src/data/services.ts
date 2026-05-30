import {
  Smartphone,
  Globe,
  BarChart3,
  Target,
  Rocket,
  Search,
  Zap,
  PenTool,
  Code2,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Users,
  LineChart,
  Database,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export interface ServiceBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  price: string;
  priceLabel?: string;
  priceNote: string;
  intro: string[];
  includes: string[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faq: ServiceFaq[];
}

export const services: ServiceDetail[] = [
  {
    slug: "landing-page",
    icon: Smartphone,
    name: "Landing Page",
    tagline: "Conversão e Resultados",
    price: "R$ 1.500",
    priceLabel: "A partir de",
    priceNote: "Em até 12x sem juros",
    intro: [
      "Uma landing page é uma página única, objetiva e estratégica, criada com um propósito claro: converter visitantes em clientes, leads ou inscrições. Diferente de um site institucional, ela elimina distrações e guia o visitante para uma única ação.",
      "Na TCN Digital, desenhamos cada landing page com foco total em performance e conversão. Do título à chamada para ação, cada elemento é pensado para gerar resultado. Ideal para lançamentos, captação de leads, campanhas de tráfego pago e divulgação de produtos ou serviços específicos.",
    ],
    includes: [
      "Design responsivo e moderno",
      "Otimização para conversão (CRO)",
      "Integração com Google Analytics",
      "Formulários de captação de leads",
      "SEO básico otimizado",
      "Integração com WhatsApp e e-mail",
      "Carregamento rápido e otimizado",
    ],
    benefits: [
      {
        icon: Target,
        title: "Foco em conversão",
        description:
          "Cada seção é estruturada para conduzir o visitante até a ação desejada, aumentando suas taxas de conversão.",
      },
      {
        icon: Zap,
        title: "Carregamento veloz",
        description:
          "Páginas leves e otimizadas que carregam em segundos, o que é fundamental para não perder visitantes e melhorar o SEO.",
      },
      {
        icon: Search,
        title: "Pronta para anúncios",
        description:
          "Estrutura ideal para campanhas no Google Ads e Meta Ads, com rastreamento de conversões configurado.",
      },
      {
        icon: Rocket,
        title: "Captação de leads",
        description:
          "Formulários inteligentes e integrações que enviam os contatos direto para você, prontos para o atendimento.",
      },
    ],
    process: [
      {
        title: "Briefing e estratégia",
        description:
          "Entendemos seu objetivo, público e oferta para definir a melhor estrutura de conversão.",
      },
      {
        title: "Design e copy",
        description:
          "Criamos um layout moderno e textos persuasivos alinhados à sua marca e ao seu público.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Codificamos a página com tecnologia moderna, responsiva e otimizada para velocidade.",
      },
      {
        title: "Publicação e otimização",
        description:
          "Publicamos, configuramos o rastreamento e acompanhamos os primeiros resultados para ajustes.",
      },
    ],
    faq: [
      {
        question: "Em quanto tempo a landing page fica pronta?",
        answer:
          "Em média, entre 1 e 2 semanas, dependendo da complexidade e da agilidade no envio dos materiais e aprovações.",
      },
      {
        question: "Preciso ter domínio e hospedagem?",
        answer:
          "Não é obrigatório. Se você ainda não tiver, orientamos e cuidamos de toda a configuração para você.",
      },
      {
        question: "A landing page funciona no celular?",
        answer:
          "Sim. Todas as nossas páginas são 100% responsivas e otimizadas para celulares, tablets e computadores.",
      },
    ],
  },
  {
    slug: "desenvolvimento-de-site",
    icon: Globe,
    name: "Desenvolvimento de Site",
    tagline: "Solução Completa",
    price: "R$ 2.000",
    priceLabel: "A partir de",
    priceNote: "Em até 12x sem juros",
    intro: [
      "Um site institucional completo é a base da presença digital da sua empresa. Ele transmite credibilidade, apresenta seus serviços e produtos com profundidade e funciona como o seu cartão de visitas online, disponível 24 horas por dia.",
      "Desenvolvemos sites com múltiplas páginas, blog integrado e funcionalidades avançadas, ideais para empresas que querem uma presença digital robusta, profissional e preparada para crescer junto com o negócio.",
    ],
    includes: [
      "Design responsivo premium",
      "Blog incluso para marketing de conteúdo",
      "Painel administrativo",
      "SEO avançado otimizado",
      "Integração com redes sociais",
      "Múltiplas páginas (Home, Sobre, Serviços, Contato e mais)",
      "Formulários e integração com WhatsApp",
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: "Credibilidade profissional",
        description:
          "Um site bem construído transmite confiança e posiciona sua empresa acima da concorrência.",
      },
      {
        icon: LayoutDashboard,
        title: "Painel administrativo",
        description:
          "Gerencie conteúdos, posts e informações com autonomia, sem depender de terceiros para pequenas mudanças.",
      },
      {
        icon: TrendingUp,
        title: "SEO avançado",
        description:
          "Estrutura otimizada para os mecanismos de busca, ajudando seu site a ser encontrado no Google.",
      },
      {
        icon: PenTool,
        title: "Blog integrado",
        description:
          "Produza conteúdo, atraia visitantes e fortaleça sua autoridade no seu segmento de atuação.",
      },
    ],
    process: [
      {
        title: "Planejamento",
        description:
          "Mapeamos as páginas, funcionalidades e a arquitetura ideal para o seu site e seus objetivos.",
      },
      {
        title: "Design das telas",
        description:
          "Criamos o layout de todas as páginas com identidade visual alinhada à sua marca.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Construímos o site com tecnologia moderna, painel administrativo e otimização de SEO.",
      },
      {
        title: "Testes e publicação",
        description:
          "Revisamos tudo, testamos em diversos dispositivos e colocamos seu site no ar com segurança.",
      },
    ],
    faq: [
      {
        question: "Quantas páginas o site inclui?",
        answer:
          "O projeto base contempla as páginas essenciais (Home, Sobre, Serviços, Contato e Blog). Páginas adicionais podem ser incluídas conforme a necessidade.",
      },
      {
        question: "Vou conseguir atualizar o site sozinho?",
        answer:
          "Sim. Entregamos um painel administrativo e orientamos você a gerenciar conteúdos e posts do blog com autonomia.",
      },
      {
        question: "O site já vem otimizado para o Google?",
        answer:
          "Sim. Aplicamos boas práticas de SEO técnico desde a estrutura, deixando seu site preparado para um bom posicionamento.",
      },
    ],
  },
  {
    slug: "consultoria-de-produto-e-dados",
    icon: BarChart3,
    name: "Consultoria de Produto e Dados",
    tagline: "Estratégia e Resultados",
    price: "Sob Consulta",
    priceNote: "Valores personalizados por projeto",
    intro: [
      "Nem todo desafio se resolve apenas com um site. Às vezes, o que o seu negócio precisa é de estratégia: entender os dados, otimizar produtos digitais e tomar decisões baseadas em informação, e não em achismo.",
      "Nossa consultoria de produto e dados ajuda empresas a criar e aprimorar produtos digitais, estruturar métricas, montar dashboards e construir estratégias de crescimento sustentáveis. Da concepção à implementação, transformamos a sua visão em resultados mensuráveis.",
    ],
    includes: [
      "Criação de novos produtos digitais",
      "Otimização de produtos existentes",
      "Estruturação de dados e métricas",
      "Dashboards e relatórios gerenciais",
      "Análise de performance e KPIs",
      "Estratégias de crescimento",
      "Acompanhamento e recomendações contínuas",
    ],
    benefits: [
      {
        icon: Lightbulb,
        title: "Decisões com base em dados",
        description:
          "Saia do achismo: estruturamos as informações certas para você decidir com clareza e segurança.",
      },
      {
        icon: LineChart,
        title: "Métricas que importam",
        description:
          "Definimos os KPIs essenciais do seu negócio e os organizamos em dashboards claros e acionáveis.",
      },
      {
        icon: Database,
        title: "Organização de dados",
        description:
          "Transformamos dados dispersos em uma base estruturada e confiável para a gestão do dia a dia.",
      },
      {
        icon: Users,
        title: "Foco no produto",
        description:
          "Aprimoramos a experiência e o valor entregue pelo seu produto digital, ampliando resultados.",
      },
    ],
    process: [
      {
        title: "Diagnóstico",
        description:
          "Mergulhamos no seu negócio, produto e dados atuais para entender o cenário e as oportunidades.",
      },
      {
        title: "Estratégia",
        description:
          "Definimos metas, métricas e um plano de ação claro, priorizando o que gera mais impacto.",
      },
      {
        title: "Implementação",
        description:
          "Estruturamos dados, dashboards e melhorias de produto, acompanhando de perto cada etapa.",
      },
      {
        title: "Acompanhamento",
        description:
          "Monitoramos os resultados e ajustamos a estratégia continuamente para o crescimento sustentável.",
      },
    ],
    faq: [
      {
        question: "Por que o valor é sob consulta?",
        answer:
          "Cada projeto de consultoria é único. O escopo varia conforme o tamanho do negócio e os objetivos, por isso elaboramos uma proposta personalizada.",
      },
      {
        question: "A consultoria serve para empresas de qualquer tamanho?",
        answer:
          "Sim. Adaptamos a abordagem para desde pequenos negócios que estão começando a estruturar seus dados até empresas mais maduras.",
      },
      {
        question: "Vocês implementam ou só orientam?",
        answer:
          "Os dois. Podemos atuar de forma consultiva, recomendando caminhos, ou colocar a mão na massa na implementação, como você preferir.",
      },
    ],
  },
];

export const getService = (slug?: string): ServiceDetail | undefined =>
  services.find((service) => service.slug === slug);
