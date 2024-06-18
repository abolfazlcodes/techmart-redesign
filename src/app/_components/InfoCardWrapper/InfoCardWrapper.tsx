import { ReactNode } from "react";

interface IInfoCardWrapperProps {
  children: ReactNode;
}

const InfoCardWrapper: React.FC<IInfoCardWrapperProps> = ({ children }) => {
  return (
    <article className="bg-white shadow-lg rounded-2xl max-w-[376px] w-full">
      {children}
    </article>
  );
};

export default InfoCardWrapper;
