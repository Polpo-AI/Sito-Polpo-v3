'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SlidersHorizontal, Zap, Headphones as HeadphonesIcon } from 'lucide-react';

const items = [
  {
    icon: SlidersHorizontal,
    title: 'Approccio su misura',
    desc: 'Niente soluzioni preconfezionate. Ascoltiamo il tuo business e costruiamo esattamente quello che ti serve.',
  },
  {
    icon: Zap,
    title: 'Velocità',
    desc: 'Lavoriamo in modo snello e rapido. Dal primo incontro al go-live, passiamo ai fatti senza perdere tempo.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Supporto completo',
    desc: 'Non ti lasciamo solo dopo il lancio. Siamo con te per ogni aggiornamento, domanda o nuova esigenza.',
  },
];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 bg-[#07091A]">
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            <span className="text-white font-semibold">Progetti su misura,</span> pensati per il tuo settore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-12 h-px bg-cyan-500/40 mx-auto mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.12 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white">{it.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
