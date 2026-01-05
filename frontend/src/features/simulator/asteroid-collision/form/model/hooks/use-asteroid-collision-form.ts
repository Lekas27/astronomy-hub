import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  asteroidCollisionSchema,
  type AsteroidCollisionTransformedFormRecord,
} from "@/features/simulator/asteroid-collision/form//model/schemas/asteroid-collision-schema";
import { parseAsteroidCollisionForRequest } from "@/features/simulator/asteroid-collision/form//model/utils/parse/asteroid-collision-parse";
import { type AsteroidCollisionFormRecord } from "@/features/simulator/asteroid-collision/form/model/types/asteroid-collision-types";
import { asteroidCollisionDefaultValues } from "@/features/simulator/asteroid-collision/form/model/utils/default-values/asteroid-collision-default-values";

type Props = {
  setSubmittedMass: (data: AsteroidCollisionTransformedFormRecord) => void;
};

export const useAsteroidCollisionForm = ({ setSubmittedMass }: Props) => {
  const form = useForm<
    AsteroidCollisionFormRecord,
    void,
    AsteroidCollisionTransformedFormRecord
  >({
    defaultValues: asteroidCollisionDefaultValues,
    resolver: zodResolver(asteroidCollisionSchema),
  });

  const { handleSubmit, reset } = form;

  const onSubmit = (data: AsteroidCollisionTransformedFormRecord) => {
    const parsedData = parseAsteroidCollisionForRequest(data);
    setSubmittedMass(parsedData);
  };

  const onReset = () => {
    reset(asteroidCollisionDefaultValues);
    setSubmittedMass(asteroidCollisionDefaultValues);
  };

  return {
    form,
    handleSubmit,
    onSubmit,
    onReset,
  };
};
