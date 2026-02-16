import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Our Story"
        title="A Cultural Ensemble Built on Discipline and Devotion"
        description="From intimate gatherings to international festivals, RP Musical and Dance Group has delivered emotionally resonant performances that honor Indian traditions."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <Stagger className="space-y-5">
              <StaggerItem>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Our Journey
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Founded in 2008, RP Musical and Dance Group began with a
                  simple ambition: present India&apos;s cultural rhythms on
                  contemporary stages with authenticity and artistic precision.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  What started as a small troupe has grown into a multidisciplinary
                  ensemble trusted by event curators, corporate brands, and
                  families across the world.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Founded", value: "2008" },
                    { label: "Artist Network", value: "50+" },
                    { label: "Shows Curated", value: "500+" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="glass-panel rounded-xl px-4 py-4 text-center"
                    >
                      <p className="text-xl font-bold text-secondary">{item.value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </Stagger>

            <FadeIn>
              <div className="glass-panel p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2070&auto=format&fit=crop"
                    alt="Dance troupe performing on stage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border/65 bg-surface/65">
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2">
            <StaggerItem className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="font-serif text-3xl font-semibold text-primary">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Preserve and promote Indian classical and folk art through
                performances that connect audiences across cultures.
              </p>
            </StaggerItem>
            <StaggerItem className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="font-serif text-3xl font-semibold text-primary">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Become a global cultural ambassador, bridging generations and
                geographies through high-caliber stage storytelling.
              </p>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
