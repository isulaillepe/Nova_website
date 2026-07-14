"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Nova transformed our deployment pipeline. What used to take 45 minutes now takes under 3 seconds. The developer experience is unmatched.",
    author: "Sarah Chen",
    role: "VP Engineering at Vercel",
    avatar: "SC",
    company: "Vercel",
    rating: 5,
  },
  {
    quote: "The edge functions are a game-changer. We moved our entire auth layer to the edge and saw a 60% reduction in latency globally.",
    author: "Marcus Johnson",
    role: "CTO at Linear",
    avatar: "MJ",
    company: "Linear",
    rating: 5,
  },
  {
    quote: "Best database experience I've had in 15 years. Multi-region replication just works. No more late-night paging for failovers.",
    author: "Priya Patel",
    role: "Staff Engineer at Notion",
    avatar: "PP",
    company: "Notion",
    rating: 5,
  },
  {
    quote: "Preview deployments changed how our team works. Every PR gets a live URL instantly. Code reviews are now so much faster.",
    author: "Alex Rivera",
    role: "Engineering Lead at Figma",
    avatar: "AR",
    company: "Figma",
    rating: 5,
  },
  {
    quote: "The CLI and SDKs are best-in-class. Type-safe from database to frontend. Our onboarding time for new devs dropped from days to hours.",
    author: "Emma Wilson",
    role: "Tech Lead at Stripe",
    avatar: "EW",
    company: "Stripe",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  React.useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative min-h-screen min-w-screen w-screen snap-center flex flex-col items-center justify-center py-20 sm:py-28 lg:py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by innovators
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Loved by the world&apos;s{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              best engineering teams
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            See what developers and companies are saying about their experience with Nova.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="flex w-full shrink-0 px-4"
                  style={{ width: `${100 / testimonials.length * 100}%`, maxWidth: "100%" }}
                >
                  <div className="w-full max-w-xl mx-auto">
                    <div className="mb-6 flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-amber-400 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-12 w-12 text-violet-600/30" aria-hidden="true" />
                      <blockquote className="relative mb-6 text-lg leading-relaxed text-slate-200">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-medium">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-white">{testimonial.author}</p>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between z-10 px-4 pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="pointer-events-auto bg-white/5 backdrop-blur-sm hover:bg-white/10"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-slate-300" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="pointer-events-auto bg-white/5 backdrop-blur-sm hover:bg-white/10"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-slate-300" />
            </Button>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-violet-500"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500">
          {["Vercel", "Linear", "Notion", "Figma", "Stripe", "OpenAI", "Anthropic"].map((company) => (
            <span
              key={company}
              className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-slate-300"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}