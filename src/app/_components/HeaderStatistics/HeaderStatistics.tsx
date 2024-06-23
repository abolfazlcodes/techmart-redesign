import { IconPeople } from "../icons/icons";
import StatisticItem from "../StatisticItem/StatisticItem";

const HeaderStatistics = () => {
  return (
    <article className="bg-primary max-w-[1600px] mx-auto rounded-[64px] lg:pt-[38px] lg:pb-[43px] px-4 relative pt-2 pb-[20px] lg:px-[137px]">
      <div className="flex items-center justify-between">
        <StatisticItem
          title="25000+"
          subTitle="کارگزاری‌های فعال"
          icon={
            <IconPeople
              viewBox="0 0 42 42"
              className="w-[42px] h-[42px] fill-white stroke-none"
            />
          }
        />
        <StatisticItem
          title="4000+"
          subTitle="شرکت هایءء فعال"
          icon={
            <IconPeople
              viewBox="0 0 42 42"
              className="w-[42px] h-[42px] fill-white stroke-none"
            />
          }
        />
        <StatisticItem
          title="16000+"
          subTitle="محصولات فن بازار"
          icon={
            <IconPeople
              viewBox="0 0 42 42"
              className="w-[42px] h-[42px] fill-white stroke-none"
            />
          }
          className="hidden md:flex"
        />
        <StatisticItem
          title="670+"
          subTitle="تعداد نیاز‌ها"
          icon={
            <IconPeople
              viewBox="0 0 42 42"
              className="w-[42px] h-[42px] fill-white stroke-none"
            />
          }
          className="hidden lg:flex"
        />
      </div>

      <div className="w-4 h-9 left-1/2 -translate-x-1/2 z-20 -bottom-6 rounded-full border border-white absolute before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:left-1/2 before:top-1 before:-translate-x-1/2"></div>

      {/* curved inverted style */}
      <div className="absolute header-indicator -bottom-11 px-20 py-16 bg-primary left-[35%] sm:left-[40%] md:left-[45%] -z-20"></div>
    </article>
  );
};

export default HeaderStatistics;
