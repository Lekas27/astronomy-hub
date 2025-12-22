import { number, object, type infer as inferType } from "zod";

export const asteroidCollisionSchema = object({
  masOfFirstAsteroid: number().min(1, "Number must be positive"),
  masOfSecondAsteroid: number().min(1, "Number must be positive"),
});

export type AsteroidCollisionTransformedFormRecord = inferType<
  typeof asteroidCollisionSchema
>;
