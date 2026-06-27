import { IcebergCanvas } from '../IcebergCanvas'

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
        <h2 data-animate style={{ '--delay': '0ms' }} className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight">
          Mon GitHub a l'air calme.
        </h2>
        <p data-animate style={{ '--delay': '100ms' }} className="text-xl text-slate-500 mb-8 md:mb-10 font-light">
          Ce n'est pas là que ça se passe.
        </p>

        <IcebergCanvas />

        <div data-animate style={{ '--delay': '200ms' }} className="flex flex-wrap gap-10 md:gap-16 justify-center">
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
