"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Building2,
  Sparkles,
  BookOpen,
  HeartPulse,
  Truck,
  Plane,
  Utensils,
  Zap,
  Cookie,
  Award,
} from "lucide-react";

const longTermPartners = [
  {
    name: "Ceylinco Life",
    description: "Dedicated to nurturing future leaders through a relationship for life",
    icon: Heart,
    iconColor: "text-red-400",
    bgColor: "bg-red-500/20",
    category: "Insurance",
  },
  {
    name: "Baurs",
    description: "Providing proven trust since 1897 with corporate sustainability baked directly into their core mission",
    icon: Building2,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20",
    category: "Conglomerate",
  },
  {
    name: "Emerald",
    description: "Ensuring top-tier corporate styling and strategic presence across all platforms",
    icon: Sparkles,
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/20",
    category: "Branding",
  },
  {
    name: "readamaze",
    description: "Supporting continuous digital literacy and reading frameworks for youth development",
    icon: BookOpen,
    iconColor: "text-violet-400",
    bgColor: "bg-violet-500/20",
    category: "Education",
  },
  {
    name: "George Steuart Health",
    description: "Encouraging delegates and future professionals to live well",
    icon: HeartPulse,
    iconColor: "text-green-400",
    bgColor: "bg-green-500/20",
    category: "Healthcare",
  },
  {
    name: "Uber",
    description: "Powering seamless connectivity and modern technological access",
    icon: Truck,
    iconColor: "text-slate-400",
    bgColor: "bg-slate-500/20",
    category: "Mobility",
  },
  {
    name: "FlyBeyond Ceylon",
    description: "Inspiring the next generation of global career explorers",
    icon: Plane,
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/20",
    category: "Aviation",
  },
  {
    name: "Popeyes",
    description: "Driving the energy of our delegation with famous Louisiana hospitality",
    icon: Utensils,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/20",
    category: "Food & Beverage",
  },
  {
    name: "Glowmax",
    description: "Providing total ELV solutions to power up our operational infrastructure",
    icon: Zap,
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/20",
    category: "Infrastructure",
  },
  {
    name: "Sweet Ant",
    description: "Ensuring high-quality structural ingredients for premium event execution",
    icon: Cookie,
    iconColor: "text-rose-400",
    bgColor: "bg-rose-500/20",
    category: "Catering",
  },
];

const prizeCategories = [
  {
    title: "First Place Champion",
    amount: "LKR 75,000",
    description: "Exceptional innovation, technical ability, and outstanding problem-solving skills",
    color: "from-amber-500 to-amber-600",
    icon: Award,
  },
  {
    title: "Second Place Runner-up",
    amount: "LKR 50,000",
    description: "Corporate-ready critical thinking, structural execution, and high-impact creative solutions",
    color: "from-slate-400 to-slate-500",
    icon: Award,
  },
  {
    title: "Third Place",
    amount: "LKR 30,000",
    description: "Strong technical capabilities, resilience, and actionable real-world tech concepts",
    color: "from-amber-700 to-amber-800",
    icon: Award,
  },
  {
    title: "Finalist Merit Awards (10 Teams)",
    amount: "LKR 10,000 each",
    description: "Competitive dedication and technical prowess for the next top 10 ranked teams",
    color: "from-violet-500 to-indigo-500",
    icon: Award,
  },
];

export function Partners() {
  return (
    <section id="partners" className="py-20 sm:py-28 bg-slate-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-300">
              Corporate Partners
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Proudly trusted by national and multinational organizations
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Project Nova is proudly trusted by organizations seeking to empower youth leadership and strengthen employer branding presence
          </p>
        </div>

        {/* Long Term Partners */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Long Term Partners</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {longTermPartners.map((partner) => (
              <Card
                key={partner.name}
                className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${partner.bgColor}`}>
                      <partner.icon className={`h-6 w-6 ${partner.iconColor}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-white/10 border-white/10 text-slate-300">
                      {partner.category}
                    </Badge>
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{partner.name}</h4>
                  <p className="text-sm text-slate-400">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prize Pool Stats */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "LKR 75,000", label: "1st Place Prize" },
            { value: "LKR 50,000", label: "2nd Place Prize" },
            { value: "LKR 30,000", label: "3rd Place Prize" },
            { value: "LKR 255,000", label: "Total Prize Pool" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="mb-2 text-3xl font-bold text-white sm:text-4xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Prize Categories */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Prize Categories</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {prizeCategories.map((prize, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white">
                    <prize.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 font-semibold text-white">{prize.title}</h4>
                  <div className="mb-3 text-2xl font-bold bg-gradient-to-r {prize.color} bg-clip-text text-transparent">
                    {prize.amount}
                  </div>
                  <p className="text-sm text-slate-400">{prize.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}