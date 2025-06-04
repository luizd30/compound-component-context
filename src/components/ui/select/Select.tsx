import type React from "react";
import { createContext } from "../../../context";
import { cn } from "../../../lib/utils";

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  onOptionChange: (value: number) => void;
}

interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  optionValue: number;
}

interface SelectContext {
  value: number;
  onOptionChange: (value: number) => void;
}

export const [SelectProvider, useSelectContext] =
  createContext<SelectContext>("Select");

function Select(props: SelectProps) {
  const { value, onOptionChange, className, ...rest } = props;

  const values = { value, onOptionChange };

  return (
    <SelectProvider {...values}>
      <div
        className={cn("w-full flex gap-4 justify-center", className)}
        data-slot="select"
        {...rest}
      />
    </SelectProvider>
  );
}

function Option(props: OptionProps) {
  const { className, children, optionValue } = props;
  const { value, onOptionChange } = useSelectContext("Option");

  return (
    <div
      onClick={() => onOptionChange(optionValue)}
      data-slot="option"
      data-active={value === optionValue}
      className={cn(
        "transition-all data-[active=true]:border-indigo-600 data-[active=true]:-translate-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}

Select.displayName = "Select";
Option.displayName = "Option";

export { Select, Option };
