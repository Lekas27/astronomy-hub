import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  supernovaSchema,
  type SupernovaTransformedFormRecord,
} from "@/features/simulator/supernova/form/model/schemas/supernova-schema";
import type { SupernovaFormRecord } from "@/features/simulator/supernova/form/model/types/supernova-types";
import { supernovaDefaultValues } from "@/features/simulator/supernova/form/model/utils/default-values/supernova-default-values";
import { parseSupernovaForRequest } from "@/features/simulator/supernova/form/model/utils/parse/supernova-parse";

type Props = {
  setSubmittedMass: (data: SupernovaTransformedFormRecord) => void;
};

export const useSupernovaForm = ({ setSubmittedMass }: Props) => {
  const form = useForm<
    SupernovaFormRecord,
    void,
    SupernovaTransformedFormRecord
  >({
    defaultValues: supernovaDefaultValues,
    resolver: zodResolver(supernovaSchema),
  });

  const { handleSubmit, reset } = form;

  const onSubmit = (data: SupernovaTransformedFormRecord) => {
    const parsedData = parseSupernovaForRequest(data);
    setSubmittedMass(parsedData);
  };

  const onReset = () => {
    reset(supernovaDefaultValues);
    setSubmittedMass(supernovaDefaultValues);
  };

  return {
    form,
    handleSubmit,
    onSubmit,
    onReset,
  };
};
