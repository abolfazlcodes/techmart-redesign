import CardOne from "./_components/CardOne/CardOne";
import Button from "./_components/button/button";
import TechFieldCard from "./_components/TechFieldCard/TechFieldCard";
import ProductCard from "./_components/ProductCard/ProductCard";
import NeedsCard from "./_components/NeedsCard/NeedsCard";
import Image from "next/image";
import {
  IconArrowLeft,
  IconArrowLeftLong,
  IconBuilding,
  IconClock,
  IconLocation,
  IconPhone,
} from "./_components/icons/icons";
import Tag from "./_components/Tag/Tag";
import Link from "next/link";
import EventCard from "./_components/EventCard/EventCards";
import NewsCard from "./_components/NewsCard/NewsCard";

export default function Home() {
  return (
    <main className="px-4">
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </div> */}

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
        <TechFieldCard />
      </div> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}

      {/* <div>
        <NeedsCard />
      </div> */}

      {/* <div className="grid grid-cols-2 md:grid-rows-1 md:grid-cols-1 lg:grid-cols-2">
        <EventCard />
        <EventCard />
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </main>
  );
}
