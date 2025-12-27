import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Vector3 as Vector3Type } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import type { FC } from "react";
import {
  Mesh,
  SphereGeometry,
  RepeatWrapping,
  DoubleSide,
  Vector3,
} from "three";

type Props = {
  position:
    | number
    | Vector3Type
    | [x: number, y: number, z: number]
    | readonly [x: number, y: number, z: number]
    | Readonly<Vector3Type>
    | undefined;
  mass: number;
  color: string;
  isMoving?: boolean;
  targetPosition?: [number, number, number];
  onCollision?: () => void;
  otherRadius?: number; // Novi prop za radius drugog asteroida
};

export const AsteroidMesh: FC<Props> = ({
  position,
  mass,
  isMoving = false,
  targetPosition = [0, 0, 0],
  onCollision,
  otherRadius = 0,
}) => {
  const radius = Math.pow(mass, 0.33);
  const meshRef = useRef<Mesh>(null);
  const posArray = Array.isArray(position) ? position : [0, 0, 0];
  const currentPosition = useRef(
    new Vector3(posArray[0], posArray[1], posArray[2])
  );
  const texture = useTexture("/asteroid.png");
  const hasCollided = useRef(false);

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

  useFrame((_state, delta) => {
    if (isMoving && meshRef.current && targetPosition && !hasCollided.current) {
      const target = new Vector3(...targetPosition);
      const direction = target.clone().sub(currentPosition.current).normalize();
      const moveSpeed = 5;

      currentPosition.current.add(direction.multiplyScalar(delta * moveSpeed));
      meshRef.current.position.copy(currentPosition.current);

      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;

      const distance = currentPosition.current.distanceTo(target);

      const collisionDistance = radius + otherRadius;

      if (distance <= collisionDistance && onCollision) {
        hasCollided.current = true;
        onCollision();
      }
    }
  });

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
