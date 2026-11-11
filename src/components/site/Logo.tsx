import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid size-10 place-items-center rounded-xl bg-teal text-ink-foreground shadow-soft transition-transform group-hover:rotate-90">
        <Plus className="size-6" strokeWidth={2.75} />
        <span className="absolute -right-1 -top-1 size-3 rounded-full bg-coral ring-2 ring-background" />
      </span>
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
