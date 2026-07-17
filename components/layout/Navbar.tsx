"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-300 md:h-24",
        scrolled || menuOpen
          ? "border-b border-neutral-800 bg-neutral-950"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-12 lg:px-8 xl:px-20">
        <Link href="/" className="flex shrink-0 items-center py-3">
          <Image
            src="/logos/logo-on-dark.png"
            alt="Luxe Auto Accessories"
            width={220}
            height={81}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-2 text-sm font-medium tracking-wide text-white/85 transition-colors hover:text-white",
                "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full",
                pathname === link.href && "text-white after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="whitespace-nowrap text-sm font-medium text-white/85 transition-colors hover:text-white"
          >
            {SITE.phone}
          </a>
          <Button
            href="/contact"
            variant="primary"
            className="whitespace-nowrap px-6 py-2.5"
          >
            Book Now
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-transform duration-300",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-opacity duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-transform duration-300",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-neutral-800 bg-neutral-950 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-lg font-medium text-white/90 transition-colors hover:text-red-500"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-4 border-t border-neutral-800 pt-6">
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-sm font-medium text-white/85"
                >
                  {SITE.phone}
                </a>
                <Button href="/contact" variant="primary" className="w-full">
                  Book Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
