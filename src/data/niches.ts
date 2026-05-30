import {
  Scale,
  Stethoscope,
  Smile,
  Brain,
  Salad,
  Calculator,
  Ruler,
  Home,
  UtensilsCrossed,
  Scissors,
  Dumbbell,
  PawPrint,
  HardHat,
  Wrench,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export interface NicheFaq {
  question: string;
  answer: string;
}

export interface Niche {
  slug: string;
  /** Nome de exibição (plural), ex.: "Advogados". */
  name: string;
  /** Segmento curto para o badge, ex.: "Advocacia". */
  segment: string;
  /** Forma usada nas keywords, ex.: "advogados". */
  keyword: string;
  icon: LucideIcon;
  intro: string[];
  needs: string[];
  faq: NicheFaq[];
}

export const niches: Niche[] = [
  {
    slug: "advogados",
    name: "Advogados",
    segment: "Advocacia",
    keyword: "advogados",
    icon: Scale,
    intro: [
      "Para um escritório de advocacia, credibilidade é tudo. Antes de marcar uma consulta, o cliente pesquisa o nome do advogado no Google, e um site profissional é o que transmite a seriedade e a confiança que a profissão exige.",
      "A TCN Digital cria sites para advogados que apresentam as áreas de atuação com clareza, facilitam o contato e respeitam o que a OAB permite na divulgação, sem sensacionalismo.",
    ],
    needs: [
      "Áreas de atuação apresentadas com clareza",
      'Página "Sobre" com formação e número da OAB para gerar confiança',
      "Formulário de contato e botão de WhatsApp",
      "Blog jurídico para atrair clientes pelo Google",
      "Design sóbrio e em conformidade com a OAB",
      "Site responsivo (boa parte das buscas vem do celular)",
    ],
    faq: [
      {
        question: "Um site de advogado pode ter qualquer conteúdo?",
        answer:
          "Não. A divulgação da advocacia segue regras da OAB (Provimento 205/2021). Criamos o site dentro dessas regras, com informação e conteúdo, sem captação irregular de clientela.",
      },
      {
        question: "Vale a pena ter um blog no site do escritório?",
        answer:
          "Sim. Artigos respondendo dúvidas jurídicas comuns atraem potenciais clientes pelo Google e reforçam a sua autoridade na área.",
      },
    ],
  },
  {
    slug: "medicos",
    name: "Médicos e Clínicas",
    segment: "Saúde",
    keyword: "médicos",
    icon: Stethoscope,
    intro: [
      "Pacientes escolhem profissionais de saúde com base em confiança. Um site bem feito mostra suas especialidades, convênios e estrutura, e ajuda o paciente a decidir e a marcar uma consulta com segurança.",
      "A TCN Digital desenvolve sites para médicos e clínicas com agendamento facilitado, informações claras e conformidade com as normas do CFM para publicidade médica.",
    ],
    needs: [
      "Especialidades e procedimentos bem explicados",
      "Botão de agendamento e WhatsApp em destaque",
      "Convênios atendidos e informações de localização",
      "Página da equipe com formação e CRM",
      "Conteúdo educativo sobre saúde",
      "Conformidade com a publicidade médica (CFM)",
    ],
    faq: [
      {
        question: "O site pode mostrar fotos de antes e depois?",
        answer:
          "Há restrições do CFM para a publicidade médica, especialmente em estética. Montamos o site respeitando essas normas para você não ter problemas no conselho.",
      },
      {
        question: "Dá para integrar agendamento online?",
        answer:
          "Sim. Podemos integrar com sistemas de agendamento ou direcionar para WhatsApp e telefone, conforme a sua preferência.",
      },
    ],
  },
  {
    slug: "dentistas",
    name: "Dentistas",
    segment: "Odontologia",
    keyword: "dentistas",
    icon: Smile,
    intro: [
      "Na odontologia, a decisão do paciente passa muito pela confiança e pela sensação de cuidado. Um site profissional transmite higiene, organização e qualidade antes mesmo da primeira consulta.",
      "A TCN Digital cria sites para dentistas e clínicas odontológicas que destacam tratamentos, facilitam o agendamento e seguem as normas do CFO para divulgação.",
    ],
    needs: [
      "Lista de tratamentos (clínico geral, ortodontia, implantes, estética)",
      "Agendamento por WhatsApp em destaque",
      "Galeria do consultório transmitindo cuidado e higiene",
      "Depoimentos de pacientes (dentro das normas)",
      "Conformidade com o CFO na publicidade",
      "Versão mobile impecável",
    ],
    faq: [
      {
        question: "Posso divulgar preços de tratamento no site?",
        answer:
          "O CFO tem restrições sobre divulgação de preços e promoções em odontologia. Construímos o site dentro dessas regras para você atuar com segurança.",
      },
      {
        question: "Vale destacar os convênios atendidos?",
        answer: "Sim. Listar os convênios atendidos é permitido e ajuda o paciente a decidir.",
      },
    ],
  },
  {
    slug: "psicologos",
    name: "Psicólogos",
    segment: "Psicologia",
    keyword: "psicólogos",
    icon: Brain,
    intro: [
      "Procurar um psicólogo é uma decisão sensível. Um site acolhedor e profissional ajuda o paciente a se sentir seguro para dar o primeiro passo e marcar uma sessão.",
      "A TCN Digital cria sites para psicólogos com abordagem clara, agendamento simples e respeito às normas do CFP para divulgação.",
    ],
    needs: [
      "Apresentação da abordagem e das áreas de atuação",
      "Informação sobre atendimento online e presencial",
      "Agendamento facilitado (WhatsApp e contato)",
      "Tom acolhedor no texto e no design",
      "Conformidade com o Código de Ética do CFP",
      "Blog com conteúdo sobre saúde mental",
    ],
    faq: [
      {
        question: "Posso atender online e mostrar isso no site?",
        answer:
          "Sim. O atendimento psicológico online é regulamentado pelo CFP. Deixamos claro no site as modalidades que você oferece.",
      },
      {
        question: "O que o CFP restringe na divulgação?",
        answer:
          "Há regras sobre promessas de resultado e sensacionalismo. Criamos o conteúdo de forma ética e profissional.",
      },
    ],
  },
  {
    slug: "nutricionistas",
    name: "Nutricionistas",
    segment: "Nutrição",
    keyword: "nutricionistas",
    icon: Salad,
    intro: [
      "Quem busca um nutricionista quer resultado e confiança. Um site profissional mostra a sua especialidade (emagrecimento, esportiva, clínica) e facilita o agendamento da primeira consulta.",
      "A TCN Digital cria sites para nutricionistas com foco em conversão, atendimento online e presencial, e conteúdo que atrai pacientes pelo Google.",
    ],
    needs: [
      "Especialidades (clínica, esportiva, emagrecimento, materno-infantil)",
      "Atendimento online e presencial",
      "Agendamento por WhatsApp",
      "Resultados e depoimentos (dentro das normas do CFN)",
      "Blog com dicas de alimentação",
      "Design leve e saudável",
    ],
    faq: [
      {
        question: "Posso mostrar antes e depois de pacientes?",
        answer:
          "Há cuidados éticos do CFN com esse tipo de divulgação. Orientamos a melhor forma de mostrar resultados sem infringir as regras.",
      },
      {
        question: "Atendo online, o site ajuda?",
        answer:
          "Muito. O site capta pacientes de outras cidades e facilita o agendamento de consultas online.",
      },
    ],
  },
  {
    slug: "contadores",
    name: "Contadores",
    segment: "Contabilidade",
    keyword: "contadores",
    icon: Calculator,
    intro: [
      "Empresas escolhem o contador pela confiança e pela percepção de competência. Um site profissional mostra seus serviços, transmite seriedade e gera contato de novos clientes.",
      "A TCN Digital cria sites para escritórios de contabilidade que apresentam os serviços com clareza (abertura de empresa, MEI, IR, folha) e captam leads qualificados.",
    ],
    needs: [
      "Serviços detalhados (abertura de empresa, MEI, IR, folha, BPO)",
      "Captação de leads de empresas buscando contador",
      "Conteúdo sobre obrigações fiscais",
      "Página de planos e serviços",
      "Botão de WhatsApp e formulário",
      "Design profissional e organizado",
    ],
    faq: [
      {
        question: "Vale a pena ter blog em site de contabilidade?",
        answer:
          "Sim. Conteúdo explicando obrigações e prazos atrai empresários que buscam um contador e posiciona você no Google.",
      },
      {
        question: "O site ajuda a captar clientes de outras cidades?",
        answer:
          "Sim. Boa parte da contabilidade hoje é digital, então o site amplia o seu alcance além da sua cidade.",
      },
    ],
  },
  {
    slug: "arquitetos",
    name: "Arquitetos",
    segment: "Arquitetura",
    keyword: "arquitetos",
    icon: Ruler,
    intro: [
      "Arquitetura se vende pelo olhar. Um site com um portfólio bem apresentado transmite o seu estilo e convence o cliente de que você é o profissional certo para o projeto dele.",
      "A TCN Digital cria sites para arquitetos e designers de interiores com foco no portfólio visual, carregamento rápido das imagens e captação de contatos.",
    ],
    needs: [
      "Portfólio de projetos com fotos em alta qualidade",
      "Apresentação do estilo e dos serviços",
      "Imagens otimizadas (rápidas mesmo em alta resolução)",
      'Página "Sobre" com a sua história e abordagem',
      "Formulário de contato e WhatsApp",
      "Design clean que valoriza o trabalho",
    ],
    faq: [
      {
        question: "Meu site não vai ficar lento com tantas fotos?",
        answer:
          "Não, se for bem feito. Otimizamos as imagens para carregarem rápido sem perder qualidade visual.",
      },
      {
        question: "Posso atualizar o portfólio sozinho?",
        answer: "Sim. Entregamos com painel para você adicionar novos projetos com autonomia.",
      },
    ],
  },
  {
    slug: "imobiliarias",
    name: "Imobiliárias e Corretores",
    segment: "Imóveis",
    keyword: "imobiliárias",
    icon: Home,
    intro: [
      "No mercado imobiliário, o cliente começa a busca pela internet. Um site com os imóveis bem organizados e busca por filtros é o que faz o interessado entrar em contato.",
      "A TCN Digital cria sites e sistemas para imobiliárias e corretores com catálogo de imóveis, filtros de busca e captação de leads.",
    ],
    needs: [
      "Catálogo de imóveis com fotos e detalhes",
      "Busca por filtros (tipo, bairro, preço, quartos)",
      "Captação de leads interessados",
      "Botão de WhatsApp por imóvel",
      "Painel para cadastrar e atualizar imóveis",
      "Versão mobile (a maioria busca no celular)",
    ],
    faq: [
      {
        question: "Dá para integrar com portais como OLX e ZAP?",
        answer:
          "Conforme a necessidade, podemos integrar ou importar imóveis. Vamos avaliar a melhor solução para o seu fluxo de trabalho.",
      },
      {
        question: "Consigo cadastrar os imóveis sozinho?",
        answer: "Sim. O sistema vem com painel para você gerenciar o catálogo com autonomia.",
      },
    ],
  },
  {
    slug: "restaurantes",
    name: "Restaurantes e Delivery",
    segment: "Alimentação",
    keyword: "restaurantes",
    icon: UtensilsCrossed,
    intro: [
      "Fome entra pelos olhos. Um site com cardápio bonito, fotos dos pratos e pedido fácil pelo WhatsApp aumenta os pedidos e reduz a dependência total dos aplicativos de delivery.",
      "A TCN Digital cria sites para restaurantes, lanchonetes e deliveries com cardápio digital, pedido por WhatsApp e localização.",
    ],
    needs: [
      "Cardápio digital com fotos e preços",
      "Pedido facilitado por WhatsApp",
      "Localização, horário e formas de pagamento",
      "Fotos que dão água na boca",
      "Versão mobile rápida",
      "Link único para a bio do Instagram",
    ],
    faq: [
      {
        question: "Preciso pagar comissão como nos apps de delivery?",
        answer:
          "Não. Com o pedido direto pelo seu site e WhatsApp, você não paga a comissão dos aplicativos em cada venda.",
      },
      {
        question: "Dá para atualizar o cardápio sozinho?",
        answer: "Sim. Deixamos o cardápio fácil de atualizar quando mudar preços ou itens.",
      },
    ],
  },
  {
    slug: "saloes-de-beleza",
    name: "Salões e Barbearias",
    segment: "Beleza",
    keyword: "salões de beleza",
    icon: Scissors,
    intro: [
      "No setor de beleza, agenda cheia é tudo. Um site com seus serviços, fotos do trabalho e agendamento fácil transforma quem te achou no Google em cliente marcado.",
      "A TCN Digital cria sites para salões de beleza e barbearias com agendamento por WhatsApp, galeria de trabalhos e destaque para os serviços.",
    ],
    needs: [
      "Lista de serviços e valores",
      "Galeria de cortes e trabalhos realizados",
      "Agendamento por WhatsApp em destaque",
      "Localização e horário de funcionamento",
      "Link para o Instagram e prova social",
      "Versão mobile impecável",
    ],
    faq: [
      {
        question: "Dá para integrar um sistema de agendamento?",
        answer:
          "Sim. Podemos integrar agendamento online ou direcionar para o WhatsApp, como você preferir.",
      },
      {
        question: "Vale a pena ter site se já tenho Instagram?",
        answer:
          "Sim. O site aparece no Google quando alguém busca 'salão perto de mim', algo que o Instagram sozinho não faz.",
      },
    ],
  },
  {
    slug: "academias",
    name: "Academias e Personal",
    segment: "Fitness",
    keyword: "academias",
    icon: Dumbbell,
    intro: [
      "Quem procura academia compara estrutura, planos e localização antes de visitar. Um site que mostra tudo isso com clareza traz mais matrículas e aulas experimentais.",
      "A TCN Digital cria sites para academias, estúdios e personal trainers com planos, modalidades e captação de alunos.",
    ],
    needs: [
      "Modalidades e estrutura (fotos do espaço)",
      "Planos e valores",
      "Captação de aula experimental e matrícula",
      "Horários das aulas",
      "Depoimentos e resultados de alunos",
      "WhatsApp em destaque",
    ],
    faq: [
      {
        question: "Sou personal autônomo, vale a pena um site?",
        answer:
          "Sim. Um site profissional te diferencia, mostra seus resultados e capta alunos que buscam personal na sua cidade.",
      },
      {
        question: "Dá para captar aula experimental pelo site?",
        answer:
          "Sim. Criamos um formulário ou botão de WhatsApp focado em converter visitantes em aulas experimentais.",
      },
    ],
  },
  {
    slug: "veterinarios",
    name: "Veterinários e Pet Shops",
    segment: "Pet",
    keyword: "veterinários",
    icon: PawPrint,
    intro: [
      "Tutores tratam seus pets como família e querem o melhor cuidado. Um site que passa confiança e facilita o contato traz mais clientes para a clínica ou pet shop.",
      "A TCN Digital cria sites para clínicas veterinárias e pet shops com serviços, agendamento e localização.",
    ],
    needs: [
      "Serviços (consultas, vacinas, banho e tosa, cirurgias)",
      "Agendamento e emergência por WhatsApp",
      "Localização e horário (incluindo plantão)",
      "Fotos da estrutura e da equipe",
      "Conteúdo sobre cuidados com pets",
      "Versão mobile rápida",
    ],
    faq: [
      {
        question: "Atendo emergência, dá para destacar no site?",
        answer:
          "Sim. Deixamos o contato de emergência e plantão em destaque para o tutor encontrar na hora do aperto.",
      },
      {
        question: "Vale ter conteúdo sobre cuidados com pets?",
        answer:
          "Sim. Artigos sobre saúde animal atraem tutores pelo Google e reforçam a sua autoridade.",
      },
    ],
  },
  {
    slug: "construtoras",
    name: "Construtoras e Engenharia",
    segment: "Construção",
    keyword: "construtoras",
    icon: HardHat,
    intro: [
      "Obra é investimento alto, e o cliente pesquisa muito antes de fechar. Um site com seus projetos entregues e a sua trajetória transmite a solidez que esse tipo de decisão exige.",
      "A TCN Digital cria sites para construtoras, engenheiros e empresas de reforma com portfólio de obras e captação de orçamentos.",
    ],
    needs: [
      "Portfólio de obras e projetos entregues",
      "Serviços (construção, reforma, projetos)",
      "Páginas de empreendimentos (quando for o caso)",
      "Captação de orçamento qualificado",
      "Prova social e diferenciais",
      "Design sólido e profissional",
    ],
    faq: [
      {
        question: "Dá para ter uma página por empreendimento?",
        answer:
          "Sim. Para incorporadoras, criamos páginas dedicadas a cada empreendimento, com fotos, plantas e captação de interessados.",
      },
      {
        question: "O site ajuda a captar obras maiores?",
        answer:
          "Sim. Um portfólio bem apresentado transmite a credibilidade necessária para projetos de maior porte.",
      },
    ],
  },
  {
    slug: "oficinas",
    name: "Oficinas e Autopeças",
    segment: "Automotivo",
    keyword: "oficinas mecânicas",
    icon: Wrench,
    intro: [
      "Quando o carro quebra, o dono procura no Google uma oficina de confiança perto dele. Um site que aparece nessa hora e mostra seus serviços traz cliente novo direto.",
      "A TCN Digital cria sites para oficinas mecânicas e lojas de autopeças com serviços, localização e contato rápido.",
    ],
    needs: [
      "Serviços (mecânica, elétrica, funilaria, revisão)",
      "Localização e horário bem visíveis",
      "Contato e orçamento por WhatsApp",
      "Prova social (avaliações de clientes)",
      "SEO local (aparecer em 'oficina perto de mim')",
      "Versão mobile rápida",
    ],
    faq: [
      {
        question: "Como apareço quando buscam 'oficina perto de mim'?",
        answer:
          "Com SEO local, o Google Meu Negócio bem configurado e um site otimizado. Orientamos os dois passos.",
      },
      {
        question: "Vale a pena ter site se recebo cliente por indicação?",
        answer:
          "Sim. O site capta quem ainda não te conhece e está pesquisando uma oficina na sua cidade.",
      },
    ],
  },
  {
    slug: "profissionais-liberais",
    name: "Profissionais Liberais",
    segment: "Serviços",
    keyword: "profissionais liberais",
    icon: Briefcase,
    intro: [
      "Seja qual for a sua profissão, o cliente pesquisa antes de contratar. Um site profissional mostra o seu trabalho, passa confiança e faz você ser encontrado por quem precisa do seu serviço.",
      "A TCN Digital cria sites para profissionais liberais e autônomos de qualquer área, com apresentação dos serviços, portfólio e captação de contatos.",
    ],
    needs: [
      "Apresentação clara dos serviços",
      'Página "Sobre" com a sua experiência',
      "Portfólio ou prova social (quando aplicável)",
      "Formulário de contato e WhatsApp",
      "SEO para ser encontrado na sua área e cidade",
      "Design profissional e responsivo",
    ],
    faq: [
      {
        question: "Sou autônomo, preciso mesmo de um site?",
        answer:
          "Um site te diferencia de quem só tem rede social, passa profissionalismo e aparece no Google quando buscam o seu serviço.",
      },
      {
        question: "Site ou rede social, o que é melhor?",
        answer:
          "Os dois se complementam, mas o site é seu, aparece no Google e não depende de algoritmo. É a sua base própria na internet.",
      },
    ],
  },
];

export const getNiche = (slug?: string): Niche | undefined =>
  niches.find((niche) => niche.slug === slug);
