import { OrbitControls, useTexture } from "@react-three/drei";
import type { FC } from "react";
import { AdditiveBlending } from "three";

type Props = {
  mass: number;
  onClick: () => void;
};

export const StarMesh: FC<Props> = ({ mass, onClick }) => {
  const texture = useTexture("/redStarTexture.png");
  const fire = useTexture("/fire.png");
  const radius = Math.pow(mass, 0.8);

  return (
    <>
      {/* Main star */}
      <mesh onClick={onClick}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshPhysicalMaterial
          map={texture}
          clearcoat={1}
          clearcoatRoughness={0}
          roughness={1}
          metalness={0.5}
        />
      </mesh>

      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[radius + 0.2, 64, 7]} />
        <meshPhysicalMaterial
          map={fire}
          transparent
          opacity={0.7}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <OrbitControls />
    </>
  );
};
