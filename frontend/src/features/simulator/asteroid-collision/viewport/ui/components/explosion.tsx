import type { FC } from "react";

import { useAsteroidCollisionExplosion } from "@/features/simulator/asteroid-collision/viewport/model/hooks/use-asteroid-explosion";

type Props = {
  position: [number, number, number];
};

export const Explosion: FC<Props> = ({ position }) => {
  const { particlesRef, particles } = useAsteroidCollisionExplosion({
    position,
  });
  return (
    <group>
      {particles.map((particle, i) => (
        <mesh
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          position={particle.position}
        >
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color={particle.color} transparent opacity={0.9} />
        </mesh>
      ))}

      <pointLight
        position={position}
        intensity={15}
        distance={40}
        color="#ff6600"
      />
      <pointLight
        position={position}
        intensity={10}
        distance={30}
        color="#ffff00"
      />
    </group>
  );
};
