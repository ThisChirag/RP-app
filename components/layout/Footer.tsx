import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/80 bg-surface/70">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" />
      <Container className="relative">
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-serif text-3xl font-semibold text-primary">
                RP Musical
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Rhythm. Culture. Celebration.
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A premium musical and dance group preserving Indian art traditions
              through immersive live performances for weddings, festivals, and
              global cultural events.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/contact">Plan an Event</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/gallery">Watch Highlights</Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/80">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-primary">
                  Meet the Founder
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/80">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-secondary" />
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-secondary" />
                <a href="mailto:info@rpmusical.com" className="hover:text-primary">
                  info@rpmusical.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/65 text-muted-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/65 text-muted-foreground hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/70 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RP Musical and Dance Group.</p>
          <p>Crafted for unforgettable stage experiences.</p>
        </div>
      </Container>
    </footer>
  );
}
