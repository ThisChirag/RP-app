import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AudioLines, Compass, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <Hero />
      <Intro />
      <ServicesPreview />
      <Section>
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/85">
              Why Clients Choose Us
            </p>
            <h2 className="mt-2 balanced-text text-3xl font-semibold sm:text-4xl">
              Trusted for detail, discipline,
              <span className="block display-script text-primary">and stage impact</span>
            </h2>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Custom Show Design",
                description:
                  "Every program is tailored to your event flow, audience, and venue scale.",
                icon: Compass,
              },
              {
                title: "Live + Choreographed",
                description:
                  "Blend live music and dance for a richer, more immersive audience experience.",
                icon: AudioLines,
              },
              {
                title: "Premium Production",
                description:
                  "Costumes, transitions, and stage presence are crafted to look world-class.",
                icon: Sparkles,
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <article className="glass-panel h-full rounded-2xl p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <FadeIn className="glass-panel rounded-3xl px-6 py-10 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/85">
              Let&apos;s Create Something Memorable
            </p>
            <h2 className="mx-auto mt-2 max-w-2xl balanced-text text-3xl font-semibold sm:text-4xl">
              Planning a wedding, festival, or corporate experience?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Share your event requirements and we&apos;ll curate a performance
              plan with style recommendations, format options, and timelines.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Request a Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events">See Past Events</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
