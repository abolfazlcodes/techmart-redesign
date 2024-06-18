import Button from "../button/button";
import { IconClock, IconHeart, IconShare } from "../icons/icons";
import InfoCardWrapper from "../InfoCardWrapper/InfoCardWrapper";
import QrCode from "../QrCode/QrCode";

const BrokerInfoCard = () => {
  return (
    <InfoCardWrapper>
      <div className="px-[21px] py-11 space-y-6">
        <QrCode QrCodeImage="/images/QrCode.png" />

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
  );
};

export default BrokerInfoCard;
