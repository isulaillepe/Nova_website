import Hero from "@/components/hero/Hero";
import Stats from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}