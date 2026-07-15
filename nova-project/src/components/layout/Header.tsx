"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ArrowRight, Zap, Shield, Globe, Users } from "lucide-react";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#prizes", label: "Prizes" },
  { href: "/#committee", label: "Committee" },
  { href: "/#partners", label: "Partners" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--nova-bg)]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(0,53,153,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link href="#hero" className="flex items-center gap-2" aria-label="Project Nova Home">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--nova-primary)] via-indigo-600 to-blue-600 opacity-20 blur-xl" />
              <Sparkles className="relative h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(0,53,153,0.6)]" />
            </div>
            <span className="hidden font-bold text-xl text-white sm:block">
              Project Nova
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-[var(--nova-secondary)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <Link href="/register">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                Register
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" variant="gradient" className="shadow-[0_0_20px_rgba(0,53,153,0.4)]">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-300 hover:text-[var(--nova-secondary)] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Register
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="gradient" className="w-full justify-center shadow-[0_0_20px_rgba(0,53,153,0.4)]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}