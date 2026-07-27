'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const barVariants = {
  initial: { width: '0%' },
  animate: { width: '100%' }
};

const LoadScreen = () => {
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    controls.start('animate');
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 18 + 8, 100);
        return next;
      });
    }, 400);

    const finishTimeout = window.setTimeout(() => {
      setProgress(100);
      controls.start({ width: '100%' });
      window.setTimeout(() => {
        router.push('/hub');
      }, 1200);
    }, 3800);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(finishTimeout);
    };
  }, [controls, router]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-[#f8fafc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(243,229,171,0.08),_transparent_18%)]" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.36em] text-[#a1a1aa] vhs">ACCESSING THE FRACTURE...</p>
          <h1 className="text-[clamp(4rem,8vw,8rem)] leading-none text-[#f3e5ab] glitch vhs" data-text="黒神">黒神</h1>
          <p className="text-6xl font-semibold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#f3e5ab] glitch vhs" data-text="KUROGAMI">KUROGAMI</p>
          <p className="text-xs uppercase tracking-[0.36em] text-[#a1a1aa]">DEGEN NODE — ENTER AT YOUR OWN RISK</p>
        </div>

        <div className="w-full rounded-full border border-[#d4af37]/15 bg-[#111827]/80 p-1 shadow-[0_0_60px_rgba(212,175,55,0.18)]">
          <motion.div
            className="h-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.45)]"
            variants={barVariants}
            animate={controls}
            transition={{ duration: 3.8, ease: 'easeInOut' }}
          />
        </div>

        <div className="space-y-3">
          <p className="text-base uppercase tracking-[0.2em] text-[#a1a1aa]">Loading</p>
          <p className="text-2xl font-semibold text-[#f8fafc]">Preparing the gateway…</p>
          <p className="text-sm text-[#a1a1aa]">{Math.round(progress)}% complete</p>
          <p className="text-xs text-[#a1a1aa]">Warning: Unstable vignettes may appear. Proceed if you embrace the cult.</p>
        </div>
      </div>
    </section>
  );
};

export default LoadScreen;
