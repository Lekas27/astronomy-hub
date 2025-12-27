import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { SupernovaMassField } from "./components/mass";

import {
  supernovaSchema,
  type SupernovaTransformedFormRecord,
} from "@/features/simulator/supernova/form/model/schemas/supernova-schema";
import type { SupernovaFormRecord } from "@/features/simulator/supernova/form/model/types/supernova-types";
import { supernovaDefaultValues } from "@/features/simulator/supernova/form/model/utils/default-values/supernova-default-values";
import { parseSupernovaForRequest } from "@/features/simulator/supernova/form/model/utils/parse/supernova-parse";
import { Button } from "@/shared/components/ui/button";

type Props = {
  setSubmittedMass: (data: SupernovaTransformedFormRecord) => void;
};

export const SupernovaForm: FC<Props> = ({ setSubmittedMass }) => {
  const form = useForm<
    SupernovaFormRecord,
    void,
    SupernovaTransformedFormRecord
  >({
    defaultValues: supernovaDefaultValues,
    resolver: zodResolver(supernovaSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = (data: SupernovaTransformedFormRecord) => {
    const parsedData = parseSupernovaForRequest(data);
    setSubmittedMass(parsedData);
  };

  return (
    <div className="w-1/3">
      <div className="bg-gray-950 border-2 border-cyan-500 rounded-lg p-6 shadow-2xl shadow-cyan-500/20">
        <div className="border-b border-cyan-500/50 pb-3 mb-6">
          <h2 className="text-cyan-400 font-mono text-lg tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            CONTROL PARAMETERS
          </h2>
        </div>

        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <SupernovaMassField />

            <Button
              type="submit"
              className="w-full px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded font-mono tracking-wider hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-cyan-400 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 uppercase font-bold"
            >
              ► INITIATE SIMULATION
            </Button>
          </form>
        </FormProvider>

        <div className="mt-6 pt-6 border-t border-cyan-500/30">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-gray-500">STATUS:</span>
            <span className="text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              READY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
