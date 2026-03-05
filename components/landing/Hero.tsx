'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles from './Particles';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070B14]">
      <Particles />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(6, 182, 212, 0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)',
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <div
            className="relative"
            style={{
              animation: 'float 4s ease-in-out infinite',
              filter: 'drop-shadow(0 0 32px rgba(6, 182, 212, 0.45)) drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))',
            }}
          >
            <Image
              src="/polpo.png"
              alt="PolpoAI mascot"
              width={220}
              height={220}
              priority
              className="object-contain select-none"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-3"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase opacity-80">
            Intelligenza Artificiale su misura
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
        >
          Il tuo business,{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0ea5e9 100%)',
            }}
          >
            più semplice.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Siti web, chatbot e assistenti AI su misura che lavorano al posto tuo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo('#contatti')}
            className="px-8 py-4 rounded-full text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-[#070B14] transition-all duration-200 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-1"
          >
            Prenota una demo
          </button>
          <button
            onClick={() => scrollTo('#esempio')}
            className="px-8 py-4 rounded-full text-base font-semibold text-cyan-400 border border-cyan-500/40 hover:border-cyan-400/70 hover:bg-cyan-500/5 transition-all duration-200 hover:-translate-y-1"
          >
            Vedi come funziona
          </button>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #070B14)',
        }}
      />


    </section>
  );
}
