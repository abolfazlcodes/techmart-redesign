import CardOne from "./_components/CardOne/CardOne";
import Button from "./_components/button/button";
import TechFieldCard from "./_components/TechFieldCard/TechFieldCard";
import ProductCard from "./_components/ProductCard/ProductCard";
import NeedsCard from "./_components/NeedsCard/NeedsCard";
import Image from "next/image";
import {
  IconArrowLeft,
  IconArrowLeftLong,
  IconArrowLeftOutlined,
  IconBuilding,
  IconClock,
  IconHeart,
  IconLocation,
  IconMessage,
  IconPeople,
  IconPhone,
  IconShare,
  IconStar,
  IconWarning,
} from "./_components/icons/icons";
import Tag from "./_components/Tag/Tag";
import Link from "next/link";
import EventCard from "./_components/EventCard/EventCards";
import NewsCard from "./_components/NewsCard/NewsCard";
import Header from "./_components/Header/Header";
import AdBanner from "./_components/AdBanner/AdBanner";
import BrokerCard from "./_components/BrokerCard/BrokerCard";
import CompanyCard from "./_components/CompanyCard/CompanyCard";
import InfoCardWrapper from "./_components/InfoCardWrapper/InfoCardWrapper";
import NeedInfoCard from "./_components/NeedInfoCard/NeedInfoCard";
import ProductInfoCard from "./_components/ProductInfoCard/ProductInfoCard";
import QrCode from "./_components/QrCode/QrCode";
import BrokerInfoCard from "./_components/BrokerInfoCard/BrokerInfoCard";
import CompanyInfoCard from "./_components/CompanyInfoCard/CompanyInfoCard";
import StatisticItem from "./_components/StatisticItem/StatisticItem";

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
      {/* <div>
        <NeedsCard />
      </div> */}
      {/* <div className="grid grid-cols-2 md:grid-rows-1 md:grid-cols-1 lg:grid-cols-2">
        <EventCard />
        <EventCard />
      </div> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div> */}
      {/* <Header /> */}
      {/* <AdBanner
        title="اگر صاحب کالا یا برندی هستید ،"
        caption="همین حالا محصول خود را ثبت کنید."
        buttonTitle="همین الان شروع کن"
      /> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <BrokerCard />
        <BrokerCard />
        <BrokerCard />
        <BrokerCard />
      </div> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div> */}

      {/* Single Need Page Info Card */}
      {/* <NeedInfoCard /> */}

      {/* Single Product Page Info Card */}
      {/* <ProductInfoCard /> */}

      {/* Single Broker Page Info Card */}
      {/* <BrokerInfoCard /> */}

      {/* Single Company Page Info Card */}
      {/* <CompanyInfoCard /> */}

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

        <div className="flex items-center justify-center mt-5">
          <div className="w-4 h-[34px] rounded-full border border-white relative before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:left-1/2 before:top-1 before:-translate-x-1/2"></div>
        </div>

        {/* curved inverted style */}
        <div className="absolute w-32 h-16 bg-primary rounded-b-full -translate-x-1/2 top-full left-1/2 after:absolute after:bg-red-500 after:w-4 after:h-4 after:top-0 after:-left-[14px] after:rounded-tr-full shadow-[6px 6px #28374C]"></div>
      </article>
    </main>
  );
}
