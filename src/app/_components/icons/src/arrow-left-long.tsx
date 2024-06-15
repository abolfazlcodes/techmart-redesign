import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M16.5 7.58691L1.5 7.58691M1.5 7.58691L8.25 14.3369M1.5 7.58691L8.25 0.836914"/>
    </BaseIcon>
  );
}