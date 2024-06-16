'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

// Custom hook for managing URL search parameters
const useQueryString = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Function to create a new searchParams string by merging the current searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string, id: number, multiple: boolean): string => {
            const params = new URLSearchParams(searchParams.toString());
            if (multiple) {
                params.append(`${name}[${id}]`, value);
            } else {
                params.set(name, value);
            }
            return params.toString();
        },
        [searchParams]
    );

    // Function to create a new searchParams string by removing a specified key or value
    const deleteQueryString = useCallback(
        (name: string, id: number, value?: string, multiple?: boolean): string => {
            const params = new URLSearchParams(searchParams.toString());
            if (multiple && value) {
                const key = `${name}[${id}]`;
                const existingValues = params.getAll(key).filter(item => item !== value);
                params.delete(key);
                existingValues.forEach(item => params.append(key, item));
            } else {
                params.delete(name);
            }
            return params.toString();
        },
        [searchParams]
    );

    // Function to push a new URL with updated search parameters
    const updateQueryString = (newParams: string) => {
        router.push(`${pathname}?${newParams}`);
    };

    return { createQueryString, deleteQueryString, updateQueryString };
};

export default useQueryString;
