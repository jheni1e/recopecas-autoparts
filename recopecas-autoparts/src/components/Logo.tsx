import { Wrench } from "lucide-react";

const Logo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const text = variant === "dark" ? "text-foreground" : "text-white";
  const sub = variant === "dark" ? "text-muted-foreground" : "text-white/60";
  return (
    <a href="/" className="flex items-center gap-2.5 group" aria-label="Recopeças — início">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-md bg-gradient-accent shadow-card transition-smooth group-hover:scale-105">
        <Wrench className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-ml-yellow ring-2 ring-background" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold uppercase tracking-wide ${text}`}>
          Recopeças
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.2em] ${sub}`}>Desde 2005</span>
      </span>
    </a>
  );
};

export default Logo;
