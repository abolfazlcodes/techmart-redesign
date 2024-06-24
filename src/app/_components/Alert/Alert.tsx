import { twMerge } from "tailwind-merge";

type TAlertTypeUnions = "success" | "info";

interface IAlertProps {
  type?: TAlertTypeUnions;
  title?: string;
  className?: string;
  content: string;
}

const Alert: React.FC<IAlertProps> = ({
  type = "info",
  content,
  className,
  title,
}) => {
  const colors: { [index: string]: string } = {
    success: "bg-green text-green-text p-6",
    info: "bg-tag text-description py-4 px-2 md:px-6",
  };

  const titleColors: { [index: string]: string } = {
    success: "text-green-text",
    info: "text-primary",
  };

  return (
    <article
      className={twMerge(
        "bg-green rounded-2xl text-green-text",
        colors[type],
        className
      )}
    >
      {title && (
        <h4
          className={twMerge(
            "text-body2-d mb-1 font-bold leading-7 md:text-lg",
            titleColors[type]
          )}
        >
          توضیحات تکمیلی
        </h4>
      )}
      <p className="font-bold text-body3-d md:text-body1-d">{content}</p>
    </article>
  );
};

export default Alert;
