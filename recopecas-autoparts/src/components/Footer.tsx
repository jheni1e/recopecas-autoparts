import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gradient-industrial text-industrial-foreground">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-accent" />

      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-industrial-foreground/65">
              Negócio familiar especializado em peças automotivas de qualidade. Vendas seguras pelo Mercado Livre.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 transition-smooth hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-industrial-foreground/65">
              <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 text-primary" /> (11) 99999-0000</li>
              <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Curitiba · PR — Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-industrial-foreground/50 md:flex-row">
          <p>© {new Date().getFullYear()} Recopeças. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
