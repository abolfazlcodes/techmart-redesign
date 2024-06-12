import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path clip-rule="evenodd" d="M15.9881 4.43057C16.3026 4.70014 16.339 5.17361 16.0694 5.48811L10.4878 12L16.0694 18.5119C16.339 18.8264 16.3026 19.2999 15.9881 19.5695C15.6736 19.839 15.2001 19.8026 14.9306 19.4881L8.93056 12.4881C8.68981 12.2072 8.68981 11.7928 8.93056 11.5119L14.9306 4.51192C15.2001 4.19743 15.6736 4.161 15.9881 4.43057Z"/>
    </BaseIcon>
  );
}