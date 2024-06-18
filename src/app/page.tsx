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
      <InfoCardWrapper>
        <div className="px-[21px] py-11 space-y-6">
          <article className="max-h-[205px] h-full bg-background flex items-center justify-center flex-col py-2 gap-y-3 rounded-2xl">
            <Image src={"/images/QrCode.png"} alt="" width={155} height={155} />
            <span className="font-bold text-caption1 leading-7 text-primary">
              تصویر بالا را با گوشی همراه اسکن نمایید
            </span>
          </article>

          <div className="flex items-center gap-1">
            <IconClock viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
            <span className="text-primary text-caption2">
              اعتبار گواهی:{" "}
              <span className="text-caption1 font-bold">1404/02/25</span>
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Button
              variant="secondary"
              isIcon={true}
              className="group text-caption1 text-primary"
              icon={
                <IconHeart
                  viewBox="0 0 24 24"
                  className="stroke-primary group-hover:stroke-secondary duration-200 ease-linear w-5 h-5 -order-1"
                />
              }
            >
              <span className="order-2">علاقمندی</span>
            </Button>
            <Button
              variant="secondary"
              isIcon={true}
              className="group text-caption1 text-primary"
              icon={
                <IconShare
                  viewBox="0 0 24 24"
                  className="stroke-primary group-hover:stroke-secondary duration-200 ease-linear w-5 h-5 -order-1"
                />
              }
            >
              <span className="order-2">اشتراک گذاری</span>
            </Button>
          </div>

          <Button className="w-full flex items-center justify-center font-bold text-base">
            ارتباط با کارگزاری
          </Button>
        </div>
      </InfoCardWrapper>
    </main>
  );
}
