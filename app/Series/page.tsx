import { SeriesCatalog } from "@/components/Catalog/SeriesCatalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Серилы",
  description: "Каталог сериалов",
};

export default function SeriesPage() {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <h1>Series</h1>
        <SeriesCatalog />
      </div>
    </div>
  );
}
