import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://api.mercadolibre.com/sites/MLB/search?q=recopecas&limit=8",
          {
            headers: {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0",
            },
          }
        );

        const data = await res.json();
        console.log(data);

        const formatted: Product[] = data.results.map((item: any) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          originalPrice: item.original_price,
          category: item.category_id,
          image: item.thumbnail.replace("-I.jpg", "-O.jpg"),
          url: item.permalink,
          freeShipping: item.shipping?.free_shipping,
        }));

        setProducts(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="produtos" className="py-16 md:py-20">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 ml-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Mais vendidos
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase md:text-4xl">
              Produtos em destaque
            </h2>
            <p className="mt-2 text-muted-foreground">
              Selecionados por nossos especialistas em peças automotivas.
            </p>
          </div>
          <div className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Estoque atualizado em tempo real
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
