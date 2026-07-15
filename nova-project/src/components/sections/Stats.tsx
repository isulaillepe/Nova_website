"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Trophy, GraduationCap, Rocket, Users } from "lucide-react";

const statsData = [
  { icon: Trophy, value: "1M+", label: "Prizepool" },
  { icon: GraduationCap, value: "26+", label: "Universities" },
  { icon: Rocket, value: "550+", label: "Teams" },
  { icon: Users, value: "2,400+", label: "Delegates" }
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // 1. Track scroll of the entire section for parallax background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax translations
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "8%"]);

  // Framer Motion viewport entrance variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.15 + i * 0.12 }
    })
  };

  const trackLeftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  const trackRightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.35 } }
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 0.85, scale: 1, y: 0, transition: { duration: 1.0, ease: "easeOut", delay: 0.4 } }
  };

  return (
    <section 
      ref={sectionRef} 
      id="prizes" 
      className="relative min-h-screen bg-slate-950 py-32 px-4 sm:px-8 md:px-16 overflow-hidden flex flex-col justify-between"
    >
      {/* Parallax space shuttle sunset background */}
      <motion.div 
        style={{ 
          scale: bgScale,
          y: bgY,
          backgroundImage: "url('/images/rocket_launch_bg.png')"
        }}
        className="absolute inset-0 bg-cover bg-center z-0 origin-center filter brightness-95"
      />

      {/* Vignettes for content legibility and section blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] z-0 pointer-events-none" />

      {/* Main Stats Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="relative max-w-6xl mx-auto space-y-16 z-10 w-full flex-1 flex flex-col justify-center"
      >
        {/* Outlined Section Header */}
        <motion.div variants={headerVariants} className="space-y-3 text-center">
          <span className="text-[#FF5533] text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5533] shadow-[0_0_8px_#FF5533]" />
            OUR LEGACY
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none text-white font-space uppercase">
            <span 
              className="font-extrabold"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)", color: "transparent" }}
            >
              THE NUMBERS
            </span>{" "}
            <span className="font-cormorant italic text-white font-medium lowercase">Speak</span>
          </h2>
        </motion.div>

        {/* Floating Glassmorphic Card */}
        <motion.div 
          variants={cardVariants}
          className="glass-dark backdrop-blur-xl bg-slate-950/45 border border-white/10 rounded-[28px] p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.65)] hover:border-white/20 transition-colors duration-500"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  custom={index}
                  variants={statItemVariants}
                  className="flex flex-col items-center justify-center pt-6 md:pt-0 md:px-4"
                >
                  {/* Glowing icon container */}
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#FF7043] shadow-[0_0_15px_rgba(255,112,67,0.15)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-space mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold font-space uppercase tracking-[0.2em] text-slate-300">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Platforms & Intelligence Tracks Grid */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-[10px] sm:text-xs text-slate-300 max-w-5xl mx-auto w-full relative">
          
          <motion.div 
            variants={trackLeftVariants} 
            className="border-y border-l border-white/10 p-5 rounded-l-xl bg-slate-950/50 backdrop-blur-sm relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF5533]/80" />
            <span className="text-[#FF5533] font-bold block mb-1 text-[11px] tracking-widest">PLATFORMS TRACK:</span>
            <span className="leading-relaxed opacity-90">MARKETPLACES, EDTECH, DIGITAL HEALTH, E-COMMERCE, SAAS</span>
          </motion.div>

          <motion.div 
            variants={trackRightVariants} 
            className="border-y border-r border-white/10 p-5 rounded-r-xl bg-slate-950/50 backdrop-blur-sm relative"
          >
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#FF5533]/80" />
            <span className="text-[#FF5533] font-bold block mb-1 text-[11px] tracking-widest">INTELLIGENCE TRACK:</span>
            <span className="leading-relaxed opacity-90">PREDICTIVE HEALTH, GENERATIVE AI, FINTECH ANALYTICS, BIO-INFORMATICS</span>
          </motion.div>

        </div>
      </motion.div>

      {/* Child Wonder Portrait Overlay (bottom right corner) */}
      <motion.div 
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="absolute right-0 bottom-0 w-44 sm:w-56 md:w-80 lg:w-[420px] aspect-square z-10 pointer-events-none origin-bottom-right"
      >
        <div 
          className="w-full h-full bg-cover bg-bottom opacity-70 sm:opacity-80 mix-blend-screen"
          style={{ backgroundImage: "url('/images/child_wonder.png')" }}
        />
      </motion.div>
    </section>
  );
}