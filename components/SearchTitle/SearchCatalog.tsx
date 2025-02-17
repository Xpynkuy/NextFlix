'use client'; 

import { useEffect, useState } from 'react';
import { TitleData } from '@/types/types';
import { getTitleSearch } from '@/services/getTitle';
import { CardList } from '../Card/CardList'; 

interface SearchCatalogProps {
  searchQuery?: string; 
}

export const SearchCatalog: React.FC<SearchCatalogProps> = ({ searchQuery }) => {
  const [items, setItems] = useState<TitleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const data = await getTitleSearch(); 
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


  if (error) {
    return <p>{error}</p>;
  }

  // Отображение данных / скелетонов
  return (
    <div className="py-4">
      <CardList
        items={filteredItems}
        type="all"
        isLoading={loading} 
      />
    </div>
  );
};