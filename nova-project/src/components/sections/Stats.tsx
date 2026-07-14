"use client";

import { Trophy, Award, Medal, Star, TrendingUp, Users } from "lucide-react";

const prizes = [
  {
    icon: Trophy,
    place: "1st Place",
    title: "First Place Champion",
    amount: "LKR 75,000",
    description: "Awarded to the top team demonstrating exceptional innovation, technical ability, and outstanding problem-solving skills throughout the execution phases.",
    color: "from-amber-500 to-amber-600",
    textColor: "text-amber-300",
    iconBg: "bg-amber-500/20",
    borderColor: "border-amber-500/30",
    badge: "🏆 Grand Prize",
  },
  {
    icon: Award,
    place: "2nd Place",
    title: "Second Place Runner-up",
    amount: "LKR 50,000",
    description: "Celebrating corporate-ready critical thinking, structural execution, and high-impact creative solutions.",
    color: "from-slate-400 to-slate-500",
    textColor: "text-slate-300",
    iconBg: "bg-slate-400/20",
    borderColor: "border-slate-400/30",
    badge: "🥈 Runner-up",
  },
  {
    icon: Medal,
    place: "3rd Place",
    title: "Third Place",
    amount: "LKR 30,000",
    description: "Recognizing strong technical capabilities, resilience, and actionable real-world tech concepts.",
    color: "from-amber-700 to-amber-800",
    textColor: "text-amber-400",
    iconBg: "bg-amber-700/20",
    borderColor: "border-amber-700/30",
    badge: "🥉 Third Place",
  },
  {
    icon: Star,
    place: "4th-13th",
    title: "Finalist Merit Awards",
    amount: "LKR 10,000 each",
    description: "Rewarding the subsequent top 10 ranked teams for their competitive dedication and technical prowess.",
    color: "from-violet-500 to-indigo-500",
    textColor: "text-violet-300",
    iconBg: "bg-violet-500/20",
    borderColor: "border-violet-500/30",
    badge: "⭐ 10 Teams × LKR 10,000",
  },
];

const totalPrizePool = [
  { value: "LKR 255,000", label: "Total Prize Pool" },
  { value: "13", label: "Winning Teams" },
  { value: "2", label: "Competition Phases" },
  { value: "35+", label: "Edge Locations" },
];

export function Stats() {
  return (
    <section id="prizes" className="relative py-20 sm:py-28 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-amber-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-600/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-600/20 px-3 py-1 text-xs font-medium text-amber-300">
              <Trophy className="h-3 w-3" />
              Prize Pool
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Compete for <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">LKR 255,000</span> in Prizes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            "Every milestone tells a story. Follow the journey to elevate your potential on the global stage."
          </p>
        </div>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {totalPrizePool.map((stat) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center text-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10"
            >
              <div className="font-bold text-3xl text-white sm:text-4xl">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {prizes.map((prize) => {
            const Icon = prize.icon;
            return (
              <div
                key={prize.place}
                className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative mb-4 flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${prize.iconBg} ${prize.textColor}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    {prize.badge}
                  </span>
                </div>

                <div className="relative">
                  <div className="mb-2 text-sm font-medium text-slate-400">{prize.place}</div>
                  <h3 className="mb-2 text-xl font-bold text-white">{prize.title}</h3>
                  <div className="mb-4 text-3xl font-bold bg-gradient-to-r {prize.color} bg-clip-text text-transparent">
                    {prize.amount}
                  </div>
                  <p className="text-sm text-slate-400">{prize.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Total Prize Distribution</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                LKR 75,000
              </div>
              <div className="text-sm text-slate-400">1st Place Champion</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent">
                LKR 50,000
              </div>
              <div className="text-sm text-slate-400">2nd Place Runner-up</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                LKR 30,000
              </div>
              <div className="text-sm text-slate-400">3rd Place</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                LKR 100,000
              </div>
              <div className="text-sm text-slate-400">10 × Merit Awards</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              LKR 255,000 Total
            </div>
            <div className="mt-2 text-slate-400">Across 13 Winning Teams</div>
          </div>
        </div>
      </div>
    </section>
  );
}