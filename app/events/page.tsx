import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventCard } from "@/components/events/EventCard";

const domesticEvents = [
    {
        title: "Cultural Mahotsav 2024",
        date: "Jan 15, 2024",
        location: "Jaipur, Rajasthan",
        description: "Performance at the grand opening of the Jaipur Cultural Mahotsav, featuring a 50-member troupe.",
        imageSrc: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop",
    },
    {
        title: "Corporate Gala Dinner",
        date: "Dec 10, 2023",
        location: "Mumbai, Maharashtra",
        description: "Exclusive entertainment for a multinational corporation's annual gala, blending classical and fusion styles.",
        imageSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Wedding Sangeet",
        date: "Nov 22, 2023",
        location: "Udaipur, Rajasthan",
        description: "Choreography and performance for a royal wedding at the City Palace.",
        imageSrc: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    },
];

const internationalEvents = [
    {
        title: "International Folk Festival",
        date: "Aug 12, 2023",
        location: "Madrid, Spain",
        description: "Represented India at the prestigious International Folk Festival, showcasing diverse regional dances.",
        imageSrc: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1910&auto=format&fit=crop",
    },
    {
        title: "World Cultural Summit",
        date: "May 05, 2023",
        location: "Dubai, UAE",
        description: "A mesmerizing performance for dignitaries from around the world celebrating cultural unity.",
        imageSrc: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
    },
];

export default function EventsPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Portfolio"
        title="A Legacy of Performances Across Continents"
        description="From destination weddings to global cultural summits, these highlights capture the scale and artistic diversity of our productions."
      />

      <Section>
        <Container>
          <FadeIn className="mb-7">
            <h2 className="text-3xl font-semibold text-secondary sm:text-4xl">
              International Highlights
            </h2>
          </FadeIn>
          <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {internationalEvents.map((event) => (
              <StaggerItem key={event.title}>
                <EventCard {...event} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border/65 bg-surface/70">
        <Container>
          <FadeIn className="mb-7">
            <h2 className="text-3xl font-semibold text-secondary sm:text-4xl">
              Domestic Highlights
            </h2>
          </FadeIn>
          <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {domesticEvents.map((event) => (
              <StaggerItem key={event.title}>
                <EventCard {...event} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
