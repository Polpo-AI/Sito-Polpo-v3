'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { Inbox, Clock, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: Inbox,
    title: 'Troppe email e messaggi',
    desc: 'Rispondi sempre alle stesse domande, ogni giorno. Un lavoro ripetitivo che toglie tempo a ciò che conta davvero.',
  },
  {
    icon: Clock,
    title: 'Il tempo non basta mai',
    desc: 'Tra richieste, preventivi e follow-up, la giornata finisce prima che tu riesca a concentrarti sulla crescita.',
  },
  {
    icon: TrendingDown,
    title: 'Opportunità perse',
    desc: 'Ogni messaggio senza risposta rapida è un potenziale cliente che va dalla concorrenza. Fuori orario, il costo raddoppia.',
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 bg-[#070B14]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase opacity-80">
            Il problema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Ogni giorno perdi tempo prezioso.
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Non perché non sei bravo — ma perché stai facendo lavoro che una macchina può fare meglio di te.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={item}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-8 hover:border-cyan-500/20 hover:bg-cyan-500/[0.04] transition-all duration-300"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
