"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Founder", href: "/founder" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/70 backdrop-blur-xl transition-all duration-300",
        isScrolled && "border-border/80 shadow-[0_10px_34px_-26px_rgb(var(--shadow-color)/0.9)]"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-3 py-3">
          <Link href="/" className="group inline-flex min-w-0 flex-col">
            <span className="truncate font-serif text-2xl font-semibold leading-none text-primary sm:text-3xl">
              RP Musical
            </span>
            <span className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              Dance & Live Performances
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/75 p-1.5 backdrop-blur lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground",
                  isActiveLink(item.href) && "bg-accent text-accent-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Book Now</Link>
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground lg:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-border/70 bg-background/95 lg:hidden"
          >
            <Container className="py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                      isActiveLink(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-accent/60"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/contact">Book Your Event</Link>
                </Button>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
