import { OrbitControls } from "@react-three/drei";
import type { FC } from "react";

import { AsteroidMesh } from "./asteroid";
import { Explosion } from "./explosion";

type Props = {
  massOfFirstAsteroid: number;
  massOfSecondAsteroid: number;
  isMoving: boolean;
  showExplosion: boolean;
  onCollision: () => void;
};

export const AsteroidCollisionScene: FC<Props> = ({
  massOfFirstAsteroid,
  massOfSecondAsteroid,
  isMoving,
  showExplosion,
  onCollision,
}) => {
  const distance = 15;
  const radius1 = Math.pow(massOfFirstAsteroid || 100, 0.33);
  const radius2 = Math.pow(massOfSecondAsteroid || 100, 0.33);

  return (
    <>
      <AsteroidMesh
        position={[-distance / 2, 0, 0]}
        mass={massOfFirstAsteroid || 100}
        color="#8B7355"
        isMoving={isMoving}
        targetPosition={[distance, 0, 0]}
        onCollision={onCollision}
        otherRadius={radius2}
      />

      <AsteroidMesh
        position={[distance / 2, 0, 0]}
        mass={massOfSecondAsteroid || 100}
        color="#A0826D"
        isMoving={isMoving}
        targetPosition={[-distance, 0, 0]}
        onCollision={onCollision}
        otherRadius={radius1}
      />

      {showExplosion && <Explosion position={[0, 0, 0]} />}

      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} />
      <pointLight position={[0, 10, 10]} intensity={1} />
      <pointLight position={[0, -10, -10]} intensity={1} />
      <hemisphereLight intensity={0.8} groundColor="#444444" />

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};
