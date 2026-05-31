import { Tag } from '../ui/Tag';
import { NAOS_STACK } from '../../data/content';

function NaosContent() {
  return (
    <>
      <p className="font-mono text-xs text-purple-400/55 tracking-[0.3em] uppercase mb-4">
        Projet · Repo privé · En production
      </p>
      <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">Naos</h2>
      <p className="text-purple-300 font-light text-2xl mb-8">Un binôme numérique</p>
      <p className="text-slate-300 leading-relaxed mb-10 text-base md:text-lg">
        Assistant IA personnel construit from scratch. Écoute en continu, parle en streaming phrase par phrase,
        mémorise via base vectorielle, contrôle Spotify et Steam. Tourne 24/7. Je l'utilise vraiment, tous les jours.
      </p>
      <div className="flex flex-wrap gap-3 mb-8">
        {NAOS_STACK.map(t => <Tag key={t} label={t} variant="purple" />)}
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        En veille · actif
      </div>
    </>
  );
}

export function NaosSection({ naosImg }) {
  return (
    <section
      id="naos"
      className="snap-section w-full flex items-center relative overflow-hidden py-24 md:py-0"
      style={{ background: '#0a0a1a' }}
    >
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-purple-600/12 blur-3xl pointer-events-none" />
      <div className="absolute left-[30%] top-1/3 w-64 h-64 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />

      {naosImg ? (
        <>
          <img
            src={naosImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 left-0 h-full w-auto max-w-[62%] object-cover hidden md:block"
            style={{ maskImage: 'linear-gradient(to right, black 30%, transparent 88%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a1a] via-[#0a0a1a]/75 to-transparent pointer-events-none" />
          <div className="relative z-10 ml-auto w-full md:w-1/2 px-8 md:pr-16 md:pl-4 section-animate">
            <NaosContent />
          </div>
        </>
      ) : (
        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center px-8 md:px-16">
          <div className="rounded-2xl aspect-video bg-purple-900/10 border border-purple-800/20 flex items-center justify-center">
            <span className="text-purple-600/40 text-sm font-mono">naos.png</span>
          </div>
          <div className="section-animate">
            <NaosContent />
          </div>
        </div>
      )}
    </section>
  );
}
