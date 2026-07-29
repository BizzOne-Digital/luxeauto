import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export type ProductCardData = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  image: string;
  detailHref?: string;
};

export function ProductCard({ product }: { product: ProductCardData }) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {product.badge && (
          <div className="absolute left-4 top-4">
            <Badge tone="red">{product.badge}</Badge>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <p className="mb-2 text-xs uppercase tracking-widest text-neutral-400">
          {product.category}
        </p>
        <h3 className="mb-3 font-heading text-lg font-semibold leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-red-500">
            ${product.price}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-neutral-400 line-through">
              ${product.compareAtPrice}
            </span>
          )}
        </div>
      </div>
    </>
  );

  const className =
    "group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover";

  if (product.detailHref) {
    return (
      <Link href={product.detailHref} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
