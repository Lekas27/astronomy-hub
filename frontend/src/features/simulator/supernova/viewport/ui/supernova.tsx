import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { StarExplosion } from "./components/explosion";
import { StarRemnant } from "./components/remnant";
import { StarMesh } from "./components/star";

import { SupernovaForm } from "@/features/simulator/supernova/form/ui/form";
import { useSupernova } from "@/features/simulator/supernova/viewport/model/hooks/use-supernova";

export const SupernovaSimulator = () => {
  const {
    handleNewSimulation,
    handleExplosionComplete,
    handleStarClick,
    submittedMass,
    phase,
  } = useSupernova();

  return (
    <div className="mt-16 bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 border-l-4 border-cyan-400 pl-4">
          <h1 className="text-4xl font-bold text-cyan-400 tracking-wider font-mono">
            SUPERNOVA SIMULATION CONSOLE
          </h1>
          <p className="text-cyan-300 text-sm mt-1 font-mono">
            STELLAR MASS ANALYZER v3.7.2
          </p>
        </div>

        <div className="flex gap-8">
          {/* Control Panel */}
          <SupernovaForm setSubmittedMass={handleNewSimulation} />

          {/* Visualization Viewport */}
          <div className="flex-1">
            <div className="bg-gray-950 border-2 border-cyan-500 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/20 h-full min-h-[600px]">
              <div className="border-b border-cyan-500/50 p-4 bg-gray-900/50">
                <h2 className="text-cyan-400 font-mono text-sm tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  STELLAR VISUALIZATION VIEWPORT
                  {submittedMass !== null && (
                    <span className="ml-auto text-xs">
                      Phase: {phase.toUpperCase()}
                    </span>
                  )}
                </h2>
              </div>

              <div
                className="relative h-full flex items-center justify-center p-8"
                style={{ minHeight: "550px" }}
              >
                {submittedMass !== null ? (
                  <div className="relative flex items-center justify-center z-10 w-full h-full">
                    <div
                      className="relative w-full h-full"
                      style={{ height: "550px" }}
                    >
                      <Canvas
                        frameloop="always"
                        camera={{
                          position: [
                            0,
                            0,
                            submittedMass
                              ? Math.pow(submittedMass, 0.8) * 3
                              : 5,
                          ],
                          fov: 45,
                        }}
                        style={{ position: "absolute", inset: 0 }}
                      >
                        <Suspense fallback={null}>
                          {phase === "star" && (
                            <StarMesh
                              mass={submittedMass}
                              onClick={handleStarClick}
                            />
                          )}
                          {phase === "explosion" && (
                            <StarExplosion
                              mass={submittedMass}
                              onComplete={handleExplosionComplete}
                            />
                          )}
                          {phase === "remnant" && (
                            <StarRemnant mass={submittedMass} />
                          )}
                        </Suspense>
                      </Canvas>
                    </div>
                  </div>
                ) : (
                  <div className="text-center z-10">
                    <div className="text-cyan-500/50 font-mono text-lg mb-4">
                      ▐ ▐ ▐ AWAITING INPUT ▐ ▐ ▐
                    </div>
                    <p className="text-gray-600 font-mono text-sm">
                      Enter stellar mass parameters and initiate simulation
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
