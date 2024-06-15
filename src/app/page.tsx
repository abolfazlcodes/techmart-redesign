import Image from "next/image";
import CardOne from "./_components/CardOne/CardOne";
import {
  IconArrowLeftOutlined,
  IconBuilding,
  IconClock,
  IconLike,
  IconLocation,
} from "./_components/icons/icons";
import Button from "./_components/button/button";
import TechFieldCard from "./_components/TechFieldCard/TechFieldCard";
import ProductCard from "./_components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="px-4">
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </div> */}

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
      </div> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}

      <div>
        <article className="group hover:shadow-lg transition-all duration-200 ease-linear w-full p-4 gap-4 md:pt-4 md:pb-2 md:pr-[42px] md:pl-6 rounded-2xl flex justify-between shadow-md flex-wrap">
          <div className="flex flex-col w-fit gap-y-2">
            <h3 className="text-primary leading-8 md:text-body1-d group-hover:text-secondary transition-all duration-200 ease-linear text-body2-d font-bold">
              دانش فنی و تجهیزات مورد نیاز برای تولید قند حبه
            </h3>

            <p className="text-description leading-7 text-body2-m md:text-body2-d">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>

            <div className="flex items-center gap-2">
              <span className="py-[2px] px-2 bg-tag rounded-50 text-caption2 text-primary">
                تجهیزات پزشکی
              </span>
              <span className="py-[2px] px-2 bg-tag rounded-50 text-caption2 text-primary">
                دارو
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2 mt-2 mb-4 flex-wrap">
            <div className="flex items-center gap-1">
              <IconBuilding
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-icon"
              />
              <span className="text-primary text-caption2">داروسازی لقمان</span>
            </div>
            <div className="flex items-center gap-1">
              <IconLocation
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-icon"
              />
              <span className="text-primary text-caption2">داروسازی لقمان</span>
            </div>
          </div>
          <div className="flex flex-col w-fit gap-y-4">
            <span className="py-[2px] flex items-center w-fit self-end gap-2 px-2 bg-tag rounded-50 text-caption2 text-description">
              <IconClock
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-description stroke-none"
              />
              1403/12/02
            </span>
            <Button
              variant="secondary"
              className="group group-hover:border-secondary group-hover:text-secondary"
              icon={
                <IconArrowLeftOutlined
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-primary stroke-none group-hover:fill-secondary transition-all duration-200 ease-linear"
                />
              }
              isIcon
            >
              مشاهده نیاز
            </Button>
          </div>
        </article>
      </div>
    </main>
  );
}
