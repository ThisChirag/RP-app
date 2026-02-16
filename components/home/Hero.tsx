"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=2070&auto=format&fit=crop"
          alt="Folk dance performance on stage"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(10,7,4,0.82),rgba(49,24,29,0.62),rgba(27,17,9,0.78))]" />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0.45, scale: 0.95 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -left-16 top-16 -z-10 h-64 w-64 rounded-full bg-secondary/25 blur-3xl"
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0.35, scale: 1.1 }}
        animate={reduceMotion ? { opacity: 0.45 } : { opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
        className="pointer-events-none absolute -right-10 bottom-8 -z-10 h-72 w-72 rounded-full bg-primary/35 blur-3xl"
      />

      <Container className="relative z-10 py-24 text-center text-white">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto mb-6 w-fit rounded-full border border-white/35 bg-black/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em]"
        >
          Since 2008 • Global Cultural Performers
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mx-auto max-w-4xl balanced-text font-serif text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl"
        >
          The Stage Where Tradition Meets
          <span className="block display-script text-secondary">Modern Spectacle</span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: "easeOut", delay: 0.16 }}
          className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/20 bg-black/35 px-5 py-4 text-sm leading-relaxed text-neutral-100 backdrop-blur-md sm:px-7 sm:text-base"
        >
          From wedding sangeets to corporate showcases and global festivals, we
          design high-impact live music and dance productions that feel
          culturally rich, emotionally engaging, and visually unforgettable.
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/contact">Book Your Event</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/35 bg-white/8 text-white hover:bg-white hover:text-black"
          >
            <Link href="/gallery">View Performance Gallery</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
