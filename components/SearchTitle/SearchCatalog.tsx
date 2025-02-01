"use client";
import { CardData } from '@/types/types';
import { useEffect, useState } from 'react';
import { CardList } from '../Card/CardList';
import { getTitleSearch } from '@/services/getTitle';

interface SearchCatalogProps {
  searchQuery?: string; // Поисковый запрос
}

const SearchCatalog: React.FC<SearchCatalogProps> = ({ searchQuery }) => {
  const [items, setItems] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Загрузка данных
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await getTitleSearch(); // Получаем все тайтлы
        setItems(data);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Фильтрация тайтлов по поисковому запросу
  const filteredItems = searchQuery
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="py-4">
      <CardList items={filteredItems} type="all" />
    </div>
  );
};

export { SearchCatalog };