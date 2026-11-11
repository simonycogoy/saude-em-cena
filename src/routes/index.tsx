import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  FileText,
  HeartPulse,
  Landmark,
  Link2,
  MapPin,
  Megaphone,
  Newspaper,
  Pill,
  Search,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import theaterAsset from "@/assets/theater-prezewodowski.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portal de Saúde de Itaqui — Serviços e informações" },
      {
        name: "description",
        content:
          "Encontre unidades de saúde, campanhas de vacinação, documentos e notícias da saúde de Itaqui, RS.",
      },
      { property: "og:title", content: "Portal de Saúde de Itaqui" },
      {
        property: "og:description",
        content: "Unidades, vacinação, documentos e notícias da saúde de Itaqui em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Tone = "teal" | "coral" | "amber" | "sky" | "ink";

const TONE: Record<Tone, { soft: string; solid: string; text: string; bar: string }> = {
  teal: { soft: "bg-teal-soft", solid: "bg-teal text-ink-foreground", text: "text-teal", bar: "bg-teal" },
  coral: { soft: "bg-coral-soft", solid: "bg-coral text-coral-foreground", text: "text-coral", bar: "bg-coral" },
  amber: { soft: "bg-amber-soft", solid: "bg-amber text-amber-foreground", text: "text-amber-foreground", bar: "bg-amber" },
  sky: { soft: "bg-sky-soft", solid: "bg-sky text-ink-foreground", text: "text-sky", bar: "bg-sky" },
  ink: { soft: "bg-muted", solid: "bg-ink text-ink-foreground", text: "text-ink", bar: "bg-ink" },
};

const QUICK: { to: string; title: string; desc: string; icon: LucideIcon; tone: Tone }[] = [
  { to: "/unidades", title: "Unidades de Saúde", desc: "Endereços, horários e serviços", icon: MapPin, tone: "teal" },
  { to: "/informacoes", title: "Informações sobre doenças", desc: "Prevenção e cuidados", icon: Stethoscope, tone: "coral" },
  { to: "/documentacao", title: "Documentação", desc: "Formulários e normas", icon: FileText, tone: "amber" },
  { to: "/noticias", title: "Notícias", desc: "Campanhas e avisos", icon: Newspaper, tone: "sky" },
  { to: "/links", title: "Links Úteis", desc: "Canais oficiais", icon: Link2, tone: "ink" },
];

/* Destaques que apoiam a foto e emendam o topo no resto da página */
const SHELF: { icon: LucideIcon; tone: Tone; label: string; value: string }[] = [
  { icon: Syringe, tone: "coral", label: "Campanha ativa", value: "Vacina da gripe · 10 a 20 de abril" },
  { icon: MapPin, tone: "amber", label: "Rede municipal", value: "12 unidades de saúde" },
  { icon: Clock, tone: "teal", label: "Urgência e emergência", value: "Pronto-atendimento 24h" },
];

const NEWS: { date: string; tag: string; tone: Tone; icon: LucideIcon; title: string; text: string }[] = [
  {
    date: "10/04/2026",
    tag: "Vacinação",
    tone: "coral",
    icon: Syringe,
    title: "Campanha de vacinação contra a gripe",
    text: "Vacinação em todas as ESFs entre 10 e 20 de abril. Procure a sua unidade de referência.",
  },
  {
    date: "05/04/2026",
    tag: "Medicamentos",
    tone: "teal",
    icon: Pill,
    title: "Nova rotina de entrega de medicamentos",
    text: "A partir da próxima semana, medicamentos de uso contínuo terão retirada agendada.",
  },
  {
    date: "01/04/2026",
    tag: "Aviso",
    tone: "amber",
    icon: Megaphone,
    title: "Horário estendido nas unidades centrais",
    text: "Duas unidades passam a atender até as 20h às terças e quintas-feiras.",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-ink text-ink-foreground">
          <div className="absolute inset-0 bg-grid-ink [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
          <div className="absolute -left-24 top-1/2 size-96 rounded-full bg-teal/25 blur-3xl" />
          <div className="absolute right-0 top-8 hidden size-[26rem] rounded-full bg-amber/15 blur-3xl lg:block" />

          <div className="relative mx-auto grid max-w-7xl items-stretch gap-10 px-5 pb-0 pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pt-24">
            <div className="animate-rise pb-16 lg:pb-24">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-3.5 py-1.5 text-xs font-semibold ring-1 ring-ink-foreground/20">
                <span className="size-2 rounded-full bg-amber" />
                Itaqui · Rio Grande do Sul
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Saúde pública <span className="text-teal">mais perto</span> de você.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
                Serviços, unidades e informações de saúde da cidade reunidos em um só lugar.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-8 flex max-w-xl items-center gap-2 rounded-full bg-card p-1.5 shadow-lift"
              >
                <Search className="ml-4 size-5 shrink-0 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Buscar serviço ou unidade…"
                  className="h-11 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <Button type="submit" variant="coral" className="shrink-0">
                  Buscar
                </Button>
              </form>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="text-ink-muted">Mais buscados:</span>
                {["Vacinas", "ESF mais próxima", "Farmácia básica", "Cartão SUS"].map((t) => (
                  <button
                    key={t}
                    className="rounded-full px-3 py-1 text-ink-foreground ring-1 ring-ink-foreground/20 transition-colors hover:bg-ink-foreground/10"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Foto do teatro: base apoiada na borda da seção, topo dissolvendo no fundo */}
            <figure className="relative m-0 animate-rise [animation-delay:150ms] lg:mr-[min(0px,calc(38rem-50vw))]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[2rem] shadow-lift ring-1 ring-ink-foreground/15 lg:aspect-auto lg:h-full">
                <img
                  src={theaterAsset.url}
                  alt="Fachada do Theatro Prezewodowski, em Itaqui"
                  width={1920}
                  height={1280}
                  className="absolute inset-0 size-full object-cover object-[center_26%]"
                />
                <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-ink via-ink/55 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
                <figcaption className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-foreground/90 ring-1 ring-ink-foreground/20 backdrop-blur-sm lg:right-6 lg:top-6">
                  <Landmark className="size-3.5 text-amber" />
                  Theatro Prezewodowski
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* Prateleira de destaques: barra única que apoia a foto e emenda o topo na página */}
        <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-5 lg:mr-[min(0px,calc(38rem-50vw))] lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-lift sm:grid-cols-3">
            {SHELF.map((s) => {
              const t = TONE[s.tone];
              return (
                <div key={s.label} className="flex items-center gap-4 bg-card p-5">
                  <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${t.soft} ${t.text}`}>
                    <s.icon className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-muted-foreground">{s.label}</p>
                    <p className="mt-1 text-sm font-bold leading-snug">{s.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ACESSOS RÁPIDOS */}
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-teal">Acessos rápidos</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">O que você precisa hoje?</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Serviços e informações de saúde em um só lugar.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {QUICK.map((q) => {
              const t = TONE[q.tone];
              return (
                <Link
                  key={q.to}
                  to={q.to}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className={`absolute inset-x-0 top-0 h-1.5 ${t.bar}`} />
                  <span className={`grid size-14 place-items-center rounded-2xl ${t.soft} ${t.text} transition-transform group-hover:scale-110`}>
                    <q.icon className="size-7" />
                  </span>
                  <h3 className="mt-6 text-base font-bold leading-snug">{q.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{q.desc}</p>
                  <span className={`mt-6 inline-flex items-center gap-1 text-sm font-bold ${t.text}`}>
                    Acessar <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SOBRE + NOTÍCIAS */}
        <section className="bg-surface">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.3fr] lg:px-8">
            <div>
              <span className="grid size-14 place-items-center rounded-2xl bg-coral text-coral-foreground shadow-coral">
                <HeartPulse className="size-7" />
              </span>
              <p className="eyebrow mt-6 text-coral">Portal de Saúde</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Cuidar da sua saúde também é cuidar do futuro.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Este portal foi criado para facilitar o acesso à informação e aos serviços de
                saúde de Itaqui.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { n: "12", l: "Unidades", c: "text-teal" },
                  { n: "24h", l: "Pronto-atendimento", c: "text-coral" },
                  { n: "8", l: "ESFs", c: "text-sky" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-card p-4 shadow-soft">
                    <p className={`font-display text-2xl font-extrabold ${s.c}`}>{s.n}</p>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link to="/informacoes">
                    Sobre o portal <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/unidades">Conheça as unidades</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="eyebrow text-sky">Fique por dentro</p>
                  <h2 className="mt-2 text-2xl font-bold">Notícias principais</h2>
                </div>
                <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-bold text-foreground hover:text-coral">
                  Ver todas <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                {NEWS.map((n) => {
                  const t = TONE[n.tone];
                  return (
                    <article
                      key={n.title}
                      className="group flex gap-5 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:shadow-lift"
                    >
                      <span className={`grid size-20 shrink-0 place-items-center rounded-2xl ${t.solid}`}>
                        <n.icon className="size-8" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                          <span className={`rounded-full px-2.5 py-0.5 ${t.soft} ${t.text}`}>{n.tag}</span>
                          <span className="text-muted-foreground">{n.date}</span>
                        </div>
                        <h3 className="mt-2 text-lg font-bold leading-snug group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                          {n.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
