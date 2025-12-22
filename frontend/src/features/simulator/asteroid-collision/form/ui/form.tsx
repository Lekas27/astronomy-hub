import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { AsteroidCollisionMassFields } from "./components/mass";

import { type AsteroidCollisionTransformedFormRecord } from "@/features/simulator/asteroid-collision/form//model/schemas/asteroid-collision-schema";
import { parseAsteroidCollisionForRequest } from "@/features/simulator/asteroid-collision/form//model/utils/parse/asteroid-collision-parse";
import { type AsteroidCollisionFormRecord } from "@/features/simulator/asteroid-collision/form/model/types/asteroid-collision-types";
import { Button } from "@/shared/components/ui/button";

type Props = {
  setSubmittedMass: (data: AsteroidCollisionTransformedFormRecord) => void;
};

export const AsteroidCollisionForm: FC<Props> = ({ setSubmittedMass }) => {
  const form = useForm<
    AsteroidCollisionFormRecord,
    void,
    AsteroidCollisionTransformedFormRecord
  >();

  const { handleSubmit } = form;

  const onSubmit = (data: AsteroidCollisionTransformedFormRecord) => {
    const parsedData = parseAsteroidCollisionForRequest(data);
    setSubmittedMass(parsedData);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AsteroidCollisionMassFields />
        <Button
          type="submit"
          className="w-full px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded font-mono tracking-wider hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-400 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 uppercase font-bold"
        >
          ► INITIATE SIMULATION
        </Button>
      </form>
    </FormProvider>
  );
};
