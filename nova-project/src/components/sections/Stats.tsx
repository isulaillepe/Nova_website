"use client";

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function Stats() {
  return (
    <section id="prizes" className="bg-[var(--nova-bg)] py-32 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="max-w-3xl space-y-4">
          <span className="text-[var(--nova-secondary)] text-xs font-semibold uppercase tracking-wider">Rewards Spectrum</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Compete for LKR 255,000 in Prizes
          </h2>
          <p className="text-slate-400 font-light text-lg">
            Recognizing technological excellence, analytical capabilities, and real-world deployment value across 13 winning teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Champions Package */}
          <motion.div {...cardVariant} className="apple-bento-card flex flex-col justify-between border-[var(--nova-primary)]/30">
            <div>
              <div className="text-[var(--nova-secondary)] mb-4 font-bold text-sm flex items-center gap-1.5">🏆 1st Place</div>
              <h3 className="text-3xl font-bold text-white tracking-tight">LKR 75,000</h3>
            </div>
            <p className="text-xs text-slate-400 mt-6 font-light">Grand Prize recognized for absolute mastery in innovative architecture and problem solving.</p>
          </motion.div>

          {/* 1st Runner-Up */}
          <motion.div {...cardVariant} className="apple-bento-card flex flex-col justify-between">
            <div>
              <div className="text-slate-200 mb-4 font-bold text-sm">🥈 2nd Place</div>
              <h3 className="text-3xl font-bold text-white tracking-tight">LKR 50,000</h3>
            </div>
            <p className="text-xs text-slate-400 mt-6 font-light">Awarded for high-impact concept designs and structured developmental vision.</p>
          </motion.div>

          {/* 2nd Runner-Up */}
          <motion.div {...cardVariant} className="apple-bento-card flex flex-col justify-between">
            <div>
              <div className="text-slate-400 mb-4 font-bold text-sm">🥉 3rd Place</div>
              <h3 className="text-3xl font-bold text-white tracking-tight">LKR 30,000</h3>
            </div>
            <p className="text-xs text-slate-400 mt-6 font-light">Recognized for clear industrial prototype readiness and engineering execution stability.</p>
          </motion.div>

          {/* Finalist Merits */}
          <motion.div {...cardVariant} className="apple-bento-card flex flex-col justify-between">
            <div>
              <div className="text-blue-400 mb-4 font-bold text-sm">⭐ Finalist Merits</div>
              <h3 className="text-3xl font-bold text-white tracking-tight">LKR 10,000</h3>
            </div>
            <p className="text-xs text-slate-400 mt-6 font-light">Allocated straight across 10 short-listed teams to appreciate project execution focus.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}