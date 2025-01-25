import { AnimesCatalog } from "@/components/Catalog/AnimesCatalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аниме",
  description: "Каталог аниме",
};

export default function AnimesPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Anime</h1>
      <AnimesCatalog/>
    </div>
  );
}
