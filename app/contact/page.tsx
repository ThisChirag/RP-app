import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Get In Touch"
        title="Plan Your Event Experience With Our Team"
        description="Share your event details and we’ll recommend suitable performance formats, artist lineup options, and production flow."
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Stagger className="space-y-4">
              <StaggerItem>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Let&apos;s Create Magic Together
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Whether you&apos;re planning a corporate gala, a wedding sangeet,
                  or a cultural festival, we&apos;ll design a production experience
                  that fits your audience and venue.
                </p>
              </StaggerItem>
              <StaggerItem className="space-y-3">
                {[
                  {
                    title: "Visit Us",
                    value: "123, Art Avenue, Andheri West, Mumbai 400053",
                    icon: MapPin,
                  },
                  {
                    title: "Email Us",
                    value: "info@rpmusical.com · bookings@rpmusical.com",
                    icon: Mail,
                  },
                  {
                    title: "Call Us",
                    value: "+91 98765 43210 · +91 12345 67890",
                    icon: Phone,
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="glass-panel flex items-start gap-3 rounded-2xl p-4"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </article>
                ))}
              </StaggerItem>
            </Stagger>

            <FadeIn>
              <div className="glass-panel rounded-3xl p-5 sm:p-8">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
