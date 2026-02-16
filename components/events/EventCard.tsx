import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    description: string;
    imageSrc: string;
    className?: string;
}

export function EventCard({
  title,
  date,
  location,
  description,
  imageSrc,
  className,
}: EventCardProps) {
  return (
    <article
      className={cn(
        "glass-panel group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 balanced-text font-serif text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <div className="mb-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}
