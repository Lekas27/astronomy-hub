import type { AsteroidCollisionTransformedFormRecord } from "@/features/simulator/asteroid-collision/form/model/schemas/asteroid-collision-schema";

export const parseAsteroidCollisionForRequest = (
  data: AsteroidCollisionTransformedFormRecord
) => {
  const { masOfSecondAsteroid, masOfFirstAsteroid } = data;

  return {
    masOfFirstAsteroid,
    masOfSecondAsteroid,
  };
};
