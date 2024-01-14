import { useSignal, useSignalEffect } from "@preact/signals-react";
import { forwardRef } from "react";
import { Input } from "./input";

export const NumberInput = forwardRef<HTMLInputElement, Record<string, any>>(
  ({ value, ...props }, ref) => {
    // Update signal if value is not `NaN`
    const input = useSignal<string | number>("");
    useSignalEffect(() => {
      if (!Number.isNaN(value?.value)) {
        input.value = value?.value === undefined ? "" : value.value;
      }
    });
    return <Input {...props} ref={ref} type="number" value={input.value} />;
  },
);
