'use client';

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {IconTick} from "@/app/_components/icons/icons";

interface ICheckbox extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<ICheckbox> = ({
                                           onChange,
                                           className,
                                           checked = false,
                                           ...props
                                       }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);

        if (onChange) onChange(newChecked);
    };

    useEffect(() => {
        if (checked === isChecked) return;

        setIsChecked(checked);
    }, [checked, isChecked]);

    return (
        <label
            className={twMerge(
                "flex items-center gap-1 text-sm text-blue-green-600 cursor-pointer w-fit",
                className
            )}
        >
            <input
                hidden
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                {...props}
            />
            <div
                className={twMerge(
                    "flex justify-center items-center w-4 h-4 transition duration-300 border rounded",
                    !isChecked ? "bg-white border-icon" : "bg-secondary border-secondary"
                )}
            >
                <IconTick width="8" className="stroke-white" height="7" viewBox="0 0 8 7" strokeWidth="1.8"/>
            </div>
        </label>
    );
};

export default Checkbox;
