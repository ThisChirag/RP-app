import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1974&auto=format&fit=crop",
    alt: "Classical dance performance close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1974&auto=format&fit=crop",
    alt: "Fusion dance group in motion",
  },
  {
    src: "https://images.unsplash.com/photo-1621255554157-b45d0706596e?q=80&w=1974&auto=format&fit=crop",
    alt: "Traditional folk dance costume showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop",
    alt: "Concert crowd and stage lights",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
    alt: "Live stage lighting and performers",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding celebration dance moment",
  },
  {
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop",
    alt: "Dance troupe in colorful attire",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    alt: "Large auditorium with performance",
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    alt: "Bride and groom performance sequence",
  },
];

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <PageHeader
        eyebrow="Visual Archive"
        title="Moments That Capture Our Stage Energy"
        description="A curated gallery from our live performances, destination celebrations, and global cultural showcases."
      />

      <Section>
        <Container>
          <Stagger className="grid auto-rows-[190px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <StaggerItem
                key={item.src}
                className={cn(index % 5 === 0 ? "sm:row-span-2" : "row-span-1")}
              >
                <div className="glass-panel group h-full overflow-hidden rounded-2xl p-2">
                  <div className="relative h-full min-h-[170px] overflow-hidden rounded-xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
