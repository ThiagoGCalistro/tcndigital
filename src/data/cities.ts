export interface City {
  slug: string;
  name: string;
  /** Texto único de abertura, para evitar conteúdo duplicado entre as páginas. */
  intro: string;
}

export const cities: City[] = [
  {
    slug: "piraju",
    name: "Piraju",
    intro:
      "Sede da TCN Digital, Piraju é a nossa casa. Conhecemos de perto o comércio, os profissionais e as empresas da cidade, e ajudamos cada um a marcar presença na internet com sites que realmente convertem.",
  },
  {
    slug: "manduri",
    name: "Manduri",
    intro:
      "Em Manduri, cada vez mais negócios locais descobrem o poder de estar bem posicionado no Google. A TCN Digital cria sites e landing pages que colocam a sua empresa à frente da concorrência.",
  },
  {
    slug: "avare",
    name: "Avaré",
    intro:
      "Avaré é um polo regional movimentado, e quem tem presença digital forte sai na frente. Criamos sites profissionais para empresas avareenses que querem crescer e atrair mais clientes.",
  },
  {
    slug: "ourinhos",
    name: "Ourinhos",
    intro:
      "Ourinhos concentra um comércio forte e competitivo. Um site bem feito é o que diferencia a sua empresa da concorrência, e é exatamente isso que a TCN Digital entrega.",
  },
  {
    slug: "cerqueira-cesar",
    name: "Cerqueira César",
    intro:
      "Em Cerqueira César, estar na internet deixou de ser luxo e virou necessidade. Desenvolvemos sites e landing pages que aproximam o seu negócio dos clientes da cidade e região.",
  },
  {
    slug: "sarutaia",
    name: "Sarutaiá",
    intro:
      "Mesmo nas cidades menores como Sarutaiá, um site profissional faz toda a diferença para ser encontrado. A TCN Digital cria presença digital com a cara de quem é da região.",
  },
  {
    slug: "tejupa",
    name: "Tejupá",
    intro:
      "Em Tejupá, a TCN Digital ajuda comerciantes e profissionais a saírem do anonimato online com sites modernos, rápidos e otimizados para o Google.",
  },
  {
    slug: "fartura",
    name: "Fartura",
    intro:
      "Fartura tem um comércio ativo e empreendedor. Criamos sites e landing pages que transformam visitantes em clientes para os negócios da cidade.",
  },
  {
    slug: "taguai",
    name: "Taguaí",
    intro:
      "Em Taguaí, ter um site profissional é a forma mais eficiente de ampliar o alcance do seu negócio. A TCN Digital cuida de tudo para você, do design à publicação.",
  },
  {
    slug: "taquarituba",
    name: "Taquarituba",
    intro:
      "Taquarituba é um importante centro da região, e a concorrência online cresce a cada dia. Um site bem construído coloca a sua empresa em destaque no Google.",
  },
  {
    slug: "bernardino-de-campos",
    name: "Bernardino de Campos",
    intro:
      "Em Bernardino de Campos, a TCN Digital cria sites que valorizam o seu negócio e facilitam o contato dos clientes com a sua empresa.",
  },
  {
    slug: "timburi",
    name: "Timburi",
    intro:
      "Timburi pode ser uma cidade pequena, mas o potencial de quem está bem posicionado na internet é enorme. Criamos sites sob medida para a realidade local.",
  },
  {
    slug: "ipaussu",
    name: "Ipaussu",
    intro:
      "Em Ipaussu, ajudamos empresas e profissionais a conquistarem mais clientes com sites profissionais e landing pages focadas em conversão.",
  },
  {
    slug: "santa-cruz-do-rio-pardo",
    name: "Santa Cruz do Rio Pardo",
    intro:
      "Santa Cruz do Rio Pardo tem um comércio forte e diversificado. A TCN Digital desenvolve sites que destacam a sua marca e geram resultados de verdade.",
  },
  {
    slug: "chavantes",
    name: "Chavantes",
    intro:
      "Em Chavantes, a TCN Digital cria presença digital para negócios que querem ser encontrados no Google e atender melhor os seus clientes.",
  },
  {
    slug: "oleo",
    name: "Óleo",
    intro:
      "Mesmo em Óleo, um site profissional aproxima o seu negócio de novos clientes. A TCN Digital cuida da sua presença digital do começo ao fim.",
  },
];

export const getCity = (slug?: string): City | undefined =>
  cities.find((city) => city.slug === slug);
