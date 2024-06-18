import Image from "next/image";
import InfoCardWrapper from "../InfoCardWrapper/InfoCardWrapper";
import QrCode from "../QrCode/QrCode";
import { IconHeart, IconShare, IconWarning } from "../icons/icons";
import Button from "../button/button";

const CompanyInfoCard = () => {
  return (
    <InfoCardWrapper>
      <div className="py-[53px] px-[21px] space-y-6">
        <QrCode QrCodeImage="/images/QrCode.png" />

        <div className="bg-background py-1 rounded-lg px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/broker-card-info.png"}
              alt=""
              width={42}
              height={42}
            />
            <span className="text-caption1 text-gray-8">دارنده فن بنیان</span>
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
            وبسایت محصول:
            <span className="text-primary text-caption1 font-bold">
              {" "}
              shanaatr.com
            </span>
          </p>
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
          ارتباط با شرکت
        </Button>
      </div>
    </InfoCardWrapper>
  );
};

export default CompanyInfoCard;
