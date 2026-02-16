import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import Link from "next/link";

const services = [
    {
        title: "Classical Dance",
        description: "Experience the grace and discipline of Kathak, Bharatanatyam, and Odissi.",
        imageSrc: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974&auto=format&fit=crop",
        href: "/services",
    },
    {
        title: "Folk Dance",
        description: "Vibrant and energetic folk performances from Rajasthan, Gujarat, and Punjab.",
        imageSrc: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974&auto=format&fit=crop",
        href: "/services",
    },
    {
        title: "Bollywood Fusion",
        description: "High-energy Bollywood dance numbers that get the audience moving.",
        imageSrc: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1974&auto=format&fit=crop",
        href: "/services",
    },
];

export function ServicesPreview() {
  return (
    <Section className="relative border-y border-border/65 bg-surface/70">
      <Container>
        <FadeIn className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/85">
              Signature Acts
            </p>
            <h2 className="mt-2 balanced-text text-3xl font-semibold sm:text-4xl">
              Curated Performances for
              <span className="block display-script text-primary">
                Every Celebration
              </span>
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </FadeIn>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
