import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { FC } from "react";
import { Vector3, Mesh } from "three";

type Props = {
  position: [number, number, number];
};

export const Explosion: FC<Props> = ({ position }) => {
  const particlesRef = useRef<(Mesh | null)[]>([]);
  const [particles] = useState(() => {
    const temp = [];

    for (let i = 0; i < 300; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const speed = 1.5 + Math.random() * 3;

      temp.push({
        position: new Vector3(position[0], position[1], position[2]),
        velocity: new Vector3(
          Math.sin(phi) * Math.cos(theta) * speed,
          Math.sin(phi) * Math.sin(theta) * speed,
          Math.cos(phi) * speed
        ),
        life: 1.0,

        size: 0.5 + Math.random() * 1.2,
        color: Math.random() > 0.5 ? "#ff6600" : "#ffaa00",
      });
    }

    return temp;
  });

  useFrame((_state, delta) => {
    particles.forEach((particle, i) => {
      particle.position.add(
        particle.velocity.clone().multiplyScalar(delta * 15)
      );
      particle.life -= delta * 0.5;
      particle.size *= 0.99;

      if (particlesRef.current[i]) {
        particlesRef.current[i].position.copy(particle.position);
        particlesRef.current[i].scale.setScalar(particle.size * particle.life);
      }
    });
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
