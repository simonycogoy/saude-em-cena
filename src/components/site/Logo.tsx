import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Marca do portal: fachada neoclássica do Theatro Prezewodowski —
 * frontão, colunas e a cruz da saúde aberta na coluna central.
 * As partes em `currentColor` invertem sozinhas entre fundo claro e escuro.
 */
function TheaterMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 104 112" className={className} aria-hidden="true" fill="none">
      {/* frontão */}
      <path d="M4 46 L52 8 L100 46 Z" fill="currentColor" />
      <circle cx="52" cy="32" r="7" fill="var(--color-coral)" />
      {/* arquitrave */}
      <rect x="4" y="50" width="96" height="12" rx="2" fill="currentColor" />
      {/* colunas */}
      <rect x="12" y="66" width="18" height="28" rx="1.5" fill="var(--color-teal)" />
      <rect x="43" y="66" width="18" height="28" rx="1.5" fill="var(--color-teal)" />
      <rect x="74" y="66" width="18" height="28" rx="1.5" fill="var(--color-teal)" />
      {/* cruz da saúde na coluna central */}
      <rect x="49" y="70" width="6" height="20" rx="1" fill="currentColor" />
      <rect x="44" y="77" width="16" height="6" rx="1" fill="currentColor" />
      {/* base em dois degraus */}
      <rect x="8" y="94" width="88" height="7" rx="1.5" fill="currentColor" />
      <rect x="2" y="101" width="100" height="9" rx="2" fill="currentColor" />
    </svg>
  );
}

export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <TheaterMark
        className={cn(
          "size-10 shrink-0 transition-transform duration-300 group-hover:scale-[1.06]",
          tone === "light" ? "text-ink-foreground" : "text-foreground",
        )}
      />
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-base font-bold",
            tone === "light" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          Portal de Saúde
        </span>
        <span
          className={cn(
            "block text-[11px] font-semibold uppercase tracking-[0.14em]",
            tone === "light" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          Itaqui · RS
        </span>
      </span>
    </Link>
  );
}
