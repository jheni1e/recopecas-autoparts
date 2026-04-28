import { ExternalLink, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  url: string;
  freeShipping?: boolean;
};

const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

const ProductCard = ({ product }: { product: Product }) => {
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth duration-500 group-hover:scale-110"
        />
        {discount > 0 && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-destructive px-2 py-1 text-xs font-bold text-destructive-foreground shadow-card">
            <Tag className="h-3 w-3" />
            -{discount}%
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-md bg-background/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-medium leading-snug text-foreground transition-smooth group-hover:text-primary">
          {product.title}
        </h3>

        <div className="mt-3 flex items-baseline gap-2">
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{formatBRL(product.originalPrice)}</span>
          )}
          <span className="text-2xl font-bold tracking-tight text-foreground">{formatBRL(product.price)}</span>
        </div>

        {product.freeShipping && (
          <span className="mt-1 text-xs font-semibold text-emerald-600">Frete grátis</span>
        )}

        <Button
          asChild
          className="mt-4 h-10 w-full bg-gradient-accent font-semibold hover:bg-primary-hover"
        >
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            Ver no Mercado Livre
            <ExternalLink className="ml-1.5 h-4 w-4" />
          </a>
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
