import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function FounderPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Leadership"
        title="Meet The Visionary Behind RP Musical"
        description="Rekha Parihar transformed a regional dance initiative into a globally recognized performance collective."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <FadeIn>
              <div className="glass-panel mx-auto max-w-sm p-3 lg:sticky lg:top-28">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop"
                    alt="Sample female founder portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <Stagger className="space-y-5">
              <StaggerItem>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/85">
                  Rekha Parihar
                </p>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                  Founder, Artistic Director & Choreographer
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Cultural storyteller, choreographer, and production designer.
                </p>
              </StaggerItem>

              <StaggerItem className="glass-panel rounded-2xl p-6">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Rekha Parihar founded RP Musical with one clear vision: protect
                  the soul of Indian dance while presenting it with modern stage
                  design and global production quality.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Trained in Kathak and rooted in folk traditions, she choreographs
                  performances that blend storytelling, live rhythm, and strong
                  visual transitions for weddings, festivals, and corporate shows.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  She now leads and mentors 50+ artists, ensuring every performance
                  feels culturally authentic, emotionally engaging, and audience-first.
                </p>
              </StaggerItem>

              <StaggerItem className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Experience", value: "20+ Years" },
                  { label: "Artists Mentored", value: "50+" },
                  { label: "Countries", value: "10+" },
                ].map((item) => (
                  <div key={item.label} className="glass-panel rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-secondary">{item.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </StaggerItem>

              <StaggerItem className="glass-panel rounded-2xl p-6">
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  Awards & Recognition
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground sm:text-base">
                  <li>National Culture Fellowship (2015)</li>
                  <li>Nritya Ratna by State Cultural Academy (2018)</li>
                  <li>
                    Best Choreography, International Folk Festival, Spain (2022)
                  </li>
                </ul>
              </StaggerItem>
            </Stagger>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
