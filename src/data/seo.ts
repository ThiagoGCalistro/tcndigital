/** URL de produção (usada em canonical, Open Graph e JSON-LD). */
export const SITE_URL = "https://www.tcndigital.com.br";

export const BUSINESS = {
  name: "TCN Digital",
  legalName: "TCN Digital",
  email: "contato@tcndigital.com.br",
  phone: "+55-14-99706-2245",
  city: "Piraju",
  state: "SP",
  country: "BR",
};

/** Cidades atendidas (para areaServed nos schemas). */
export const AREA_SERVED = [
  "Piraju",
  "Manduri",
  "Avaré",
  "Ourinhos",
  "Cerqueira César",
  "Sarutaiá",
  "Tejupá",
  "Fartura",
  "Taguaí",
  "Taquarituba",
  "Bernardino de Campos",
  "Timburi",
  "Ipaussu",
  "Santa Cruz do Rio Pardo",
  "Chavantes",
  "Óleo",
];

/** Perfis em redes sociais (sameAs). Preencher quando os perfis forem criados. */
export const SOCIAL_PROFILES: string[] = [
  // "https://www.instagram.com/...",
  // "https://www.facebook.com/...",
  // "https://www.linkedin.com/company/...",
];

/**
 * Schema do negócio (atendimento 100% remoto / service area business).
 * Sem endereço de rua: usamos apenas a localidade-base e a área atendida.
 */
export const organizationSchema = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS.name,
  url: SITE_URL,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    addressCountry: BUSINESS.country,
  },
  areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
  description:
    "Criação de sites profissionais, landing pages de alta conversão e sistemas web personalizados, com atendimento remoto para Piraju e região.",
};

/** Monta um BreadcrumbList a partir de uma lista de { name, path }. */
export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

/** Monta um FAQPage a partir de uma lista de { question, answer }. */
export const faqSchema = (faq: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});
