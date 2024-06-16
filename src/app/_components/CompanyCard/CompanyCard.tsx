import Image from "next/image";
import { IconLocation } from "../icons/icons";
import Tag from "../Tag/Tag";

const CompanyCard = () => {
  return (
    <article className="bg-white shadow-md group hover:shadow-lg items-center gap-6 rounded-2xl transition-all duration-200 ease-linear p-4 flex flex-col">
      <figure className="relative w-28 h-[150px]">
        <Image
          src={"/images/company-img.png"}
          className="object-cover object-center w-full h-full"
          fill
          alt=""
        />
      </figure>

      <div className="self-start">
        <h3 className="text-primary group-hover:text-secondary duration-200 transition-all ease-linear leading-8 md:text-body1-d text-body2-d font-bold">
          شرکت کیمیا سرام زرین
        </h3>

        <div className="flex flex-col gap-2 my-4">
          <div className="flex items-center gap-1">
            <IconLocation viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
            <span className="text-primary text-caption2">
              کارگزار استان: سیستان و بلوچستان
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IconLocation viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
            <span className="text-primary text-caption2">
              کارگزار استان: سیستان و بلوچستان
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tag>تجهیزات پزشکی</Tag>
          <Tag>تخصص تخصص</Tag>
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;
