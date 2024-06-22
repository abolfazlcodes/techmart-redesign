'use client'

import { forwardRef, useState, useCallback } from "react";
import classNames from 'classnames';
import { DeepMap, FieldError, FieldValues, get, Path, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { IconAlertCircle } from "@/app/_components/icons/icons";

export type TextAreaInputProps<TFormValues extends FieldValues> = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> & {
    register: UseFormRegisterReturn;
    name: Path<TFormValues>;
    errors: Partial<DeepMap<TFormValues, FieldError>>;
    isDisabled?: boolean;
    variant?: string;
    className?: string;
};

const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps<FieldValues>>(({
                                                                                            name,
                                                                                            register,
                                                                                            errors,
                                                                                            isDisabled,
                                                                                            variant,
                                                                                            className = "p-2.5 w-full outline-none border border-tag rounded-lg bg-white body1-d !font-bold text-primary",
                                                                                            ...rest
                                                                                        }, ref) => {
    const error = get(errors, name);
    const hasError = !!error;

    return (
        <>
            <div className="flex items-center w-full relative">
                <textarea
                    {...register}
                    {...rest}
                    disabled={isDisabled}
                    style={{ resize: "none" }}
                    className={classNames(className, {
                        "pl-10": hasError,
                        "pl-0": !hasError,
                    })}
                />
                {hasError && (
                    <IconAlertCircle
                        className={classNames('absolute top-3 stroke-red-500 fill-none', {
                            "left-4": true,
                        })}
                        width={14}
                        height={14}
                        viewBox="0 0 16 15"
                    />
                )}
            </div>
            {hasError && <p className="mt-1.5 caption2 text-red-500">{error?.message}</p>}
        </>
    );
});

TextAreaInput.displayName = 'TextAreaInput';

export default TextAreaInput;
