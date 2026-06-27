import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState, useEffect } from 'react'

function ParticleField() {
  const groupRef = useRef()

  const { abovePos, belowPos } = useMemo(() => {
    const above = []
    const below = []

    for (let i = 0; i < 4; i++) {
      above.push(
        (Math.random() - 0.5) * 4,
        Math.random() * 0.9 + 0.3,
        (Math.random() - 0.5) * 4
      )
    }

    // sqrt(t) biases toward deep y: sparse near surface, dense at bottom
    for (let i = 0; i < 160; i++) {
      const y = -(Math.sqrt(Math.random()) * 3.3 + 0.12)
      const absY = Math.abs(y)
      const spread = 0.2 + absY * absY * 0.28
      below.push(
        (Math.random() - 0.5) * spread * 2,
        y,
        (Math.random() - 0.5) * spread * 2
      )
    }

    // Extra batch near the surface to fill the cone opening
    for (let i = 0; i < 22; i++) {
      const y = -(Math.random() * 0.85 + 0.12)
      const absY = Math.abs(y)
      const spread = 0.2 + absY * absY * 0.28
      below.push(
        (Math.random() - 0.5) * spread * 2,
        y,
        (Math.random() - 0.5) * spread * 2
      )
    }

    return {
      abovePos: new Float32Array(above),
      belowPos: new Float32Array(below),
    }
  }, [])

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[abovePos, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#94a3b8" size={0.12} sizeAttenuation transparent opacity={0.6} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[belowPos, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#f59e0b" size={0.09} sizeAttenuation transparent opacity={0.85} />
      </points>
    </group>
  )
}

export function IcebergCanvas() {
  const [repoCount, setRepoCount] = useState(8)
  const [privateCount, setPrivateCount] = useState(6)
  const [totalPrivate, setTotalPrivate] = useState(null)

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN
    if (token) {
      const headers = { Authorization: `Bearer ${token}` }
      Promise.all([
        fetch('https://api.github.com/user', { headers }).then(r => r.json()),
        fetch('https://api.github.com/user/repos?type=private&per_page=100', { headers }).then(r => r.json()),
      ])
        .then(([user, privateRepos]) => {
          setRepoCount(user.public_repos)
          if (Array.isArray(privateRepos)) {
            const oneMonthAgo = new Date()
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
            const active = privateRepos.filter(r => new Date(r.pushed_at) > oneMonthAgo)
            setPrivateCount(active.length)
            setTotalPrivate(privateRepos.length)
          }
        })
        .catch(() => {})
    } else {
      fetch('https://api.github.com/users/Stefffox')
        .then(r => r.json())
        .then(data => setRepoCount(data.public_repos))
        .catch(() => {})
    }
  }, [])

  return (
    <div className="relative w-full h-56 md:h-80 mb-10">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
      </Canvas>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
        <span className="text-xs text-cyan-500/35 font-mono px-4">~ surface ~</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
      </div>
      <div className="absolute top-5 left-6 pointer-events-none">
        <div className="text-xl font-black text-slate-600/50 font-mono leading-none">{repoCount} repos</div>
        <div className="text-xs text-slate-600/35 font-mono tracking-wider mt-1">visibles sur GitHub</div>
      </div>
      <div className="absolute bottom-10 left-6 pointer-events-none">
        <div className="text-4xl font-black text-amber-400 font-mono leading-none">{privateCount} projets</div>
        <div className="text-xs text-amber-600/60 font-mono tracking-wider mt-1">actifs ce mois-ci</div>
      </div>
      {totalPrivate !== null && (
        <div className="absolute bottom-10 right-6 text-right pointer-events-none">
          <div className="text-4xl font-black text-white/70 font-mono leading-none">{repoCount + totalPrivate}</div>
          <div className="text-xs text-slate-500/60 font-mono tracking-wider mt-1">repos au total</div>
        </div>
      )}
    </div>
  )
}
