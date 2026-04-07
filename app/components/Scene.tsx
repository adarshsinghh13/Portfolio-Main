"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

interface GlossyObjectProps {
  rotationY: number;
  rotationX: number;
  scale: number;
}

function GlossyObject({
  rotationY,
  rotationX,
  scale,
}: GlossyObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    const t = time.current;

    // ✅ custom float (replaces drei Float)
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.15;
      groupRef.current.rotation.y += delta * 0.1;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y = rotationY;
      meshRef.current.rotation.x = rotationX * 0.4;
      meshRef.current.scale.setScalar(scale);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -rotationY * 0.6;
      innerRef.current.rotation.z = rotationY * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = rotationY * 0.5;
      ringRef.current.rotation.x =
        Math.sin(t * 0.5) * 0.2 + 0.8;
    }
  });

  const icosaGeometry = useMemo(
    () => new THREE.IcosahedronGeometry(1.2, 1),
    []
  );

  const torusGeometry = useMemo(
    () => new THREE.TorusGeometry(1.9, 0.04, 16, 100),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Outer sphere (safe material) */}
      <mesh ref={meshRef} geometry={icosaGeometry}>
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={3}
        />
      </mesh>

      {/* Inner core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={1}
          roughness={0}
          emissive="#4040ff"
          emissiveIntensity={0.15}
          envMapIntensity={5}
        />
      </mesh>

      {/* Ring */}
      <mesh ref={ringRef} geometry={torusGeometry}>
        <meshStandardMaterial
          color="#222222"
          metalness={1}
          roughness={0.1}
          emissive="#6060ff"
          emissiveIntensity={0.08}
          envMapIntensity={4}
        />
      </mesh>

      {/* Satellites */}
      {[0, 1, 2].map((i) => (
        <SmallOrb key={i} index={i} baseRotation={rotationY} />
      ))}
    </group>
  );
}

function SmallOrb({
  index,
  baseRotation,
}: {
  index: number;
  baseRotation: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const time = useRef(0);

  const angle = (index / 3) * Math.PI * 2;
  const radius = 2.4;

  useFrame((_, delta) => {
    time.current += delta;

    const t = time.current + baseRotation * 0.3;

    if (ref.current) {
      ref.current.position.x = Math.cos(t + angle) * radius;
      ref.current.position.z = Math.sin(t + angle) * radius;
      ref.current.position.y =
        Math.sin(t * 1.5 + angle) * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#8888ff"
        emissiveIntensity={0.6}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

interface SceneProps {
  rotationY: number;
  rotationX: number;
  scale: number;
}

export default function Scene({
  rotationY,
  rotationX,
  scale,
}: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.15} />

      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight
        position={[-5, -3, -5]}
        intensity={0.4}
        color="#2244ff"
      />

      <pointLight position={[0, 0, 3]} intensity={0.8} />
      <pointLight position={[3, -2, -3]} intensity={0.5} />

      {/* Reflections */}
      <Environment preset="city" />

      <GlossyObject
        rotationY={rotationY}
        rotationX={rotationX}
        scale={scale}
      />
    </Canvas>
  );
}