'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import useQueryString from "@/app/filter/_custom-hooks/useQuerystring";


const Sort = () => {
    const { createQueryString, updateQueryString } = useQueryString();
    const [activeSort, setActiveSort] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const sortParam = searchParams.get('sort');
        if (sortParam === 'asc' || sortParam === 'desc') {
            setActiveSort(sortParam);
        }
    }, []);

    const handleSortChange = (sort: 'asc' | 'desc') => {
        setActiveSort(sort);
        const newQueryString = createQueryString('sort', sort, 0, false);
        updateQueryString(newQueryString);
    };

    return (
        <div className="flex items-center gap-x-2">
            <div
                onClick={() => handleSortChange('asc')}
                className={classNames(
                    'border border-gray-4 px-4 py-1 rounded-xl body1-d !font-normal cursor-pointer',
                    { 'bg-primary text-white': activeSort === 'asc', 'text-primary bg-white': activeSort !== 'asc' }
                )}
            >
                جدیدترین
            </div>
            <div
                onClick={() => handleSortChange('desc')}
                className={classNames(
                    'border border-gray-4 px-4 py-1 rounded-xl body1-d !font-normal cursor-pointer',
                    { 'bg-primary text-white': activeSort === 'desc', 'text-primary  bg-white': activeSort !== 'desc' }
                )}
            >
                قدیمی ترین
            </div>
        </div>
    );
};

export default Sort;
