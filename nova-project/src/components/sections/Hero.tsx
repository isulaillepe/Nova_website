"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ArrowDown, ChevronDown } from "lucide-react";

const TICKER_ITEMS = [
  "Project Nova 2025 — Innovation Meets Opportunity",
  "LKR 75,000 Prize Pool",
  "School & University Tracks",
  "AIESEC in University of Sri Jayewardenepura",
  "Register Now → projectnova.lk",
];

export function Hero() {
  const heroRef = React.useRef<HTMLElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["#8b5cf6", "#6366f1", "#06b6d4", "#a855f7", "#ec4899"];
    const particleCount = Math.min(
      Math.floor((canvas.clientWidth * canvas.clientHeight) / 15000),
      80
    );

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    let mouseX = canvas.clientWidth / 2;
    let mouseY = canvas.clientHeight / 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      particles.forEach((p) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.clientWidth;
        if (p.x > canvas.clientWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.clientHeight;
        if (p.y > canvas.clientHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = "#8b5cf6";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  React.useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.bottom / viewportHeight));

      hero.style.setProperty("--scroll-progress", progress.toString());
      hero.style.setProperty("--logo-opacity", (1 - progress * 1.5).toString());
      hero.style.setProperty("--title-opacity", (1 - progress * 1.2).toString());
      hero.style.setProperty("--title-translate-y", `${progress * -100}px`);
      hero.style.setProperty("--desc-opacity", (1 - progress * 1.5).toString());
      hero.style.setProperty("--desc-translate-y", `${progress * -50}px`);
      hero.style.setProperty("--cta-opacity", (1 - progress * 2).toString());
      hero.style.setProperty("--cta-translate-y", `${progress * 30}px`);
      hero.style.setProperty("--ticker-opacity", (1 - progress).toString());
      hero.style.setProperty("--ticker-translate-y", `${progress * 50}px`);
      hero.style.setProperty(
        "--scroll-indicator-opacity",
        (1 - progress * 3).toString()
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection =
      document.getElementById("about") || document.getElementById("timeline");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      style={{
        "--logo-opacity": "1",
        "--title-opacity": "1",
        "--title-translate-y": "0px",
        "--desc-opacity": "1",
        "--desc-translate-y": "0px",
        "--cta-opacity": "1",
        "--cta-translate-y": "0px",
        "--ticker-opacity": "1",
        "--ticker-translate-y": "0px",
        "--scroll-indicator-opacity": "1",
        "--scroll-progress": "0",
      } as React.CSSProperties}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-1/2 -left-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-600/15 via-indigo-600/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-emerald-600/10 via-teal-600/5 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-violet-600/5 to-indigo-600/5 blur-3xl" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          opacity: 0.03,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{
            opacity: "var(--logo-opacity, 1)",
            transform: `translateY(calc(var(--title-translate-y, 0px) * 0.3))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Project Nova Home">
            <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
              <Sparkles className="relative h-8 w-8 text-white drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
              <span className="absolute inset-0 -translate-y-0.5 bg-gradient-to-br from-violet-400 to-indigo-400 opacity-50 rounded-xl" />
            </span>
            <span className="font-bold text-2xl md:text-3xl text-white tracking-tight">Project Nova</span>
          </Link>
        </div>

        <div
          className="text-center mb-6"
          style={{
            opacity: "var(--title-opacity, 1)",
            transform: `translateY(var(--title-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              Innovation Meets
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Opportunity
            </span>
          </h1>
        </div>

        <p
          className="mb-10 max-w-3xl mx-auto text-lg text-slate-300 sm:text-xl"
          style={{
            opacity: "var(--desc-opacity, 1)",
            transform: `translateY(var(--desc-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          A dynamic tech-based event designed for school and university students, creating a platform
          where innovation meets opportunity. Organized by AIESEC in University of Sri Jayewardenepura,
          it connects passionate young minds with forward-thinking organizations.
        </p>

        <div
          className="mb-16 flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: "var(--cta-opacity, 1)",
            transform: `translateY(var(--cta-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          <Button
            size="xl"
            className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-600 before:to-violet-600 before:opacity-0 before:transition-opacity group-hover:before:opacity-100"
            asChild
          >
            <a href="/register">
              <span className="relative flex items-center gap-2">
                Register Now
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
            <a href="#timeline">
              Learn More
              <ChevronDown className="ml-2 h-5 w-5 transition-transform" />
            </a>
          </Button>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500"
          style={{
            opacity: "var(--cta-opacity, 1)",
            transform: `translateY(var(--cta-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5 font-bold text-2xl text-white sm:text-3xl">
              <span className="h-6 w-6 text-amber-400">🏆</span>
              <span>LKR 75,000</span>
            </div>
            <div className="text-slate-400">First Prize</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5 font-bold text-2xl text-white sm:text-3xl">
              <span className="h-6 w-6 text-violet-400">👥</span>
              <span>School & Uni</span>
            </div>
            <div className="text-slate-400">Participants</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5 font-bold text-2xl text-white sm:text-3xl">
              <span className="h-6 w-6 text-emerald-400">📅</span>
              <span>2 Phases</span>
            </div>
            <div className="text-slate-400">Competition</div>
          </div>
        </div>

        <div
          className="relative mt-20"
          style={{
            opacity: "var(--ticker-opacity, 1)",
            transform: `translateY(var(--ticker-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          <div className="relative rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl">
            <div className="rounded-lg bg-slate-950/80 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center text-xs text-slate-500 font-mono">
                  Project Nova Event Timeline
                </div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
                  <span className="text-violet-400">01</span>
                  <span className="text-emerald-400">Registration Opens</span>
                  <span className="text-cyan-400">02</span>
                  <span className="text-amber-400">Proposal Submission</span>
                  <span className="text-slate-400">03</span>
                  <span className="text-slate-400">Review Phase</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
                  <span className="text-violet-400">04</span>
                  <span className="text-emerald-400">Workshops Begin</span>
                  <span className="text-cyan-400">05</span>
                  <span className="text-amber-400">Project Implementation</span>
                  <span className="text-slate-400">06</span>
                  <span className="text-slate-400">Grand Finale</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 opacity-20 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-16 w-16 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 opacity-20 blur-2xl" />
        </div>

        <div
          className="hero-ticker overflow-hidden w-full mt-16"
          style={{
            opacity: "var(--ticker-opacity, 1)",
            transform: `translateY(var(--ticker-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
          aria-hidden="true"
        >
          <div className="hero-ticker-track flex whitespace-nowrap" aria-hidden="true">
            {TICKER_ITEMS.map((item, i) => (
              <span key={i} className="hero-ticker-item flex items-center gap-3 px-4 text-sm font-medium text-slate-400 whitespace-nowrap">
                {item}
                <span className="hero-ticker-sep text-violet-500" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
            {TICKER_ITEMS.map((item, i) => (
              <span key={`dup-${i}`} className="hero-ticker-item flex items-center gap-3 px-4 text-sm font-medium text-slate-400 whitespace-nowrap">
                {item}
                <span className="hero-ticker-sep text-violet-500" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        style={{
          opacity: "var(--scroll-indicator-opacity, 1)",
          transition: "opacity 0.1s linear",
          willChange: "opacity",
        }}
        onClick={scrollToNextSection}
        aria-label="Scroll down"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollToNextSection()}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}