import React from 'react';
import StarRating from "@/app/comment/_components/star-rating";
import CommentCard from "@/app/comment/_components/comment-card";
import CommentForm from "@/app/comment/_components/comment-form";
import Tabs from "@/app/comment/_components/tabs";
import Sidebar from "@/app/comment/_components/sidebar";
import Sort from "@/app/comment/_components/sort";
import Search from "@/app/search/_components/search";

const Page = () => {

    const menuItems = [
        {
            label: 'فن بازار چیست',
            slug: 'fan-bazar',
            subMenu: [
                { label: 'پرتال فن بازار ملی ایران', slug: 'portal' },
                { label: 'شبکه فن‌بازارهای منطقه‌ای، تخصصی و بروکرها', slug: 'network' },
                // دیگر زیرمنوها...
            ],
        },
        {
            label: 'درباره فن بازار ملی ایران',
            slug: 'about',
        },
    ];
    const tabs = [
        { value: 'tab1', label: 'مشخصات محصول', content: <div>Content for Tab 1</div> },
        { value: 'tab2', label: 'مجوزها و تاییدیه‌ها', content: <div>Content for Tab 2</div> },
        { value: 'tab3', label: 'نظرات ', content: <div>Content for Tab 3</div> },
    ];
    return (
        <div className="m-10 bg-tag p-10">
            {/*<Tabs wrapperClassNames={" bg-white pt-2 pb-7 rounded-2xl"} tabs={tabs} queryParamName="activeTab" useQueryParams={false} />*/}

            {/*<div className="bg-white p-8 max-w-[450px] rounded-50">*/}
            {/*    <Sidebar menuItems={menuItems} queryParamName="menu" />*/}
            {/*</div>*/}

            <Sort/>
            <div className="mt-10">
                <Search />
            </div>

        </div>
    );
};

export default Page;