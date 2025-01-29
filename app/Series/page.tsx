import { Catalog } from "@/components/Catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Серилы",
  description: "Каталог сериалов",
};

export default function SeriesPage() {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <Catalog type="series" />
      </div>
    </div>
  );
}
