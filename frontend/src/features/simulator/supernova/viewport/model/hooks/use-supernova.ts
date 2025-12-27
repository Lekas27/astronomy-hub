import { useState } from "react";

import type { SupernovaTransformedFormRecord } from "@/features/simulator/supernova/form/model/schemas/supernova-schema";

type SimulationPhase = "star" | "explosion" | "remnant";

export const useSupernova = () => {
  const [submittedMass, setSubmittedMass] = useState<number | null>(null);
  const [phase, setPhase] = useState<SimulationPhase>("star");

  const handleStarClick = () => {
    setPhase("explosion");
  };

  const handleExplosionComplete = () => {
    setPhase("remnant");
  };

  const handleNewSimulation = (data: SupernovaTransformedFormRecord) => {
    const { mass } = data;

    setSubmittedMass(mass);
  };

  return {
    submittedMass,
    phase,
    handleStarClick,
    handleExplosionComplete,
    handleNewSimulation,
  };
};
