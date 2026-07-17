import Link from "next/link";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-10 border-b border-neutral-800 bg-neutral-950 pt-24 md:pt-28"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 text-sm md:px-12 lg:px-20">
        <ol className="flex flex-wrap items-center gap-2 text-neutral-400">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-neutral-600">/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-red-500"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
