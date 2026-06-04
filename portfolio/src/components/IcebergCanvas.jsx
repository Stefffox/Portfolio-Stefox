import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function IcebergMesh() {
  const bobRef = useRef()
  useFrame(({ clock }) => {
    bobRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.06
  })
  return (
    <group ref={bobRef}>
      <mesh position={[0, 0.9, 0]} scale={[0.42, 0.52, 0.38]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#dde4ed" roughness={0.25} metalness={0.15} />
      </mesh>
      <mesh position={[0.1, -1.5, -0.1]} scale={[1.25, 1.9, 1.05]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#d97706" roughness={0.55} transparent opacity={0.9} />
      </mesh>
    </group>
  )
}

export function IcebergCanvas() {
  return (
    <div className="relative w-full h-52 md:h-72 mb-10">
      <Canvas
        camera={{ position: [0, 0.8, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 3]} intensity={1.1} />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#6d28d9" />
        <IcebergMesh />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
        <span className="text-xs text-cyan-500/35 font-mono px-4">~ surface ~</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
      </div>
    </div>
  )
}
