import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Body } from "@/components/ui/Heading";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" className="fill-red-500/10" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="#DB0000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductInfo({
  category,
  name,
  badge,
  description,
  features,
}: {
  category: string;
  name: string;
  badge?: string;
  description: string;
  features: string[];
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        {category}
      </p>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="font-heading text-3xl font-bold leading-tight md:text-4xl">
          {name}
        </h1>
        {badge && <Badge tone="red">{badge}</Badge>}
      </div>

      <Body muted>{description}</Body>

      <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <CheckIcon />
            <span className="text-neutral-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button href="/contact" variant="primary" className="w-full sm:w-auto">
        Book Consultation
      </Button>
    </div>
  );
}
