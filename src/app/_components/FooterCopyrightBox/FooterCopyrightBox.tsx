import { IconArrowUpLong } from "../icons/icons";

const FooterCopyRightBox = () => {
  return (
    <div className="mt-20">
      <article className="bg-primary max-w-[1600px] mx-auto rounded-[64px] px-6 relative pt-8 pb-[10px] lg:px-8 lg:py-4">
        <div className="flex items-center justify-between flex-col md:flex-row text-white gap-3">
          <span className="text-caption2">
            تمام حقوق مادی و معنوی این وبسایت متعلق به پارک فناوری پردیس است.
          </span>
          <span className="text-caption2">Copyright © techmart.ir</span>
        </div>

        {/* indicator */}
        <div className="absolute footer-indicator md:py-10 md:px-20 py-16 px-24 left-1/2 bg-primary -translate-x-1/2 bottom-0 -z-10"></div>

        {/* arrow button */}
        <div className="bg-white absolute w-10 h-10 rounded-full flex items-center justify-center left-1/2 -translate-x-1/2 -top-5">
          <IconArrowUpLong
            viewBox="0 0 24 24"
            className="w-6 h-6 ml-[6px] fill-primary stroke-none self-center mt-4 cursor-pointer"
          />
        </div>
      </article>
    </div>
  );
};

export default FooterCopyRightBox;
