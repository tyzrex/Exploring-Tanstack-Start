import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input,  } from "@/components/ui/input";
import * as React from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  formLabel: string;
} & React.ComponentProps<"input">;

export default function RHFInput<T extends FieldValues>({
  name,
  formLabel,
  ...props
}: Props<T>) {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="">{formLabel}</FormLabel>
            <FormControl>
              <Input
                className="bg-zinc-800 border-zinc-700"
                {...field}
                {...props}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}