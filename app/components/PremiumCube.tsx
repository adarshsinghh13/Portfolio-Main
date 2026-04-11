"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Cube() {
  const groupRef = useRef<THREE.Group | null>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    timeRef.current += delta;
    const time = timeRef.current;

    // smooth rotation
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x =
      Math.sin(time * 0.4) * 0.2 + 0.25;

    // floating
    groupRef.current.position.y =
      Math.sin(time * 1.2) * 0.08;
  });

  const cubes = [];
  const spacing = 0.5;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push(
          <mesh
            key={`${x}-${y}-${z}`}
            position={[x * spacing, y * spacing, z * spacing]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.45, 0.45, 0.45]} />
            <meshStandardMaterial
              color="#000000"
              roughness={0.08}
              metalness={1}
            />
          </mesh>
        );
      }
    }
  }

  return <group ref={groupRef}>{cubes}</group>;
}

export default function PremiumCube({
  containerSize = 240,
}: {
  containerSize?: number;
}) {
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ width: containerSize, height: containerSize }}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[320px] h-[320px] bg-white/10 blur-[140px] rounded-full" />

      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 45 }}
      >
        {/* LIGHTING */}
        <ambientLight intensity={0.15} />

        <directionalLight
          position={[2, 5, 3]}
          intensity={2.2}
          color="#ffffff"
        />

        <directionalLight
          position={[-3, 2, -3]}
          intensity={1.2}
          color="#ffffff"
        />

        <directionalLight
          position={[0, -5, -5]}
          intensity={0.8}
          color="#ffffff"
        />

        {/* REFLECTION ENV */}
        <Environment preset="city" />

        {/* INTERACTION */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.6}
        />

        {/* CUBE */}
        <Cube />

        {/* SHADOW FLOOR */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.3, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}