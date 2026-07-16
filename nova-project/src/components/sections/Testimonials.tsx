"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, Award, Handshake, Building2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const committee = [
  {
    name: "Niyoma Bodinie",
    role: "Organizing Committee President – Project Nova",
    contact: "+94 77 081 2900",
    email: "niyomabodinie@aiesec.net",
    avatar: "NB",
    icon: Award,
    badge: "President",
    badgeColor: "amber",
  },
  {
    name: "Dinuki Masakorala",
    role: "Local Committee Vice President Business Development",
    contact: "+94 77 141 0592",
    email: "dinuki.masakorala@aiesec.net",
    avatar: "DM",
    icon: Handshake,
    badge: "VP Business Development",
    badgeColor: "violet",
  },
  {
    name: "Dinuka Wimalagunasekara",
    role: "Organizing Committee Vice President Partnership Development",
    contact: "+94 74 090 1606",
    email: "diw02@aiesec.net",
    avatar: "DW",
    icon: Building2,
    badge: "VP Partnership Development",
    badgeColor: "emerald",
  },
  {
    name: "Pahanma Kumarasiri",
    role: "Organizing Committee Vice President Partnership Development",
    contact: "+94 74 090 1606",
    email: "pahanmakumarasiri@aiesec.net",
    avatar: "PK",
    icon: Building2,
    badge: "VP Partnership Development",
    badgeColor: "emerald",
  },
  {
    name: "Manaal Zainab",
    role: "Organizing Committee Vice President Partnership Development",
    contact: "+94 76 107 5552",
    email: "manaalzainab@aiesec.net",
    avatar: "MZ",
    icon: Building2,
    badge: "VP Partnership Development",
    badgeColor: "emerald",
  },
  {
    name: "Tharsigan Gnanasekar",
    role: "Organizing Committee Vice President Partnership Development",
    contact: "+94 76 253 5540",
    email: "tharsigan2004@aiesec.net",
    avatar: "TG",
    icon: Building2,
    badge: "VP Partnership Development",
    badgeColor: "emerald",
  },
];


export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % committee.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + committee.length) % committee.length);

  React.useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="committee" className="relative py-20 sm:py-28 lg:py-32 bg-[var(--nova-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Organizing Committee
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Logic on their minds, passion in their soul.
            <br />
            <span className="bg-gradient-to-r from-[var(--nova-primary)] via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Meet the execution leaders behind Project Nova.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            A dedicated team of student leaders driving innovation and creating opportunities for the next generation of tech innovators.
          </p>
        </div>

        {/* Committee Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / committee.length)}%)` }}
            >
              {committee.map((member) => (
                <div
                  key={member.name}
                  className="flex w-full shrink-0 px-4"
                  style={{ width: `${100 / committee.length * 100}%`, maxWidth: "100%" }}
                >
                  <div className="w-full max-w-xl mx-auto">
                    <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[var(--nova-primary)]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,53,153,0.1)] h-full">
                      <CardContent className="relative p-6">
                        <div className="mb-6 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--nova-primary)] to-indigo-600 text-white font-bold text-xl">
                              {member.avatar}
                            </div>
                            <div>
                              <p className="font-semibold text-white">{member.name}</p>
                              <p className="text-sm text-slate-400">{member.role}</p>
                            </div>
                          </div>
                          <Badge variant="secondary" className={`text-xs ${
                            member.badgeColor === 'amber' ? 'bg-amber-500/20 text-amber-300' : member.badgeColor === 'violet' ? 'bg-violet-500/20 text-violet-300' : 'bg-emerald-500/20 text-emerald-300'
                          }`}>
                            {member.badge}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-slate-300">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-emerald-400">
                              <Phone className="h-5 w-5" />
                            </div>
                            <span>{member.contact}</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-300">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[var(--nova-primary)]">
                              <Mail className="h-5 w-5" />
                            </div>
                            <a href={`mailto:${member.email}`} className="hover:text-[var(--nova-secondary)] transition-colors">
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between z-10 px-4 pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto rounded-full bg-white/5 backdrop-blur-sm p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
              aria-label="Previous member"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto rounded-full bg-white/5 backdrop-blur-sm p-2 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
              aria-label="Next member"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {committee.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[var(--nova-primary)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to member ${index + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}