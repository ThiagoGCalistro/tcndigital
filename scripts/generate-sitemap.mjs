// Gera o sitemap.xml com todas as rotas (estáticas, serviços, cidades e serviço+cidade).
// Rode após o build (já configurado no script "build" do package.json).
// Mantenha os arrays abaixo em sincronia com src/data/cities.ts e src/data/services.ts.
import { writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = "https://www.tcndigital.com.br";

const citySlugs = [
  "piraju",
  "manduri",
  "avare",
  "ourinhos",
  "cerqueira-cesar",
  "sarutaia",
  "tejupa",
  "fartura",
  "taguai",
  "taquarituba",
  "bernardino-de-campos",
  "timburi",
  "ipaussu",
  "santa-cruz-do-rio-pardo",
  "chavantes",
  "oleo",
];

const serviceSlugs = ["landing-page", "desenvolvimento-de-site", "consultoria-de-produto-e-dados"];

const nicheSlugs = [
  "advogados",
  "medicos",
  "dentistas",
  "psicologos",
  "nutricionistas",
  "contadores",
  "arquitetos",
  "imobiliarias",
  "restaurantes",
  "saloes-de-beleza",
  "academias",
  "veterinarios",
  "construtoras",
  "oficinas",
  "profissionais-liberais",
];

const urls = [];
const add = (path, priority, changefreq = "monthly") =>
  urls.push({ loc: `${SITE_URL}${path}`, priority, changefreq });

add("/", "1.0", "weekly");
add("/criacao-de-sites", "0.8");
add("/sobre", "0.7");
serviceSlugs.forEach((s) => add(`/servicos/${s}`, "0.8"));
citySlugs.forEach((c) => add(`/criacao-de-site-em/${c}`, c === "piraju" ? "0.9" : "0.7"));
serviceSlugs.forEach((s) => citySlugs.forEach((c) => add(`/servicos/${s}/${c}`, "0.6")));
add("/sites-para", "0.8");
nicheSlugs.forEach((n) => add(`/sites-para/${n}`, "0.8"));
add("/politica-de-privacidade", "0.3", "yearly");
add("/condicoes-gerais-de-uso", "0.3", "yearly");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

// Escreve no dist (servido em produção) e no public (dev/preview).
for (const dir of ["dist", "public"]) {
  if (existsSync(resolve(dir))) {
    writeFileSync(resolve(dir, "sitemap.xml"), xml, "utf8");
    console.log(`[sitemap] ${urls.length} URLs escritas em ${dir}/sitemap.xml`);
  }
}
