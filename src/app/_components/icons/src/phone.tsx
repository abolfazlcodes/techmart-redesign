import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path clip-rule="evenodd" d="M2.00745 1.40735C3.68752 -0.272721 6.52266 -0.145004 7.69248 1.95112L8.34149 3.11405C9.10541 4.48287 8.77987 6.20995 7.66157 7.34192C7.64668 7.36232 7.56774 7.47726 7.55791 7.67807C7.54536 7.93439 7.63639 8.52717 8.55482 9.4456C9.47295 10.3637 10.0656 10.455 10.3221 10.4425C10.5231 10.4327 10.6381 10.3538 10.6585 10.3388C11.7905 9.22055 13.5176 8.89501 14.8864 9.65893L16.0493 10.3079C18.1454 11.4778 18.2731 14.3129 16.5931 15.993C15.6944 16.8916 14.4995 17.6901 13.0953 17.7434C11.0144 17.8222 7.55913 17.2849 4.13735 13.8631C0.715564 10.4413 0.178177 6.98605 0.257065 4.90512C0.310297 3.50092 1.10879 2.30601 2.00745 1.40735ZM6.38265 2.68211C5.78363 1.60877 4.17394 1.36218 3.06811 2.46801C2.29276 3.24335 1.7887 4.09917 1.75599 4.96195C1.6902 6.69729 2.11864 9.72304 5.19801 12.8024C8.27737 15.8818 11.3031 16.3102 13.0385 16.2444C13.9013 16.2117 14.7571 15.7077 15.5324 14.9323C16.6382 13.8265 16.3916 12.2168 15.3183 11.6178L14.1554 10.9688C13.432 10.565 12.4158 10.7027 11.7025 11.416L11.7023 11.4163C11.6322 11.4863 11.1864 11.9022 10.395 11.9407C9.58474 11.9802 8.604 11.6161 7.49416 10.5063C6.38395 9.39605 6.02003 8.41505 6.0597 7.60472C6.09846 6.8132 6.51468 6.3676 6.58432 6.29795L6.58436 6.29792C7.29767 5.5846 7.43539 4.56846 7.03166 3.84504L6.38265 2.68211Z"/>
    </BaseIcon>
  );
}