import { Canvas } from "@react-three/fiber";
import { useCallback, useState } from "react";

import { AsteroidCollisionScene } from "./components/asteroid-collision";

import type { AsteroidCollisionTransformedFormRecord } from "@/features/simulator/asteroid-collision/form/model/schemas/asteroid-collision-schema";
import { AsteroidCollisionForm } from "@/features/simulator/asteroid-collision/form/ui/form";

export const AsteroidCollisionSimulator = () => {
  const [submittedMass, setSubmittedMass] = useState({
    masOfFirstAsteroid: 0,
    masOfSecondAsteroid: 0,
  });

  const { masOfFirstAsteroid, masOfSecondAsteroid } = submittedMass;

  const handleSubmitMass = useCallback(
    (data: AsteroidCollisionTransformedFormRecord) => {
      setSubmittedMass(data);
    },
    [setSubmittedMass]
  );

  return (
    <div className="mt-16 bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 border-l-4 border-cyan-400 pl-4">
          <h1 className="text-4xl font-bold text-cyan-400 tracking-wider font-mono">
            ASTEROID COLLISION SIMULATION CONSOLE
          </h1>
          <p className="text-cyan-300 text-sm mt-1 font-mono">
            ASTEROID MASS ANALYZER v2.4.1
          </p>
        </div>

        <div className="flex gap-8">
          {/* Control Panel */}
          <AsteroidCollisionForm setSubmittedMass={handleSubmitMass} />

          {/* Visualization Viewport */}
          <div className="flex-1">
            <div className="bg-gray-950 border-2 border-cyan-500 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/20 h-full min-h-[600px]">
              <div className="border-b border-cyan-500/50 p-4 bg-gray-900/50">
                <h2 className="text-cyan-400 font-mono text-sm tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  ASTEROID VISUALIZATION VIEWPORT
                  {(masOfFirstAsteroid !== 0 || masOfSecondAsteroid !== 0) && (
                    <span className="ml-auto text-xs">STATUS: ACTIVE</span>
                  )}
                </h2>
              </div>

              <div
                className="relative h-full flex items-center justify-center p-8"
                style={{ minHeight: "550px" }}
              >
                {masOfFirstAsteroid !== 0 || masOfSecondAsteroid !== 0 ? (
                  <div className="relative flex items-center justify-center z-10 w-full h-full">
                    <div
                      className="relative w-full h-full"
                      style={{ height: "550px" }}
                    >
                      <Canvas
                        camera={{ position: [0, 0, 30], fov: 50 }}
                        style={{ position: "absolute", inset: 0 }}
                      >
                        <AsteroidCollisionScene
                          massOfFirstAsteroid={masOfFirstAsteroid}
                          massOfSecondAsteroid={masOfSecondAsteroid}
                        />
                      </Canvas>
                    </div>
                  </div>
                ) : (
                  <div className="text-center z-10">
                    <div className="text-cyan-500/50 font-mono text-lg mb-4">
                      ▐ ▐ ▐ AWAITING INPUT ▐ ▐ ▐
                    </div>
                    <p className="text-gray-600 font-mono text-sm">
                      Enter asteroid mass parameters and initiate simulation
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
