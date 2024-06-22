'use client'

import Textbox from "@/app/search/_components/textbox";
import { IconAlertCircle } from "@/app/_components/icons/icons";
import { useState, useCallback, forwardRef } from "react";
import classNames from 'classnames';

import { DeepMap, FieldError, FieldValues, get, Path, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import { TextboxProps } from "@/app/search/_components/textbox.types";

export type TextInputProps<TFormValues extends FieldValues> = Omit<TextboxProps, 'name'> & {
    register: UseFormRegisterReturn;
    name: Path<TFormValues>;
    errors: Partial<DeepMap<TFormValues, FieldError>>;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps<FieldValues>>(({
                                                                                 name,
                                                                                 register,
                                                                                 errors,
                                                                                 isDisabled,
                                                                                 variant,
                                                                                 className = "p-2.5 border border-tag rounded-lg bg-white body1-d !font-bold text-primary",
                                                                                 type = "text",
                                                                                 ...rest
                                                                             }, ref) => {
    const error = get(errors, name);
    const hasError = !!error;


    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }, []);

    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    return (
        <>
            {/*{...register(name, rules)}*/}
            <div className="flex items-center relative">
                <Textbox
                    {...register}
                    {...rest}

                    type={inputType}
                    disabled={isDisabled}
                    hasError={hasError}
                    className={classNames(className, {
                        "pl-10": hasError,
                        "pl-0": !hasError,
                    })}
                />
                {hasError && (
                    <IconAlertCircle
                        className={classNames('absolute stroke-red-500 fill-none', {
                            "left-12": type === "password",
                            "left-4": type !== "password",
                        })}
                        width={14}
                        height={14}
                        viewBox="0 0 16 15"
                    />
                )}
                {type === "password" && (
                    <svg
                        onClick={togglePasswordVisibility}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 absolute left-4 stroke-g-08 cursor-pointer"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d={showPassword ?
                                  "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" :
                                  "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}
                        />
                        {showPassword && <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>}
                    </svg>
                )}
            </div>
            {hasError && <p className="mt-1.5 caption2  text-red-500">{error.message}</p>}
        </>
    );
});

TextInput.displayName = 'TextInput';

export default TextInput;
