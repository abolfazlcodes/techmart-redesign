"use client";

import React, { ReactNode, useState } from "react";
import { IconMinus, IconPlus } from "../icons/icons";

interface IAccordionProps {
  title: string | ReactNode;
  content: string | ReactNode;
  isOpenStatus?: boolean;
}

const Accordion: React.FC<IAccordionProps> = ({
  title,
  content,
  isOpenStatus = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenStatus);

  const handleOpenAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <article className="border-b w-full border-gray-3">
      <header
        className="py-4 flex items-center gap-2 cursor-pointer"
        onClick={handleOpenAccordion}
      >
        {isOpen ? (
          <IconMinus
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-icon stroke-none"
          />
        ) : (
          <IconPlus
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-icon stroke-none"
          />
        )}
        <h3 className="text-primary font-bold md:text-body1-d text-body2-d">
          {title}
        </h3>
      </header>

      {/* CONTENT GOES HERE */}
      <div
        className={`overflow-hidden duration-500 transition-all px-8 ${
          isOpen ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <p className="text-description pb-4 text-body2-m md:text-body1-m">
          {content}
        </p>
      </div>
    </article>
  );
};

export default Accordion;
