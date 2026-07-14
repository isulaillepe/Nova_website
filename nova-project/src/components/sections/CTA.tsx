"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Users, Trophy, Calendar } from "lucide-react";

const benefits = [
  { icon: Trophy, text: "LKR 255,000 Prize Pool" },
  { icon: Users, text: "School & University Tracks" },
  { icon: Calendar, text: "2-Phase Competition" },
  { icon: Sparkles, text: "Industry Mentorship" },
];

export function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-600/15 to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-indigo-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-600/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            Registration Open
          </span>
        </div>

        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Join Project Nova Today
        </h2>

        <p className="mb-10 mx-auto max-w-2xl text-lg text-slate-300">
          A dynamic tech-based event designed for school and university students, creating a platform
          where innovation meets opportunity. Organized by AIESEC in University of Sri Jayewardenepura.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="xl" variant="gradient" className="group w-full sm:w-auto gap-2" asChild>
            <a href="/register">
              <span>Register Now</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="xl" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10" asChild>
            <a href="#timeline">Learn More</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">No registration fee</span>
          <span className="flex h-px w-8 bg-white/10" />
          <span className="flex items-center gap-1.5">Open to all students</span>
          <span className="flex h-px w-8 bg-white/10" />
          <span className="flex items-center gap-1.5">AIESEC Certified</span>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.text} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-violet-400">
                <benefit.icon className="h-4 w-4" />
              </span>
              {benefit.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}