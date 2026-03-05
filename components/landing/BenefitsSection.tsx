'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Timer, Users, Layers, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Timer,
    title: 'Risparmi tempo',
    desc: 'Le attività ripetitive diventano automatiche. Hai più ore libere ogni giorno.',
  },
  {
    icon: Users,
    title: 'Non perdi contatti',
    desc: 'Ogni richiesta riceve una risposta immediata, anche fuori orario e nei weekend.',
  },
  {
    icon: Layers,
    title: 'Processi più ordinati',
    desc: 'Il tuo lavoro diventa più strutturato. Meno caos, meno errori, meno stress.',
  },
  {
    icon: Rocket,
    title: 'Focus sulla crescita',
    desc: 'Smetti di correre per stare al passo. Inizia a costruire il business che vuoi davvero.',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vantaggi" className="relative py-24 bg-[#070B14]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase opacity-80">
            Vantaggi concreti
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Cosa cambia davvero.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={item}
                className="group relative rounded-2xl border border-white/5 hover:border-cyan-500/20 bg-white/[0.02] hover:bg-cyan-500/[0.04] p-8 transition-all duration-300 flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
