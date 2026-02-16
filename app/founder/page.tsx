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
        description="Ravi Prakash (RP) transformed a regional dance initiative into a globally recognized performance collective."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <FadeIn>
              <div className="glass-panel mx-auto max-w-sm p-3 lg:sticky lg:top-28">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                    alt="Founder portrait"
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
                  Ravi Prakash (RP)
                </p>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                  Artistic Director & Choreographer
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  With over two decades of stage experience, Ravi Prakash built RP
                  Musical with a clear purpose: protect cultural authenticity while
                  presenting it in a contemporary, globally relatable format.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Trained in Kathak and deeply immersed in folk traditions, he is
                  known for combining narrative choreography, live rhythm, and
                  dramatic transitions that make every show immersive.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Today he mentors an ensemble of 50+ artists and continues to
                  direct performances across festivals, luxury weddings, and
                  international cultural forums.
                </p>
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
