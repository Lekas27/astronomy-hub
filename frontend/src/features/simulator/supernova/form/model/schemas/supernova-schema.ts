import { number, object, type infer as inferType } from "zod";

export const supernovaSchema = object({
  mass: number().min(1, "Mass field cannot be null"),
});

export type SupernovaTransformedFormRecord = inferType<typeof supernovaSchema>;
