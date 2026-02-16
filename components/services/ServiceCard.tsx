import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
    className?: string;
}

export function ServiceCard({
  title,
  description,
  imageSrc,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group glass-panel block overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-[16/11] overflow-hidden rounded-t-2xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
          Signature
        </div>
      </div>
      <div className="space-y-3 px-5 pb-5 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-card/85 text-muted-foreground transition-colors group-hover:text-primary">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}
