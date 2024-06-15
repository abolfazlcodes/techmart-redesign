import Button from "../button/button";
import {
  IconArrowLeftOutlined,
  IconBuilding,
  IconClock,
  IconLocation,
  IconPhone,
} from "../icons/icons";
import Tag from "../Tag/Tag";

const NeedsCard = () => {
  return (
    <article className="group hover:shadow-lg transition-all duration-200 ease-linear w-full p-4 gap-4 md:pt-4 md:pb-2 md:pr-[42px] md:pl-6 rounded-2xl flex justify-between shadow-md flex-wrap">
      <div className="flex flex-col w-fit gap-y-2">
        <h3 className="text-primary leading-8 md:text-body1-d group-hover:text-secondary transition-all duration-200 ease-linear text-body2-d font-bold">
          دانش فنی و تجهیزات مورد نیاز برای تولید قند حبه
        </h3>

        <p className="text-description leading-7 text-body2-m md:text-body2-d">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>

        <div className="flex items-center gap-2">
          <Tag>تجهیزات پزشکی</Tag>
          <Tag>دارو</Tag>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-2 mb-4 flex-wrap">
        <div className="flex items-center gap-1">
          <IconBuilding viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
          <span className="text-primary text-caption2">
            قند حبه نوید آبادان
          </span>
        </div>
        <div className="flex items-center gap-1">
          <IconPhone viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
          <span className="text-primary text-caption2">061-3268965</span>
        </div>
        <div className="flex items-center gap-1">
          <IconLocation viewBox="0 0 24 24" className="w-6 h-6 stroke-icon" />
          <span className="text-primary text-caption2">خوزستان، آبادن</span>
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
  );
};

export default NeedsCard;
