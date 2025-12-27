import { useCallback, useState } from "react";

import type { AsteroidCollisionTransformedFormRecord } from "@/features/simulator/asteroid-collision/form/model/schemas/asteroid-collision-schema";

export const useAsteroidCollision = () => {
  const [submittedMass, setSubmittedMass] = useState({
    masOfFirstAsteroid: 0,
    masOfSecondAsteroid: 0,
  });
  const [isMoving, setIsMoving] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  const { masOfFirstAsteroid, masOfSecondAsteroid } = submittedMass;

  const handleSubmitMass = useCallback(
    (data: AsteroidCollisionTransformedFormRecord) => {
      setSubmittedMass(data);
      setIsMoving(false);
      setShowExplosion(false);
    },
    []
  );

  const handleCanvasClick = () => {
    if ((masOfFirstAsteroid !== 0 || masOfSecondAsteroid !== 0) && !isMoving) {
      setIsMoving(true);
      setShowExplosion(false);
    }
  };

  const handleCollision = () => {
    setIsMoving(false);
    setShowExplosion(true);
  };

  return {
    handleCanvasClick,
    handleSubmitMass,
    showExplosion,
    masOfFirstAsteroid,
    masOfSecondAsteroid,
    isMoving,
    submittedMass,
    setShowExplosion,
    setIsMoving,
    handleCollision,
  };
};
