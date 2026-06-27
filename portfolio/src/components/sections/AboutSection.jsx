import { Tag } from '../ui/Tag';
import { LANGUAGES, TOOLS } from '../../data/content';

const SKILL_GROUPS = [
  { label: 'Langages', items: LANGUAGES, variant: 'amber'  },
  { label: 'Outils',   items: TOOLS,     variant: 'dimmed' },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="snap-section w-full flex items-center px-8 md:px-16 py-24 md:py-0 relative"
      style={{ background: 'linear-gradient(to bottom, #131320 0%, #0e0e1a 100%)' }}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center section-animate">
        <div>
          <p data-animate="typewriter" style={{ '--delay': '0ms' }} className="font-mono text-xs text-amber-500/45 tracking-[0.3em] uppercase mb-4">
            BUT Info 2ème année · Toulouse
          </p>
          <h2 data-animate="slide-left" style={{ '--delay': '120ms' }} className="text-4xl font-black text-white mb-6 leading-tight">
            Je programme<br />à <span className="text-amber-400">ma sauce</span>.
          </h2>
          <p data-animate style={{ '--delay': '220ms' }} className="text-slate-300 leading-relaxed mb-5">
            La rigueur du code, la vision produit, et la curiosité de quelqu'un qui construit
            ses propres outils pour se dépasser. Naos c'est mon quotidien.
            HSP Booking, ma première vraie commande client.
          </p>
          <p data-animate style={{ '--delay': '320ms' }} className="text-slate-500 text-sm leading-relaxed">
            Je pilote l'architecture, j'utilise l'IA pour penser plus vite,
            pas pour coder à ma place. Deux outils complémentaires, pas interchangeables.
          </p>
        </div>

        <div data-animate="pop" style={{ '--delay': '220ms' }} className="space-y-5">
          {SKILL_GROUPS.map(({ label, items, variant }) => (
            <div key={label}>
              <p className="text-xs font-mono text-amber-600/55 tracking-wider uppercase mb-3">{label}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(l => <Tag key={l} label={l} variant={variant} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
