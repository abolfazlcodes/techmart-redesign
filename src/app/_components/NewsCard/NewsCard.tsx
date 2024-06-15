import Image from "next/image";
import { IconBuilding } from "../icons/icons";

const NewsCard = () => {
  return (
    <article className="group hover:shadow-lg transition-all duration-200 ease-linear rounded-2xl w-full flex flex-col p-4 shadow-md gap-2 border border-gray-[#F3F4F6] bg-white">
      <figure className="relative rounded-lg overflow-hidden h-[218px]">
        <Image
          src={"/images/news-img.png"}
          fill
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <div className="space-y-2">
        <h3 className="text-primary leading-8 md:text-body1-d group-hover:text-secondary transition-all duration-200 ease-linear text-body2-d font-bold">
          عنوان خبر
        </h3>

        <p className="text-description leading-7 text-body2-m md:text-body2-d">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر
          آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className="flex items-center gap-1">
          <IconBuilding viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
          <span className="text-primary text-caption2">دوشنبه 1403/08/05</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
