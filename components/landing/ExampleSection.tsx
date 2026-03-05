'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Brain, FileText, CircleCheck as CheckCircle, Send } from 'lucide-react';

const steps = [
  { icon: Mail, label: 'Email arriva', color: '#22d3ee' },
  { icon: Brain, label: 'AI legge e capisce', color: '#06b6d4' },
  { icon: FileText, label: 'Crea bozza', color: '#0ea5e9' },
  { icon: CheckCircle, label: 'Tu approvi', color: '#22d3ee' },
  { icon: Send, label: 'Invio', color: '#06b6d4' },
];

export default function ExampleSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="esempio" className="relative py-24 bg-[#07091A]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase opacity-80">
            Esempio di Assistente AI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Come lavora il tuo agente AI.
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            Prendi le email: le gestisce da solo, tu controlli solo il risultato finale.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.12 + 0.3 }}
                  className="relative flex flex-col items-center gap-3 z-10"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border border-cyan-500/20 bg-[#0A0F1E] relative"
                    style={{
                      boxShadow: `0 0 24px ${step.color}22`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-20"
                      style={{ background: `radial-gradient(circle at center, ${step.color}33, transparent)` }}
                    />
                    <Icon className="w-7 h-7 relative z-10" style={{ color: step.color }} strokeWidth={1.5} />
                  </div>

                  <span className="text-xs font-semibold text-slate-300 text-center max-w-[80px] leading-tight">
                    {step.label}
                  </span>

                  {idx < steps.length - 1 && (
                    <div className="md:hidden w-0.5 h-6 bg-gradient-to-b from-cyan-500/40 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 rounded-2xl border border-cyan-500/10 bg-white/[0.02] p-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              { value: '-80%', label: 'tempo su email' },
              { value: '0', label: 'errori di distrazione' },
              { value: '100%', label: 'controllo tuo' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-extrabold text-cyan-400">{stat.value}</span>
                <span className="text-sm text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 mt-8 max-w-lg mx-auto leading-relaxed">
            Risparmi tempo, fai meno errori e hai sempre il controllo. Il tuo AI agent fa il lavoro duro, tu prendi le decisioni.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
