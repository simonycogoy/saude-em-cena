import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  FileText,
  HeartPulse,
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
import theater from "@/assets/theater-facade.jpg";

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

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-24">
            <div className="animate-rise">
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
                  placeholder="Buscar unidade, vacina ou serviço…"
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

            {/* Foto do teatro */}
            <div className="relative animate-rise [animation-delay:150ms]">
              <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-ink-foreground/15 shadow-lift">
                <img
                  src={theater}
                  alt="Fachada do teatro histórico de Itaqui"
                  width={1280}
                  height={1536}
                  className="aspect-[4/4.2] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-photo" />
                <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink-foreground/90">
                  Theatro Prezewodowski
                </p>
              </div>

              {/* Cartões flutuantes */}
              <div className="absolute -left-4 top-8 hidden w-60 rounded-2xl bg-card p-4 text-card-foreground shadow-lift sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-coral-soft text-coral">
                    <Syringe className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-coral">Campanha ativa</p>
                    <p className="text-sm font-bold">Vacina da gripe</p>
                  </div>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" /> 10 a 20 de abril
                </p>
              </div>

              <div className="absolute -bottom-6 right-4 hidden rounded-2xl bg-amber px-5 py-4 text-amber-foreground shadow-lift sm:block lg:-right-6">
                <p className="font-display text-3xl font-extrabold leading-none">12</p>
                <p className="mt-1 text-xs font-bold">unidades de saúde</p>
              </div>
            </div>
          </div>
        </section>

        {/* ACESSOS RÁPIDOS */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
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
