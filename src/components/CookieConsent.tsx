import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, ShieldCheck, BarChart3, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const STORAGE_KEY = "tcn-cookie-consent";

interface Consent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
}

/** Atualiza o Google Consent Mode e o dataLayer com a escolha do usuário. */
const applyConsent = (analytics: boolean, marketing: boolean) => {
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
    });
  }
  w.dataLayer.push({
    event: "cookie_consent_update",
    cookie_analytics: analytics,
    cookie_marketing: marketing,
  });
};

export const CookieConsent = () => {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setBannerOpen(true);
    } else {
      try {
        const c: Consent = JSON.parse(stored);
        setAnalytics(c.analytics);
        setMarketing(c.marketing);
        applyConsent(c.analytics, c.marketing);
      } catch {
        setBannerOpen(true);
      }
    }

    const openPrefs = () => setModalOpen(true);
    window.addEventListener("open-cookie-preferences", openPrefs);
    return () => window.removeEventListener("open-cookie-preferences", openPrefs);
  }, []);

  const persist = (a: boolean, m: boolean) => {
    const consent: Consent = {
      necessary: true,
      analytics: a,
      marketing: m,
      date: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(a, m);
    setBannerOpen(false);
    setModalOpen(false);
  };

  const acceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    persist(true, true);
  };

  const rejectOptional = () => {
    setAnalytics(false);
    setMarketing(false);
    persist(false, false);
  };

  const savePreferences = () => persist(analytics, marketing);

  return (
    <>
      {/* Botão flutuante para reabrir as preferências */}
      <button
        onClick={() => setModalOpen(true)}
        aria-label="Preferências de cookies"
        className="fixed bottom-5 left-5 z-40 p-3 bg-card border border-border rounded-full shadow-card hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        <Cookie className="h-6 w-6 text-accent" />
      </button>

      {/* Banner de primeiro acesso */}
      {bannerOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
          <div className="container mx-auto">
            <div className="bg-card border border-border rounded-2xl shadow-card p-6 flex flex-col lg:flex-row lg:items-center gap-5">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-gradient-primary rounded-xl shrink-0 hidden sm:flex">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Nós usamos cookies 🍪</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência, analisar o tráfego e
                    personalizar conteúdo. Você pode aceitar todos, recusar os opcionais ou
                    ajustar suas preferências. Saiba mais na nossa{" "}
                    <Link to="/politica-de-privacidade" className="text-accent hover:underline font-medium">
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button variant="outline" onClick={() => setModalOpen(true)}>
                  Personalizar
                </Button>
                <Button variant="outline" onClick={rejectOptional}>
                  Recusar opcionais
                </Button>
                <Button
                  onClick={acceptAll}
                  className="bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300"
                >
                  Aceitar todos
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de preferências */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Preferências de cookies</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Selecione quais categorias de cookies você quer permitir. Cookies necessários
              são obrigatórios para o site funcionar e não podem ser desabilitados.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Necessários */}
            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h4 className="font-bold flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  Necessários
                </h4>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                  Sempre ativos
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Essenciais para a navegação, autenticação, segurança e preferências básicas.
                Sem eles, o site não funciona como esperado. Não armazenam dados de
                identificação pessoal.
              </p>
            </div>

            {/* Analíticos */}
            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h4 className="font-bold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Analíticos
                </h4>
                <Switch
                  checked={analytics}
                  onCheckedChange={setAnalytics}
                  className="data-[state=checked]:bg-accent"
                  aria-label="Permitir cookies analíticos"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nos ajudam a entender como você usa o site (páginas mais vistas, tempo de
                permanência), de forma agregada e anônima, para melhorarmos a experiência.
              </p>
            </div>

            {/* Marketing */}
            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h4 className="font-bold flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-accent" />
                  Marketing
                </h4>
                <Switch
                  checked={marketing}
                  onCheckedChange={setMarketing}
                  className="data-[state=checked]:bg-accent"
                  aria-label="Permitir cookies de marketing"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Permitem que você veja conteúdo relevante e anúncios alinhados ao seu interesse
                em outras plataformas. Podem ser definidos por nós ou parceiros (ex.: Meta,
                Google).
              </p>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={rejectOptional} className="w-full sm:w-auto">
              Recusar opcionais
            </Button>
            <Button
              onClick={savePreferences}
              className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow text-primary-foreground transition-all duration-300"
            >
              Salvar preferências
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
