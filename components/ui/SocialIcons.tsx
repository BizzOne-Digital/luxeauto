import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M14.5 3v10.8a2.9 2.9 0 1 1-2.4-2.86V8.4a5.5 5.5 0 1 0 4.9 5.47V9.9a6.6 6.6 0 0 0 4 1.35V8.7a4 4 0 0 1-2.5-1.02A4.05 4.05 0 0 1 17.1 4.6V3h-2.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M14.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.5-1.46h1.6V4.46c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.9 1.41-3.9 4V10.5H9v3h2.4V21h3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * WhatsApp is intentionally left out pending client confirmation of the
 * correct link. Once confirmed, add the number/link to SOCIAL_LINKS in
 * lib/constants.ts and slot a 4th <SocialLink> in here, e.g.:
 *
 * <SocialLink href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
 *   <WhatsAppIcon />
 * </SocialLink>
 */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:border-red-500 hover:text-red-500"
    >
      {children}
    </a>
  );
}

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <SocialLink href={SOCIAL_LINKS.instagram} label="Instagram">
        <InstagramIcon />
      </SocialLink>
      <SocialLink href={SOCIAL_LINKS.tiktok} label="TikTok">
        <TikTokIcon />
      </SocialLink>
      <SocialLink href={SOCIAL_LINKS.facebook} label="Facebook">
        <FacebookIcon />
      </SocialLink>
      {/* WhatsApp placeholder — pending confirmed link, see comment above SocialLink */}
    </div>
  );
}
