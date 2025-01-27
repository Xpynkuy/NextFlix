
import { Catalog } from "@/components/Catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фильмы",
  description: "Каталог фильмов",
};

export default function MoviesPage() {
  return (
    <div>
      <Catalog type="movies"/>
    </div>
  );
}
