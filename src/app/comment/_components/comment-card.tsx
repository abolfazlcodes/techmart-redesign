import Image from "next/image";
import StarRating from "@/app/comment/_components/star-rating";
import ShowPersianDate from "@/app/comment/_components/showPersianDate";

const CommentCard = () => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">

            <div className="flex items-center justify-between">
                {/*top right*/}
                <div className="flex items-center gap-x-4">
                    <figure className="relative h-12 aspect-square rounded-full overflow-hidden">
                        <Image
                            className="aspect-square"
                            src={'/images/test.png'} fill={true} alt={''}/>
                    </figure>

                    <div className="flex flex-col gap-y-2">
                        <span className="caption1 body2-d !font-bold text-primary">صابر محمودی</span>
                        <StarRating disabled starClasses="w-3 h-3" initialRating={3}/>
                    </div>
                </div>

                {/* top left */}
                <ShowPersianDate timeStamp={59900099995} />
            </div>

            <p className="text-description mt-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
        </div>
    );
};

export default CommentCard;