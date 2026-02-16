import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-card/85 p-1.5 shadow-[0_10px_24px_-20px_rgb(var(--shadow-color)/0.95)]",
        className
      )}
      aria-hidden="true"
    >
      <Image
        src="/brand/rp-logo-primary.svg"
        alt=""
        fill
        priority={priority}
        sizes="44px"
        className="brand-logo-light pointer-events-none select-none object-contain"
      />
      <Image
        src="/brand/rp-logo-secondary.svg"
        alt=""
        fill
        sizes="44px"
        className="brand-logo-dark pointer-events-none select-none object-contain"
      />
    </span>
  );
}
