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
  IconArrowUp,
  IconArrowUpLong,
  IconBuilding,
  IconClock,
  IconHeart,
  IconLocation,
  IconMessage,
  IconPeople,
  IconPhone,
  IconPlus,
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
import FooterCopyRightBox from "./_components/FooterCopyrightBox/FooterCopyrightBox";
import HeaderStatistics from "./_components/HeaderStatistics/HeaderStatistics";
import Map from "./_components/map/map";
import MapContainer from "./_components/MapContainer/MapContainer";
import Accordion from "./_components/Accordion/Accordion";

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

      {/* <HeaderStatistics /> */}

      {/* Footer box */}
      {/* <FooterCopyRightBox /> */}

      {/* Map */}
      {/* <div className="max-w-[632px] w-full h-[336px] rounded-50 overflow-hidden">
        <MapContainer />
      </div> */}

      {/* Accordion FAQ component */}
      <Accordion
        title="فن بازار ملی ایران چیست و چه هدفی دنبال می‌کند؟"
        content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد."
      />
      <Accordion
        title="فن بازار ملی ایران چیست و چه هدفی دنبال می‌کند؟"
        content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد."
      />
    </main>
  );
}
