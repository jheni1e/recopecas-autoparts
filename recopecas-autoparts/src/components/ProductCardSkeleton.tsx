const ProductCardSkeleton = () => (
  <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
    <div className="aspect-square w-full bg-gradient-to-r from-secondary via-muted to-secondary bg-[length:400px_100%] animate-shimmer" />
    <div className="space-y-3 p-4">
      <div className="h-4 w-full rounded bg-gradient-to-r from-secondary via-muted to-secondary bg-[length:400px_100%] animate-shimmer" />
      <div className="h-4 w-2/3 rounded bg-gradient-to-r from-secondary via-muted to-secondary bg-[length:400px_100%] animate-shimmer" />
      <div className="h-7 w-1/2 rounded bg-gradient-to-r from-secondary via-muted to-secondary bg-[length:400px_100%] animate-shimmer" />
      <div className="h-10 w-full rounded bg-gradient-to-r from-secondary via-muted to-secondary bg-[length:400px_100%] animate-shimmer" />
    </div>
  </div>
);

export default ProductCardSkeleton;
