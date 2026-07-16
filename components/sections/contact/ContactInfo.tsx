import { SITE } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card md:p-8">
        <h3 className="mb-6 font-heading text-xl font-semibold">
          Contact Details
        </h3>
        <dl className="flex flex-col gap-5 text-sm">
          <div>
            <dt className="mb-1 text-xs uppercase tracking-widest text-neutral-400">
              Phone
            </dt>
            <dd>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="text-neutral-900 transition-colors hover:text-red-500"
              >
                {SITE.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-widest text-neutral-400">
              Email
            </dt>
            <dd>
              <a
                href={`mailto:${SITE.email}`}
                className="text-neutral-900 transition-colors hover:text-red-500"
              >
                {SITE.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-widest text-neutral-400">
              Address
            </dt>
            <dd className="leading-relaxed text-neutral-900">{SITE.address}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs uppercase tracking-widest text-neutral-400">
              Hours
            </dt>
            <dd className="leading-relaxed text-neutral-900">
              {SITE.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-neutral-500">{h.time}</span>
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-card">
        <iframe
          title="Luxe Auto Accessories location map"
          src="https://www.google.com/maps?q=Fairfield,NSW,Australia&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
