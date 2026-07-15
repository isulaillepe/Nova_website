"use client";

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const partnersList = [
  { name: 'Ceylinco Life', category: 'Insurance', detail: 'Nurturing future leaders through a relationship for life.' },
  { name: 'Baurs', category: 'Conglomerate', detail: 'Providing proven trust since 1897 with corporate sustainability.' },
  { name: 'Emerald', category: 'Branding', detail: 'Top-tier corporate styling and strategic presence.' },
  { name: 'readamaze', category: 'Education', detail: 'Supporting digital literacy and reading frameworks for youth.' },
  { name: 'George Steuart Health', category: 'Healthcare', detail: 'Encouraging delegates to live well.' },
  { name: 'Uber', category: 'Mobility', detail: 'Powering seamless connectivity and technological access.' },
  { name: 'FlyBeyond Ceylon', category: 'Aviation', detail: 'Inspiring the next generation of global career explorers.' },
  { name: 'Popeyes', category: 'Food & Beverage', detail: 'Driving the energy with famous Louisiana hospitality.' },
  { name: 'Glowmax', category: 'Infrastructure', detail: 'Providing total ELV solutions for operational infrastructure.' },
  { name: 'Sweet Ant', category: 'Catering', detail: 'High-quality structural ingredients for premium event execution.' }
];

export default function Partners() {
  return (
    <section id="partners" className="bg-[var(--nova-bg)] py-32 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[var(--nova-secondary)] text-xs font-semibold uppercase tracking-wider">Ecosystem Alliance</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Long Term Corporate Partners</h2>
          <p className="text-slate-400 font-light text-base md:text-lg">
            Collaborating with leading organizations to transform raw student talent into global innovation blueprints.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {partnersList.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--nova-card)] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[var(--nova-primary)]/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[var(--nova-secondary)] transition-colors">
                    <Shield size={16} />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 bg-white/5 rounded-full text-slate-300 border border-white/5">
                    {brand.category}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{brand.name}</h4>
                  <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">{brand.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}