import { ButtonHTMLAttributes } from "react";
import { ComponentBaseType } from "./component-base.type";
import { LoadingBehavior } from "./loading-behavior.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBaseType &
  LoadingBehavior & {
    isIcon?: boolean;
    shape?: "full";
    icon?: React.ReactNode;
  };
