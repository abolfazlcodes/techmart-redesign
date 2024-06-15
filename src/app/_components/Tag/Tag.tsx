import { ReactNode } from "react";

const Tag: React.FC<{ children: string | ReactNode }> = ({ children }) => {
  return (
    <span className="py-[2px] px-2 bg-tag rounded-50 text-caption2 text-primary">
      {children}
    </span>
  );
};

export default Tag;
