import Image from "next/image";
import Button from "../button/button";
import {
  IconClock,
  IconHeart,
  IconMessage,
  IconShare,
  IconStar,
  IconWarning,
} from "../icons/icons";
import InfoCardWrapper from "../InfoCardWrapper/InfoCardWrapper";

const BrokerInfoCard = () => {
  return (
    <InfoCardWrapper>
      <div className="space-y-6 pr-[21px] pl-[34px] py-[26px]">
        <div className="flex items-center gap-1">
          <IconClock viewBox="0 0 24 24" className="w-5 h-5 stroke-icon" />
          <span className="text-primary text-caption2">
            آخرین بروزرسانی:
            <span className="text-primary text-caption1 font-bold">
              {" "}
              1403/02/25 - 13:59
            </span>
          </span>
        </div>

        <div className="bg-background py-1 rounded-lg px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/broker-card-info.png"}
              alt=""
              width={42}
              height={42}
            />
            <span className="text-caption1 text-gray-8">دارنده فن نماد</span>
          </div>

          <div>
            <IconWarning
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-secondary stroke-none"
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-primary text-caption2">
            دارنده محصول:
            <span className="text-primary text-caption1 font-bold">
              {" "}
              شانا عطر
            </span>
          </p>

          <p className="text-primary text-caption2">
            وبسایت محصول:
            <span className="text-primary text-caption1 font-bold">
              {" "}
              shanaatr.com
            </span>
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <IconStar
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-secondary stroke-none"
              />
              <span className="text-primary text-caption2">۳.۸ امتیاز</span>
            </div>
            <div className="flex items-center gap-1">
              <IconMessage
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-icon fill-none"
              />
              <span className="text-primary text-caption2"> ۲۲۳  دیدگاه </span>
            </div>
          </div>
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
          ارتباط با ارائه‌دهنده
        </Button>
      </div>
    </InfoCardWrapper>
  );
};

export default BrokerInfoCard;
