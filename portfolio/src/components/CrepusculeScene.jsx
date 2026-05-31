import { useEffect, useRef, useState } from 'react';

const LEAF_CHARS = ['🍂', '🍁'];

const SECTIONS = [
  { id: 'hero',    label: 'Accueil' },
  { id: 'iceberg', label: "L'iceberg" },
  { id: 'naos',    label: 'Naos' },
  { id: 'hsp',     label: 'HSP Booking' },
  { id: 'about',   label: 'À propos' },
  { id: 'contact', label: 'Contact' },
];

const NAOS_STACK = ['Python', 'Claude API', 'ElevenLabs TTS', 'faster-whisper', 'ChromaDB', 'PyQt6', 'OpenGL GLSL', 'Spotify API'];
const HSP_STACK  = ['React 19', 'TypeScript', 'Supabase', 'React Query', 'Zustand', 'Tailwind CSS', 'Stripe', 'Vercel'];
const HSP_FEATURES = [
  'Widget public multi-tenant par salon',
  'Isolation RLS PostgreSQL stricte',
  'Stripe · acomptes · multi-devise CHF/EUR',
  'Notifications email auto (J-1 / H-2)',
  'Calendrier admin (mois / semaine / jour)',
  'Analytics · export CSV · PWA',
  'Performances ÷4 (1 378 → 280 req/h)',
];
const LANGUAGES = ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP', 'HTML/CSS'];
const TOOLS     = ['VS Code', 'Godot', 'Supabase', 'Vercel', 'Git'];

// ─── Composants utilitaires ───────────────────────────────────────────────────

