// components/Catalog/Catalog.tsx
"use client";
import { useEffect, useState } from "react";
import { CardData } from "@/types/types";
import { getTitles } from "@/services/getTitle";
import { CardList } from "../Card/CardList";

interface CatalogProps {
  type: string; // 'movies', 'series', 'animes'
}

export const Catalog: React.FC<CatalogProps> = ({ type }) => {
  const [titles, setTitles] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getTitles(type); // Универсальная функция для получения данных
        setTitles(data);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <CardList items={titles} type={type} />
    </div>
  );
};
