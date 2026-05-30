import { Head } from "vite-react-ssg";
import { SITE_URL } from "@/data/seo";

interface SeoProps {
  title: string;
  description: string;
  /** Caminho da rota (ex.: "/criacao-de-site-em/piraju"). Usado em canonical e og:url. */
  path?: string;
  /** Imagem absoluta para Open Graph (default: logo). */
  image?: string;
  /** og:type (default: "website"). */
  type?: string;
  keywords?: string;
  noindex?: boolean;
  /** Dados estruturados JSON-LD (objeto ou lista de objetos). */
  jsonLd?: object | object[];
}

/** Gera título, meta tags (SEO + Open Graph + Twitter), canonical e JSON-LD no <head>. */
export const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
  noindex,
  jsonLd,
}: SeoProps) => {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const ogImage = image || `${SITE_URL}/TCNDigital.png`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="TCN Digital" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
};
