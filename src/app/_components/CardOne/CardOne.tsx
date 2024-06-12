import { IconLike } from "../icons/icons";

const CardOne = () => {
  return (
    <article className="w-full group py-8 px-4 rounded-2xl flex items-center flex-col justify-center gap-6 shadow-md">
      <figure className="sm:w-[72px] w-[60px] h-[60px] sm:h-[72px] relative bg-icon group-hover:bg-secondary rounded-[28px] flex items-center justify-center transition-all duration-200 ease-linear">
        <IconLike
          viewBox="0 0 60 60"
          className="w-full h-full fill-white stroke-none self-center mx-auto ml-3"
        />
      </figure>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary text-center leading-8 md:text-body1-d text-body2-d font-bold">
          محصول های پربازدید
        </h3>
        <p className="text-description leading-7 text-body2-m md:text-body2-d">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      </div>
    </article>
  );
};

export default CardOne;
