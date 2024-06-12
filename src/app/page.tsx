import CardOne from "./_components/CardOne/CardOne";

export default function Home() {
  return (
    <main className="px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </div>
    </main>
  );
}
