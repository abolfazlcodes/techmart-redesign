import {useMemo} from 'react';

interface FilterItem {
    id: number;
    faName: string;
    enName: string | null;
    slug: string;
    order: number;
}

const useSortedFilters = (
    filters: FilterItem[],
    selectedFilters: { [key: number]: string }
) => {
    const sortedFilters = useMemo(() => {
        return [...filters].sort((a, b) => a.order - b.order);
    }, [filters]);

    return useMemo(() => {
        const selected = sortedFilters.filter(filter => selectedFilters[filter.id]);
        const unselected = sortedFilters.filter(filter => !selectedFilters[filter.id]);
        return [...selected, ...unselected];
    }, [sortedFilters, selectedFilters]);
};

export default useSortedFilters;
