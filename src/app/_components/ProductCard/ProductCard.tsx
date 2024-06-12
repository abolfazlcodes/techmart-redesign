import Image from "next/image";
import { IconBuilding, IconLocation } from "../icons/icons";

const ProductCard = () => {
  return (
    <article className="w-full group p-4 rounded-2xl flex items-center flex-col hover:shadow-lg transition-all duration-200 ease-linear justify-center gap-2 shadow-md h-[373px]">
      <figure className="w-[262px] h-[149px] relative rounded-[28px] flex items-center justify-center transition-all duration-200 ease-linear">
        <Image
          src={"/images/product-img.png"}
          fill
          alt=" cl"
          className="w-full h-full object-cover object-center"
        />
      </figure>

      <div className="flex flex-col">
        <h3 className="text-primary leading-8 md:text-body1-d group-hover:text-secondary transition-all duration-200 ease-linear text-body2-d font-bold">
          عنوان محصول
        </h3>
        <p className="text-description leading-7 text-body2-m md:text-body2-d">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>

        <div className="flex items-center gap-3 mt-2 mb-4 flex-wrap">
          <div className="flex items-center gap-1">
            <IconBuilding viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
            <span className="text-primary text-caption2">داروسازی لقمان</span>
          </div>
          <div className="flex items-center gap-1">
            <IconLocation viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
            <span className="text-primary text-caption2">داروسازی لقمان</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="py-[2px] px-2 bg-tag rounded-50 text-caption2 text-primary">
            تجهیزات پزشکی
          </span>
          <span className="py-[2px] px-2 bg-tag rounded-50 text-caption2 text-primary">
            دارو
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
