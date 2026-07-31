import Image from "next/image";

export function ProductDetailsGallery({
  items,
}: {
  items: { image: string; caption: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Product Details
      </p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {items.map((item, i) => (
          <div key={i}>
            <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs leading-snug text-neutral-500">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
