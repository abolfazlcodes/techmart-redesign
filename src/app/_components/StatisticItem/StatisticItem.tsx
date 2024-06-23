import { ReactNode } from "react";

interface IStatisticItemProps {
  title: string;
  subTitle: string;
  icon: ReactNode;
  className?: string;
}

const StatisticItem: React.FC<IStatisticItemProps> = ({
  icon,
  subTitle,
  title,
  className,
}) => {
  return (
    <div className={`w-max flex gap-2 items-center ${className}`}>
      <div className="bg-icon p-[10px] rounded-[20px] w-[62px] h-[62px]">
        {icon}
      </div>

      <div className="text-white">
        <h4 className="md:text-title1-d text-title2-m font-bold">{title}</h4>
        <span className="font-medium text-body2-m md:text-title2-m">
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default StatisticItem;
