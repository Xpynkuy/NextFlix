import { Catalog } from "@/components/Catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фильмы",
  description: "Каталог фильмов",
};

export default function MoviesPage() {
  return (
    <div>
      <h1 className="text-2xl py-4">Фильмы смотреть онлайн</h1>
      <p className="text-gray-500 mb-10">Фильмы — это искусство, способное перенести зрителя в миры, полные эмоций и приключений. С момента своего появления в конце 19 века кино стало важной частью культуры и развлечений. Существует множество жанров фильмов, каждый из которых предлагает зрителям уникальный опыт. Среди самых популярных жанров можно выделить боевики, комедии, драмы, фантастику и ужасы.</p>
      <Catalog type="movies" />
    </div>
  );
}
