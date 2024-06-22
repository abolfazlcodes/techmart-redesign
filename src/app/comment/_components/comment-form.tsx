'use client'

import {useForm} from "react-hook-form";
import TextInput from "@/app/comment/_components/text-input";
import TextAreaInput from "@/app/comment/_components/textarea-input";
import Button from "@/app/_components/button/button";

const CommentForm = () => {
    const {
        register,
        formState: {errors},
    } = useForm<{
        name: string,
        email: string,
        description: string,
    }>({
        mode: "onBlur",
    });
    return (
        <div className="flex flex-col gap-y-4">
            <div className="space-y-1.5">
                <label className="body2-d text-description !font-normal" htmlFor="mobile">
                    نام و نام خانوادگی
                </label>
                <TextInput
                    name={"name"}
                    register={register("name", {required: "نام و نام خانوادگی اجباری است"})}
                    errors={errors}
                />
            </div>

            <div className="space-y-1.5">
                <label className="body2-d text-description !font-normal" htmlFor="mobile">
                    پست الکترونیکی
                </label>
                <TextInput
                    name={"name"}
                    register={register("name", {required: "نام و نام خانوادگی اجباری است"})}
                    errors={errors}
                />
            </div>

            <div className="space-y-1.5">
                <label className="body2-d text-description !font-normal" htmlFor="mobile">
                    نظرات
                </label>
                <TextAreaInput
                    name={"description"}
                    register={register("description", {required: "متن نظر اجباری است"})}
                    errors={errors}
                    rows={4}
                />
            </div>

            <div className="text-left">
                <Button className="">ثبت نظر</Button>
            </div>

        </div>
    );
};

export default CommentForm;