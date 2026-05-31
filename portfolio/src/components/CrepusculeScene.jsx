import { usePortfolio } from '../hooks/usePortfolio';
import { SECTIONS } from '../data/content';
import { HeroSection }    from './sections/HeroSection';
import { IcebergSection } from './sections/IcebergSection';
import { NaosSection }    from './sections/NaosSection';
import { HSPSection }     from './sections/HSPSection';
import { AboutSection }   from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';

function Leaves({ leaves }) {
  return (
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
  );
}

function NavDots({ sections, activeSection, onDotClick }) {
  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 items-center">
      {sections.map((s, i) => (
        <button
          key={s.id}
          title={s.label}
          onClick={() => onDotClick(s.id)}
          className={`rounded-full transition-all duration-300 ${
            activeSection === i
              ? 'w-2.5 h-2.5 bg-amber-400'
              : 'w-2 h-2 bg-white/20 hover:bg-white/50'
          }`}
        />
      ))}
    </nav>
  );
}

export function CrepusculeScene() {
  const { containerRef, activeSection, leaves, images, scrollTo } = usePortfolio();

  return (
    <div ref={containerRef} className="snap-container w-screen">
      <NavDots sections={SECTIONS} activeSection={activeSection} onDotClick={scrollTo} />
      <Leaves leaves={leaves} />

      <HeroSection    stefoxImg={images.stefox} />
      <IcebergSection />
      <NaosSection    naosImg={images.naos} />
      <HSPSection     hspImg={images.hsp} />
      <AboutSection   />
      <ContactSection fursoImg={images.furso} />
    </div>
  );
}
