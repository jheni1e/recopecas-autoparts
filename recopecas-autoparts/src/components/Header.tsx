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
          <span className="font-medium ml-2">Frete flexível em peças selecionadas.</span>
          <span className="hidden sm:inline text-industrial-foreground/60">Atendimento: Seg-Sex · 8h às 18h</span>
        </div>
      </div>

      <div className="container flex h-20 items-center gap-6 px-4 md:px-0">
        <Logo />

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

        <Button
          variant="default" size="sm" className="hidden md:inline-flex bg-gradient-accent hover:bg-primary-hover"
          onClick={() => window.open("https://www.mercadolivre.com.br/pagina/lr20240610114538", "_blank", "noopener,noreferrer")}>
          <ShoppingBag className="mr-1.5 h-4 w-4"/>
          Compre aqui
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
