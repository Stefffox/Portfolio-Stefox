import { useEffect, useState } from 'react';
import forestA from '../assets/forest_dusk_A.svg'; 
import forestB from '../assets/forest_dusk_B.svg'; 

export function CrepusculeScene() {
  // --- SYSTÈME DE FEUILLES ---
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    setLeaves(Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 10 + 's',
      duration: 6 + Math.random() * 4 + 's',
      size: 20 + Math.random() * 30 + 'px',
      rotation: Math.random() * 360 + 'deg',
      char: Math.random() > 0.5 ? '🍂' : '🍁'
    })));
  }, []);

  return (
    <div className="h-screen w-screen overflow-y-scroll scroll-snap-y-mandatory scroll-smooth bg-[#1e1b4b] selection:bg-amber-500/30">
      
      {/* SECTION 1 : L'ENTRÉE */}
    <section 
    className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center scroll-snap-align-start relative px-4"
    style={{ backgroundImage: `url(${forestA})` }}
    >
    <div className="z-20 text-center space-y-2">
        {/* Blanc pur + Grosse ombre pour contrer les détails du fond */}
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        Nathanaël DAUNIS
        </h1>
        {/* On passe sur un blanc cassé très lumineux au lieu du orange */}
        <p className="text-slate-100 font-mono text-sm md:text-xl tracking-[0.2em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        Programmeur Gameplay // Développeur IA
        </p>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent opacity-90" />
    </section>

    {/* SECTION 2 : LE CŒUR */}
    <section 
    className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center scroll-snap-align-start relative px-6"
    style={{ backgroundImage: `url(${forestB})` }}
    >
    <div className="z-20 w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Bloc Parcours : Fond plus sombre pour faire ressortir le blanc */}
        <div className="bg-black/60 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">Parcours</h2>
        <p className="text-white font-medium text-lg">
            Étudiant en 2ème année de <span className="text-amber-400">BUT Informatique</span>
        </p>
        <p className="text-slate-200 text-sm mt-4 leading-relaxed italic">
            "L'alliance de la technique et de la créativité."
        </p>
        </div>

        {/* Bloc Contact : Boutons contrastés */}
        <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Contact</h2>
        
        <a href="#" className="bg-white text-black font-bold p-4 rounded-2xl transition-all flex items-center justify-between hover:bg-amber-400">
            <span className="font-mono">GITHUB</span>
            <span>→</span>
        </a>
        
        <a href="#" className="bg-white/10 backdrop-blur-md text-white border border-white/20 p-4 rounded-2xl transition-all flex items-center justify-between hover:bg-white/20">
            <span className="font-mono tracking-widest">LINKEDIN</span>
            <span>→</span>
        </a>

        <a href="mailto:ton-email@mail.com" className="bg-[#431407] text-white border border-amber-900/50 p-4 rounded-2xl transition-all flex items-center justify-between hover:border-amber-500">
            <span className="font-mono text-xs overflow-hidden">nathanaeldaunis@gmail.com</span>
            <span className="text-amber-500">✉</span>
        </a>
        </div>
    </div>

    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
    </section>

      {/* --- FEUILLES FIXES --- */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute animate-fall select-none"
            style={{
              left: leaf.left,
              fontSize: leaf.size,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
              transform: `rotate(${leaf.rotation})`,
              opacity: 0.7,
            }}
          >
            {leaf.char}
          </div>
        ))}
      </div>
    </div>
  );
}