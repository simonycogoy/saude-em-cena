import { Link } from "@tanstack/react-router";
import { LogIn, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "./nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-teal-soft data-[status=active]:text-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="coral" className="hidden sm:inline-flex">
            <Link to="/acesso">
              <LogIn /> Acessar
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="font-display">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: true }}
                    className="rounded-xl px-4 py-3 font-semibold text-foreground hover:bg-muted data-[status=active]:bg-teal-soft data-[status=active]:text-teal"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="coral" className="mt-4">
                  <Link to="/acesso">
                    <LogIn /> Acessar
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
