"use client";

import { Zap, Database, Globe, Users, CheckCircle, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "< 1ms",
    label: "Cold Start Latency",
    description: "Industry-leading edge function performance",
    trend: "+40% faster",
  },
  {
    icon: Globe,
    value: "35+",
    label: "Edge Locations",
    description: "Global points of presence worldwide",
    trend: "10 new in 2024",
  },
  {
    icon: Database,
    value: "99.99%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability guarantee",
    trend: "Zero downtime",
  },
  {
    icon: Users,
    value: "500K+",
    label: "Active Developers",
    description: "Trusted by teams worldwide",
    trend: "2x YoY growth",
  },
  {
    icon: TrendingUp,
    value: "10M+",
    label: "Daily Deployments",
    description: "Applications deployed globally",
    trend: "Growing rapidly",
  },
  {
    icon: Shield,
    value: "0",
    label: "Security Incidents",
    description: "Zero critical vulnerabilities in 2024",
    trend: "SOC 2 certified",
  },
];

const trustIndicators = [
  { label: "SOC 2 Type II", description: "Certified" },
  { label: "ISO 27001", description: "Compliant" },
  { label: "GDPR", description: "Ready" },
  { label: "HIPAA", description: "Available" },
  { label: "99.99%", description: "Uptime SLA" },
  { label: "24/7", description: "Support" },
];

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20 bg-slate-900/50 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
              <p className="text-xs text-slate-500">{stat.description}</p>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                <CheckCircle className="h-3 w-3" />
                <span>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-12">
          {trustIndicators.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1 text-center text-slate-400"
            >
              <div className="font-semibold text-white">{item.label}</div>
              <div className="text-sm">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}