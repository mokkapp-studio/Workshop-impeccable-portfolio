"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Recolors the page field to the zone crossing the reading line, and previews
// a case's field while its legend entry is hovered or focused.
export function Campo() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const zonas = Array.from(document.querySelectorAll<HTMLElement>("[data-campo]"));
    let vista: { campo: string; tinta: string | null } | null = null;
    let previa: string | null = null;
    let frame = 0;

    // A preview always wears the default ink; an ink-field zone swaps the ink to white.
    const pintar = () => {
      const campo = previa ?? vista?.campo;
      const tinta = previa ? null : (vista?.tinta ?? null);
      if (campo) root.style.setProperty("--field", campo);
      if (tinta) root.style.setProperty("--ink", tinta);
      else root.style.removeProperty("--ink");
    };

    const medir = () => {
      frame = 0;
      const linea = window.innerHeight * 0.42;
      // A short last zone never reaches the reading line; at the bottom it wins.
      const alFinal = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      const actual = alFinal
        ? zonas[zonas.length - 1]
        : zonas.find((z) => {
            const r = z.getBoundingClientRect();
            return r.top <= linea && r.bottom > linea;
          });
      const zona = actual ?? zonas[0];
      vista = { campo: zona?.dataset.campo ?? "var(--paper)", tinta: zona?.dataset.tinta ?? null };
      pintar();
    };

    const alScroll = () => {
      if (!frame) frame = requestAnimationFrame(medir);
    };

    const entrar = (e: Event) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-campo-previa]");
      if (!el) return;
      previa = el.dataset.campoPrevia ?? null;
      pintar();
    };

    const salir = (e: Event) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-campo-previa]");
      if (!el) return;
      const hacia = (e as PointerEvent | FocusEvent).relatedTarget as HTMLElement | null;
      if (hacia && el.contains(hacia)) return;
      previa = null;
      pintar();
    };

    medir();
    root.classList.add("campo-vivo");
    window.addEventListener("scroll", alScroll, { passive: true });
    window.addEventListener("resize", alScroll);
    document.addEventListener("pointerover", entrar);
    document.addEventListener("pointerout", salir);
    document.addEventListener("focusin", entrar);
    document.addEventListener("focusout", salir);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", alScroll);
      window.removeEventListener("resize", alScroll);
      document.removeEventListener("pointerover", entrar);
      document.removeEventListener("pointerout", salir);
      document.removeEventListener("focusin", entrar);
      document.removeEventListener("focusout", salir);
    };
  }, [pathname]);

  return null;
}

// Server-rendered starting field so the first paint already wears the right color.
export function CampoInicial({ color }: { color: string }) {
  return <style>{`:root{--field:${color}}`}</style>;
}
