import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const BLOG_URL = "https://blog.tcndigital.com.br";

interface BlogPost {
  id: number;
  link: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
}

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;|&#8230;/g, "…")
    .replace(/&#8211;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .trim();

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

export const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${BLOG_URL}/wp-json/wp/v2/posts?per_page=3&_embed=1`, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((data) => {
        if (!Array.isArray(data)) return;
        const mapped: BlogPost[] = data.map((p) => ({
          id: p.id,
          link: p.link,
          title: stripHtml(p.title?.rendered ?? ""),
          excerpt: stripHtml(p.excerpt?.rendered ?? "").slice(0, 150),
          date: p.date,
          image: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
          category: p._embedded?.["wp:term"]?.[0]?.[0]?.name,
        }));
        setPosts(mapped);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  // Enquanto não houver posts publicados, a seção não aparece.
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-destaque/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Do Nosso <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dicas e novidades sobre criação de sites, marketing digital e presença online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.link}
              className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden hover-lift hover:shadow-glow transition-all duration-500 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TCN Digital</span>
                  </div>
                )}
                {post.category && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-primary text-white text-xs rounded-full shadow-sm">
                    {post.category}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.date)}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}…</p>
                <span className="text-accent font-medium text-sm inline-flex items-center gap-1">
                  Ler mais
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            <a href={BLOG_URL}>
              Ver todas as publicações
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
