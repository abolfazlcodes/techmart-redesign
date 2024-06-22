'use client';

import {useState} from 'react';
import classNames from 'classnames';
import useQueryString from "@/app/filter/_custom-hooks/useQuerystring";
import {IconArrowUp} from "@/app/_components/icons/icons";


interface SubMenu {
    label: string;
    slug: string;
}

interface MenuItem {
    label: string;
    slug: string;
    subMenu?: SubMenu[];
}

interface SidebarProps {
    menuItems: MenuItem[];
    queryParamName: string;
}

const Sidebar: React.FC<SidebarProps> = ({menuItems, queryParamName}) => {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    const {createQueryString, updateQueryString} = useQueryString();

    const toggleMenu = (slug: string) => {
        setOpenMenus((prev) => ({...prev, [slug]: !prev[slug]}));
    };

    const handleItemClick = (slug: string, hasSubMenu: boolean) => {
        if (hasSubMenu) {
            toggleMenu(slug);
        } else {
            const newQueryString = createQueryString(queryParamName, slug, 0, false);
            updateQueryString(newQueryString);
        }
    };

    return (
        <div className="">
            <ul className="space-y-2">
                {menuItems.map((item) => (
                    <li key={item.slug}>
                        <div className={`flex items-center justify-between  ${item?.subMenu && openMenus[item?.slug] ? "border-b border-tag" : ""}`}>
                            <button
                                onClick={() => handleItemClick(item.slug, !!item.subMenu)}
                                className={`text-right flex gap-x-2 items-center body-1 text-primary w-full px-4 py-2 transition`}
                            >
                                &gt;
                               <span> {item.label}</span>
                            </button>
                            {item.subMenu && (
                                <button
                                    onClick={() => toggleMenu(item.slug)}
                                    className="px-2"
                                >
                                  <span>
                                    <IconArrowUp  width="16" height="16" viewBox="0 0 16 16" className={classNames('fill-none stroke-primary transform transition-transform',{
                                        'rotate-180': !openMenus[item.slug],
                                    })}/>
                                  </span>
                                </button>
                            )}
                        </div>
                        {item.subMenu && openMenus[item.slug] && (
                            <ul className="pl-6 mt-2 space-y-1">
                                {item.subMenu.map((subItem) => (
                                    <li key={subItem.slug}>
                                        <button
                                            onClick={() => handleItemClick(subItem.slug, false)}
                                            className="text-right w-full px-4 pb-8 body1-d text-description transition"
                                        >
                                            {subItem.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
