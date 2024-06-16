import { useState, useEffect } from 'react';

interface FilterItem {
    id: number;
    faName: string;
    enName: string | null;
    slug: string;
    order: number;
}

const useSelectedFilters = (
    filters: FilterItem[],
    queryKey: string,
    multiple: boolean
) => {
    const [selectedFilters, setSelectedFilters] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const selected: { [key: number]: string } = {};

        if (multiple) {
            filters.forEach(filter => {
                const value = params.get(`${queryKey}[${filter.id}]`);
                if (value) {
                    selected[filter.id] = value;
                }
            });
        } else {
            const value = params.get(queryKey);
            if (value) {
                const filter = filters.find(f => f.slug === value);
                if (filter) {
                    selected[filter.id] = value;
                }
            }
        }
        setSelectedFilters(selected);
    }, [queryKey, filters, multiple]);

    return [selectedFilters, setSelectedFilters] as const;
};

export default useSelectedFilters;
