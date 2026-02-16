import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";

interface PageHeaderProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <section className="page-hero">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-35" />
      <Container className="relative">
        <FadeIn className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary/85">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="balanced-text text-4xl font-semibold sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="balanced-text mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
