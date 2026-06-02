import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Reviews } from "@/components/Reviews";
import { Locations } from "@/components/Locations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-aruza-bone">
      <Header />
      <Hero />
      <Process />
      <Services />
      <Why />
      <Reviews />
      <Locations />
      <CTA />
      <Footer />
    </main>
  );
}
