import { Catalog } from "@/components/Catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Серилы",
  description: "Каталог сериалов",
};

export default function SeriesPage() {
  return (
    <div>
      <h1 className="text-2xl py-4">Сериалы смотреть онлайн</h1>
      <p className="text-gray-500 mb-10">Многие современные сериалы по своей зрелищности и сюжетным перипетиям мало в чем уступают полнометражным фильмам. Они с первой серии захватывают ваше внимание и заставляют с большим нетерпением ожидать каждого следующего эпизода. Так что сезоны сериалов пролетают для их зрителей незаметно!</p>

      <Catalog type="series" />
    </div>
  );
}
