import { Metadata } from "next";
import { getTitleById } from "@/services/getTitle";
import { notFound } from "next/navigation";
import { TitlePageContent } from "@/components/TitlePage/TitlePageContent";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  // Получаем данные о тайтле
  const title = await getTitleById(id);

  if (!title) {
    return {
      title: "Тайтл не найден",
    };
  }

  return {
    title:
      title.name || title.alternativeName || title.enName || "Название тайтла",
    description:
      title.description || title.shortDescription || "Описание тайтла",
    openGraph: {
      title:
        title.name ||
        title.alternativeName ||
        title.enName ||
        "Название тайтла",
      description:
        title.description || title.shortDescription || "Описание тайтла",
    },
  };
}

export default async function TitlePage({ params }: Props) {
  const { id } = params;

  const title = await getTitleById(id);

  if (!title) {
    notFound();
  }

  return <TitlePageContent title={title} />;
}
