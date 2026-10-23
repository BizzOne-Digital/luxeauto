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
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-5">
        {items.map((item) => (
          <li
            key={item.image}
            className="w-[calc(33.333%-0.75rem)] max-w-[7.5rem] flex-none sm:w-[7.25rem] md:max-w-[8.25rem]"
          >
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
          </li>
        ))}
      </ul>
    </div>
  );
}
