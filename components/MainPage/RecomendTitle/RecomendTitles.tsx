"use client";
import { useEffect, useState } from "react";
import { TitleData } from "@/types/types";
import { CardList } from "@/components/Card/CardList";

interface RecomendTitleProps {
  fetchData: () => Promise<TitleData[]>;
  title: string;
  desc: string;
}

const RecomendTitles: React.FC<RecomendTitleProps> = ({
  fetchData,
  title,
  desc,
}) => {
  const [items, setItems] = useState<TitleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await fetchData();
        setItems(data);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [fetchData]);

  if (error) return <p>{error}</p>;

  return (
    <div className="py-4">
      <h1 className="text-white font-semibold text-xl mt-4">{title}</h1>
      <p className="text-gray-500 py-4">{desc}</p>

      <CardList items={items} type="all" isLoading={loading} />
    </div>
  );
};

export { RecomendTitles };
