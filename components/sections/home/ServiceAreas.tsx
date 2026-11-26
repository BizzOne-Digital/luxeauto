import { Section } from "@/components/ui/Section";
import { Eyebrow, H2, Body } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { PHONE_HREF, SERVICE_AREAS, SITE } from "@/lib/constants";

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ServiceAreas() {
  return (
    <Section bg="light-alt">
      <div className="mb-10 max-w-2xl md:mb-12">
        <Eyebrow>Service Areas</Eyebrow>
        <H2 className="mb-6">Areas We Serve in Ontario</H2>
        <Body muted className="mb-0">
          Based in Mississauga, we work with drivers across the Greater Toronto
          Area. If you&apos;re within driving distance of our shop, our team is
          ready to help.
        </Body>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-3">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area.city}
              className="flex flex-col items-center rounded-xl border border-neutral-200 bg-white px-3 py-5 text-center shadow-card"
            >
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500">
                <PinIcon />
              </span>
              <span className="font-semibold text-neutral-900">
                {area.city}
              </span>
              <span className="text-xs text-neutral-500">{area.note}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-card lg:aspect-auto lg:flex-1">
            <iframe
              title="Luxe Auto Accessories service area map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&z=9&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Button href={PHONE_HREF} variant="primary" className="w-full">
            Not sure if we cover you? Call {SITE.phone}
          </Button>
        </div>
      </div>
    </Section>
  );
}
