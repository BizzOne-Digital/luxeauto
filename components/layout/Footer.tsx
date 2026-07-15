import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Image
              src="/logos/logo-on-dark.png"
              alt="Luxe Auto Accessories"
              width={220}
              height={81}
              className="mb-6 h-10 w-auto"
            />
            <p className="mb-6 max-w-sm leading-relaxed text-neutral-400">
              Premium automotive accessories and professional installation.
              Transform your car with quality products and expert craftsmanship.
            </p>
            <p className="text-sm leading-relaxed text-neutral-500">
              {SITE.address}
              <br />
              {SITE.phone}
              <br />
              {SITE.email}
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Shop
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm text-neutral-400 transition-colors hover:text-red-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-red-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Support
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-red-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8">
          <p className="text-sm text-neutral-500">
            © 2026 {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
