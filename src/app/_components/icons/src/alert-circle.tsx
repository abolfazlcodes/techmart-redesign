import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M8 4.83325V7.49992M8 10.1666H8.00666M14.6667 7.49992C14.6667 11.1818 11.6819 14.1666 8 14.1666C4.3181 14.1666 1.33333 11.1818 1.33333 7.49992C1.33333 3.81802 4.3181 0.833252 8 0.833252C11.6819 0.833252 14.6667 3.81802 14.6667 7.49992Z"/>
    </BaseIcon>
  );
}