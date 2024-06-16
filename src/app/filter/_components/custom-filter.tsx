'use client';

import React, {useState} from 'react';
import useQueryString from "@/app/filter/_custom-hooks/useQuerystring";
import Checkbox from "@/app/filter/_components/custom-checkbox";
import Button from "@/app/_components/button/button";
import useSortedFilters from "@/app/filter/_custom-hooks/useSortedFilters";
import useSelectedFilters from "@/app/filter/_custom-hooks/useSelectedFilters";
import {IconArrowUp} from "@/app/_components/icons/icons";
import {twMerge} from "tailwind-merge";


interface FilterItem {
    id: number;
    faName: string;
    enName: string | null;
    slug: string;
    order: number;
}

interface FilterComponentProps {
    title: string; // New prop for title
    filters: FilterItem[];
    queryKey: string;
    multiple?: boolean;
    visibleCount?: number;
    isMobile?: boolean;
    CustomCheckboxComponent?: React.ComponentType<{ checked: boolean; onChange: () => void }>;
    boxClasses?: string;
    titleClasses?: string;
    labelClasses?: string;
    showMoreClasses?: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
                                                             title,
                                                             filters,
                                                             queryKey,
                                                             multiple = false,
                                                             visibleCount = 5,
                                                             isMobile = false,
                                                             CustomCheckboxComponent = Checkbox,
                                                             boxClasses,
                                                             titleClasses,
                                                             labelClasses,
                                                             showMoreClasses,
                                                         }) => {
    const {createQueryString, deleteQueryString, updateQueryString} = useQueryString();
    const [selectedFilters, setSelectedFilters] = useSelectedFilters(filters, queryKey, multiple);
    const [showAll, setShowAll] = useState(false);
    const [isOpen, setIsOpen] = useState(true); // State to manage the open/close state
    const displayFilters = useSortedFilters(filters, selectedFilters);


    const handleCheckboxChange = (id: number, slug: string) => {
        const isSelected = selectedFilters[id] === slug;
        const newSelectedFilters = multiple ? {...selectedFilters} : {};

        if (isSelected) {
            delete newSelectedFilters[id];
            const queryString = deleteQueryString(queryKey, id, slug, multiple);
            setSelectedFilters(newSelectedFilters);
            if (!isMobile) {
                updateQueryString(queryString);
            }
        } else {
            newSelectedFilters[id] = slug;
            const queryString = createQueryString(queryKey, slug, id, multiple);
            setSelectedFilters(newSelectedFilters);
            if (!isMobile) {
                updateQueryString(queryString);
            }
        }
    };

    const applyFilters = () => {
        const params = new URLSearchParams();
        Object.keys(selectedFilters).forEach(id => {
            if (multiple) {
                params.append(`${queryKey}[${id}]`, selectedFilters[+id]);
            } else {
                params.set(queryKey, selectedFilters[+id]);
            }
        });
        updateQueryString(params.toString());
    };

    const filtersToShow = showAll ? displayFilters : displayFilters.slice(0, visibleCount);

    return (
        <div className={twMerge("", boxClasses)}>
            <h2 onClick={() => !isMobile && setIsOpen(!isOpen)}
                className={twMerge("", titleClasses)}>
                <span>
                    {title}
                </span>
                <IconArrowUp className="fill-none stroke-primary" width="16" height="16" viewBox="0 0 16 16"/>
            </h2>
            <div className={`transition-all overflow-hidden duration-1000  ${isOpen ? 'max-h-[1000px]' : 'max-h-0 '}`}>
                {filtersToShow.map(filter => (
                    <div className="my-3" key={filter.id}>
                        <label className={twMerge("", labelClasses)}>
                            <CustomCheckboxComponent
                                checked={selectedFilters[filter.id] === filter.slug}
                                onChange={() => handleCheckboxChange(filter.id, filter.slug)}
                            />
                            <span>{filter.faName}</span>
                        </label>
                    </div>
                ))}
                {displayFilters.length > visibleCount && (
                    <div className={twMerge("", showMoreClasses)}
                         onClick={() => setShowAll(!showAll)}>
                        <span>
                            {showAll ? 'نمایش کمتر' : 'نمایش بیشتر'}
                        </span>
                        <IconArrowUp className="fill-none rotate-180 stroke-description" width="16" height="16"
                                     viewBox="0 0 16 16"/>
                    </div>
                )}
                {isMobile && (
                    <Button onClick={applyFilters}>
                        Apply Filters
                    </Button>
                )}
            </div>
        </div>
    );
};

export default FilterComponent;
