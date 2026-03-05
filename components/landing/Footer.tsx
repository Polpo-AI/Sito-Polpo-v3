import Image from 'next/image';

const navLinks = [
  { label: 'Servizi', href: '#servizi' },
  { label: 'Esempio', href: '#esempio' },
  { label: 'Vantaggi', href: '#vantaggi' },
  { label: 'Contatti', href: '#contatti' },
];

export default function Footer() {
  return (
    <footer className="bg-[#07091A] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2">
              <div className="relative w-7 h-7">
                <Image src="/polpo.png" alt="PolpoAI" fill className="object-contain" />
              </div>
              <span className="text-lg font-bold text-white">
                Polpo<span className="text-cyan-400">AI</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Soluzioni AI su misura per il tuo business.
            </p>
            <a
              href="mailto:hello@polpoai.it"
              className="text-sm text-cyan-400/80 hover:text-cyan-400 transition-colors"
            >
              hello@polpoai.it
            </a>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} PolpoAI. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-slate-700">
            Powered by AI &mdash; Made in Italy
          </p>
        </div>
      </div>
    </footer>
  );
}
