"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown, MousePointer } from "lucide-react";

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

    // Set canvas size
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle system
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
    const particleCount = Math.min(Math.floor((canvas.clientWidth * canvas.clientHeight) / 15000), 80);

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
        // Mouse attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        // Velocity decay
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.clientWidth;
        if (p.x > canvas.clientWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.clientHeight;
        if (p.y > canvas.clientHeight) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
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

      // Update CSS custom properties for scroll-driven animations
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
      hero.style.setProperty("--scroll-indicator-opacity", (1 - progress * 3).toString());
    };

    handleScroll(); // Initial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about") || document.getElementById("timeline");
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
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-1/2 -left-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-violet-600/15 via-indigo-600/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-emerald-600/10 via-teal-600/5 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-violet-600/5 to-indigo-600/5 blur-3xl" />
      </div>

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo */}
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

        {/* Title */}
        <div
          className="text-center mb-6"
          style={{
            opacity: "var(--title-opacity, 1)",
            transform: `translateY(var(--title-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1]">
            Innovation
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Meets Opportunity
            </span>
          </h1>
        </div>

        {/* Description */}
        <div
          className="text-center max-w-3xl mx-auto mb-10 text-lg md:text-xl text-slate-300 leading-relaxed"
          style={{
            opacity: "var(--desc-opacity, 1)",
            transform: `translateY(var(--desc-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          A dynamic tech-based event designed for school and university students, creating a platform
          where innovation meets opportunity. Organized by AIESEC in University of Sri Jayewardenepura.
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: "var(--cta-opacity, 1)",
            transform: `translateY(var(--cta-translate-y, 0px))`,
            transition: "opacity 0.1s linear, transform 0.1s linear",
            willChange: "opacity, transform",
          }}
        >
          <Link href="/register">
            <Button size="lg" className="gap-2 px-8 py-3.5 text-base font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)]" variant="gradient">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              Register Now
            </Button>
          </Link>
          <Link href="#about">
            <Button size="lg" variant="outline" className="gap-2 px-8 py-3.5 text-base font-semibold border-white/20 hover:bg-white/5">
              Learn More
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-violet-500/30 hover:bg-violet-500/10">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="h-6 w-6 text-amber-400" aria-hidden="true" />
              <span className="font-bold text-2xl md:text-3xl text-white">LKR 75,000</span>
            </div>
            <div className="text-sm text-slate-400">Prize Pool</div>
          </div>
          <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="font-bold text-2xl md:text-3xl text-white">2</span>
              <span className="font-bold text-2xl md:text-3xl text-violet-400">+</span>
            </div>
            <div className="text-sm text-slate-400">Tracks</div>
          </div>
          <div className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="font-bold text-2xl md:text-3xl text-white">6</span>
              <span className="font-bold text-2xl md:text-3xl text-cyan-400">+</span>
            </div>
            <div className="text-sm text-slate-400">Phases</div>
          </div>
        </div>
      </div>

      {/* Hero Ticker / Marquee */}
      <div
        id="hero-ticker"
        className="absolute bottom-20 left-0 right-0 pointer-events-none"
        style={{
          opacity: "var(--ticker-opacity, 1)",
          transform: `translateY(var(--ticker-translate-y, 0px))`,
          transition: "opacity 0.1s linear, transform 0.1s linear",
          willChange: "opacity, transform",
        }}
        aria-hidden="true"
      >
        <div className="overflow-hidden bg-gradient-to-r from-transparent via-slate-950/80 to-transparent py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {TICKER_ITEMS.flatMap((item, i) => [
              <span key={`${i}-text`} className="px-8 py-1 text-sm font-medium text-slate-400 uppercase tracking-wider">
                {item}
              </span>,
              <span key={`${i}-dot`} className="px-4 text-slate-600">•</span>,
            ])}
            {TICKER_ITEMS.flatMap((item, i) => [
              <span key={`${i}-text-2`} className="px-8 py-1 text-sm font-medium text-slate-400 uppercase tracking-wider">
                {item}
              </span>,
              <span key={`${i}-dot-2`} className="px-4 text-slate-600">•</span>,
            ])}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-violet-500/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
        style={{
          opacity: "var(--scroll-indicator-opacity, 1)",
          transition: "opacity 0.1s linear",
          willChange: "opacity",
        }}
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Scroll</span>
        <div className="relative h-10 w-6 rounded-full border border-white/20 flex items-start justify-center pt-2">
          <MousePointer className="h-4 w-4 text-slate-400" aria-hidden="true" />
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-slate-400 animate-scroll-wheel" aria-hidden="true" />
        </div>
      </button>

      {/* Scroll Progress Indicator (Optional - thin line at top) */}
      <div
        className="fixed top-0 left-0 h-0.5 w-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-400 transform origin-left scale-x-0 z-50 pointer-events-none"
        style={{
          transform: "scaleX(var(--scroll-progress, 0))",
          transition: "transform 0.1s linear",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </section>
  );
}