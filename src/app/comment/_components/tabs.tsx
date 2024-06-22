'use client';

import { useState, useEffect, ReactNode, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import classNames from 'classnames';
import useQueryString from "@/app/filter/_custom-hooks/useQuerystring";

interface Tab {
    value: string;
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    queryParamName: string;
    wrapperClassNames?: string,
    useQueryParams?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ tabs, queryParamName, useQueryParams = true , wrapperClassNames}) => {
    const { createQueryString, updateQueryString } = useQueryString();
    const searchParams = useSearchParams();
    const underlineRef = useRef<HTMLSpanElement | null>(null);
    const tabsRef = useRef<HTMLDivElement | null>(null);

    const initialActiveTab = useQueryParams
        ? searchParams.get(queryParamName) || tabs[0].value
        : tabs[0].value;
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    useEffect(() => {
        if (useQueryParams) {
            const currentTab = searchParams.get(queryParamName);
            if (currentTab && currentTab !== activeTab) {
                setActiveTab(currentTab);
            }
        }
    }, [searchParams, activeTab, queryParamName, useQueryParams]);

    useEffect(() => {
        const updateUnderline = () => {
            const activeButton = tabsRef.current?.querySelector(`button[data-value="${activeTab}"]`) as HTMLButtonElement;
            if (activeButton && underlineRef.current) {
                requestAnimationFrame(() => {
                    underlineRef.current!.style.width = `${activeButton.clientWidth}px`;
                    underlineRef.current!.style.left = `${activeButton.offsetLeft}px`;
                });
            }
        };
        updateUnderline();
        window.addEventListener('resize', updateUnderline);
        return () => {
            window.removeEventListener('resize', updateUnderline);
        };
    }, [activeTab]);

    const handleTabClick = (tabValue: string) => {
        if (tabValue !== activeTab) {
            setActiveTab(tabValue);
            if (useQueryParams) {
                const newQueryString = createQueryString(queryParamName, tabValue, 0, false);
                updateQueryString(newQueryString);
            }
        }
    };

    return (
        <div className={`tabs-container ${classNames(
            wrapperClassNames
        )}`}>
            <div className="relative border-b border-tag" ref={tabsRef}>
                <div className="tabs flex space-x-4 py-1 px-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            data-value={tab.value}
                            className={classNames(
                                'tab',
                                'relative',
                                'px-4',
                                'py-2',
                                'transition',
                                'duration-300',
                                'ease-in-out',
                                { 'text-secondary !font-bold': activeTab === tab.value },
                                { 'text-description': activeTab !== tab.value }
                            )}
                            onClick={() => handleTabClick(tab.value)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <span
                    ref={underlineRef}
                    className="absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ease-in-out"
                ></span>
            </div>
            <div className="tab-content mt-4">
                {tabs.map((tab) => (
                    <div
                        key={tab.value}
                        className={classNames('tab-pane', { hidden: activeTab !== tab.value })}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
