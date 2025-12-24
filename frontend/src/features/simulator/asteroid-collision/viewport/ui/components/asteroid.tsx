import { useTexture } from "@react-three/drei";
import type { Vector3 } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import type { FC } from "react";
import { Mesh, SphereGeometry, RepeatWrapping, DoubleSide } from "three";

type Props = {
  position:
    | number
    | Vector3
    | [x: number, y: number, z: number]
    | readonly [x: number, y: number, z: number]
    | Readonly<Vector3>
    | undefined;
  mass: number;
  color: string;
};

export const AsteroidMesh: FC<Props> = ({ position, mass }) => {
  const radius = Math.pow(mass, 0.33);
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture("/asteroid.png");

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;

  const geometry = useMemo(() => {
    const geo = new SphereGeometry(radius, 64, 64);
    const positionAttribute = geo.getAttribute("position");

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      const z = positionAttribute.getZ(i);

      const length = Math.sqrt(x * x + y * y + z * z);
      const normalized = { x: x / length, y: y / length, z: z / length };

      const noise1 =
        (Math.sin(normalized.x * 3) + Math.cos(normalized.y * 3)) * 0.1;
      const noise2 =
        (Math.sin(normalized.x * 8) + Math.cos(normalized.z * 8)) * 0.05;
      const noise3 = Math.random() * 0.08 - 0.04;

      const totalNoise = noise1 + noise2 + noise3;
      const newLength = length * (1 + totalNoise);

      positionAttribute.setXYZ(
        i,
        normalized.x * newLength,
        normalized.y * newLength,
        normalized.z * newLength
      );
    }

    positionAttribute.needsUpdate = true;
    geo.computeVertexNormals();

    return geo;
  }, [radius]);

  return (
    <group position={position}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          map={texture}
          roughness={0.9}
          metalness={0.1}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
};
