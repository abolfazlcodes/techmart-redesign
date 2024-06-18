import Button from "../button/button";
import { IconClock, IconHeart, IconShare } from "../icons/icons";
import InfoCardWrapper from "../InfoCardWrapper/InfoCardWrapper";

const NeedInfoCard = () => {
  return (
    <InfoCardWrapper>
      <div className="space-y-6 px-[21px] py-9">
        <div className="flex items-center gap-1">
          <IconClock viewBox="0 0 24 24" className="w-5 h-5 stroke-icon" />
          <span className="text-primary text-caption2">
            تاریخ اعتبار:
            <span className="text-primary text-caption1 font-bold">
              {" "}
              1404/02/25
            </span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button
            variant="secondary"
            isIcon={true}
            className="group"
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
            className="group"
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
          ارتباط با تقاضا کننده
        </Button>
      </div>
    </InfoCardWrapper>
  );
};

export default NeedInfoCard;
