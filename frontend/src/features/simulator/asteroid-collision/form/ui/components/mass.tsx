import { useFormContext } from "react-hook-form";

import { type AsteroidCollisionTransformedFormRecord } from "@/features/simulator/asteroid-collision/form//model/schemas/asteroid-collision-schema";
import { type AsteroidCollisionFormRecord } from "@/features/simulator/asteroid-collision/form/model/types/asteroid-collision-types";
import { NumberInputFormField } from "@/shared/components/form/fields/number-input";

export const AsteroidCollisionMassFields = () => {
  const { control } = useFormContext<
    AsteroidCollisionFormRecord,
    void,
    AsteroidCollisionTransformedFormRecord
  >();

  return (
    <div className="flex flex-col space-y-2">
      <NumberInputFormField
        control={control}
        name="masOfFirstAsteroid"
        label="Mass of first asteroid"
        showControls={false}
      />
      <NumberInputFormField
        control={control}
        name="masOfSecondAsteroid"
        label="Mass of second asteroid"
        showControls={false}
      />
    </div>
  );
};
