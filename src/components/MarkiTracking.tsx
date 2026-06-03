import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    marki?: {
      pageview: () => void;
      track: (event: string, data?: unknown) => void;
      identify: (contact: unknown) => void;
    };
  }
}

/**
 * Dispara o pageview do Marki a cada troca de rota (SPA).
 * O script no index.html já conta o primeiro acesso, então pulamos o mount inicial.
 */
export const MarkiTracking = () => {
  const { pathname } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    window.marki?.pageview();
  }, [pathname]);

  return null;
};
