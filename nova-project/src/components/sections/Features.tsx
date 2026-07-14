"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Users,
  Database,
  Network,
  Lock,
  BarChart3,
  Terminal,
  GitBranch,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Edge Functions",
    description: "Run code at the edge with zero cold starts. Deploy JavaScript, TypeScript, and WebAssembly functions globally in seconds.",
    category: "Compute",
    popular: true,
  },
  {
    icon: Database,
    title: "Global Database",
    description: "Distributed SQL database with automatic replication, read replicas, and multi-region writes. Built on PostgreSQL.",
    category: "Data",
    popular: true,
  },
  {
    icon: Network,
    title: "Edge Network",
    description: "35+ points of presence worldwide. Automatic caching, compression, and optimization for static and dynamic content.",
    category: "Network",
    popular: false,
  },
  {
    icon: Lock,
    title: "Zero Trust Security",
    description: "Built-in DDoS protection, WAF, bot mitigation, and mTLS. SOC 2 Type II, ISO 27001, and GDPR compliant.",
    category: "Security",
    popular: true,
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live metrics, custom dashboards, and alerting. Query logs with SQL. Understand your traffic and performance instantly.",
    category: "Observability",
    popular: false,
  },
  {
    icon: Terminal,
    title: "CLI & SDKs",
    description: "First-class developer experience with CLI, TypeScript SDKs, GitHub Actions, Terraform provider, and VS Code extension.",
    category: "DX",
    popular: false,
  },
  {
    icon: GitBranch,
    title: "Preview Deployments",
    description: "Automatic preview deployments for every PR. Comment, review, and test in production-like environments before merging.",
    category: "Workflow",
    popular: true,
  },
  {
    icon: Cloud,
    title: "Serverless Containers",
    description: "Run any Docker container serverlessly. Scale to zero, pay per request. Support for any language, runtime, or framework.",
    category: "Compute",
    popular: false,
  },
  {
    icon: Users,
    title: "Team Workspaces",
    description: "Role-based access, audit logs, SSO/SAML, and shared environments. Built for teams of all sizes, from startup to enterprise.",
    category: "Collaboration",
    popular: false,
  },
];

const categories = [
  "All",
  "Compute",
  "Data",
  "Network",
  "Security",
  "Observability",
  "DX",
  "Workflow",
  "Collaboration",
];

export function Features() {
  return (
    <section
      id="features"
      className="relative min-h-screen min-w-screen w-screen snap-center flex flex-col items-center justify-center py-20 sm:py-28 lg:py-32 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
              <Zap className="h-3 w-3" />
              Features
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to build, deploy, and scale
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            A complete platform for modern application development. From edge compute to global databases,
            everything works together seamlessly.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300 cursor-default"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-violet-400 group-hover:bg-violet-600/20 group-hover:text-white transition-all">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  {feature.popular && (
                    <Badge variant="secondary" className="text-xs">
                      Popular
                    </Badge>
                  )}
                </div>
                <Badge variant="outline" className="mb-2 text-xs">
                  {feature.category}
                </Badge>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}