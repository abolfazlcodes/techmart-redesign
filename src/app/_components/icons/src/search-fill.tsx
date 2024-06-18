import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path opacity=".5" d="M3.68675 11.1566C3.68675 16.2137 7.78631 20.3133 12.8434 20.3133C17.9004 20.3133 22 16.2137 22 11.1566C22 6.09956 17.9004 2 12.8434 2C7.78631 2 3.68675 6.09956 3.68675 11.1566Z"/><path clip-rule="evenodd" d="M5.16132 18.8387C4.87901 18.5564 4.4213 18.5564 4.13899 18.8387L2.21128 20.7664C1.92898 21.0487 1.92898 21.5064 2.21128 21.7887C2.49359 22.071 2.9513 22.071 3.23361 21.7887L5.16132 19.861C5.44362 19.5787 5.44362 19.121 5.16132 18.8387Z"/>
    </BaseIcon>
  );
}