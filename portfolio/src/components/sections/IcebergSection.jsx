const ABOVE = [
  ['4', 'repos publics'],
  ['∅', 'graphe visible'],
];

const BELOW = [
  ['24/7',  'assistant IA en prod'],
  ['SaaS',  'client réel · déployé'],
  ['solo',  'conception / livraison'],
  ['local', 'GPU · STT · LLM · TTS'],
];

export function IcebergSection() {
  return (
    <section
      id="iceberg"
      className="snap-section w-full flex items-center px-8 md:px-16 py-24 md:py-0"
      style={{ background: 'linear-gradient(to bottom, #1e1b4b 0%, #0f172a 100%)' }}
    >
      <div className="max-w-4xl w-full mx-auto section-animate">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight">
          Mon GitHub a l'air calme.
        </h2>
        <p className="text-xl text-slate-500 mb-12 md:mb-16 font-light">
          Ce n'est pas là que ça se passe.
        </p>

        <div className="flex gap-16 md:gap-28 mb-10 justify-center opacity-40">
          {ABOVE.map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-slate-500 font-mono">{stat}</div>
              <div className="text-xs text-slate-600 font-mono mt-2 tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        <div className="relative py-2 mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
          <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs text-cyan-500/35 font-mono bg-[#0f172a] px-4">
            ~ surface ~
          </span>
        </div>

        <div className="flex flex-wrap gap-10 md:gap-16 justify-center">
          {BELOW.map(([stat, label]) => (
            <div key={stat} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-amber-400 font-mono">{stat}</div>
              <div className="text-xs text-amber-600/60 font-mono mt-2 tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
