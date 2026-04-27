import { Search, Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      {/* Top strip */}
      <div className="bg-industrial text-industrial-foreground/90 text-xs">
        <div className="container flex h-8 items-center justify-between">
          <span className="font-medium">🔧 Frete grátis em peças selecionadas via Mercado Livre</span>
          <span className="hidden sm:inline text-industrial-foreground/60">Atendimento: Seg-Sáb · 8h às 18h</span>
        </div>
      </div>

      <div className="container flex h-20 items-center gap-6">
        <Logo />

        {/* Search */}
        <div className="relative hidden flex-1 max-w-xl md:block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar peças, marca ou modelo..."
            className="h-11 w-full rounded-full border border-border bg-secondary/60 pl-10 pr-4 text-sm outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/10"
          />
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 transition-smooth hover:text-primary after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:scale-x-0 after:bg-primary after:transition-smooth hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Button variant="default" size="sm" className="hidden md:inline-flex bg-gradient-accent hover:bg-primary-hover">
          <ShoppingBag className="mr-1.5 h-4 w-4" />
          Mercado Livre
        </Button>

        <button
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container space-y-1 py-4">
            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Buscar peças..."
                className="h-11 w-full rounded-full border border-border bg-secondary pl-10 pr-4 text-sm outline-none"
              />
            </div>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
