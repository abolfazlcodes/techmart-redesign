import { ButtonProps } from "@/types/button.types";
import classNames from "classnames";
import { Size } from "@/types/size.type";

const variantClasses = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  secondary: "btn-secondary",
};
const sizeClasses: Record<Size, string> = {
  small: "btn-small",
  medium: "btn-medium",
  big: "btn-big",
};
const Button: React.FC<ButtonProps> = ({
  variant = "",
  isDisabled = false,
  isIcon = false,
  isLoading = false,
  className,
  size = "medium",
  type = "button",
  children,
  shape,
  icon,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { [`btn-${shape}`]: shape },
    { "animated-icon": isIcon },
    { "btn-loading pointer-events-none": isLoading },
    // @ts-ignore
    { [`${variantClasses[variant]}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return (
    <button {...rest} className={classes} disabled={isDisabled} type={type}>
      {isIcon ? (
        <>
          <span>{children}</span>
          {icon}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
