import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const MOCK: Product[] = [
  {
    id: "1",
    title: "Capô Dianteiro - VW Gol G5/G6",
    price: 799.9,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
  {
    id: "2",
    title: "Paralama Dianteiro Direito - Honda Civic 2012-2016",
    price: 349.9,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
  {
    id: "3",
    title: "Porta Dianteira Esquerda - Fiat Palio 2010",
    price: 999.0,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1549921296-3c3c5c8b4b9b?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
  {
    id: "4",
    title: "Tampa Traseira Porta-Malas - Chevrolet Onix",
    price: 689.9,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
  {
    id: "5",
    title: "Parachoque Dianteiro - Ford Ka 2015-2018",
    price: 429.9,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
  {
    id: "6",
    title: "Parachoque Traseiro - Renault Sandero",
    price: 399.9,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
  {
    id: "7",
    title: "Grade Frontal - Toyota Corolla 2015",
    price: 259.9,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
  {
    id: "8",
    title: "Retrovisor Externo Direito - Hyundai HB20",
    price: 219.9,
    category: "Lataria",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
    url: "https://www.mercadolivre.com.br",
  },
];

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(MOCK);
      setLoading(false);
    }, 1000); // simula loading
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
        </div>

        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4 ml-10">
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
