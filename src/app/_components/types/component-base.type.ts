import { Size } from "@/types/size.type";
import { Variant } from "@/types/variant.type";

export type ComponentBaseType = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};
