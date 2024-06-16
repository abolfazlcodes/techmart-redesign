import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M13.0184 10.0334L9.06467 5.68676C8.59774 5.17342 7.83367 5.17342 7.36673 5.68676L3.41296 10.0334" stroke-miterlimit="10"/>
    </BaseIcon>
  );
}