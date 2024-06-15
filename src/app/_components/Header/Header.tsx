import Link from "next/link";
import { IconArrowLeftOutlined } from "../icons/icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-2">
      <h1 className="text-primary font-bold text-title2-d leading-8 lg:text-2xl lg:leading-10">
        رویدادهای فن‌بازار ملیء
      </h1>

      <div className="bg-gray-4 w-[78%] mx-auto h-[1px] xl:block hidden"></div>

      <Link
        href={"/"}
        className="text-secondary flex items-center gap-2 leading-7 text-caption1 lg:text-title2-m lg:leading-8"
      >
        <span>مشاهده همه</span>
        <IconArrowLeftOutlined
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-secondary stroke-none"
        />
      </Link>
    </header>
  );
};

export default Header;
