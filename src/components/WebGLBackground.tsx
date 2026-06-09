'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[2, 2]} />
      <meshStandardMaterial 
        color="#d1d5db" 
        wireframe={true} 
        transparent 
        opacity={0.4} 
      />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 800;
  const posArray = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for(let i=0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          count={particleCount}
          array={posArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#9ca3af" transparent opacity={0.6} />
    </points>
  );
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#fafafa]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <AbstractShape />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
