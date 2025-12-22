import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, type FC } from "react";
import { AdditiveBlending } from "three";

import { useExplosionFrame } from "@/features/simulator/supernova/viewport/model/hooks/use-explosion-frame";

type Props = {
  mass: number;
  onComplete: () => void;
};

export const StarExplosion: FC<Props> = ({ mass, onComplete }) => {
  const fire = useTexture("/fire.png");
  const radius = Math.pow(mass, 0.8);

  const flashRef = useRef(null);
  const explosionRef = useRef(null);

  const { flashScale, flashOpacity, explosionOpacity, explosionScale } =
    useExplosionFrame({ onComplete });

  return (
    <>
      {/* SUPER BRIGHT WHITE FLASH */}
      <mesh ref={flashRef} scale={flashScale}>
        <sphereGeometry args={[radius * 0.4, 32, 32]} />
        <meshBasicMaterial
          color="white"
          transparent
          opacity={flashOpacity}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* EXPANDING FIREBALL */}
      <mesh ref={explosionRef} scale={explosionScale}>
        <sphereGeometry args={[radius * 0.7, 64, 32]} />
        <meshPhysicalMaterial
          map={fire}
          transparent
          opacity={explosionOpacity}
          blending={AdditiveBlending}
          depthWrite={false}
          emissive="#ff4400"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={Math.PI} />
      <pointLight
        position={[0, 0, 0]}
        intensity={Math.PI * 3}
        color="#ff6600"
      />

      <OrbitControls />
    </>
  );
};
