'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Globe, MessageSquare, Bot, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Creazione siti web',
    tagline: 'Online in pochi giorni.',
    desc: 'Ti costruiamo un sito veloce, ottimizzato per Google e pronto a convertire visitatori in clienti. Ci occupiamo di tutto — tu pensi al business.',
    cta: 'Scopri di più',
    color: 'from-cyan-500/10 to-blue-500/10',
    border: 'hover:border-cyan-500/40',
    glow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    icon: MessageSquare,
    title: 'Chatbot personalizzati',
    tagline: 'Risponde 24/7, cattura contatti.',
    desc: 'Un assistente virtuale che conosce il tuo business, risponde ai clienti in tempo reale e raccoglie contatti anche di notte.',
    cta: 'Scopri di più',
    color: 'from-teal-500/10 to-cyan-500/10',
    border: 'hover:border-teal-500/40',
    glow: 'rgba(20, 184, 166, 0.15)',
  },
  {
    icon: Bot,
    title: 'Agenti AI su misura',
    tagline: 'Automatizza il lavoro ripetitivo.',
    desc: 'Attività che fai ogni giorno diventano automatiche. Email, report, gestione dati — il tuo AI agent lavora mentre tu ti concentri su altro.',
    cta: 'Scopri di più',
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'hover:border-blue-500/40',
    glow: 'rgba(59, 130, 246, 0.15)',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servizi" className="relative py-24 bg-[#070B14]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(6,182,212,0.04) 0%, transparent 70%)',
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
            I nostri servizi
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Cosa facciamo per te.
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Tre soluzioni concrete. Tutte su misura. Tutte con un obiettivo: farti risparmiare tempo e guadagnare di più.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={item}
                className={`group relative rounded-2xl border border-white/5 ${s.border} bg-gradient-to-br ${s.color} p-8 cursor-default transition-all duration-300 hover:-translate-y-2`}
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${s.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-13 h-13 rounded-xl">
                  <Icon className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                </div>

                <div className="mb-1">
                  <span className="text-xs font-semibold text-cyan-400/70 tracking-wide uppercase">
                    {s.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">{s.desc}</p>

                <button
                  onClick={() => scrollTo('#contatti')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  {s.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
