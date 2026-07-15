"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SplineViewer } from "@/components/ui/SplineViewer";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-between py-24 px-4 text-center bg-[var(--nova-bg)]">
      {/* Spline 3D Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <SplineViewer
          url="https://prod.spline.design/O74uoGwxZnGWovBa/scene.splinecode"
          className="w-full h-full max-w-[1200px] max-h-[600px]"
        />
      </div>

      {/* Immersive Brand Blue Ambient Aura Backing */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,53,153,0.09)_0%,transparent_65%)] pointer-events-none" />

      <div className="mt-20 space-y-6 z-10 animate-apple-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--nova-primary)]/10 rounded-full border border-[var(--nova-primary)]/20 text-white text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="text-[var(--nova-secondary)]" size={12} />
          Organized by AIESEC in University of Sri Jayewardenepura
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter apple-text-gradient leading-none">
          Innovation Meets Opportunity
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          A dynamic, tech-based competition designed for school and university students across Sri Lanka. Connecting passionate young minds with forward-thinking organizations.
        </p>

        {/* Structural Statistics Grid */}
        <div className="flex flex-wrap justify-center gap-4 pt-6 max-w-xl mx-auto">
          <div className="bg-[var(--nova-card)] border border-white/5 rounded-2xl px-6 py-3 min-w-[145px]">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">Grand Prize</span>
            <span className="text-lg font-bold text-[var(--nova-secondary)]">LKR 75,000</span>
          </div>
          <div className="bg-[var(--nova-card)] border border-white/5 rounded-2xl px-6 py-3 min-w-[145px]">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">Target Cohorts</span>
            <span className="text-lg font-bold text-white">School & Uni</span>
          </div>
          <div className="bg-[var(--nova-card)] border border-white/5 rounded-2xl px-6 py-3 min-w-[145px]">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-0.5">Structure</span>
            <span className="text-lg font-bold text-white">2 Phases</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center z-10 w-full max-w-md px-6 mb-8">
        <Link className="apple-btn-accent w-full text-slate-950 font-bold" href="/register">
          Register Now
        </Link>
        <a href="#timeline" className="apple-btn-outline w-full flex items-center justify-center gap-2 group">
          Learn More <ArrowRight className="group-hover:text-[var(--nova-secondary)] group-hover:translate-x-0.5 transition-all" size={16} />
        </a>
      </div>
    </section>
  );
}