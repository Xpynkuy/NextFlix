"use client";
import { useEffect, useState } from "react";
import { CardData } from "@/types/types";
import { CardList } from "@/components/Card/CardList";

interface RecomendTitleProps {
  fetchData: () => Promise<CardData[]>;
  title: string;
  desc: string;
}

const RecomendTitles: React.FC<RecomendTitleProps> = ({
  fetchData,
  title,
  desc,
}) => {
  const [items, setItems] = useState<CardData[]>([]);
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

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-white font-semibold text-xl mt-4">{title}</h1>
      <p className="text-gray-500 py-2">{desc}</p>

      <CardList items={items} />
    </div>
  );
};

export { RecomendTitles };
