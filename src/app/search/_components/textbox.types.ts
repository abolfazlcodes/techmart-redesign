import { InputHTMLAttributes } from "react";
import {ComponentBaseType} from "@/app/_components/types/component-base.type";

type TextboxType = "text" | "number" | "email" | "password";

export type TextboxProps = InputHTMLAttributes<HTMLInputElement> &
    ComponentBaseType & {
    type?: TextboxType;
    hasError?: boolean;
};
