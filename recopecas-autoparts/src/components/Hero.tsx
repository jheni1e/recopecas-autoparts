import { ArrowRight, ShieldCheck, Truck, Star } from "lucide-react";
import heroImage from "@/assets/car.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-industrial text-industrial-foreground">
      <img
        src={heroImage}
        alt="Garagem profissional com mecânico trabalhando em motor automotivo"
        width={1920}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 texture-industrial" />

      <div className="container relative z-10 flex min-h-[560px] flex-col justify-center py-20 lg:py-28 ml-10">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Loja oficial · Mercado Livre
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            Peças automotivas com{" "}
            <span className="text-primary">qualidade</span> e{" "}
            <span className="relative">
              confiança
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                <path d="M0 3 Q50 0 100 3 T200 3" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-industrial-foreground/75 md:text-xl">
            Encontre as melhores peças para seu veículo. Mais de 15 anos vendendo com garantia e segurança.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-gradient-accent px-7 text-base font-semibold shadow-elevated hover:bg-primary-hover">
              <a href="https://www.mercadolivre.com.br/pagina/lr20240610114538">
                Ver produtos
                <ArrowRight className="ml-1 h-5 w-5 transition-smooth group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              { icon: ShieldCheck, label: "Garantia", sub: "em todas as peças" },
              { icon: Truck, label: "Envio rápido", sub: "todo o Brasil" },
              { icon: Star, label: "Milhares de", sub: "clientes satisfeitos" },
            ].map((b) => (
              <div key={b.label} className="flex items-start gap-2.5">
                <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="leading-tight">
                  <div className="text-sm font-bold">{b.label}</div>
                  <div className="text-xs text-industrial-foreground/60">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
