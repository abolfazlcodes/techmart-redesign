import { IconArrowLeft, IconLike } from "../icons/icons";

const TechFieldCard = () => {
  return (
    <article className="w-full group p-3 rounded-2xl flex gap-6 shadow-md cursor-pointer">
      <figure className="sm:w-[72px] w-[60px] h-[60px] sm:h-[72px] relative bg-icon group-hover:bg-secondary rounded-[28px] flex items-center justify-center transition-all duration-200 ease-linear">
        <IconLike
          viewBox="0 0 60 60"
          className="w-full h-full fill-white stroke-none self-center mx-auto ml-3"
        />
      </figure>

      <div className="flex items-center justify-between w-full flex-1 gap-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-primary leading-8 md:text-body1-d text-body2-d group-hover:font-bold transition-all duration-200 ease-linear">
            فناوری زیستی
          </h3>
          <p className="text-description leading-7 text-body2-m md:text-body2-d">
            (توضیحات بیشتر در مورد حوزه)
          </p>
        </div>

        <span>
          <IconArrowLeft viewBox="0 0 24 24" className="w-6 h-6 fill-primary" />
        </span>
      </div>
    </article>
  );
};

export default TechFieldCard;
