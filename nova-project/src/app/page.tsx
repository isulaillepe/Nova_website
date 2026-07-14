import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Partners } from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen snap-x snap-mandatory overflow-x-auto scrollbar-hide">
      <Hero />
      <Stats />
      <Features />
      <About />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}