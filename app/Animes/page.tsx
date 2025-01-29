import { Catalog } from "@/components/Catalog/Catalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аниме",
  description: "Каталог аниме",
};

export default function AnimesPage() {
  return (
    <div className="flex flex-col gap-8">
      <Catalog type="anime" />
    </div>
  );
}
