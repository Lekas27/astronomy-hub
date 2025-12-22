import type { SupernovaTransformedFormRecord } from "@/features/simulator/supernova/form/model/schemas/supernova-schema";

export const parseSupernovaForRequest = (
  data: SupernovaTransformedFormRecord
) => {
  const { mass } = data;
  return {
    mass,
  };
};
