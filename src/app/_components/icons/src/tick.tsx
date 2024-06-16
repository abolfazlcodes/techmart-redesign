import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M1.60001 3.49922L3.40001 5.29922L7.00001 1.69922"/>
    </BaseIcon>
  );
}