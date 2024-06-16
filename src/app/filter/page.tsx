import FilterComponent from "@/app/filter/_components/custom-filter";
import Checkbox from "@/app/filter/_components/custom-checkbox";

const filters = [
    {
        id: 62,
        faName: "مرکز خدمات درمانی",
        order: 3,
        enName: null,
        slug: "مرکز-خدمات-درمانی"
    },
    {
        id: 63,
        faName: "فروشگاه‌های مواد غذایی",
        order: 0,
        enName: null,
        slug: "فروشگاه-مواد-غذایی"
    },
    {
        id: 64,
        faName: "تست ",
        order: 1,
        enName: null,
        slug: "تست"
    },
    {
        id: 65,
        faName: "تست 3",
        order: 4,
        enName: null,
        slug: "تست3"
    },
];

const Page = () => {
    return (
        <div className="m-20 max-w-[400px]">
            <FilterComponent boxClasses={"border border-tag px-2 pt-2 pb-4 rounded-2xl"}
                             labelClasses={"flex items-center max-w-fit gap-x-2 body1-d text-primary"}
                             titleClasses={"cursor-pointer flex items-center justify-between body1-d text-primary py-1 px-2 border-b border-tag"}
                             visibleCount={5} title={"حوزه فناوری"}
                             showMoreClasses={"mt-1 cursor-pointer flex justify-center items-center gap-x-1 text-description"}
                             isMobile={false} multiple={true}
                             filters={filters} queryKey="category"/>
        </div>
    );
};

export default Page;