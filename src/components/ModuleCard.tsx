'use client';

import { motion } from 'framer-motion';

interface ModuleCardProps {
  title: string;
  subtitle: string;
}

const ModuleCard = ({ title, subtitle }: ModuleCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      className="group card-surface card-glow card-hover overflow-hidden border border-[#d4af37]/10 bg-[#13131f]/95 p-6 transition duration-300"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-[#d4af37]/15 bg-[#d4af37]/10 text-lg font-semibold text-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.18)]">
          <span>•</span>
        </div>
        <span className="text-[0.72rem] uppercase tracking-[0.26em] text-[#a1a1aa]">Live</span>
      </div>
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#f3e5ab]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#a1a1aa]">{subtitle}</p>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37] transition group-hover:translate-x-1">
        <span>Enter</span>
        <span>→</span>
      </div>
    </motion.article>
  );
};

export default ModuleCard;
