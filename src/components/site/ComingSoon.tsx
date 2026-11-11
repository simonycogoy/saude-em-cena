import { Link } from "@tanstack/react-router";
import { ArrowLeft, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function ComingSoon({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <section className="relative overflow-hidden bg-gradient-ink text-ink-foreground">
        <div className="absolute inset-0 bg-grid-ink opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="eyebrow text-amber">Portal de Saúde</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-ink-muted">{description}</p>
        </div>
      </section>
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-16 lg:px-8">
        <div className="flex max-w-xl gap-5 rounded-3xl border border-border bg-card p-8 shadow-soft">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-amber-soft text-amber-foreground">
            <Hammer className="size-6" />
          </span>
          <div>
            <h2 className="text-xl font-bold">Tela em prototipação</h2>
            <p className="mt-2 text-muted-foreground">
              Esta página será desenhada nas próximas etapas do protótipo.
            </p>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link to="/"><ArrowLeft /> Voltar ao início</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
