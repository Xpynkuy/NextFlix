import { MoviesCatalog } from "@/components/Catalog/MoviesCatalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фильмы",
  description: "Каталог фильмов",
};

export default function MoviesPage() {
  return (
    <div>
      <h1>Movies</h1>
      <MoviesCatalog/>
    </div>
  );
}
