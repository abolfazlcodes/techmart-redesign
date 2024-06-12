import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <article className="w-full border border-black py-8 px-4 rounded-2xl flex items-center flex-col justify-center gap-6">
        <figure className="w-[72px] h-[72px] relative">
          <Image
            src={"/images/rank-badge.png"}
            alt="image"
            fill
            className="w-full h-full object-cover object-center"
          />
        </figure>

        <div className="flex flex-col items-center gap-2">
          <h3>محصول های پربازدید</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
      </article>
    </main>
  );
}
