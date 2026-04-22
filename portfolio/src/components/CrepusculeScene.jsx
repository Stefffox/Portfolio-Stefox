import { useEffect, useState } from 'react';

export function CrepusculeScene() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // On génère 20 feuilles individuelles
    const newLeaves = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 15 + 's',
      duration: 8 + Math.random() * 7 + 's',
      size: 25 + Math.random() * 25 + 'px',
      rotation: Math.random() * 360,
      // On alterne entre deux types de feuilles cartoon
      char: Math.random() > 0.5 ? '🍂' : '🍁' 
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#1e1b4b] pointer-events-none">
      {/* Fond dégradé crépuscule */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#431407] via-[#1e1b4b]/50 to-transparent opacity-90" />

      {/* Rendu des feuilles */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall select-none"
          style={{
            left: leaf.left,
            fontSize: leaf.size,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            opacity: 0.8,
            filter: 'drop-shadow(0 0 5px rgba(251, 146, 60, 0.2))', // Petite lueur chaude
          }}
        >
          {leaf.char}
        </div>
      ))}

      {/* Grain artistique */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}