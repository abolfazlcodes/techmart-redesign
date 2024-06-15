import { ComponentBaseType } from "@/types/component-base.type";
import { LoadingBehavior } from "@/types/loading-behavior.type";
import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBaseType &
  LoadingBehavior & {
    isOutline?: boolean;
    isIcon?: boolean;
    rippleColor?: string;
    isRipple?: boolean;
    shape?: "full";
    icon?: React.ReactNode;
  };
