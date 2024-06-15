import Image from "next/image";
import {
  IconArrowLeftLong,
  IconBuilding,
  IconClock,
  IconLocation,
} from "../icons/icons";
import Tag from "../Tag/Tag";
import Link from "next/link";

const EventCard = () => {
  return (
    <article className="group hover:shadow-lg transition-all duration-200 ease-linear rounded-2xl max-w-[311px] md:max-w-none md:flex-row w-full flex flex-col p-4 shadow-md gap-6">
      <figure className="relative w-[120px]  h-[169px] mx-auto">
        <Image
          src="/images/event-img.png"
          alt=""
          fill
          className="w-full h-full object-contain object-center"
        />
      </figure>

      <div className="flex-1">
        <h3 className="text-primary leading-8 md:text-body1-d group-hover:text-secondary transition-all duration-200 ease-linear text-body2-d font-bold">
          عنوان رویداد
        </h3>

        <div className="flex items-center justify-between md:justify-normal gap-2 md:gap-5 my-2">
          <div className="flex items-center gap-1">
            <IconBuilding viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
            <span className="text-primary text-caption2">
              قند حبه نوید آبادان
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IconClock viewBox="0 0 24 24" className="w-5 h-5 stroke-icon" />
            <span className="text-primary text-caption2">
              ساعت 13:30 - 10:45
            </span>
          </div>
          <div className="items-center gap-1 hidden md:flex">
            <IconLocation viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
            <span className="text-primary text-caption2">خوزستان، آبادن</span>
          </div>
        </div>

        <p className="text-description leading-7 text-body2-m md:text-body2-d">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر
          آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag>تجهیزات پزشکی</Tag>
            <Tag>دارو</Tag>
          </div>

          <Link
            href={"/"}
            className="flex items-center group-hover:text-secondary transition-all duration-200 ease-linear text-primary text-body1-m"
          >
            اطلاعات بیشتر
            <IconArrowLeftLong
              viewBox="0 0 24 24"
              className="w-6 mt-2 h-6 fill-primary group-hover:fill-secondary transition-all duration-200 ease-linear"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
