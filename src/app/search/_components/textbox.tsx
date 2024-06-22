import classNames from "classnames";
import {forwardRef} from "react";
import {TextboxProps} from "@/app/search/_components/textbox.types";
type TextboxType = "text" | "number" | "email" | "password";

// eslint-disable-next-line react/display-name
const Textbox = forwardRef<HTMLInputElement, TextboxProps>(
    ({hasError, type = "text", className, ...rest}, ref) => {
        const classes = classNames(
            "textbox bg-transparent outline-0",
            "w-full",
            hasError && "border-red",
            className
        );
        return <input ref={ref} type={type} className={classes} {...rest} />;
    }
);

export default Textbox;
