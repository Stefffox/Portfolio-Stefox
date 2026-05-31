import { Tag } from '../ui/Tag';
import { BrowserMockup } from '../ui/BrowserMockup';
import { HSP_STACK, HSP_FEATURES } from '../../data/content';

function HSPContent() {
  return (
    <>
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
    </>
  );
}

export function HSPSection({ hspImg }) {
  return (
    <section
      id="hsp"
      className="snap-section w-full flex items-center relative overflow-hidden py-24 md:py-0"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f172a 100%)' }}
    >
      <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-3xl pointer-events-none" />

      {hspImg ? (
        <>
          <img
            src={hspImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 right-0 h-full w-auto max-w-[65%] object-cover hidden md:block opacity-40"
            style={{ maskImage: 'linear-gradient(to left, black 30%, transparent 88%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent pointer-events-none" />
          <div className="relative z-10 w-full md:w-1/2 px-8 md:pl-16 md:pr-4 section-animate">
            <HSPContent />
          </div>
        </>
      ) : (
        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center px-8 md:px-16">
          <div className="section-animate">
            <HSPContent />
          </div>
          <BrowserMockup src={null} alt="" placeholder="hsp.png" url="hsp-booking.vercel.app/analytics" />
        </div>
      )}
    </section>
  );
}
