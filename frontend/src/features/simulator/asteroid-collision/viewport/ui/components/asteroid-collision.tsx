import { OrbitControls } from "@react-three/drei";
import type { FC } from "react";

import { AsteroidMesh } from "./asteroid";

type Props = {
  massOfFirstAsteroid: number;
  massOfSecondAsteroid: number;
};

export const AsteroidCollisionScene: FC<Props> = ({
  massOfFirstAsteroid,
  massOfSecondAsteroid,
}) => {
  const distance = 15; // Distance between asteroids

  return (
    <>
      {/* First Asteroid - positioned to the left */}
      <AsteroidMesh
        position={[-distance / 2, 0, 0]}
        mass={massOfFirstAsteroid || 100}
        color="#8B7355"
      />

      {/* Second Asteroid - positioned to the right */}
      <AsteroidMesh
        position={[distance / 2, 0, 0]}
        mass={massOfSecondAsteroid || 100}
        color="#A0826D"
      />

      {/* Enhanced Lighting */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} />
      <pointLight position={[0, 10, 10]} intensity={1} />
      <pointLight position={[0, -10, -10]} intensity={1} />
      <hemisphereLight intensity={0.8} groundColor="#444444" />

      {/* Camera Controls */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};
