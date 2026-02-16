import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function Intro() {
  return (
    <Section className="relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeIn className="order-2 lg:order-1">
            <div className="glass-panel p-3">
              <div className="relative aspect-square overflow-hidden rounded-2xl sm:aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1974&auto=format&fit=crop"
                  alt="Classical dance performance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>

          <Stagger className="order-1 space-y-6 lg:order-2">
            <StaggerItem>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/85">
                About The Ensemble
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="balanced-text text-3xl font-semibold sm:text-4xl lg:text-[2.8rem]">
                Preserving Cultural Identity Through
                <span className="block display-script text-primary">Performance Art</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                RP Musical and Dance Group is a curated ensemble of dancers,
                musicians, and choreographers dedicated to staging
                tradition-forward performances with cinematic production quality.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                From classical storytelling formats to high-energy fusion acts,
                every show is customized to your audience, venue scale, and event
                narrative.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-3">
                {[
                  { value: "500+", label: "Live Performances" },
                  { value: "10+", label: "Countries Hosted" },
                  { value: "50+", label: "Artists in Troupe" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-panel rounded-xl px-4 py-5 text-center"
                  >
                    <p className="text-2xl font-bold text-secondary sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
