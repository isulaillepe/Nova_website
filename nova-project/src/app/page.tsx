import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Partners } from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { HorizontalScrollContainer } from "@/components/HorizontalScrollContainer";

export default function Home() {
  return (
    <HorizontalScrollContainer>
      <Hero />
      <Stats />
      <Features />
      <About />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </HorizontalScrollContainer>
  );
}