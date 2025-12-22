import { useFormContext } from "react-hook-form";

import type { SupernovaTransformedFormRecord } from "@/features/simulator/supernova/form/model/schemas/supernova-schema";
import type { SupernovaFormRecord } from "@/features/simulator/supernova/form/model/types/supernova-types";
import { NumberInputFormField } from "@/shared/components/form/fields/number-input";

export const SupernovaMassField = () => {
  const { control } = useFormContext<
    SupernovaFormRecord,
    void,
    SupernovaTransformedFormRecord
  >();
  return (
    <NumberInputFormField
      control={control}
      name="mass"
      label="mass"
      showControls={false}
    />
  );
};
