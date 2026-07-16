"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, Users, Zap, Video, Monitor } from "lucide-react";

const TICKER_ITEMS = [
  "Mission Nova · AIESEC in University of Sri Jayewardenepura",
  "Inter-University & School Tracks",
  "2 Phases · 6+ Stages",
  "LKR 75,000 Prize Pool",
  "Grand Finale · 11 July",
  "DHPL Auditorium — Colombo",
  "Live Investor Panel",
  "6.93° N / 79.85° E",
];

export function Showcase() {
  // Note: Video states can be restored here once the highlights video is active.

  return (
    <section
      id="showcase"
      className="relative py-20 sm:py-28 lg:py-32 bg-[var(--nova-bg)] border-t border-white/5"
      data-scroll="true"
      data-scroll-id="showcase"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[var(--nova-primary)]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-600/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[var(--nova-primary)]/5 to-indigo-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission Label */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--nova-primary)]/20 px-3 py-1 text-xs font-medium text-violet-300">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            <span>Mission Nova — AIESEC in University of Sri Jayewardenepura</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-300">
            <Zap className="h-3 w-3" aria-hidden="true" />
            <span>Tech Innovation Challenge</span>
          </span>
        </div>

        {/* Title */}
        <div className="mb-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              From Idea
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--nova-primary)] via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              to Orbit
            </span>
            <span className="bg-gradient-to-r from-[var(--nova-primary)] via-indigo-400 to-cyan-400 bg-clip-text text-transparent">.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
            Sri Lanka&apos;s premier inter-university startup competition — student crews engineer raw ideas into
            launch-ready ventures and pitch live to real investors.
          </p>
        </div>

        {/* CTA + Countdown */}
        <div className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <Link href="/register" className="apple-btn-accent w-full text-slate-950 font-bold">
            Register Now
          </Link>
          <div className="flex flex-col items-center gap-1 text-sm text-slate-500" role="timer" aria-label="Countdown — Grand Finale · T-minus">
            <span className="text-slate-400">Grand Finale · T-minus</span>
            <span className="text-[var(--nova-primary)] font-mono font-semibold">We Have Liftoff</span>
          </div>
        </div>

        {/* Hero Ticker */}
        <div className="mb-16 overflow-hidden bg-gradient-to-r from-transparent via-[var(--nova-bg)]/80 to-transparent py-4 animate-in fade-in duration-1000 delay-200" aria-hidden="true">
          <div className="flex animate-marquee whitespace-nowrap">
            {TICKER_ITEMS.flatMap((item, i) => [
              <span key={`${i}-text`} className="px-8 py-1 text-sm font-medium text-slate-400 uppercase tracking-wider">
                {item}
              </span>,
              <span key={`${i}-dot`} className="px-4 text-slate-700">✦</span>,
            ])}
            {TICKER_ITEMS.flatMap((item, i) => [
              <span key={`${i}-text-2`} className="px-8 py-1 text-sm font-medium text-slate-400 uppercase tracking-wider">
                {item}
              </span>,
              <span key={`${i}-dot-2`} className="px-4 text-slate-700">✦</span>,
            ])}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl group">
              <div className="aspect-video relative bg-slate-900">
                {/* 
                  To play a highlights video:
                  1. Place your video file named 'hero-video.mp4' inside the /public folder.
                  2. Uncomment the <video> block below and remove the static <img> placeholder.
                */}
                <img
                  src="/images/event_pitch_thumbnail.png"
                  alt="Project Nova highlights preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:scale-103 group-hover:opacity-95"
                />
                
                {/*
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  preload="none"
                  playsInline
                  autoPlay
                  loop
                  muted
                  poster="/images/event_pitch_thumbnail.png"
                  aria-label="Project Nova highlights video"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nova-bg)]/90 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Video className="h-5 w-5 text-slate-300" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Monitor className="h-4 w-4" aria-hidden="true" />
                    Project Nova 2024 Highlights
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Award className="h-4 w-4" aria-hidden="true" />
                    Grand Finale
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-gradient-to-br from-[var(--nova-primary)] to-indigo-600 opacity-20 blur-2xl" />
            </div>
          </div>

          {/* Right: Stats & Asset */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[var(--nova-primary)]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,53,153,0.1)]"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600">
                    <Award className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-white">LKR 75,000</span>
                </div>
                <div className="text-sm text-slate-400">First Prize</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                    <Users className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-white">School & Uni</span>
                </div>
                <div className="text-sm text-slate-400">Participants</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Zap className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-white">6+</span>
                </div>
                <div className="text-sm text-slate-400">Phases</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[var(--nova-primary)]/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,53,153,0.1)]"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
                    <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="font-semibold text-white">Top 07</span>
                </div>
                <div className="text-sm text-slate-400">Finalist Crews</div>
              </motion.div>
            </div>

            {/* Full Asset Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl transition-all hover:border-[var(--nova-primary)]/30 hover:shadow-[0_0_40px_rgba(0,53,153,0.1)]"
            >
              <div className="aspect-[4/3] relative">
                <picture>
                  <img
                    src="/images/past-events/codesprint_4.png"
                    alt="Project Nova finalist teams collaborating"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nova-bg)]/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 opacity-20 blur-2xl" />
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-xl bg-gradient-to-br from-[var(--nova-primary)] to-indigo-600 opacity-20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}