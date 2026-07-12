"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const stats = [
  { value: "50K+", label: "Active Developers" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "200+", label: "Integrations" },
  { value: "24/7", label: "Support Team" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-600/20 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-600/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-violet-600/10 to-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              <span>Nova v3.0 Released</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-300">
              <Zap className="h-3 w-3" aria-hidden="true" />
              <span>10x Faster</span>
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              Build the Future
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              with Nova
            </span>
          </h1>

          <p className="mb-10 max-w-3xl mx-auto text-lg text-slate-300 sm:text-xl">
            The complete platform for modern application development. Deploy, scale, and
            manage your applications with confidence on infrastructure trusted by
            innovative teams worldwide.
          </p>

          <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="xl"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-600 before:to-violet-600 before:opacity-0 before:transition-opacity group-hover:before:opacity-100"
              asChild
            >
              <a href="#get-started">
                <span className="relative flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 px-8 py-3 text-base font-semibold"
              asChild
            >
              <a href="#demo">Watch Demo</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <div className="font-bold text-2xl text-white sm:text-3xl">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-20">
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl">
            <div className="rounded-lg bg-slate-950/80 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-xs text-slate-500 font-mono">
                  dashboard.nova.app
                </div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-4 text-slate-300">
                  <span className="text-violet-400">$</span>
                  <span className="text-emerald-400">nova deploy</span>
                  <span className="text-cyan-400">--prod</span>
                  <span className="text-amber-400">--region</span>
                  <span className="text-slate-400">us-east-1</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-slate-400 border-t border-white/10 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-white">2.3s</div>
                    <div className="text-xs">Deploy Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.99%</div>
                    <div className="text-xs">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">0ms</div>
                    <div className="text-xs">Cold Start</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 opacity-20 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-16 w-16 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 opacity-20 blur-2xl" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}