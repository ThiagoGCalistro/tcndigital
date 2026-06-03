import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MarkiTracking } from "@/components/MarkiTracking";

import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import ServicoDetalhe from "./pages/ServicoDetalhe";
import ServicoCidade from "./pages/ServicoCidade";
import CriacaoDeSites from "./pages/CriacaoDeSites";
import CriacaoDeSiteCidade from "./pages/CriacaoDeSiteCidade";
import SitesPara from "./pages/SitesPara";
import NichoDetalhe from "./pages/NichoDetalhe";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import CondicoesGeraisDeUso from "./pages/CondicoesGeraisDeUso";
import NotFound from "./pages/NotFound";

import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { niches } from "@/data/niches";

const queryClient = new QueryClient();

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <MarkiTracking />
      <Outlet />
      <CookieConsent />
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Index },
      { path: "sobre", Component: Sobre },
      {
        path: "servicos/:slug",
        Component: ServicoDetalhe,
        getStaticPaths: () => services.map((service) => `/servicos/${service.slug}`),
      },
      {
        path: "servicos/:slug/:cidade",
        Component: ServicoCidade,
        getStaticPaths: () =>
          services.flatMap((service) =>
            cities.map((city) => `/servicos/${service.slug}/${city.slug}`),
          ),
      },
      { path: "criacao-de-sites", Component: CriacaoDeSites },
      {
        path: "criacao-de-site-em/:cidade",
        Component: CriacaoDeSiteCidade,
        getStaticPaths: () => cities.map((city) => `/criacao-de-site-em/${city.slug}`),
      },
      { path: "sites-para", Component: SitesPara },
      {
        path: "sites-para/:nicho",
        Component: NichoDetalhe,
        getStaticPaths: () => niches.map((niche) => `/sites-para/${niche.slug}`),
      },
      { path: "politica-de-privacidade", Component: PoliticaDePrivacidade },
      { path: "condicoes-gerais-de-uso", Component: CondicoesGeraisDeUso },
      { path: "*", Component: NotFound },
    ],
  },
];
