import Hero from "@/components/hero/Hero";
import Stats from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import PastEvents from "@/components/sections/PastEvents";
import { Testimonials } from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <PastEvents />
      <Partners />
      <Testimonials />
      <Faq />
    </>
  );
}