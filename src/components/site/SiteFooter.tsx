import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "./nav";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="absolute inset-x-0 top-0 flex h-1">
        <span className="flex-1 bg-teal" />
        <span className="flex-1 bg-coral" />
        <span className="flex-1 bg-amber" />
        <span className="flex-1 bg-sky" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            Portal institucional demonstrativo para organização de informações, serviços e
            recursos de saúde do município.
          </p>
        </div>

        <div>
          <p className="eyebrow text-amber">Navegação</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-muted transition-colors hover:text-ink-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-amber">Contato</p>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li className="flex gap-3"><MapPin className="size-4 shrink-0 text-teal" /> Endereço aguardando validação institucional</li>
            <li className="flex gap-3"><Phone className="size-4 shrink-0 text-coral" /> Telefone a definir</li>
            <li className="flex gap-3"><Clock className="size-4 shrink-0 text-sky" /> Seg. a sex., 7h às 17h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-ink-muted sm:flex-row lg:px-8">
          <span>© 2026 Portal de Saúde de Itaqui · Protótipo</span>
          <span>Instituição responsável: a definir</span>
        </div>
      </div>
    </footer>
  );
}
