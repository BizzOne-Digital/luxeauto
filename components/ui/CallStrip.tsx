import { Button } from "@/components/ui/Button";
import { PHONE_HREF, SITE } from "@/lib/constants";

// Slim mid-page CTA: "Call Now" + "Contact Us Today".
export function CallStrip({
  heading = "Have a question about this service?",
  subtext = "Talk to our team for honest advice and a clear quote.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-12 lg:px-20">
        <div>
          <p className="font-heading text-2xl font-semibold">{heading}</p>
          <p className="text-neutral-400">{subtext}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={PHONE_HREF} variant="primary">
            Call {SITE.phone}
          </Button>
          <Button href="/contact" variant="secondary" className="text-white">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
