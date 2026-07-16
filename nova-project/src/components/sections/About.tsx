"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "Every decision starts with pushing boundaries. If it's not innovative, we don't pursue it.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Solutions should scale everywhere, instantly. No configuration required for worldwide reach.",
  },
  {
    icon: Shield,
    title: "Trust Built-in",
    description: "Security isn't a feature—it's the foundation. Zero-trust architecture from day one.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Open source at heart. We build in public and succeed when developers succeed.",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started with a vision to simplify cloud complexity" },
  { year: "2021", title: "Edge Functions GA", description: "Launched the first truly serverless edge compute platform" },
  { year: "2022", title: "Global Database", description: "Released distributed SQL with multi-region writes" },
  { year: "2023", title: "1M Developers", description: "Hit 1 million registered developers worldwide" },
  { year: "2024", title: "AI Platform", description: "Launched AI-powered development tools and insights" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-[var(--nova-bg)] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-[var(--nova-primary)]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--nova-primary)]/20 px-3 py-1 text-xs font-medium text-[var(--nova-primary)]">
                <Sparkles className="h-3 w-3" />
                About Nova
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Building the future of tech innovation
            </h2>
            <p className="mb-6 text-lg text-slate-300">
              Project Nova was founded in 2020 with a simple mission: make tech innovation accessible.
              Students should focus on building products, not managing infrastructure, configuring networks,
              or worrying about scale.
            </p>
            <p className="mb-8 text-lg text-slate-300">
              Today, we power over 500,000 students and some of the world&apos;s most innovative organizations.
              Our platform handles billions of requests daily across 35+ global edge locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--nova-primary)] to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(0,53,153,0.4)] hover:shadow-[0_0_40px_rgba(0,53,153,0.5)] transition-all"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#team"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Meet the Team
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nova-primary)]/20 to-indigo-600/20 mx-auto" />
                  <div className="space-y-3 text-center">
                    <div className="text-4xl font-bold text-white">99.99%</div>
                    <div className="text-slate-400">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 z-10 flex w-48 items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--nova-primary)]/20 text-[var(--nova-primary)]">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-white">Zero Config</div>
                <div className="text-xs text-slate-400">Deploy in seconds</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 z-10 flex w-48 items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/20 text-emerald-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-white">{"<"}1ms Cold Start</div>
                <div className="text-xs text-slate-400">Edge functions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Our Values</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center text-center gap-4 rounded-xl p-6 transition-all hover:bg-white/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-[var(--nova-primary)]">
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="font-semibold text-white">{value.title}</h4>
                <p className="text-sm text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--nova-primary)]/50 to-transparent -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--nova-primary)] text-white font-bold text-lg z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="font-mono font-bold text-[var(--nova-primary)]">{milestone.year}</div>
                      <h4 className="font-semibold text-white">{milestone.title}</h4>
                    </div>
                    <p className="text-slate-400 ml-14">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}