"use client";

import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackText?: string;
  fallbackClassName?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fallbackText,
  fallbackClassName,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!hasError) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        onError={() => setHasError(true)}
        {...props}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "absolute inset-0 flex items-center justify-center p-6 text-center",
        "bg-[radial-gradient(circle_at_20%_10%,rgba(204,152,50,0.28),transparent_45%),linear-gradient(135deg,rgba(24,15,10,0.96),rgba(42,26,18,0.9))]",
        fallbackClassName
      )}
    >
      <div className="rounded-xl border border-white/20 bg-black/35 px-4 py-3 text-white backdrop-blur-sm">
        <ImageOff className="mx-auto mb-2 h-5 w-5 text-secondary" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/90">
          Image unavailable
        </p>
        <p className="mt-1 text-sm text-white/75">{fallbackText ?? alt}</p>
      </div>
    </div>
  );
}
