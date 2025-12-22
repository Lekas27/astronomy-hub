import { useCallback, useState } from "react";

import type { AsteroidCollisionTransformedFormRecord } from "@/features/simulator/asteroid-collision/form/model/schemas/asteroid-collision-schema";
import { AsteroidCollisionForm } from "@/features/simulator/asteroid-collision/form/ui/form";

export const AsteroidCollisionSimulator = () => {
  const [, setSubmittedMass] = useState({
    masOfFirstAsteroid: 0,
    masOfSecondAsteroid: 0,
  });

  const handleSubmitMass = useCallback(
    (data: AsteroidCollisionTransformedFormRecord) => {
      setSubmittedMass(data);
    },
    [setSubmittedMass]
  );

  return <AsteroidCollisionForm setSubmittedMass={handleSubmitMass} />;
};
