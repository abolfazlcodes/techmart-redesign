import CardOne from "./_components/CardOne/CardOne";
import Button from "./_components/button/button";
import TechFieldCard from "./_components/TechFieldCard/TechFieldCard";
import ProductCard from "./_components/ProductCard/ProductCard";
import NeedsCard from "./_components/NeedsCard/NeedsCard";

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

      <div>
        <NeedsCard />
      </div>
    </main>
  );
}
