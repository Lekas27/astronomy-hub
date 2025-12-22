import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, type FC } from "react";
import { AdditiveBlending, Mesh } from "three";

type RemnantType = "white-dwarf" | "neutron-star" | "black-hole";

type Props = {
  mass: number;
};

const getRemnantType = (mass: number): RemnantType => {
  if (mass < 8) return "white-dwarf";
  if (mass < 20) return "neutron-star";
  return "black-hole";
};

export const StarRemnant: FC<Props> = ({ mass }) => {
  const meshRef = useRef<Mesh>(null);
  const type = getRemnantType(mass);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const getSize = () => {
    if (type === "white-dwarf") return 0.3;
    if (type === "neutron-star") return 0.15;
    return 0.5; // black hole
  };

  const getColor = () => {
    if (type === "white-dwarf") return "#e8f4ff";
    if (type === "neutron-star") return "#a0d8ff";
    return "#000000";
  };

  const size = getSize();

  return (
    <>
      {type === "black-hole" ? (
        <>
          {/* Black hole sphere */}
          <mesh ref={meshRef}>
            <sphereGeometry args={[size, 64, 64]} />
            <meshBasicMaterial color="#000000" />
          </mesh>

          {/* Accretion disk */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[size * 2, size * 0.3, 16, 100]} />
            <meshPhysicalMaterial
              color="#ff8800"
              emissive="#ff4400"
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>

          {/* Event horizon glow */}
          <mesh>
            <sphereGeometry args={[size * 1.5, 32, 32]} />
            <meshBasicMaterial
              color="#ff4400"
              transparent
              opacity={0.3}
              blending={AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </>
      ) : (
        <>
          {/* White dwarf or neutron star */}
          <mesh ref={meshRef}>
            <sphereGeometry args={[size, 64, 64]} />
            <meshPhysicalMaterial
              color={getColor()}
              emissive={getColor()}
              emissiveIntensity={type === "neutron-star" ? 3 : 1}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Glow */}
          <mesh>
            <sphereGeometry args={[size * 1.3, 32, 32]} />
            <meshBasicMaterial
              color={getColor()}
              transparent
              opacity={type === "neutron-star" ? 0.5 : 0.3}
              blending={AdditiveBlending}
              depthWrite={false}
            />
          </mesh>

          {/* Neutron star magnetic field lines */}
          {type === "neutron-star" && (
            <>
              <mesh rotation={[0, 0, Math.PI / 4]}>
                <torusGeometry args={[size * 2, size * 0.05, 8, 50]} />
                <meshBasicMaterial
                  color="#4488ff"
                  transparent
                  opacity={0.4}
                  blending={AdditiveBlending}
                />
              </mesh>
              <mesh rotation={[0, 0, -Math.PI / 4]}>
                <torusGeometry args={[size * 2, size * 0.05, 8, 50]} />
                <meshBasicMaterial
                  color="#4488ff"
                  transparent
                  opacity={0.4}
                  blending={AdditiveBlending}
                />
              </mesh>
            </>
          )}
        </>
      )}

      {/* Lights */}
      <ambientLight intensity={Math.PI / 4} />
      <pointLight position={[5, 5, 5]} intensity={Math.PI / 2} />

      <OrbitControls />
    </>
  );
};
