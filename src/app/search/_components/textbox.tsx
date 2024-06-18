import classNames from "classnames";
import { TextboxProps } from "./textbox.types";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Textbox: React.FC<TextboxProps> = forwardRef<
    HTMLInputElement,
    TextboxProps
>(({ hasError, type = "text", className, ...rest }, ref) => {
    const classes = classNames(
        "textbox bg-transparent outline-0",
        "w-full",
        hasError && "border-red",
        className
    );
    return <input ref={ref} type={type} className={classes} {...rest} />;
});

export default Textbox;
