import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/services/ServiceCard";

const services = [
    {
        title: "Classical Dance",
        description: "Our artists are trained in classical forms like Kathak and Bharatanatyam, preserving the purity and discipline of these ancient arts.",
        imageSrc: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974&auto=format&fit=crop",
        href: "/contact",
    },
    {
        title: "Folk Dance",
        description: "We bring the vibrant colors of Indian villages to the stage with authentic costumes and energetic performances of Garba, Bhangra, and Ghoomar.",
        imageSrc: "https://images.unsplash.com/photo-1621255554157-b45d0706596e?q=80&w=1974&auto=format&fit=crop",
        href: "/contact",
    },
    {
        title: "Bollywood & Fusion",
        description: "A perfect blend of contemporary beats and traditional moves, our Bollywood acts are high-energy crowd pleasers.",
        imageSrc: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1974&auto=format&fit=crop",
        href: "/contact",
    },
    {
        title: "Live Musical Band",
        description: "Our ensemble of talented musicians creates magic with sitar, tabla, flute, and vocals, setting the perfect mood for any event.",
        imageSrc: "https://images.unsplash.com/photo-1514119910136-352ca846b12e?q=80&w=2070&auto=format&fit=crop",
        href: "/contact",
    },
    {
        title: "Wedding Choreography",
        description: "Make your special day unforgettable with customized dance performances for the bride, groom, and family.",
        imageSrc: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
        href: "/contact",
    },
    {
        title: "International Acts",
        description: "We also specialize in fusion performances that blend Indian styles with global dance forms for a unique experience.",
        imageSrc: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop",
        href: "/contact",
    },
];

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="What We Offer"
        title="Performance Services Tailored to Your Event"
        description="Select from classical, folk, Bollywood, live band, and custom choreography formats to create an unforgettable audience experience."
      />

      <Section>
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
