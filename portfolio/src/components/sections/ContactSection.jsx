const LINKS = [
  {
    href:  'https://github.com/Stefffox',
    label: 'GitHub · Stefffox',
    className: 'bg-white/5 hover:bg-white/10 border-white/8 hover:border-amber-500/30',
    arrow: 'text-slate-500 group-hover:text-amber-400',
  },
  {
    href:  'https://www.linkedin.com/in/nathanael-daunis-726665296/',
    label: 'LinkedIn · Nathanaël Daunis',
    className: 'bg-white/5 hover:bg-white/10 border-white/8 hover:border-amber-500/30',
    arrow: 'text-slate-500 group-hover:text-amber-400',
  },
  {
    href:  'https://stefox.vercel.app/cv',
    label: 'Curriculum Vitae',
    className: 'bg-white/5 hover:bg-white/10 border-white/8 hover:border-amber-500/30',
    arrow: 'text-slate-500 group-hover:text-amber-400',
    icon:  '↓',
  },
  {
    href:  'mailto:nathanaeldaunis@gmail.com',
    label: 'nathanaeldaunis@gmail.com',
    className: 'bg-amber-900/20 hover:bg-amber-900/30 border-amber-800/25 hover:border-amber-500/40',
    arrow: 'text-amber-500 group-hover:text-amber-300',
    icon:  '✉',
  },
];

export function ContactSection({ fursoImg }) {
  return (
    <section
      id="contact"
      className="snap-section w-full flex items-center px-8 md:px-16 py-24 md:py-0 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 130% 65% at 50% 115%, #7c2d12 0%, #431407 18%, #312168 52%, #1e1b4b 100%)' }}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center section-animate">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-700/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-mono">Disponible · alternance sept. 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
            On construit quelque chose ?
          </h2>
          <p className="text-slate-400 text-lg mb-10 font-light">
            Alternance, collaboration, projet commun. Je suis là.
          </p>

          <div className="flex flex-col gap-3 max-w-sm mb-10">
            {LINKS.map(({ href, label, className, arrow, icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all group ${className}`}
              >
                <span className="font-mono text-white text-sm">{label}</span>
                <span className={`transition-colors ${arrow}`}>{icon ?? '→'}</span>
              </a>
            ))}
          </div>

          <div className="border-t border-white/5 pt-7">
            <p className="text-xs text-slate-600 font-mono tracking-wider uppercase mb-2">En ligne</p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Je suis aussi <span className="text-slate-400 font-medium">Stéfox</span>, wolf/fox,
              créateur solo en devenir, quelque part entre un orbe IA et une vue de skyline en hauteur.
            </p>
            <a
              href="https://lonearc.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors group"
            >
              lonearc.io
              <span className="group-hover:text-amber-400 transition-colors">→</span>
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center relative">
          {fursoImg ? (
            <>
              <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
              <img
                src={fursoImg}
                alt="Kohaku, fursona de Stéfox"
                className="relative max-h-[420px] object-contain"
                style={{ maskImage: 'radial-gradient(ellipse 78% 72% at 50% 42%, black 45%, transparent 100%)' }}
              />
            </>
          ) : (
            <div className="w-64 h-64 rounded-3xl border border-amber-700/10 bg-amber-900/5 flex items-center justify-center">
              <span className="text-amber-700/25 text-xs font-mono">furso.png</span>
            </div>
          )}
        </div>
      </div>

      <p className="absolute bottom-6 left-0 right-0 text-center text-slate-700 text-xs font-mono">
        © 2026 - Nathanaël · Stéfox
      </p>
    </section>
  );
}
