import { useState } from "react";

import type { ActiveSimulationType } from "@/pages/simulator/model/types/simulation";

export const useSimulator = () => {
  const [activeSimulation, setActiveSimulation] =
    useState<ActiveSimulationType>("supernova");

  const changeSimulation = (simulation: ActiveSimulationType) => {
    setActiveSimulation(simulation);
  };

  return { activeSimulation, changeSimulation };
};
