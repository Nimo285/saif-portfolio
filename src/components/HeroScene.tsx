import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GridPlane() {
  const ref = useRef<THREE.GridHelper>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.3) % 2;
    }
  });
  return (
    <gridHelper
      ref={ref}
      args={[40, 40, "#1a1a1a", "#111111"]}
      rotation={[0, 0, 0]}
      position={[0, -2, 0]}
    />
  );
}

function FloatingGeometry({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function Particles({ count = 100 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return positions;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={points} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#333333" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

const HeroScene = () => (
  <div className="absolute inset-0 -z-10">
    <Canvas camera={{ position: [0, 1, 5], fov: 55 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={0.15} color="#d4a843" />

      <FloatingGeometry position={[-3, 1.5, -3]} color="#ffffff" speed={0.8} />
      <FloatingGeometry position={[3, -0.5, -4]} color="#d4a843" speed={1.2} />
      <FloatingGeometry position={[1, 2.5, -5]} color="#888888" speed={0.6} />
      <FloatingGeometry position={[-1.5, -1, -2]} color="#d4a843" speed={1} />
      <GridPlane />
      <Particles />
    </Canvas>
  </div>
);

export default HeroScene;
