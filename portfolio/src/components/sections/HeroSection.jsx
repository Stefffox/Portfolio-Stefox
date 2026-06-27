export function HeroSection({ stefoxImg }) {
  return (
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

      {stefoxImg && (
        <img
          src={stefoxImg}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-1/2 h-[85vh] w-auto hidden md:block pointer-events-none"
          style={{
            transform: 'translateY(-50%) translateX(-20%)',
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 52%, transparent 78%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />
      )}

      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 relative z-10 md:max-w-[55%]">
        <p data-hero="typewriter" style={{ '--delay': '150ms' }} className="font-mono text-sm text-amber-500/55 tracking-[0.3em] uppercase mb-6">
          Product Engineer · IA · Solo Maker
        </p>
        <h1 data-hero="slide-left" style={{ '--delay': '320ms' }} className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-8">
          Nathanaël<span className="text-slate-400">.</span>
        </h1>
        <p data-hero style={{ '--delay': '480ms' }} className="text-xl md:text-2xl text-slate-300 font-light max-w-lg leading-relaxed">
          Je construis des choses que l'on ne voit pas sur GitHub.
          <br />
          <span className="text-amber-400 font-medium">C'est le principe.</span>
        </p>
      </div>

      <div data-hero style={{ '--delay': '680ms' }} className="flex flex-col items-center pb-8 gap-2 relative z-10">
        <span className="text-xs font-mono tracking-widest text-slate-600">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
