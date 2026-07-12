"use client";

import { ArrowRight, Check, Zap, Shield, Globe, Database, Code, Users, Lock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Perfect for hobby projects and learning",
    price: "$0",
    period: "/month",
    features: [
      "100GB bandwidth/month",
      "10GB storage",
      "1,000 edge function invocations",
      "Custom domains",
      "SSL certificates",
      "Community support",
    ],
    cta: "Start Free",
    variant: "outline",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing applications and teams",
    price: "$29",
    period: "/month",
    features: [
      "1TB bandwidth/month",
      "100GB storage",
      "1M edge function invocations",
      "Custom domains & wildcard SSL",
      "Edge caching & image optimization",
      "Analytics & monitoring",
      "Email support",
      "Team collaboration",
    ],
    cta: "Get Started",
    variant: "gradient",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "Custom",
    period: "",
    features: [
      "Unlimited bandwidth & storage",
      "Unlimited invocations",
      "Dedicated infrastructure",
      "SLA & custom contracts",
      "Advanced security & compliance",
      "24/7 dedicated support",
      "SSO & audit logs",
      "Migration assistance",
    ],
    cta: "Contact Sales",
    variant: "outline",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Edge Functions", starter: "1K/mo", pro: "1M/mo", enterprise: "Unlimited" },
  { feature: "Bandwidth", starter: "100 GB", pro: "1 TB", enterprise: "Unlimited" },
  { feature: "Storage", starter: "10 GB", pro: "100 GB", enterprise: "Unlimited" },
  { feature: "Custom Domains", starter: "✓", pro: "✓", enterprise: "✓" },
  { feature: "SSL Certificates", starter: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Team Members", starter: "1", pro: "10", enterprise: "Unlimited" },
  { feature: "Support", starter: "Community", pro: "Email", enterprise: "24/7 Dedicated" },
  { feature: "SLA", starter: "—", pro: "99.9%", enterprise: "99.99%" },
  { feature: "SSO", starter: "—", pro: "—", enterprise: "✓" },
  { feature: "Audit Logs", starter: "—", pro: "—", enterprise: "✓" },
  { feature: "Dedicated IP", starter: "—", pro: "—", enterprise: "✓" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-32 bg-slate-950">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
              <Zap className="h-3 w-3" />
              Simple, transparent pricing
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Pricing that scales with you
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Start free and upgrade as you grow. No hidden fees, no surprise bills.
            Pay only for what you use.
          </p>
        </div>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.popular
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-600/10 to-transparent shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.description}</p>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="h-5 w-5 flex-shrink-0 text-emerald-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.variant === "gradient" ? "gradient" : "outline"}
                size="lg"
                asChild
              >
                <a href="#get-started">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full" role="table">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-6 py-4 text-left text-sm font-semibold text-white">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`${index % 2 === 0 ? "bg-white/5" : ""} border-b border-white/5`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-300">{row.feature}</td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="px-6 py-4 text-sm text-slate-400">
                        {row[plan.name.toLowerCase() as keyof typeof row]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { icon: Shield, title: "Enterprise Security", features: ["SOC 2 Type II", "GDPR Compliant", "HIPAA Ready", "Custom WAF Rules"] },
            { icon: Globe, title: "Global Infrastructure", features: ["35+ Edge Locations", "Anycast Network", "Auto Failover", "DDoS Protection"] },
            { icon: BarChart, title: "Observability", features: ["Real-time Metrics", "Distributed Tracing", "Custom Alerts", "Log Aggregation"] },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-semibold text-white">{item.title}</h3>
              <ul className="space-y-2" role="list">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}