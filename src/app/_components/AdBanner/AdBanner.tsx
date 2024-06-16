import Button from "../button/button";
import { IconArrowLeftLong } from "../icons/icons";

interface IAdBannerProps {
  title: string;
  caption: string;
  buttonTitle: string;
}

const AdBanner: React.FC<IAdBannerProps> = ({
  title,
  buttonTitle,
  caption,
}) => {
  return (
    <article className="shadow-xl bg-primary rounded-2xl lg:px-[134px] lg:pt-[4.5rem] lg:pb-11 flex flex-col md:flex-row p-12 justify-center gap-6 lg:justify-between items-center text-white">
      <div className="w-full space-y-4 text-center">
        <h2 className="lg:text-4xl md:text-start text-lg font-bold leading-4 whitespace-nowrap lg:leading-[72px]">
          {title}
        </h2>
        <p className="text-body1-d md:text-start text-center whitespace-nowrap lg:text-title1-m">
          {caption}
        </p>
      </div>

      <Button
        variant="primary"
        className="flex text-body2-d whitespace-nowrap font-bold items-center"
      >
        {buttonTitle}
        <IconArrowLeftLong viewBox="0 0 24 24" className="w-6 h-6 mt-2" />
      </Button>
    </article>
  );
};

export default AdBanner;
