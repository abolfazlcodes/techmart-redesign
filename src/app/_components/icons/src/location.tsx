import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path clip-rule="evenodd" d="M0.708008 7.45307C0.708008 3.37055 3.96218 0.0419922 7.99967 0.0419922C12.0372 0.0419922 15.2913 3.37055 15.2913 7.45307C15.2913 9.42399 14.7297 11.5402 13.7367 13.3685C12.745 15.1946 11.296 16.7813 9.48343 17.6286C8.54181 18.0687 7.45754 18.0687 6.51592 17.6286C4.70332 16.7813 3.25436 15.1946 2.26264 13.3685C1.2697 11.5402 0.708008 9.42399 0.708008 7.45307ZM7.99967 1.29199C4.67337 1.29199 1.95801 4.03989 1.95801 7.45307C1.95801 9.20063 2.4602 11.1132 3.36109 12.772C4.26321 14.433 5.53802 15.7917 7.04521 16.4962C7.65138 16.7795 8.34796 16.7795 8.95414 16.4962C10.4613 15.7917 11.7361 14.433 12.6383 12.772C13.5391 11.1132 14.0413 9.20063 14.0413 7.45307C14.0413 4.03989 11.326 1.29199 7.99967 1.29199ZM7.99967 5.45866C6.96414 5.45866 6.12467 6.29812 6.12467 7.33366C6.12467 8.36919 6.96414 9.20866 7.99967 9.20866C9.03521 9.20866 9.87467 8.36919 9.87467 7.33366C9.87467 6.29812 9.03521 5.45866 7.99967 5.45866ZM4.87467 7.33366C4.87467 5.60777 6.27378 4.20866 7.99967 4.20866C9.72556 4.20866 11.1247 5.60777 11.1247 7.33366C11.1247 9.05955 9.72556 10.4587 7.99967 10.4587C6.27378 10.4587 4.87467 9.05955 4.87467 7.33366Z"/>
    </BaseIcon>
  );
}