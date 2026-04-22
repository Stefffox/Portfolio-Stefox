import { CrepusculeScene } from './components/CrepusculeScene'
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg- feu-brune/30 overflow-x-hidden">
      
      {/* NOTRE SCÈNE D'AMBIANCE 3D (elle est derrière tout le reste) */}
      <CrepusculeScene />

      {/* --- LE CONTENU HTML (il est devant) --- */}
      <div className="relative z-10">
        
        {/* NAVBAR (Lisibilité renforcée pour fond illustré) */}
{/* NAVBAR (Contraste Complémentaire) */}
<nav className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-white/10 backdrop-blur-md bg-[#1e1b4b]/20 sticky top-0 z-50">
  <div className="text-xl font-black font-mono tracking-tighter bg-gradient-to-r from-cyan-200 via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
    NATHANAËL // L'AMBROISIE
  </div>
  <div className="space-x-8 text-sm font-bold text-cyan-50 drop-shadow-[0_1px_5px_rgba(0,0,0,1)]">
    <a href="#" className="hover:text-amber-400 transition-colors">Mes Créas</a>
    <a href="#" className="hover:text-amber-400 transition-colors">Gameplay</a>
    <a href="#" className="hover:text-amber-400 transition-colors">IA</a>
  </div>
</nav>

        <main className="max-w-6xl mx-auto px-6 py-32">
          
          {/* HERO SECTION (Texte plus "organique") */}
          <section className="mb-32">
            <h2 className="text-sm font-mono text-feuille-brune mb-2">{">"} Au cœur du crépuscule</h2>
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter mb-8 leading-none">
              Nathanaël<br />
              <span className="text-slate-400">Dev. Art. Sound.</span>
            </h1>
            <p className="max-w-2xl text-xl text-slate-200 leading-relaxed font-light">
              Étudiant en BUT Info à Toulouse. Je sculpte des mondes virtuels où la rigueur du code 
              rencontre la mélancolie d'un dessin à l'encre et la vibration d'une note de piano. 
              <span className="text-feuille-brune font-medium"> C'est ça, ma sauce.</span>
            </p>
            
            <div className="mt-12 flex gap-5">
              <button className="bg-feuille-brune hover:bg-feuille-rouge text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-feuille-brune/20 hover:scale-105">
                Explorer l'Ambroisie
              </button>
              <button className="border-2 border-slate-700 hover:border-feuille-brune text-white px-10 py-4 rounded-xl font-bold transition-all">
                Mon Setup / Outils
              </button>
            </div>
          </section>

          {/* GRID "À MA SAUCE" (Cartes plus "organiques") */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card Gameplay */}
            <div className="group p-10 bg-black/30 backdrop-blur-lg border border-white/5 rounded-3xl hover:border-feuille-brune/50 transition-all hover:scale-105 hover:-translate-y-1">
              <div className="text-4xl mb-6 opacity-80 group-hover:scale-125 transition-transform">🌿</div>
              <h3 className="text-2xl font-bold text-white mb-3">Moteur & Gameplay</h3>
              <p className="text-base text-slate-300">C++ / C#. Je crée la physique, le "feel" et les interactions qui donnent vie à un univers.</p>
            </div>

            {/* Card IA */}
            <div className="group p-10 bg-black/30 backdrop-blur-lg border border-white/5 rounded-3xl hover:border-feuille-rouge/50 transition-all hover:scale-105 hover:-translate-y-1">
              <div className="text-4xl mb-6 opacity-80 group-hover:scale-125 transition-transform">🍂</div>
              <h3 className="text-2xl font-bold text-white mb-3">IA & Comportement</h3>
              <p className="text-base text-slate-300">Algorithmes d'agents autonomes. Je code l'âme des PNJs pour qu'ils s'intègrent dans le crépuscule.</p>
            </div>

            {/* Card Créa */}
            <div className="group p-10 bg-black/30 backdrop-blur-lg border border-white/5 rounded-3xl hover:border-feuille-brune/50 transition-all hover:scale-105 hover:-translate-y-1">
              <div className="text-4xl mb-6 opacity-80 group-hover:scale-125 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">Art & Son</h3>
              <p className="text-base text-slate-300">Dessin numérique et composition. C'est là que je mets mes dessins et mes musiques.</p>
            </div>

          </div>

        </main>

        {/* Footer minimaliste et chaud */}
        <footer className="py-12 text-center text-feuille-brune/50 text-xs border-t border-white/5 mt-24">
          © 2026 — Ambroisie & Code au Crépuscule d'Automne
        </footer>

      </div>
    </div>
  )
}

export default App