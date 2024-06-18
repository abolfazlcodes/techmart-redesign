import Image from "next/image";

interface IQrCodeProps {
  QrCodeImage: string;
}

const QrCode: React.FC<IQrCodeProps> = ({ QrCodeImage }) => {
  return (
    <article className="max-h-[205px] h-full bg-background flex items-center justify-center flex-col py-2 gap-y-3 rounded-2xl">
      <Image src={QrCodeImage} alt="" width={155} height={155} />
      <span className="font-bold text-caption1 leading-7 text-primary">
        تصویر بالا را با گوشی همراه اسکن نمایید
      </span>
    </article>
  );
};

export default QrCode;
