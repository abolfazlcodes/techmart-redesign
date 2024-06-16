import Image from "next/image";
import { IconArrowLeftLong, IconLocation, IconPhone } from "../icons/icons";
import Tag from "../Tag/Tag";
import Link from "next/link";

const BrokerCard = () => {
  return (
    <article className="bg-white shadow-md group hover:shadow-lg rounded-2xl transition-all duration-200 ease-linear px-6 pt-5 pb-4">
      <header>
        <h3 className="text-primary leading-8 md:text-body1-d text-body2-d font-bold">
           بازرگانی بین‌المللی فرپویان ایران زمین
        </h3>
      </header>

      <div className="flex gap-y-4 gap-x-11 mt-5 mb-4 flex-wrap">
        <div className="flex items-center gap-1">
          <IconLocation viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
          <span className="text-primary text-caption2">
            کارگزار استان: سیستان و بلوچستان
          </span>
        </div>
        <div className="flex items-center gap-1">
          <IconPhone viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
          <span className="text-primary text-caption2">
            شماره تماس:  021-46116086 
          </span>
        </div>
      </div>

      <div className="relative pr-6">
        <figure className="w-[50px] h-[50px] rounded-full overflow-hidden relative border border-icon">
          <Image
            src={"/images/broker-img.png"}
            className="w-full bg-white z-20 h-full object-center object-cover"
            fill
            alt=""
          />
        </figure>
        {/* line */}
        <div className="absolute border-b h-1 w-full top-1/2 left-0 border-tag "></div>
      </div>

      <div className="gap-y-[14px] flex items-center justify-between mt-4 md:mt-2 flex-wrap">
        <div className="flex items-center gap-2">
          <Tag>تجهیزات پزشکی</Tag>
          <Tag>تخصص تخصص</Tag>
        </div>

        <Link
          href={"/"}
          className="flex items-center text-secondary transition-all duration-200 mr-auto  ease-linear text-body1-m"
        >
          اطلاعات بیشتر
          <IconArrowLeftLong
            viewBox="0 0 24 24"
            className="w-6 mt-2 h-6 fill-secondary transition-all duration-200 ease-linear"
          />
        </Link>
      </div>
    </article>
  );
};

export default BrokerCard;