function Tag({ label, variant = 'default' }) {
  const styles = {
    default: 'bg-slate-800/50 text-slate-400 border-slate-700/30',
    purple:  'bg-purple-900/40 text-purple-300 border-purple-700/30',
    amber:   'bg-amber-900/20 text-amber-300 border-amber-700/20',
    dimmed:  'bg-slate-800/30 text-slate-500 border-slate-700/20',
  };
  return (
    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${styles[variant]}`}>
      {label}
    </span>
  );
}

function ProjectImg({ src, alt, placeholder }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="rounded-2xl w-full aspect-video object-cover shadow-2xl shadow-black/60 border border-white/8"
      />
    );
  }
  return (
    <div className="rounded-2xl w-full aspect-video bg-white/4 border border-white/8 flex items-center justify-center">
      <span className="text-slate-600 text-xs font-mono">{placeholder}</span>
    </div>
  );
}

function BrowserMockup({ src, alt, placeholder, url = 'app' }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-3 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
        </div>
        <div className="flex-1 bg-slate-700/50 rounded text-xs text-slate-500 font-mono px-3 py-1 truncate">
          {url}
        </div>
      </div>
      <div className="overflow-hidden max-h-[48vh]">
        {src ? (
          <img src={src} alt={alt} className="w-full" />
        ) : (
          <div className="aspect-video bg-white/4 flex items-center justify-center">
            <span className="text-slate-600 text-xs font-mono">{placeholder}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export function CrepusculeScene() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [leaves,        setLeaves]        = useState([]);
  const [images,        setImages]        = useState({});

  useEffect(() => {
    setLeaves(
      Array.from({ length: 12 }, (_, i) => ({
        id:       i,
        left:     `${5 + Math.random() * 88}%`,
        delay:    `${Math.random() * 16}s`,
        duration: `${9 + Math.random() * 8}s`,
        size:     `${1.1 + Math.random() * 1.1}rem`,
        char:     LEAF_CHARS[Math.floor(Math.random() * LEAF_CHARS.length)],
      }))
    );

    [
      ['naos',   () => import('../assets/naos.png')],
      ['hsp',    () => import('../assets/hsp.png')],
      ['furso',  () => import('../assets/furso.png')],
      ['stefox', () => import('../assets/stefox.png')],
    ].forEach(([key, load]) => {
      load()
        .then(m => setImages(prev => ({ ...prev, [key]: m.default })))
        .catch(() => {});
    });

    // Suivi de section — actif seulement sur desktop (snap-container scrolle)
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const idx = Math.round(container.scrollTop / container.clientHeight);
      setActiveSection(Math.min(idx, SECTIONS.length - 1));
    };

    container.addEventListener('scroll', onScroll, { passive: true });

    // Animations d'entrée — observe chaque section sauf le hero (toujours visible)
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.querySelectorAll('.section-animate').forEach(el => el.classList.add('is-visible'));
          }
        });
      },
      { threshold: 0.2 }
    );

    ['iceberg', 'naos', 'hsp', 'about', 'contact'].forEach(id => {
      const el = container.querySelector(`#${id}`);
      if (el) animObserver.observe(el);
    });

    return () => {
      container.removeEventListener('scroll', onScroll);
      animObserver.disconnect();
    };
  }, []);

  function scrollTo(id) {
    containerRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div ref={containerRef} className="snap-container w-screen">

      {/* ── Dots — desktop uniquement ────────────────────────────────── */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 items-center">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            title={s.label}
            onClick={() => scrollTo(s.id)}
            className={`rounded-full transition-all duration-300 ${
              activeSection === i
                ? 'w-2.5 h-2.5 bg-amber-400'
                : 'w-2 h-2 bg-white/20 hover:bg-white/50'
            }`}
          />
        ))}
      </nav>

      {/* ── Feuilles ─────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {leaves.map(leaf => (
          <div
            key={leaf.id}
            className="animate-fall select-none"
            style={{
              left:              leaf.left,
              fontSize:          leaf.size,
              animationDelay:    leaf.delay,
              animationDuration: leaf.duration,
              opacity:           0.5,
            }}
          >
            {leaf.char}
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════
          1 — HERO  (h-screen mobile + desktop, toujours plein écran)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="snap-section h-screen w-full flex flex-col relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 130% 65% at 50% 115%, #7c2d12 0%, #431407 18%, #312168 52%, #1e1b4b 100%)' }}
      >
        <nav className="flex justify-between items-center px-8 md:px-16 py-6 relative z-20">
          <span className="font-mono text-sm text-amber-400/40 tracking-widest">STÉFOX · 2026</span>
          <div className="flex gap-6 text-sm font-mono">
            <a href="https://github.com/Stefffox" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/nathanael-daunis-726665296/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-400 transition-colors">LinkedIn</a>
          </div>
        </nav>

        {/* Logo - droite, bord gauche fondu pour éviter le cut dur */}
        {images.stefox && (
          <img
            src={images.stefox}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[75vh] w-auto hidden md:block pointer-events-none opacity-60"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in',
            }}
          />
        )}

        {/* Texte — contenu dans la moitié gauche, poussé vers le haut */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 relative z-10 md:max-w-[55%]">
          <p className="font-mono text-sm text-amber-500/55 tracking-[0.3em] uppercase mb-6">
            Product Engineer · IA · Solo Maker
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-8">
            Nathanaël<br />
            <span className="text-slate-400">Daunis.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-lg leading-relaxed">
            Je construis des choses que l'on ne voit pas sur GitHub.
            <br />
            <span className="text-amber-400 font-medium">C'est le principe.</span>
          </p>
        </div>

        <div className="flex flex-col items-center pb-8 gap-2 relative z-10">
          <span className="text-xs font-mono tracking-widest text-slate-600">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2 — L'ICEBERG
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="iceberg"
        className="snap-section w-full flex items-center px-8 md:px-16 py-24 md:py-0"
        style={{ background: 'linear-gradient(to bottom, #1e1b4b 0%, #0f172a 100%)' }}
      >
        <div className="max-w-4xl w-full mx-auto section-animate">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight">
            Mon GitHub a l'air calme.
          </h2>
          <p className="text-xl text-slate-500 mb-12 md:mb-16 font-light">Ce n'est pas là que ça se passe.</p>

          <div className="flex gap-16 md:gap-28 mb-10 justify-center opacity-40">
            {[['4', 'repos publics'], ['∅', 'graphe visible']].map(([stat, label]) => (
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
            {[
              ['24/7',  'assistant IA en prod'],
              ['SaaS',  'client réel · déployé'],
              ['solo',  'conception / livraison'],
              ['local', 'GPU · STT · LLM · TTS'],
            ].map(([stat, label]) => (
              <div key={stat} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-amber-400 font-mono">{stat}</div>
                <div className="text-xs text-amber-600/60 font-mono mt-2 tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3 — NAOS
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="naos"
        className="snap-section w-full flex items-center relative overflow-hidden py-24 md:py-0"
        style={{ background: '#0a0a1a' }}
      >
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-purple-600/12 blur-3xl pointer-events-none" />
        <div className="absolute left-[30%] top-1/3 w-64 h-64 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />

        {images.naos ? (
          <>
            <img
              src={images.naos}
              alt=""
              aria-hidden="true"
              className="absolute inset-y-0 left-0 h-full w-auto max-w-[62%] object-cover hidden md:block"
              style={{ maskImage: 'linear-gradient(to right, black 30%, transparent 88%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a1a] via-[#0a0a1a]/75 to-transparent pointer-events-none" />

            <div className="relative z-10 ml-auto w-full md:w-1/2 px-8 md:pr-16 md:pl-4 section-animate">
              <p className="font-mono text-xs text-purple-400/55 tracking-[0.3em] uppercase mb-4">
                Projet · Repo privé · En production
              </p>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">Naos</h2>
              <p className="text-purple-300 font-light text-2xl mb-8">Un binôme numérique</p>
              <p className="text-slate-300 leading-relaxed mb-10 text-base md:text-lg">
                Assistant IA personnel construit from scratch. Écoute en continu, parle en streaming phrase par phrase, mémorise via base vectorielle, contrôle Spotify et Steam. Tourne 24/7. Je l'utilise vraiment, tous les jours.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {NAOS_STACK.map(t => <Tag key={t} label={t} variant="purple" />)}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                En veille · actif
              </div>
            </div>
          </>
        ) : (
          <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center px-8 md:px-16">
            <div className="rounded-2xl aspect-video bg-purple-900/10 border border-purple-800/20 flex items-center justify-center">
              <span className="text-purple-600/40 text-sm font-mono">naos.png</span>
            </div>
            <div>
              <p className="font-mono text-xs text-purple-400/55 tracking-[0.3em] uppercase mb-3">
                Projet · Repo privé · En production
              </p>
              <h2 className="text-5xl font-black text-white mb-2 tracking-tight">Naos</h2>
              <p className="text-purple-300 font-light text-xl mb-6">Un binôme numérique</p>
              <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                Assistant IA personnel construit from scratch. Écoute en continu, parle en streaming phrase par phrase, mémorise via base vectorielle, contrôle Spotify et Steam. Tourne 24/7.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {NAOS_STACK.map(t => <Tag key={t} label={t} variant="purple" />)}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4 — HSP BOOKING
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="hsp"
        className="snap-section w-full flex items-center relative overflow-hidden py-24 md:py-0"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f172a 100%)' }}
      >
        {/* Ambient glow */}
        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-3xl pointer-events-none" />

        {images.hsp ? (
          /* ── Avec image : dashboard en fond, texte à gauche ── */
          <>
            <img
              src={images.hsp}
              alt=""
              aria-hidden="true"
              className="absolute inset-y-0 right-0 h-full w-auto max-w-[65%] object-cover hidden md:block opacity-40"
              style={{ maskImage: 'linear-gradient(to left, black 35%, transparent 90%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent pointer-events-none" />

            <div className="relative z-10 w-full md:w-1/2 px-8 md:pl-16 md:pr-4 section-animate">
              <p className="font-mono text-xs text-slate-500 tracking-[0.3em] uppercase mb-3">
                SaaS · Seul développeur · Déployé
              </p>
              <h2 className="text-5xl font-black text-white mb-2 tracking-tight">HSP Booking</h2>
              <p className="text-slate-400 font-light text-lg mb-6">
                Réservation multi-tenant pour salons de coiffure
              </p>
              <ul className="space-y-1.5 mb-6">
                {HSP_FEATURES.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-amber-500 mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {HSP_STACK.map(t => <Tag key={t} label={t} />)}
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Marque <span className="text-slate-400">Helvetia Strategy Partners</span> · client genevois
              </p>
            </div>
          </>
        ) : (
          /* ── Sans image : grid avec browser mockup placeholder ── */
          <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center px-8 md:px-16">
            <div>
              <p className="font-mono text-xs text-slate-500 tracking-[0.3em] uppercase mb-3">
                SaaS · Seul développeur · Déployé
              </p>
              <h2 className="text-5xl font-black text-white mb-2 tracking-tight">HSP Booking</h2>
              <p className="text-slate-400 font-light text-lg mb-6">
                Réservation multi-tenant pour salons de coiffure
              </p>
              <ul className="space-y-1.5 mb-6">
                {HSP_FEATURES.map(item => (
                  <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-amber-500 mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {HSP_STACK.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
            <BrowserMockup src={null} alt="" placeholder="hsp.png" url="hsp-booking.vercel.app/analytics" />
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5 — À PROPOS + STACK
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="about"
        className="snap-section w-full flex items-center px-8 md:px-16 py-24 md:py-0 relative"
        style={{ background: 'linear-gradient(to bottom, #2c1f10 0%, #1e1409 100%)' }}
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center section-animate">
          <div>
            <p className="font-mono text-xs text-amber-500/45 tracking-[0.3em] uppercase mb-4">
              BUT Info 2ème année · Toulouse
            </p>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              Je programme<br />à <span className="text-amber-400">ma sauce</span>.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-5">
              La rigueur du code, la vision produit, et la curiosité de quelqu'un qui construit ses propres outils pour se dépasser. Naos c'est mon quotidien. HSP Booking, ma première vraie commande client.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Je pilote l'architecture, j'utilise l'IA pour penser plus vite,
              pas pour coder à ma place. Deux outils complémentaires, pas interchangeables.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { label: 'Langages', items: LANGUAGES, variant: 'amber'  },
              { label: 'Outils',   items: TOOLS,     variant: 'dimmed' },
            ].map(({ label, items, variant }) => (
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

      {/* ══════════════════════════════════════════════════════════════
          6 — CONTACT + STÉFOX
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="snap-section w-full flex items-center px-8 md:px-16 py-24 md:py-0 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 130% 65% at 50% 115%, #7c2d12 0%, #431407 18%, #312168 52%, #1e1b4b 100%)' }}
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center section-animate">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
              On construit quelque chose ?
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-light">
              Collaboration, stage, projet commun... je suis là.
            </p>

            <div className="flex flex-col gap-3 max-w-sm mb-10">
              <a
                href="https://github.com/Stefffox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-amber-500/30 transition-all group"
              >
                <span className="font-mono text-white text-sm">GitHub · Stefffox</span>
                <span className="text-slate-500 group-hover:text-amber-400 transition-colors">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nathanael-daunis-726665296/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-amber-500/30 transition-all group"
              >
                <span className="font-mono text-white text-sm">LinkedIn · Nathanaël Daunis</span>
                <span className="text-slate-500 group-hover:text-amber-400 transition-colors">→</span>
              </a>
              <a
                href="mailto:nathanaeldaunis@gmail.com"
                className="flex items-center justify-between p-4 rounded-xl bg-amber-900/20 hover:bg-amber-900/30 border border-amber-800/25 hover:border-amber-500/40 transition-all group"
              >
                <span className="font-mono text-amber-300 text-sm">nathanaeldaunis@gmail.com</span>
                <span className="text-amber-500 group-hover:text-amber-300 transition-colors">✉</span>
              </a>
            </div>

            <div className="border-t border-white/5 pt-7">
              <p className="text-xs text-slate-600 font-mono tracking-wider uppercase mb-2">En ligne</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Je suis aussi <span className="text-slate-400 font-medium">Stéfox</span>, wolf/fox, créateur solo en devenir, quelque part entre un orbe IA et une vue de skyline en hauteur.
              </p>
            </div>
          </div>

          {/* Furso — desktop uniquement, fondu radial sur le fond orange */}
          <div className="hidden md:flex items-center justify-center relative">
            {images.furso ? (
              <>
                <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
                <img
                  src={images.furso}
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
          © 2026 - Nathanaël Daunis · Stéfox
        </p>
      </section>
    </div>
  );
}
