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
      <div className="scrollbar-none flex gap-4 overflow-x-auto pb-1">
        {items.map((item, i) => (
          <div key={i} className="w-32 shrink-0">
            <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="128px"
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
