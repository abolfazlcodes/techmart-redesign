'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
import useDebounce from "@/app/search/_custom-hooks/useDebounce";
import useQueryString from "@/app/filter/_custom-hooks/useQuerystring";
import { useSearchParams } from 'next/navigation';
import Textbox from "@/app/search/_components/textbox";
import { IconSearchFill } from "@/app/_components/icons/icons";
import Button from "@/app/_components/button/button";

interface SearchComponentProps {
    clickable?: boolean;
    icon?: React.ReactNode;
    queryParamName?: string;
    onSearchChange?: (value: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ clickable = false, icon, queryParamName, onSearchChange }) => {
    const searchParams = useSearchParams();
    const initialSearchTerm = queryParamName ? searchParams.get(queryParamName) || '' : '';

    const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
    const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce delay
    const { createQueryString, deleteQueryString, updateQueryString } = useQueryString();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (onSearchChange) {
            onSearchChange(event.target.value);
        }
    };

    const handleSearch = () => {
        if (queryParamName) {
            if (searchTerm) {
                const newQueryString = createQueryString(queryParamName, searchTerm, 0, false);
                updateQueryString(newQueryString);
            } else {
                const newQueryString = deleteQueryString(queryParamName, 0);
                updateQueryString(newQueryString);
            }
        }
    };

    // Effect to handle search term changes if not using clickable mode
    useEffect(() => {
        if (queryParamName && !clickable) {
            if (debouncedSearchTerm) {
                const newQueryString = createQueryString(queryParamName, debouncedSearchTerm, 0, false);
                updateQueryString(newQueryString);
            } else {
                const newQueryString = deleteQueryString(queryParamName, 0);
                updateQueryString(newQueryString);
            }
        }
    }, [debouncedSearchTerm, clickable, createQueryString, deleteQueryString, updateQueryString, queryParamName]);

    return (
        <>
            <div className="bg-background border border-icon px-4 py-2 rounded-2xl flex">
                <Textbox
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="جستجو..."
                    aria-label="Search input"
                />
                <IconSearchFill className="fill-primary stroke-primary" />
            </div>
            {clickable && (
                <Button size={"small"} onClick={handleSearch}>Search</Button>
            )}
        </>
    );
};

export default SearchComponent;
