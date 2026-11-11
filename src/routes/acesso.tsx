import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, FileLock2, CalendarCheck, BellRing, LogIn, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "@/components/site/Logo";
import theater from "@/assets/theater-facade.jpg";

export const Route = createFileRoute("/acesso")({
  head: () => ({
    meta: [
      { title: "Acesso — Portal de Saúde de Itaqui" },
      {
        name: "description",
        content: "Entre no Portal de Saúde de Itaqui para acessar documentos, agendamentos e avisos.",
      },
      { property: "og:title", content: "Acesso — Portal de Saúde de Itaqui" },
      {
        property: "og:description",
        content: "Entre para acessar documentos privados, agendamentos e avisos de saúde.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcessoPage,
});

const BENEFITS = [
  { icon: FileLock2, title: "Documentos privados", text: "Consulte e baixe seus documentos.", cls: "bg-teal text-ink-foreground" },
  { icon: CalendarCheck, title: "Agendamentos", text: "Retirada de medicamentos e consultas.", cls: "bg-coral text-coral-foreground" },
  { icon: BellRing, title: "Avisos de campanhas", text: "Saiba primeiro sobre vacinações.", cls: "bg-amber text-amber-foreground" },
];

function AcessoPage() {
  const [profile, setProfile] = useState<"cidadao" | "profissional">("cidadao");
  const [showPass, setShowPass] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.info("Protótipo", { description: "O login será conectado em uma próxima etapa." });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      {/* Painel visual */}
      <aside className="relative hidden overflow-hidden bg-ink text-ink-foreground lg:block">
        <img
          src={theater}
          alt="Fachada do teatro histórico de Itaqui"
          width={1280}
          height={1536}
          className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo tone="light" />

          <div className="max-w-md animate-rise">
            <p className="eyebrow text-amber">Área do cidadão</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight">
              Sua saúde, <span className="text-teal">organizada</span> em um só acesso.
            </h1>
            <ul className="mt-10 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b.title} className="flex items-center gap-4 rounded-2xl bg-ink-foreground/5 p-3 ring-1 ring-ink-foreground/10 backdrop-blur">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${b.cls}`}>
                    <b.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{b.title}</p>
                    <p className="text-sm text-ink-muted">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-ink-muted">© 2026 Portal de Saúde de Itaqui · Protótipo</p>
        </div>
      </aside>

      {/* Formulário */}
      <main className="flex flex-col bg-background">
        <div className="flex items-center justify-between p-6 lg:justify-end">
          <div className="lg:hidden">
            <Logo />
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft /> Voltar ao início
            </Link>
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 pb-12">
          <div className="w-full max-w-md animate-rise">
            <h2 className="text-3xl font-bold">Entrar</h2>
            <p className="mt-2 text-muted-foreground">Acesse sua conta para continuar.</p>

            <div className="mt-8 grid grid-cols-2 rounded-full bg-muted p-1 text-sm font-semibold">
              {(
                [
                  { id: "cidadao", label: "Sou cidadão" },
                  { id: "profissional", label: "Profissional de saúde" },
                ] as const
              ).map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setProfile(o.id)}
                  aria-pressed={profile === o.id}
                  className="rounded-full px-4 py-2.5 text-muted-foreground transition-all aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-soft"
                >
                  {o.label}
                </button>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="mt-6 w-full"
              onClick={() => toast.info("Protótipo", { description: "Integração gov.br em uma próxima etapa." })}
            >
              <ShieldCheck className="text-sky" /> Entrar com gov.br
            </Button>

            <div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> ou <span className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="user" className="font-semibold">
                  {profile === "cidadao" ? "CPF ou Cartão SUS" : "Matrícula ou e-mail institucional"}
                </Label>
                <Input
                  id="user"
                  required
                  placeholder={profile === "cidadao" ? "000.000.000-00" : "nome@saude.itaqui.rs.gov.br"}
                  className="h-12 rounded-xl bg-card px-4"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="pass" className="font-semibold">Senha</Label>
                  <button type="button" className="text-sm font-semibold text-coral hover:underline">
                    Esqueci minha senha
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="pass"
                    type={showPass ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="h-12 rounded-xl bg-card px-4 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? "Ocultar senha" : "Mostrar senha"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {showPass ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Checkbox id="remember" /> Manter conectado neste dispositivo
              </label>

              <Button type="submit" variant="coral" size="lg" className="w-full">
                <LogIn /> Entrar
              </Button>
            </form>

            <div className="mt-8 rounded-2xl bg-teal-soft p-4 text-sm">
              <p className="font-semibold text-foreground">Ainda não tem acesso?</p>
              <p className="mt-1 text-muted-foreground">
                A criação de contas será liberada em breve.{" "}
                <button type="button" className="font-bold text-teal hover:underline">
                  Quero ser avisado
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
