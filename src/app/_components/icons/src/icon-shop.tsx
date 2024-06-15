import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconType) {
  return (
    <BaseIcon {...props}>
      <rect width="72" height="72" rx="28"/><path clip-rule="evenodd" d="M12.7917 15.9866C13.0755 15.1352 13.9958 14.675 14.8472 14.9588L15.4212 15.1502C15.4498 15.1597 15.4783 15.1692 15.5067 15.1787C16.8638 15.631 18.0107 16.0132 18.9126 16.4328C19.8712 16.8787 20.7029 17.4314 21.3336 18.3065C21.9644 19.1816 22.2257 20.1454 22.3456 21.1959C22.4584 22.1841 22.4584 23.393 22.4583 24.8235L22.4583 30.5838C22.4583 33.6938 22.4618 35.8629 22.6818 37.4995C22.8956 39.0894 23.2865 39.9313 23.8862 40.5309C24.4858 41.1306 25.3277 41.5215 26.9176 41.7353C28.5542 41.9553 30.7233 41.9588 33.8333 41.9588H49C49.8975 41.9588 50.625 42.6863 50.625 43.5838C50.625 44.4812 49.8975 45.2088 49 45.2088H33.7144C30.7513 45.2088 28.363 45.2089 26.4845 44.9563C24.5343 44.6941 22.8922 44.1332 21.5881 42.829C20.2839 41.5249 19.723 39.8828 19.4608 37.9326C19.2082 36.0541 19.2083 33.6658 19.2083 30.7027L19.2083 24.9137C19.2083 23.3689 19.2059 22.3467 19.1166 21.5645C19.032 20.8238 18.8844 20.4666 18.6971 20.2068C18.5099 19.947 18.2176 19.694 17.5417 19.3795C16.8279 19.0475 15.859 18.7219 14.3934 18.2334L13.8195 18.0421C12.968 17.7582 12.5079 16.838 12.7917 15.9866Z"/><path opacity=".5" d="M22.448 23C22.4588 23.5614 22.4587 24.1691 22.4587 24.823L22.4587 30.5833C22.4587 33.6934 22.4622 35.8625 22.6822 37.4991C22.7143 37.7379 22.7504 37.9599 22.7906 38.1667H44.7148C46.7935 38.1667 47.8329 38.1667 48.6469 37.6299C49.4609 37.0931 49.8704 36.1378 50.6892 34.2271L51.6178 32.0605C53.3717 27.968 54.2487 25.9218 53.2853 24.4609C52.322 23 50.0958 23 45.6434 23H22.448Z"/><path d="M25.7084 29.5C25.7084 28.6025 26.4359 27.875 27.3334 27.875H33.8334C34.7308 27.875 35.4584 28.6025 35.4584 29.5C35.4584 30.3975 34.7308 31.125 33.8334 31.125H27.3334C26.4359 31.125 25.7084 30.3975 25.7084 29.5Z"/><path d="M26.25 49C28.0449 49 29.5 50.4551 29.5 52.25C29.5 54.0449 28.0449 55.5 26.25 55.5C24.4551 55.5 23 54.0449 23 52.25C23 50.4551 24.4551 49 26.25 49Z"/><path d="M49 52.2502C49 50.4552 47.5449 49.0002 45.75 49.0002C43.9551 49.0002 42.5 50.4552 42.5 52.2502C42.5 54.0451 43.9551 55.5002 45.75 55.5002C47.5449 55.5002 49 54.0451 49 52.2502Z"/>
    </BaseIcon>
  );
}