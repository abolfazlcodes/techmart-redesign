import React from 'react';
import StarRating from "@/app/comment/_components/star-rating";
import CommentCard from "@/app/comment/_components/comment-card";

const Page = () => {
    return (
        <div className="m-20 bg-background ">
            {/*<StarRating disabled={true} starClasses={"w-5 h-5"} initialRating={4}/>*/}


            <div className="m-10 max-w-[585px]">
                <CommentCard/>
            </div>
        </div>
    );
};

export default Page;